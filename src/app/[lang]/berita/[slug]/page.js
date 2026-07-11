import { getPostData } from "@/lib/posts";
import Link from "next/link";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { getDictionary } from "@/lib/get-dictionary";
import { addLocaleToPath } from "@/lib/i18n-config";

export async function generateStaticParams() {
  return [];
}

export async function generateMetadata({ params }) {
  const postData = await getPostData(params.slug);

  return {
    title: postData.title,
    description:
      postData.description ||
      `Berita ${postData.title} dari Kadus 2 Desa Kecemen`,
  };
}

export default async function BeritaDetailPage({ params }) {
  const dict = await getDictionary(params.lang);
  const postData = await getPostData(params.slug);

  const homePath = addLocaleToPath("/", params.lang);
  const beritaPath = addLocaleToPath("/berita", params.lang);

  return (
    <article className="container mx-auto px-4 py-12 max-w-3xl">
      {/* Breadcrumb */}
      <nav className="flex items-center text-sm text-gray-500 mb-6">
        <Link href={homePath} className="hover:text-blue-600">
          {dict.navigation.home}
        </Link>

        <ChevronRight className="mx-2" size={16} />

        <Link href={beritaPath} className="hover:text-blue-600">
          Berita
        </Link>

        <ChevronRight className="mx-2" size={16} />

        <span className="text-gray-900">{postData.title}</span>
      </nav>

      {/* Judul */}
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          {postData.title}
        </h1>
      </header>

      {/* Thumbnail */}
      {postData.thumbnail && (
        <div className="mb-8">
          <img
            src={postData.thumbnail}
            alt={postData.title}
            className="w-full max-h-[500px] object-cover rounded-xl"
          />
        </div>
      )}

      {/* Informasi berita */}
      <div className="bg-gray-100 rounded-lg p-6 mb-8">
        {postData.date && (
          <p className="text-gray-600 mb-2">
            {new Date(postData.date).toLocaleDateString(
              params.lang === "en" ? "en-US" : "id-ID",
              {
                day: "numeric",
                month: "long",
                year: "numeric",
              },
            )}
          </p>
        )}

        {postData.description && (
          <p className="text-gray-800">{postData.description}</p>
        )}
      </div>

      {/* Isi berita */}
      <div
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{
          __html: postData.contentHtml,
        }}
      />

      {/* Kembali */}
      <div className="mt-12">
        <Link
          href={beritaPath}
          className="text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-2"
        >
          <ArrowLeft size={20} />
          Kembali ke daftar berita
        </Link>
      </div>
    </article>
  );
}
