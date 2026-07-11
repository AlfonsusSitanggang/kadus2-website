import { Octokit } from '@octokit/rest';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

const owner = process.env.GITHUB_OWNER;
const repo = process.env.GITHUB_REPO;

const articlesJsonPath = 'data/json/articles.json';
const mdFolderPath = 'data/md';

export async function getSortedPostsData() {
  try {
    const { data } = await octokit.repos.getContent({
      owner,
      repo,
      path: articlesJsonPath,
    });

    const content = Buffer
      .from(data.content, 'base64')
      .toString('utf8');

    const articles = JSON.parse(content);

    return articles
      .filter(article => !article.deleted)
      .map(article => ({
        id: article.path
          .replace('data/md/', '')
          .replace(/\.md$/, ''),
        title: article.title,
        description: article.description,
        date: article.date,
        category: article.category || null,
        thumbnail: article.thumbnail || null,
      }))
      .sort((a, b) => new Date(b.date) - new Date(a.date));

  } catch (error) {
    console.error('Error fetching posts from GitHub:', error);
    return [];
  }
}

export async function getPostData(slug) {
  const filePath = `${mdFolderPath}/${slug}.md`;

  const { data } = await octokit.repos.getContent({
    owner,
    repo,
    path: filePath,
  });

  const fileContents = Buffer
    .from(data.content, 'base64')
    .toString('utf8');

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  return {
    slug,
    contentHtml: processedContent.toString(),
    title: matterResult.data.title,
    description: matterResult.data.description,
    date: matterResult.data.date,
    category: matterResult.data.category || null,
    thumbnail: matterResult.data.thumbnail || null,
  };
}