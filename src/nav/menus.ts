const menus: any = {
  docs: [
    {
      label: "文档",
      href: "/docs",
      subMenus: [
        {
          label: "关于本文档",
          href: "/docs/hello",
        },
      ],
    },
    {
      label: "openai",
      href: "/docs/openai",
      subMenus: [
        {
          label: "openai-node",
          href: "/docs/openai/openai-node/readme",
          subMenus: [
            {
              label: "openai-node",
              href: "/docs/openai/openai-node/readme",
            },
            {
              label: "helper",
              href: "/docs/openai/openai-node/helper",
            },
            {
              label: "api",
              href: "/docs/openai/openai-node/api/index",
            },
          ],
        },
        {
          label: "gpts",
          href: "/docs/openai/gpts/introducing",
        },
        {
          label: "assistants",
          href: "/docs/openai/assistants/overview",
          subMenus: [
            {
              label: "概述",
              href: "/docs/openai/assistants/overview",
            },
            {
              label: "它是如何工作的",
              href: "/docs/openai/assistants/how-it-works",
            },
          ],
        },
      ],
    },
    {
      label: "chatgpt",
      href: "/chatgpt",
      subMenus: [
        {
          label: "介绍",
          href: "/docs/chatgpt/introduction",
        },
        {
          label: "指导方针",
          href: "/docs/chatgpt/guidelines",
        },
        {
          label: "迭代",
          href: "/docs/chatgpt/iterative",
        },
        {
          label: "总结文本",
          href: "/docs/chatgpt/summarizing",
        },
        {
          label: "推断",
          href: "/docs/chatgpt/inferring",
        },
        {
          label: "转换",
          href: "/docs/chatgpt/transforming",
        },
        {
          label: "扩大",
          href: "/docs/chatgpt/expanding",
        },
        {
          label: "聊天机器人",
          href: "/docs/chatgpt/chatbot",
        },
        {
          label: "结论",
          href: "/docs/chatgpt/conclusion",
        },
      ],
    },
    {
      label: "autoGen",
      href: "/autogen",
      subMenus: [
        {
          label: "介绍",
          href: "/docs/autogen/index",
        },
        {
          label: "安装",
          href: "/docs/autogen/installation",
        },
        {
          label: "用例",
          subMenus: [
            {
              label: "多代理对话框架",
              href: "/docs/autogen/use-cases/agent_chat",
            },
            {
              label: "增强的推理",
              href: "/docs/autogen/use-cases/enhanced_inference",
            },
          ],
        },
        {
          label: "例子",
          subMenus: [
            {
              label: "AutoGen - 自动多代理聊天",
              href: "/docs/autogen/examples/autogen-agentchat",
            },
            {
              label: "AutoGen - 调整GPT模型",
              href: "/docs/autogen/examples/autogen-inference",
            },
          ],
        },
        {
          label: "贡献",
          href: "/docs/autogen/contribute",
        },
        {
          label: "研究",
          href: "/docs/autogen/research",
        },
        {
          label: "常见问题解答",
          href: "/docs/autogen/faq",
        },
      ],
    },
    {
      label: "langchain",
      href: "/langchain",
      subMenus: [
        {
          label: "nextjs",
          href: "/docs/langchain/nextjs",
        },
      ],
    },
    {
      label: "vercel ai",
      href: "/docs/vercel-ai",
      subMenus: [
        {
          label: "介绍",
          href: "/docs/vercel-ai/index",
        },
        {
          label: "入门",
          href: "/docs/vercel-ai/getting-started",
        },
        {
          label: "概念",
          href: "/docs/vercel-ai/concepts",
          subMenus: [
            {
              label: "为什么要流媒体？",
              href: "/docs/vercel-ai/concepts/streaming",
            },
            {
              label: "背压和取消",
              href: "/docs/vercel-ai/concepts/backpressure-and-cancellation",
            },
            {
              label: "提示词工程",
              href: "/docs/vercel-ai/concepts/prompt-engineering",
            },
            {
              label: "缓存响应",
              href: "/docs/vercel-ai/concepts/caching",
            },
          ],
        },
        {
          label: "引导",
          href: "/docs/vercel-ai/guides",
          subMenus: [
            {
              label: "框架",
              href: "/docs/vercel-ai/guides/frameworks",
              subMenus: [
                {
                  label: "nextjs-app",
                  href: "/docs/vercel-ai/guides/frameworks/nextjs-app",
                },
                {
                  label: "nextjs-pages",
                  href: "/docs/vercel-ai/guides/frameworks/nextjs-pages",
                },
                {
                  label: "nuxt",
                  href: "/docs/vercel-ai/guides/frameworks/nuxt",
                },
                {
                  label: "solidjs",
                  href: "/docs/vercel-ai/guides/frameworks/solidjs",
                },
                {
                  label: "sveltekit",
                  href: "/docs/vercel-ai/guides/frameworks/sveltekit",
                },
              ],
            },
            {
              label: "提供商",
              href: "/docs/vercel-ai/guides/providers",
              subMenus: [
                {
                  label: "anthropic",
                  href: "/docs/vercel-ai/guides/providers/anthropic",
                },
                {
                  label: "cohere",
                  href: "/docs/vercel-ai/guides/providers/cohere",
                },
                {
                  label: "fireworks",
                  href: "/docs/vercel-ai/guides/providers/fireworks",
                },
                {
                  label: "hugging-face",
                  href: "/docs/vercel-ai/guides/providers/hugging-face",
                },
                {
                  label: "openai-functions",
                  href: "/docs/vercel-ai/guides/providers/openai-functions",
                },
                {
                  label: "openai",
                  href: "/docs/vercel-ai/guides/providers/openai",
                },
                {
                  label: "replicate",
                  href: "/docs/vercel-ai/guides/providers/replicate",
                },
              ],
            },
          ],
        },
        {
          label: "API 参考",
          href: "/docs/vercel-ai/api-reference",
          subMenus: [
            {
              href: "/docs/vercel-ai/api-reference/use-chat",
              label: "useChat",
            },
            {
              href: "/docs/vercel-ai/api-reference/use-completion",
              label: "useCompletion",
            },
            {
              href: "/docs/vercel-ai/api-reference/ai-stream",
              label: "AIStream",
            },
            {
              href: "/docs/vercel-ai/api-reference/anthropic-stream",
              label: "AnthropicStream",
            },
            {
              href: "/docs/vercel-ai/api-reference/huggingface-stream",
              label: "HuggingFaceStream",
            },
            {
              href: "/docs/vercel-ai/api-reference/langchain-stream",
              label: "LangChainStream",
            },
            {
              href: "/docs/vercel-ai/api-reference/openai-stream",
              label: "OpenAIStream",
            },
            {
              href: "/docs/vercel-ai/api-reference/replicate-stream",
              label: "ReplicateStream",
            },
            {
              href: "/docs/vercel-ai/api-reference/stream-data",
              label: "experimental_StreamData",
            },
            {
              href: "/docs/vercel-ai/api-reference/streaming-text-response",
              label: "StreamingTextResponse",
            },
            {
              href: "/docs/vercel-ai/api-reference/stream-to-response",
              label: "streamToResponse",
            },
            {
              href: "/docs/vercel-ai/api-reference/tokens",
              label: "<Tokens />",
            },
          ],
        },
        {
          label: "鸣谢",
          href: "/docs/vercel-ai/acknowledgements",
        },
      ],
    },
  ],
  blog: [
    {
      label: "DevDay 上发布的新模型和开发人员产品",
      href: "/blog/new-models-and-developer-products-announced-at-devday",
    },
    {
      label: "国内各大模型盘点汇总",
      href: "/blog/domestic-major-models-inventory-summary",
    },
    {
      label: "和AI聊天",
      href: "/blog/chat-with-ai",
    },
    {
      label: "和llama2聊天",
      href: "/blog/llama2-so-bad",
    },
  ],
  term: [
    {
      label: "llama",
      href: "/term/llama",
    },
  ],
  langchain: [
    {
      label: "聊天",
      href: "/langchain",
    },
    {
      label: "结构化输出",
      href: "/langchain/structured_output",
    },
    {
      label: "代理",
      href: "/langchain/agents",
    },
    {
      label: "检索",
      href: "/langchain/retrieval",
    },
    {
      label: "检索代理",
      href: "/langchain/retrieval_agents",
    },
  ],
};
export default menus;
