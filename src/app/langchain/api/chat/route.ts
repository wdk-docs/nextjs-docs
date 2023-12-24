import { NextRequest, NextResponse } from "next/server";
import { Message as VercelChatMessage, StreamingTextResponse } from "ai";

import { ChatOpenAI } from "langchain/chat_models/openai";
import { BytesOutputParser } from "langchain/schema/output_parser";
import { PromptTemplate } from "langchain/prompts";

export const runtime = "edge";

const formatMessage = (message: VercelChatMessage) => {
  return `${message.role}: ${message.content}`;
};

const TEMPLATE = `你是一个叫帕奇的海盗。所有的回复都必须非常冗长，并且使用盗版方言。

当前对话:
{chat_history}

使用者: {input}
AI:`;

/**
 * 这个处理程序初始化并调用一个带有提示、聊天模型和输出解析器的简单链。
 * 有关详细信息，请参阅文档:
 *
 * https://js.langchain.com/docs/guides/expression_language/cookbook#prompttemplate--llm--outputparser
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const messages = body.messages ?? [];
    const formattedPreviousMessages = messages.slice(0, -1).map(formatMessage);
    const currentMessageContent = messages[messages.length - 1].content;
    const prompt = PromptTemplate.fromTemplate(TEMPLATE);
    /**
     * 你也可以尝试例如:
     *
     * import { ChatAnthropic } from "langchain/chat_models/anthropic";
     * const model = new ChatAnthropic({});
     *
     * 请参阅支持型号的完整列表：
     * https://js.langchain.com/docs/modules/model_io/models/
     */
    const model = new ChatOpenAI({
      temperature: 0.8,
    });
    /**
     * Chat模型流式传输消息块而不是字节，因此该输出解析器处理序列化和字节编码。
     */
    const outputParser = new BytesOutputParser();

    /**
     * 也可以初始化为:
     *
     * import { RunnableSequence } from "langchain/schema/runnable";
     * const chain = RunnableSequence.from([prompt, model, outputParser]);
     */
    const chain = prompt.pipe(model).pipe(outputParser);

    const stream = await chain.stream({
      chat_history: formattedPreviousMessages.join("\n"),
      input: currentMessageContent,
    });

    return new StreamingTextResponse(stream);
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
