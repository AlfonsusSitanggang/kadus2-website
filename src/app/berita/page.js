import ArticleList from "@/components/ArticleList";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata = {
  title: "Berita Kadus 2",
  description: "Berita dan informasi terbaru dari Kadus 2 Desa Kecemen.",
};

async function getArticles() {
  try {
    const res = await fetch(
      `${process.env.DOMAIN}/api/articles`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch articles");
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching articles:", error);
    return [];
  }
}

export default async function BeritaPage() {
  const allPostsData = await getArticles();

  return (
    <div className="container mx-auto px-4 py-12">
      <ArticleList
        articles={allPostsData}
        showMoreLink={false}
      />
    </div>
  );
}