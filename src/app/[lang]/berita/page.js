import ArticleList from '@/components/ArticleList'
import { getSortedPostsData } from '@/lib/posts'
import { getDictionary } from '@/lib/get-dictionary'

export async function generateMetadata({ params }) {
  const dict = await getDictionary(params.lang)

  return {
    title: 'Berita Kadus 2',
    description:
      'Informasi dan berita terbaru dari Kadus 2, Desa Kecemen, Kecamatan Manisrenggo, Kabupaten Klaten.',
  }
}

export default async function BeritaPage({ params }) {
  await getDictionary(params.lang)

  const allPostsData = await getSortedPostsData()

  return (
    <div className="container mx-auto py-12">
      <ArticleList
        articles={Array.isArray(allPostsData) ? allPostsData : []}
        showMoreLink={false}
      />
    </div>
  )
}