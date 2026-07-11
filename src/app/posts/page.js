import ArticleList from '@/components/ArticleList';
import { getSortedPostsData } from '@/lib/posts';

export const metadata = {
  title: 'Berita Kadus 2',
  description: 'Informasi dan berita terbaru dari Kadus 2 Desa Kecemen.',
};

export default async function Articles() {
  const allPostsData = await getSortedPostsData();

  console.log('BERITA DARI GITHUB:', allPostsData);

  return (
    <div className="container mx-auto py-12 px-4">
      <ArticleList
        articles={allPostsData}
        showMoreLink={false}
      />
    </div>
  );
}