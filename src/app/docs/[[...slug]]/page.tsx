// export const metadata = {
//   title: "Hello, Next.js!",
//   description: "a test mdx file",
// };
import { Toc } from "@/components/Toc";
// import { existsSync } from "fs";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
// import dynamic from "next/dynamic";
import "highlight.js/styles/github-dark-dimmed.css";
import linkMap from "@/nav/link.map.json";

type Props = {
  params: { slug: [] };
  searchParams: { [key: string]: string | string[] | undefined };
};
async function getMdx(params: any) {
  // return dynamic(() => import(`@/content/docs/${path}.mdx`));
  const path = (params.slug && params.slug.length && params.slug.join("/")) || "index";
  // let file = `@/content/docs/${path}.mdx`;
  // if (!existsSync(file)) file = `@/content/docs/${path}/index.mdx`;
  // if (!existsSync(file)) return undefined;
  const file = linkMap[path];
  console.log(path, file);
  const Mdx: any = await import(`@/content/docs/${file}`);
  return Mdx;
}
export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  // console.log({ params });
  const Mdx = await getMdx(params);
  // console.log(Mdx.tableOfContents);
  if (!Mdx) return { title: "未找到" };
  return {
    ...Mdx.frontmatter,
    // openGraph: {
    //   images: ['/some-specific-page-image.jpg', ...previousImages],
    // },
  };
}

export default async function MDXPage({ params }: any) {
  const Mdx: any = await getMdx(params);
  if (!Mdx) return notFound();

  return (
    <div className="max-w-3xl mx-auto pt-3 xl:max-w-none xl:ml-0 xl:mr-[15.5rem] xl:pr-1">
      <article className="relative z-20 prose prose-slate mt-3 mb-3 dark:prose-dark">
        <div className="prose prose-stone">
          <h1>{Mdx.frontmatter.title}</h1>
          <div className="border-2 p-2 text-xs">{Mdx.frontmatter.description}</div>
          <Mdx.default />
        </div>
      </article>
      <div className="fixed z-20 top-[3.8125rem] bottom-0 right-1 w-[16rem] py-10 overflow-y-auto hidden xl:block">
        <Toc toc={Mdx.tableOfContents} />
      </div>
    </div>
  );
}
