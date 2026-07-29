'use client';

import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function TrashPage() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [processingPath, setProcessingPath] = useState(null);
  const [error, setError] = useState(null);

  const fetchDeletedArticles = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        '/api/articles?includeDeleted=true'
      );

      if (!response.ok) {
        throw new Error(
          'Gagal mengambil data berita terhapus'
        );
      }

      const data = await response.json();

      const deletedArticles = Array.isArray(data)
        ? data.filter((article) => article.deleted)
        : [];

      setArticles(deletedArticles);
    } catch (error) {
      console.error(
        'Error fetching deleted articles:',
        error
      );

      setError(
        'Gagal mengambil daftar berita terhapus.'
      );
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchDeletedArticles();
  }, [fetchDeletedArticles]);

  const handleRestore = async (path) => {
    setProcessingPath(path);
    setError(null);

    try {
      const response = await fetch('/api/articles', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          path,
          action: 'restore',
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || 'Gagal memulihkan berita'
        );
      }

      await fetchDeletedArticles();
    } catch (error) {
      console.error(
        'Error restoring article:',
        error
      );

      setError(
        error.message || 'Gagal memulihkan berita.'
      );
    } finally {
      setProcessingPath(null);
    }
  };

  const handlePermanentDelete = async (path) => {
    const confirmed = window.confirm(
      'Berita akan dihapus permanen dan tidak dapat dipulihkan. Lanjutkan?'
    );

    if (!confirmed) {
      return;
    }

    setProcessingPath(path);
    setError(null);

    try {
      const response = await fetch('/api/articles', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          path,
          action: 'permanentDelete',
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error ||
            'Gagal menghapus berita secara permanen'
        );
      }

      await fetchDeletedArticles();
    } catch (error) {
      console.error(
        'Error permanently deleting article:',
        error
      );

      setError(
        error.message ||
          'Gagal menghapus berita secara permanen.'
      );
    } finally {
      setProcessingPath(null);
    }
  };

  return (
    <div className="container mx-auto max-w-6xl px-4 py-12">
      {/* Header */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Sampah Berita
          </h1>

          <p className="mt-2 text-gray-500">
            Pulihkan atau hapus permanen berita yang telah dihapus.
          </p>
        </div>

        <Link href="/admin">
          <Button variant="outline">
            Kembali ke Dashboard
          </Button>
        </Link>
      </div>

      {/* Error */}
      {error && (
        <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          {error}
        </div>
      )}

      {/* Loading */}
      {isLoading ? (
        <div className="rounded-lg border p-8 text-center text-gray-500">
          Memuat berita terhapus...
        </div>
      ) : articles.length === 0 ? (
        /* Empty state */
        <div className="rounded-lg border border-dashed p-12 text-center">
          <h2 className="text-lg font-semibold">
            Sampah kosong
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Tidak ada berita yang sedang berada di sampah.
          </p>
        </div>
      ) : (
        /* Article list */
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {articles.map((article) => {
            const isProcessing =
              processingPath === article.path;

            return (
              <Card key={article.path}>
                <CardHeader>
                  <CardTitle>
                    {article.title || 'Tanpa Judul'}
                  </CardTitle>

                  <CardDescription>
                    {article.description ||
                      'Tidak ada deskripsi berita.'}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  {article.deletedAt && (
                    <p className="mb-4 text-sm text-gray-500">
                      Dihapus:{' '}
                      {new Date(
                        article.deletedAt
                      ).toLocaleString('id-ID')}
                    </p>
                  )}

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Button
                      onClick={() =>
                        handleRestore(article.path)
                      }
                      disabled={isProcessing}
                    >
                      {isProcessing
                        ? 'Memproses...'
                        : 'Pulihkan'}
                    </Button>

                    <Button
                      variant="destructive"
                      onClick={() =>
                        handlePermanentDelete(
                          article.path
                        )
                      }
                      disabled={isProcessing}
                    >
                      Hapus Permanen
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}