import { NextRequest, NextResponse } from "next/server";
import { Message as VercelChatMessage, StreamingTextResponse } from "ai";

import { initializeAgentExecutorWithOptions } from "langchain/agents";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { SerpAPI } from "langchain/tools";
import { Calculator } from "langchain/tools/calculator";

import { AIMessage, ChatMessage, HumanMessage } from "langchain/schema";
import { BufferMemory, ChatMessageHistory } from "langchain/memory";

export const runtime = "edge";

const convertVercelMessageToLangChainMessage = (message: VercelChatMessage) => {
  if (message.role === "user") {
    return new HumanMessage(message.content);
  } else if (message.role === "assistant") {
    return new AIMessage(message.content);
  } else {
    return new ChatMessage(message.content, message.role);
  }
};

const PREFIX_TEMPLATE = `你是一只会说话的鹦鹉，名叫波利。所有最终的反应都必须是会说话的鹦鹉的反应。`;

/**
 * 此处理程序初始化并调用OpenAI函数代理。
 * 有关详细信息，请参阅文档：
 *
 * https://js.langchain.com/docs/modules/agents/agent_types/openai_functions_agent
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    /**
     * 我们将中间步骤表示为用于显示目的的系统消息，
     * 但不希望他们出现在聊天记录中。
     */
    const messages = (body.messages ?? []).filter(
      (message: VercelChatMessage) => message.role === "user" || message.role === "assistant"
    );
    const returnIntermediateSteps = body.show_intermediate_steps;
    const previousMessages = messages.slice(0, -1).map(convertVercelMessageToLangChainMessage);
    const currentMessageContent = messages[messages.length - 1].content;

    // 需要 process.env.SERPAPI_API_KEY 待设置: https://serpapi.com/
    const tools = [new Calculator(), new SerpAPI()];
    const chat = new ChatOpenAI({ modelName: "gpt-4", temperature: 0 });

    /**
     * OpenAI函数代理的默认提示有一个占位符，用于插入聊天消息 - 这就是为什么我们将`memoryKey`设置为`chat_history`。
     * 这将在未来变得更加清晰和可定制。
     */
    const executor = await initializeAgentExecutorWithOptions(tools, chat, {
      agentType: "openai-functions",
      verbose: true,
      returnIntermediateSteps,
      memory: new BufferMemory({
        memoryKey: "chat_history",
        chatHistory: new ChatMessageHistory(previousMessages),
        returnMessages: true,
        outputKey: "output",
      }),
      agentArgs: {
        prefix: PREFIX_TEMPLATE,
      },
    });

    const result = await executor.call({ input: currentMessageContent });

    // 中间步骤太复杂，无法进行流式处理
    if (returnIntermediateSteps) {
      return NextResponse.json(
        { output: result.output, intermediate_steps: result.intermediateSteps },
        { status: 200 }
      );
    } else {
      /**
       * 代理执行器不支持流式响应（现在！），所以每次流式返回完整的响应一个字符，并延迟以模拟它。
       */
      const textEncoder = new TextEncoder();
      const fakeStream = new ReadableStream({
        async start(controller) {
          for (const character of result.output) {
            controller.enqueue(textEncoder.encode(character));
            await new Promise((resolve) => setTimeout(resolve, 20));
          }
          controller.close();
        },
      });

      return new StreamingTextResponse(fakeStream);
    }
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
