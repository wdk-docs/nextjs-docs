import { ChatWindow } from "@/components/ChatWindow";

export default function AgentsPage() {
  const InfoCard = (
    <div className="p-4 md:p-8 rounded w-full max-h-[85%] overflow-hidden">
      <h1 className="text-3xl md:text-4xl mb-4">▲ Next.js + LangChain.js 检索代理 🦜🔗</h1>
      <ul>
        <li className="hidden text-l md:block">
          🤝
          <span className="ml-2">
            此模板展示了{" "}
            <a href="https://nextjs.org/" target="_blank">
              Next.js
            </a>{" "}
            项目中的{" "}
            <a href="https://js.langchain.com/" target="_blank">
              LangChain.js
            </a>{" "}
            检索链与Vercel{" "}
            <a href="https://sdk.vercel.ai/docs" target="_blank">
              AI SDK
            </a>{" "}
          </span>
        </li>
        <li className="hidden text-l md:block">
          🛠️
          <span className="ml-2">
            The agent has access to a vector store retriever as a tool as well as a memory. It&apos;s particularly well
            suited to meta-questions about the current conversation.
          </span>
        </li>
        <li className="hidden text-l md:block">
          💻
          <span className="ml-2">
            您可以在<code>app/app/chat/retrieval_agents/route.ts</code>中找到此用例的提示和模型逻辑。
          </span>
        </li>
        <li>
          🤖
          <span className="ml-2">默认情况下，代理假装是机器人，但您可以将提示更改为您想要的任何内容！</span>
        </li>
        <li className="hidden text-l md:block">
          🎨
          <span className="ml-2">
            主前端逻辑位于<code>app/retrieval_agents/page.tsx</code>中。
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
        <li className="hidden text-l md:block">
          🔱
          <span className="ml-2">
            在运行此示例之前，您首先需要设置一个Supadase(或其他)矢量存储。 有关更多详细信息，请参阅自述文件。
          </span>
        </li>
        <li className="text-l">
          👇
          <span className="ml-2">
            在下面上传一些文本，然后尝试询问例如<code>What are some ways of doing retrieval in LangChain</code>{" "}
          </span>
        </li>
      </ul>
    </div>
  );
  return (
    <ChatWindow
      endpoint="api/chat/retrieval_agents"
      emptyStateComponent={InfoCard}
      showIngestForm={true}
      showIntermediateStepsToggle={true}
      placeholder={
        'Beep boop! I\'m a robot retrieval-focused agent! Ask, "What are some ways of doing retrieval in LangChain.js?"'
      }
      emoji="🤖"
      titleText="Robbie the Retrieval Robot"
    ></ChatWindow>
  );
}
