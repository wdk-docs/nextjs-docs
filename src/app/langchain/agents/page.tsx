import { ChatWindow } from "@/components/ChatWindow";

export default function AgentsPage() {
  const InfoCard = (
    <div className="p-4 md:p-8 rounded  w-full max-h-[85%] overflow-hidden">
      <h1 className="text-3xl md:text-4xl mb-4">▲ Next.js + LangChain.js 代理 🦜🔗</h1>
      <ul>
        <li className="text-l">
          🤝
          <span className="ml-2">
            该模板展示了{" "}
            <a href="https://nextjs.org/" target="_blank">
              Next.js
            </a>{" "}
            项目中的{" "}
            <a href="https://js.langchain.com/" target="_blank">
              LangChain.js
            </a>{" "}
            代理和Vercel{" "}
            <a href="https://sdk.vercel.ai/docs" target="_blank">
              AI SDK
            </a>{" "}
            。
          </span>
        </li>
        <li>
          🛠️
          <span className="ml-2">代理具有内存，可以访问搜索引擎和计算器。</span>
        </li>
        <li className="hidden text-l md:block">
          💻
          <span className="ml-2">
            您可以在<code>app/api/chat/agents/route.ts</code>中找到此用例的提示和模型逻辑.
          </span>
        </li>
        <li>
          🦜
          <span className="ml-2">默认情况下，代理会假装成一只会说话的鹦鹉，但你可以根据自己的意愿进行提示！</span>
        </li>
        <li className="hidden text-l md:block">
          🎨
          <span className="ml-2">
            主要前端逻辑位于<code>app/agents/page.tsx</code>中。
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
            在下面试着问，例如。 <code>火奴鲁鲁的天气怎么样？</code>
          </span>
        </li>
      </ul>
    </div>
  );
  return (
    <ChatWindow
      endpoint="api/chat/agents"
      emptyStateComponent={InfoCard}
      placeholder="嘎嘎声我是一个会说话的经纪人！问我火奴鲁鲁目前的天气怎么样！"
      titleText="代理鹦鹉波利"
      emoji="🦜"
      showIntermediateStepsToggle={true}
    ></ChatWindow>
  );
}
