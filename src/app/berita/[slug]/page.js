import { getPostData } from "@/lib/posts";
import Link from "next/link";
import { ArrowLeft, ChevronRight, Calendar } from "lucide-react";

export async function generateMetadata({ params }) {
  const postData = await getPostData(params.slug);
  return {
    title: `${postData.title}`,
    description:
      postData.description || `Read about ${postData.title} on GitBase`,
  };
}

export default async function Post({ params }) {
  const postData = await getPostData(params.slug);

  return (
    <article className="container mx-auto px-4 py-12 max-w-3xl">
      {/* Breadcrumb navigation */}
      <nav className="flex items-center flex-wrap text-sm text-gray-500 mb-8">
        <Link
          href="/"
          className="hover:text-blue-600 transition-colors font-medium"
        >
          Home
        </Link>
        <ChevronRight className="mx-2 text-gray-300" size={16} />
        <Link
          href="/berita"
          className="hover:text-blue-600 transition-colors font-medium"
        >
          Berita
        </Link>
        <ChevronRight className="mx-2 text-gray-300" size={16} />
        <span className="text-gray-900 font-medium line-clamp-1">
          {postData.title}
        </span>
      </nav>

      {/* Thumbnail / Main Image */}
      {postData.thumbnail && (
        <div className="mb-10 -mx-4 sm:mx-0">
          <div className="relative w-full h-[280px] sm:h-[380px] md:h-[460px] overflow-hidden sm:rounded-2xl shadow-lg">
            <img
              src={postData.thumbnail}
              alt={postData.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          </div>
        </div>
      )}

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
        {postData.title}
      </h1>

      {/* Meta information card */}
      {(postData.date || postData.description) && (
        <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 mb-10">
          {postData.date && (
            <div className="flex items-center gap-2 text-gray-500 mb-3">
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
            <p className="text-gray-700 leading-relaxed">
              {postData.description}
            </p>
          )}
        </div>
      )}

      {/* Article content */}
      <div
        className="prose prose-lg prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl prose-img:shadow-md max-w-none"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />

      {/* Kembali ke daftar berita link */}
      <div className="mt-14 pt-8 border-t border-gray-100">
        <Link
          href="/berita"
          className="text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-2 font-medium group"
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