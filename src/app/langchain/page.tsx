import { ChatWindow } from "@/components/ChatWindow";

export default function Home() {
  const InfoCard = (
    <div className="p-3 md:p-3 rounded w-full max-h-[85%] overflow-hidden">
      <h1 className="text-3xl md:text-4xl mb-4">▲ Next.js + LangChain.js 🦜🔗</h1>
      <ul>
        <li className="text-l">
          🤝
          <span className="ml-2">
            此模板展示了一个简单的聊天机器人，使用{" "}
            <a href="https://js.langchain.com/" target="_blank">
              LangChain.js
            </a>{" "}
            以及Vercel{" "}
            <a href="https://sdk.vercel.ai/docs" target="_blank">
              AI SDK
            </a>{" "}
            在{" "}
            <a href="https://nextjs.org/" target="_blank">
              Next.js
            </a>{" "}
            项目.
          </span>
        </li>
        <li className="hidden text-l md:block">
          💻
          <span className="ml-2">
            您可以在<code>app/api/chat/route.ts</code>中找到此用例的提示和模型逻辑.
          </span>
        </li>
        <li>
          🏴‍☠️
          <span className="ml-2">默认情况下，机器人会伪装成海盗，但你可以将提示更改为你想要的任何内容！</span>
        </li>
        <li className="hidden text-l md:block">
          🎨
          <span className="ml-2">
            主前端逻辑位于<code>app/page.tsx</code>中.
          </span>
        </li>
        <li className="text-l">
          🐙
          <span className="ml-2">
            此模板是开源的-您可以
            <a href="https://github.com/langchain-ai/langchain-nextjs-template" target="_blank">
              从GitHub repo中
            </a>
            查看源代码并部署自己的版本!
          </span>
        </li>
        <li className="text-l">
          👇
          <span className="ml-2">
            试着问，例如。 <code>当海盗是什么感觉？</code> 在下面!
          </span>
        </li>
      </ul>
    </div>
  );
  return (
    <ChatWindow
      endpoint="api"
      emoji="🏴‍☠️"
      titleText="喋喋不休的海盗帕奇"
      placeholder="我是一个装成海盗的LLM！问问我海盗的生活吧！"
      emptyStateComponent={InfoCard}
    ></ChatWindow>
  );
}
