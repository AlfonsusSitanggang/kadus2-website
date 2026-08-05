import { getPostData } from "@/lib/posts";
import Link from "next/link";
import { ArrowLeft, ChevronRight, Calendar } from "lucide-react";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";


export default async function BeritaPage() {
  const allPostsData = await getSortedPostsData();

  console.log(allPostsData);

  return (
    <ArticleList
      articles={allPostsData}
      showMoreLink={false}
    />
  );
}



export async function generateMetadata({ params }) {
  try {
    const postData = await getPostData(params.slug);

    return {
      title: postData.title,
      description:
        postData.description || `Read about ${postData.title} on GitBase`,
    };
  } catch {
    return {
      title: "Artikel Tidak Ditemukan",
      description: "Artikel yang Anda cari tidak tersedia.",
    };
  }
}

export default async function Post({ params }) {
  let postData;

  try {
    postData = await getPostData(params.slug);
  } catch {
    notFound();
  }

  return (
    <article className="container mx-auto max-w-3xl px-4 py-12">
      {/* Breadcrumb */}
      <nav className="mb-8 flex flex-wrap items-center text-sm text-gray-500">
        <Link
          href="/"
          className="font-medium transition-colors hover:text-blue-600"
        >
          Home
        </Link>

        <ChevronRight className="mx-2 text-gray-300" size={16} />

        <Link
          href="/berita"
          className="font-medium transition-colors hover:text-blue-600"
        >
          Berita
        </Link>

        <ChevronRight className="mx-2 text-gray-300" size={16} />

        <span className="line-clamp-1 font-medium text-gray-900">
          {postData.title}
        </span>
      </nav>

      {/* Thumbnail */}
      {postData.thumbnail && (
        <div className="mb-10 -mx-4 sm:mx-0">
          <div className="relative h-[280px] w-full overflow-hidden shadow-lg sm:h-[380px] md:h-[460px] sm:rounded-2xl">
            <img
              src={postData.thumbnail}
              alt={postData.title}
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          </div>
        </div>
      )}

      {/* Judul */}
      <h1 className="mb-6 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
        {postData.title}
      </h1>

      {/* Metadata */}
      {(postData.date || postData.description) && (
        <div className="mb-10 rounded-xl border border-gray-100 bg-gray-50 p-6">
          {postData.date && (
            <div className="mb-3 flex items-center gap-2 text-gray-500">
              <Calendar size={16} />

              <p className="text-sm font-medium">
                {new Date(postData.date).toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
          )}

          {postData.description && (
            <p className="leading-relaxed text-gray-700">
              {postData.description}
            </p>
          )}
        </div>
      )}

      {/* Isi Artikel */}
      <div
        className="prose prose-lg max-w-none
          prose-headings:font-bold
          prose-headings:text-gray-900
          prose-p:leading-relaxed
          prose-p:text-gray-700
          prose-a:text-blue-600
          hover:prose-a:underline
          prose-a:no-underline
          prose-img:rounded-xl
          prose-img:shadow-md"
        dangerouslySetInnerHTML={{
          __html: postData.contentHtml,
        }}
      />

      {/* Tombol kembali */}
      <div className="mt-14 border-t border-gray-100 pt-8">
        <Link
          href="/berita"
          className="group inline-flex items-center gap-2 font-medium text-blue-600 transition-colors hover:text-blue-800"
        >
          <ArrowLeft
            size={20}
            className="transition-transform group-hover:-translate-x-1"
          />
          Kembali ke daftar berita
        </Link>
      </div>
    </article>
  );
}
