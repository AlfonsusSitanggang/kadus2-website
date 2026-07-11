'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';

const ArticleEditor = dynamic(
  () => import('@/components/ArticleEditor'),
  {
    ssr: false,
  }
);

export default function BeritaEditorPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">
        Edit Berita
      </h1>

      <Suspense
        fallback={<div>Memuat editor...</div>}
      >
        <ArticleEditor />
      </Suspense>
    </div>
  );
}