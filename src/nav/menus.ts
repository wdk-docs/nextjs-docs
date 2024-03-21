const menus: any = {
  docs: [
    {
      label: "入门介绍",
      href: "/docs",
    },
    {
      label: "安装",
      href: "/docs/getting-started/installation",
    },
    {
      label: "项目结构",
      href: "/docs/getting-started/project-structure",
    },
    {
      label: "构建您的应用程序",
      href: "/docs/app/building-your-application",
      subMenus: [
        {
          label: "路由",
          href: "/docs/app/building-your-application/routing",
          subMenus: [
            {
              label: "定义路由",
              href: "/docs/app/building-your-application/routing/defining-routes",
            },
            {
              label: "页面和布局",
              href: "/docs/app/building-your-application/routing/pages-and-layouts",
            },
            {
              label: "链接和导航",
              href: "/docs/app/building-your-application/routing/linking-and-navigating",
            },
            {
              label: "路由组",
              href: "/docs/app/building-your-application/routing/route-groups",
            },
            {
              label: "动态路由",
              href: "/docs/app/building-your-application/routing/dynamic-routes",
            },
            {
              label: "加载UI和流式处理",
              href: "/docs/app/building-your-application/routing/loading-ui-and-streaming",
            },
            {
              label: "错误处理",
              href: "/docs/app/building-your-application/routing/error-handling",
            },
            {
              label: "平行路由",
              href: "/docs/app/building-your-application/routing/parallel-routes",
            },
            {
              label: "拦截路由",
              href: "/docs/app/building-your-application/routing/intercepting-routes",
            },
            {
              label: "路由处理程序",
              href: "/docs/app/building-your-application/routing/route-handlers",
            },
            {
              label: "中间件",
              href: "/docs/app/building-your-application/routing/middleware",
            },
            {
              label: "项目组织机构",
              href: "/docs/app/building-your-application/routing/colocation",
            },
            {
              label: "国际化",
              href: "/docs/app/building-your-application/routing/internationalization",
            },
          ],
        },
        {
          label: "数据获取",
          href: "/docs/app/building-your-application/data-fetching",
          subMenus: [
            {
              label: "获取、缓存和重新验证",
              href: "/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating",
            },
            {
              label: "服务器操作和变异",
              href: "/docs/app/building-your-application/data-fetching/server-actions-and-mutations",
            },
            {
              label: "数据获取模式和最佳实践",
              href: "/docs/app/building-your-application/data-fetching/patterns",
            },
          ],
        },
        {
          label: "渲染",
          href: "/docs/app/building-your-application/rendering",
          subMenus: [
            {
              label: "服务器组件",
              href: "/docs/app/building-your-application/rendering/server-components",
            },
            {
              label: "客户端组件",
              href: "/docs/app/building-your-application/rendering/client-components",
            },
            {
              label: "构图模式",
              href: "/docs/app/building-your-application/rendering/composition-patterns",
            },
            {
              label: "Edge 和 Node.js Runtimes",
              href: "/docs/app/building-your-application/rendering/edge-and-nodejs-runtimes",
            },
          ],
        },
        {
          label: "缓存",
          href: "/docs/app/building-your-application/caching",
        },
        {
          label: "样式",
          href: "/docs/app/building-your-application/styling",
          subMenus: [
            {
              label: "CSS Modules",
              href: "/docs/app/building-your-application/styling/css-modules",
            },
            {
              label: "Tailwind CSS",
              href: "/docs/app/building-your-application/styling/tailwind-css",
            },
            {
              label: "CSS-in-JS",
              href: "/docs/app/building-your-application/styling/css-in-js",
            },
            {
              label: "Sass",
              href: "/docs/app/building-your-application/styling/sass",
            },
          ],
        },
        {
          label: "优化",
          href: "/docs/app/building-your-application/optimizing",
          subMenus: [
            {
              label: "Images",
              href: "/docs/app/building-your-application/optimizing/images",
            },
            {
              label: "Fonts",
              href: "/docs/app/building-your-application/optimizing/fonts",
            },
            {
              label: "Scripts",
              href: "/docs/app/building-your-application/optimizing/scripts",
            },
            {
              label: "Metadata",
              href: "/docs/app/building-your-application/optimizing/metadata",
            },
            {
              label: "静态资产",
              href: "/docs/app/building-your-application/optimizing/static-assets",
            },
            {
              label: "懒惰加载",
              href: "/docs/app/building-your-application/optimizing/lazy-loading",
            },
            {
              label: "分析",
              href: "/docs/app/building-your-application/optimizing/analytics",
            },
            {
              label: "OpenTelemetry",
              href: "/docs/app/building-your-application/optimizing/open-telemetry",
            },
            {
              label: "仪表",
              href: "/docs/app/building-your-application/optimizing/instrumentation",
            },
            {
              label: "第三方库",
              href: "/docs/app/building-your-application/optimizing/third-party-libraries",
            },
          ],
        },
        {
          label: "配置",
          href: "/docs/app/building-your-application/configuring",
          subMenus: [
            {
              label: "TypeScript",
              href: "/docs/app/building-your-application/configuring/typescript",
            },
            {
              label: "ESLint",
              href: "/docs/app/building-your-application/configuring/eslint",
            },
            {
              label: "环境变量",
              href: "/docs/app/building-your-application/configuring/environment-variables",
            },
            {
              label: "绝对导入和模块路径别名",
              href: "/docs/app/building-your-application/configuring/absolute-imports-and-module-aliases",
            },
            {
              label: "MDX",
              href: "/docs/app/building-your-application/configuring/mdx",
            },
            {
              label: "src 目录",
              href: "/docs/app/building-your-application/configuring/src-directory",
            },
            {
              label: "草稿模式",
              href: "/docs/app/building-your-application/configuring/draft-mode",
            },
            {
              label: "内容安全策略",
              href: "/docs/app/building-your-application/configuring/content-security-policy",
            },
          ],
        },
        {
          label: "测试",
          href: "/docs/app/building-your-application/testing",
          subMenus: [
            {
              label: "Vitest",
              href: "/docs/app/building-your-application/testing/vitest",
            },
            {
              label: "Jest",
              href: "/docs/app/building-your-application/testing/jest",
            },
            {
              label: "Playwright",
              href: "/docs/app/building-your-application/testing/playwright",
            },
            {
              label: "Cypress",
              href: "/docs/app/building-your-application/testing/cypress",
            },
          ],
        },
        {
          label: "部署",
          href: "/docs/app/building-your-application/deploying",
          subMenus: [
            {
              label: "静态导出",
              href: "/docs/app/building-your-application/deploying/static-exports",
            },
          ],
        },
        {
          label: "升级",
          href: "/docs/app/building-your-application/upgrading",
          subMenus: [
            {
              label: "Codemods",
              href: "/docs/app/building-your-application/upgrading/codemods",
            },
            {
              label: "应用程序路由器迁移",
              href: "/docs/app/building-your-application/upgrading/app-router-migration",
            },
            {
              label: "版本14",
              href: "/docs/app/building-your-application/upgrading/version-14",
            },
            {
              label: "从Vite迁移",
              href: "/docs/app/building-your-application/upgrading/from-vite",
            },
          ],
        },
      ],
    },
    {
      label: "Api 参考",
      subMenus: [
        {
          label: "组件",
          href: "/docs/chatgpt/introduction",
          subMenus: [
            {
              label: "Font",
              href: "/docs/app/api-reference/components/font",
            },
            {
              label: "&lt;Image&gt;",
              href: "/docs/app/api-reference/components/image",
            },
            {
              label: "&lt;Link&gt;",
              href: "/docs/app/api-reference/components/link",
            },
            {
              label: "&lt;Script&gt;",
              href: "/docs/app/api-reference/components/script",
            },
          ],
        },
        {
          label: "文件约定",
          href: "/docs/chatgpt/guidelines",
          subMenus: [
            {
              label: "default.js",
              href: "/docs/app/api-reference/file-conventions/default",
            },
            {
              label: "error.js",
              href: "/docs/app/api-reference/file-conventions/error",
            },
            {
              label: "layout.js",
              href: "/docs/app/api-reference/file-conventions/layout",
            },
            {
              label: "loading.js",
              href: "/docs/app/api-reference/file-conventions/loading",
            },
            {
              label: "not-found.js",
              href: "/docs/app/api-reference/file-conventions/not-found",
            },
            {
              label: "page.js",
              href: "/docs/app/api-reference/file-conventions/page",
            },
            {
              label: "route.js",
              href: "/docs/app/api-reference/file-conventions/route",
            },
            {
              label: "Route Segment Config",
              href: "/docs/app/api-reference/file-conventions/route-segment-config",
            },
            {
              label: "template.js",
              href: "/docs/app/api-reference/file-conventions/template",
            },
            {
              label: "元数据文件",
              subMenus: [
                {
                  label: "favicon, icon, 和 apple-icon",
                  href: "/docs/app/api-reference/file-conventions/metadata/app-icons",
                },
                {
                  label: "manifest.json",
                  href: "/docs/app/api-reference/file-conventions/metadata/manifest",
                },
                {
                  label: "opengraph-image 和 twitter-image",
                  href: "/docs/app/api-reference/file-conventions/metadata/opengraph-image",
                },
                {
                  label: "robots.txt",
                  href: "/docs/app/api-reference/file-conventions/metadata/robots",
                },
                {
                  label: "sitemap.xml",
                  href: "/docs/app/api-reference/file-conventions/metadata/sitemap",
                },
              ],
            },
          ],
        },
        {
          label: "函数",
          href: "",
          subMenus: [
            {
              label: "cookies",
              href: "/docs/app/api-reference/functions/cookies",
            },
            {
              label: "draftMode",
              href: "/docs/app/api-reference/functions/draft-mode",
            },
            {
              label: "fetch",
              href: "/docs/app/api-reference/functions/fetch",
            },
            {
              label: "generateImageMetadata",
              href: "/docs/app/api-reference/functions/generate-image-metadata",
            },
            {
              label: "generateMetadata",
              href: "/docs/app/api-reference/functions/generate-metadata",
            },
            {
              label: "generateSitemaps",
              href: "/docs/app/api-reference/functions/generate-sitemaps",
            },
            {
              label: "generateStaticParams",
              href: "/docs/app/api-reference/functions/generate-static-params",
            },
            {
              label: "generateViewport",
              href: "/docs/app/api-reference/functions/generate-viewport",
            },
            {
              label: "headers",
              href: "/docs/app/api-reference/functions/headers",
            },
            {
              label: "ImageResponse",
              href: "/docs/app/api-reference/functions/image-response",
            },
            {
              label: "NextRequest",
              href: "/docs/app/api-reference/functions/next-request",
            },
            {
              label: "NextResponse",
              href: "/docs/app/api-reference/functions/next-response",
            },
            {
              label: "notFound",
              href: "/docs/app/api-reference/functions/not-found",
            },
            {
              label: "permanentRedirect",
              href: "/docs/app/api-reference/functions/permanentRedirect",
            },
            {
              label: "redirect",
              href: "/docs/app/api-reference/functions/redirect",
            },
            {
              label: "revalidatePath",
              href: "/docs/app/api-reference/functions/revalidatePath",
            },
            {
              label: "revalidateTag",
              href: "/docs/app/api-reference/functions/revalidateTag",
            },
            {
              label: "unstable_cache",
              href: "/docs/app/api-reference/functions/unstable_cache",
            },
            {
              label: "unstable_noStore",
              href: "/docs/app/api-reference/functions/unstable_noStore",
            },
            {
              label: "useParams",
              href: "/docs/app/api-reference/functions/use-params",
            },
            {
              label: "usePathname",
              href: "/docs/app/api-reference/functions/use-pathname",
            },
            {
              label: "useReportWebVitals",
              href: "/docs/app/api-reference/functions/use-report-web-vitals",
            },
            {
              label: "useRouter",
              href: "/docs/app/api-reference/functions/use-router",
            },
            {
              label: "useSearchParams",
              href: "/docs/app/api-reference/functions/use-search-params",
            },
            {
              label: "useSelectedLayoutSegment",
              href: "/docs/app/api-reference/functions/use-selected-layout-segment",
            },
            {
              label: "useSelectedLayoutSegments",
              href: "/docs/app/api-reference/functions/use-selected-layout-segments",
            },
            {
              label: "userAgent",
              href: "/docs/app/api-reference/functions/userAgent",
            },
          ],
        },
        {
          label: "next.config.js 选项",
          href: "/docs/app/api-reference/next-config-js",
          subMenus: [
            {
              label: "appDir",
              href: "/docs/app/api-reference/next-config-js/appDir",
            },
            {
              label: "assetPrefix",
              href: "/docs/app/api-reference/next-config-js/assetPrefix",
            },
            {
              label: "basePath",
              href: "/docs/app/api-reference/next-config-js/basePath",
            },
            {
              label: "compress",
              href: "/docs/app/api-reference/next-config-js/compress",
            },
            {
              label: "devIndicators",
              href: "/docs/app/api-reference/next-config-js/devIndicators",
            },
            {
              label: "distDir",
              href: "/docs/app/api-reference/next-config-js/distDir",
            },
            {
              label: "env",
              href: "/docs/app/api-reference/next-config-js/env",
            },
            {
              label: "eslint",
              href: "/docs/app/api-reference/next-config-js/eslint",
            },
            {
              label: "exportPathMap",
              href: "/docs/app/api-reference/next-config-js/exportPathMap",
            },
            {
              label: "generateBuildId",
              href: "/docs/app/api-reference/next-config-js/generateBuildId",
            },
            {
              label: "generateEtags",
              href: "/docs/app/api-reference/next-config-js/generateEtags",
            },
            {
              label: "headers",
              href: "/docs/app/api-reference/next-config-js/headers",
            },
            {
              label: "httpAgentOptions",
              href: "/docs/app/api-reference/next-config-js/httpAgentOptions",
            },
            {
              label: "images",
              href: "/docs/app/api-reference/next-config-js/images",
            },
            {
              label: "incrementalCacheHandlerPath",
              href: "/docs/app/api-reference/next-config-js/incrementalCacheHandlerPath",
            },
            {
              label: "logging",
              href: "/docs/app/api-reference/next-config-js/logging",
            },
            {
              label: "mdxRs",
              href: "/docs/app/api-reference/next-config-js/mdxRs",
            },
            {
              label: "onDemandEntries",
              href: "/docs/app/api-reference/next-config-js/onDemandEntries",
            },
            {
              label: "optimizePackageImports",
              href: "/docs/app/api-reference/next-config-js/optimizePackageImports",
            },
            {
              label: "output",
              href: "/docs/app/api-reference/next-config-js/output",
            },
            {
              label: "pageExtensions",
              href: "/docs/app/api-reference/next-config-js/pageExtensions",
            },
            {
              label: "Partial Prerendering (experimental)",
              href: "/docs/app/api-reference/next-config-js/partial-prerendering",
            },
            {
              label: "poweredByHeader",
              href: "/docs/app/api-reference/next-config-js/poweredByHeader",
            },
            {
              label: "productionBrowserSourceMaps",
              href: "/docs/app/api-reference/next-config-js/productionBrowserSourceMaps",
            },
            {
              label: "reactStrictMode",
              href: "/docs/app/api-reference/next-config-js/reactStrictMode",
            },
            {
              label: "redirects",
              href: "/docs/app/api-reference/next-config-js/redirects",
            },
            {
              label: "rewrites",
              href: "/docs/app/api-reference/next-config-js/rewrites",
            },
            {
              label: "serverActions",
              href: "/docs/app/api-reference/next-config-js/serverActions",
            },
            {
              label: "serverComponentsExternalPackages",
              href: "/docs/app/api-reference/next-config-js/serverComponentsExternalPackages",
            },
            {
              label: "trailingSlash",
              href: "/docs/app/api-reference/next-config-js/trailingSlash",
            },
            {
              label: "transpilePackages",
              href: "/docs/app/api-reference/next-config-js/transpilePackages",
            },
            {
              label: "turbo",
              href: "/docs/app/api-reference/next-config-js/turbo",
            },
            {
              label: "typedRoutes",
              href: "/docs/app/api-reference/next-config-js/typedRoutes",
            },
            {
              label: "typescript",
              href: "/docs/app/api-reference/next-config-js/typescript",
            },
            {
              label: "urlImports",
              href: "/docs/app/api-reference/next-config-js/urlImports",
            },
            {
              label: "webpack",
              href: "/docs/app/api-reference/next-config-js/webpack",
            },
            {
              label: "webVitalsAttribution",
              href: "/docs/app/api-reference/next-config-js/webVitalsAttribution",
            },
          ],
        },
        {
          label: "create-next-app",
          href: "/docs/pages/api-reference/create-next-app",
        },
        {
          label: "Next.js CLI",
          href: "/docs/pages/api-reference/next-cli",
        },
        {
          label: "Edge Runtime",
          href: "/docs/pages/api-reference/edge",
        },
      ],
    },
    {
      label: "体系结构",
      href: "/docs/architecture",
      subMenus: [
        {
          label: "可访问性",
          href: "/docs/architecture/accessibility",
        },
        {
          label: "快速刷新",
          href: "/docs/architecture/fast-refresh",
        },
        {
          label: "Next.js 编译器",
          href: "/docs/architecture/nextjs-compiler",
        },
        {
          label: "支持的浏览器",
          href: "/docs/architecture/supported-browsers",
        },
        {
          label: "Turbopack",
          href: "/docs/architecture/turbopack",
        },
      ],
    },
    {
      label: "社区",
      subMenus: [
        {
          label: "贡献指南",
          href: "/docs/community/contribution-guide",
        },
      ],
    },
    {
      label: "常见错误",
      subMenus: [
        {
          label: "缺少useSearchParams的挂起边界",
          href: "/docs/errors/missing-suspense-with-csr-bailout",
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
