import { ChatWindow } from "@/components/ChatWindow";

export default function AgentsPage() {
  const InfoCard = (
    <div className="p-4 md:p-8 rounded w-full max-h-[85%] overflow-hidden">
      <h1 className="text-3xl md:text-4xl mb-4">▲ Next.js + LangChain.js 结构化输出 🦜🔗</h1>
      <ul>
        <li className="text-l">
          🧱
          <span className="ml-2">
            该模板展示了如何在{" "}
            <a href="https://nextjs.org/" target="_blank">
              Next.js
            </a>{" "}
            项目中使用{" "}
            <a href="https://js.langchain.com/" target="_blank">
              LangChain.js
            </a>{" "}
            链和Vercel{" "}
            <a href="https://sdk.vercel.ai/docs" target="_blank">
              AI SDK
            </a>{" "}
            输出结构化响应。{" "}
          </span>
        </li>
        <li>
          ☎️
          <span className="ml-2">该链格式化输入模式，并将其传递到OpenAI函数模型中，然后解析输出。</span>
        </li>
        <li className="hidden text-l md:block">
          💻
          <span className="ml-2">
            您可以在 <code>app/api/chat/structured_output/route.ts</code>
            中找到此用例的提示、模型和模式逻辑.
          </span>
        </li>
        <li className="hidden text-l md:block">
          📊
          <span className="ml-2">
            默认情况下，该链返回一个对象，该对象具有<code>tone</code>、<code>word_count</code>和<code>entity</code>，
            <code>chat_response</code>以及可选的<code>final_punctuation</code>。但您可以将其更改为您想要的任何内容！
          </span>
        </li>
        <li className="hidden text-l md:block">
          💎
          <span className="ml-2">
            它使用一个名为{" "}
            <a href="https://zod.dev/" target="_blank">
              Zod的轻量级、方便且强大的模式验证库
            </a>{" "}
            来定义模式，但您也可以使用JSON模式初始化链。
          </span>
        </li>
        <li className="hidden text-l md:block">
          🎨
          <span className="ml-2">
            主要前端逻辑位于<code>app/structured_output/page.tsx</code>中。
          </span>
        </li>
        <li className="text-l">
          🐙
          <span className="ml-2">
            此模板是开源的-您可以从{" "}
            <a href="https://github.com/langchain-ai/langchain-nextjs-template" target="_blank">
              GitHub repo
            </a>
            中查看源代码并部署自己的版本!
          </span>
        </li>
        <li className="text-l">
          👇
          <span className="ml-2">
            在下面尝试键入例如。 <code>What a beautiful day!</code>
          </span>
        </li>
      </ul>
    </div>
  );
  return (
    <ChatWindow
      endpoint="api/chat/structured_output"
      emptyStateComponent={InfoCard}
      placeholder={`No matter what you type here, I'll always return the same JSON object with the same structure!`}
      emoji="🧱"
      titleText="Structured Output"
    ></ChatWindow>
  );
}
