import { Octokit } from "@octokit/rest";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

const owner = process.env.GITHUB_OWNER;
const repo = process.env.GITHUB_REPO;

const articlesJsonPath = "data/json/articles.json";
const mdFolderPath = "data/md";

export async function getSortedPostsData() {
  try {
    const { data } = await octokit.repos.getContent({
      owner,
      repo,
      path: articlesJsonPath,
    });

    const content = Buffer.from(data.content, "base64").toString("utf8");

    const articles = JSON.parse(content);

    if (!Array.isArray(articles)) {
      return [];
    }

    return articles
      .filter((article) => !article.deleted)
      .map((article) => ({
        id:
          article.path
            ?.replace("data/md/", "")
            ?.replace(/\.md$/, "") ?? "",
        title: article.title ?? "",
        description: article.description ?? "",
        date: article.date ?? "",
        category: article.category ?? null,
        thumbnail: article.thumbnail ?? null,
        path: article.path ?? "",
      }))
      .sort((a, b) => {
        return (
          new Date(b.date).getTime() -
          new Date(a.date).getTime()
        );
      });
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

export async function getPostData(slug) {
  const filePath = `${mdFolderPath}/${slug}.md`;

  try {
    const { data } = await octokit.repos.getContent({
      owner,
      repo,
      path: filePath,
    });

    const fileContents = Buffer.from(
      data.content,
      "base64"
    ).toString("utf8");

    const matterResult = matter(fileContents);

    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);

    return {
      slug,
      contentHtml: processedContent.toString(),
      title: matterResult.data.title ?? "",
      description: matterResult.data.description ?? "",
      date: matterResult.data.date ?? "",
      category: matterResult.data.category ?? null,
      thumbnail: matterResult.data.thumbnail ?? null,
    };
  } catch (error) {
    console.error(`Article ${slug} not found:`, error);

    return null;
  }
}