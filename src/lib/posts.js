import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const owner = process.env.GITHUB_OWNER;
const repo = process.env.GITHUB_REPO;
const token = process.env.GITHUB_TOKEN;

const articlesJsonPath = "data/json/articles.json";
const mdFolderPath = "data/md";

/**
 * Helper internal untuk melakukan request ke GitHub API 
 * tanpa terpengaruh oleh Data Cache Next.js atau ETag GitHub.
 */
async function fetchGitHubContent(path) {
  const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github.v3+json",
      // Bypass cache di layer HTTP & GitHub CDN
      "Cache-Control": "no-cache, no-store, must-revalidate",
      Pragma: "no-cache",
    },
    // Memaksa Next.js Server Components untuk selalu memanggil API langsung
    cache: "no-store",
  });

  if (!res.ok) {
    if (res.status === 404) {
      return null;
    }
    throw new Error(`GitHub API responded with status ${res.status} for path: ${path}`);
  }

  const data = await res.json();
  
  // Decoding data dari Base64 ke UTF-8
  if (data && data.content) {
    return Buffer.from(data.content, "base64").toString("utf8");
  }

  return null;
}

export async function getSortedPostsData() {
  try {
    const rawContent = await fetchGitHubContent(articlesJsonPath);

    if (!rawContent) {
      return [];
    }

    const articles = JSON.parse(rawContent);

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
    const rawContent = await fetchGitHubContent(filePath);

    if (!rawContent) {
      return null;
    }

    const matterResult = matter(rawContent);

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