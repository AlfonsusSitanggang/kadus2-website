import ArticleList from '@/components/ArticleList'
import { getSortedPostsData } from '@/lib/posts'

export const metadata = {
  title: 'Berita Kadus 2',
  description: 'Berita dan informasi terbaru dari Kadus 2 Desa Kecemen.',
}

export default async function BeritaPage() {
  const allPostsData = await getSortedPostsData()

  return (
    <div className="container mx-auto px-4 py-12">
      <ArticleList
        articles={allPostsData}
        showMoreLink={false}
      />
    </div>
  )
}