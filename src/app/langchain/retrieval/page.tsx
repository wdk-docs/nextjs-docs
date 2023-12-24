import { ChatWindow } from "@/components/ChatWindow";

export default function AgentsPage() {
  const InfoCard = (
    <div className="p-4 md:p-8 rounded w-full max-h-[85%] overflow-hidden">
      <h1 className="text-3xl md:text-4xl mb-4">▲ Next.js + LangChain.js 检索链 🦜🔗</h1>
      <ul>
        <li className="hidden text-l md:block">
          🔗
          <span className="ml-2">
            该模板展示了{" "}
            <a href="https://nextjs.org/" target="_blank">
              Next.js
            </a>{" "}
            项目中的{" "}
            <a href="https://js.langchain.com/" target="_blank">
              LangChain.js
            </a>{" "}
            和Vercel{" "}
            <a href="https://sdk.vercel.ai/docs" target="_blank">
              AI SDK
            </a>{" "}
            如何执行检索。
          </span>
        </li>
        <li className="hidden text-l md:block">
          🪜
          <span className="ml-2">链分两步工作:</span>
          <ul>
            <li className="ml-4">
              1️⃣
              <span className="ml-2">首先，它将输入问题重新表述为&quot;standalone&quot;问题，取消代词的引用</span>
            </li>
            <li className="ml-4">
              2️⃣
              <span className="ml-2">然后，它向检索器查询类似于取消引用问题的文档，并编写一个</span>
            </li>
          </ul>
        </li>
        <li className="hidden text-l md:block">
          💻
          <span className="ml-2">
            您可以在<code>app/app/chat/retrieve/route.ts</code>中找到此用例的提示和模型逻辑。
          </span>
        </li>
        <li>
          🐶
          <span className="ml-2">默认情况下，代理假装是一只会说话的小狗，但你可以将提示更改为</span>
        </li>
        <li className="text-l">
          🎨
          <span className="ml-2">
            主要的前端逻辑可在<code>app/researching/page.tsx</code>中找到。
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
            在您自己运行这个示例之前，您首先需要设置一个Supadase矢量存储。 有关更多详细信息，请参阅自述文件。
          </span>
        </li>
        <li className="text-l">
          👇
          <span className="ml-2">
            在下面上传一些文本，然后尝试询问例如。 <code>What is a document loader?</code>
          </span>
        </li>
      </ul>
    </div>
  );
  return (
    <ChatWindow
      endpoint="api/chat/retrieval"
      emptyStateComponent={InfoCard}
      showIngestForm={true}
      placeholder={'I\'ve got a nose for finding the right documents! Ask, "What is a document loader?"'}
      emoji="🐶"
      titleText="Dana the Document-Retrieving Dog"
    ></ChatWindow>
  );
}
