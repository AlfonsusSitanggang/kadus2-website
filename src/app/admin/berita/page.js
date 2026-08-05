'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { Trash2 } from 'lucide-react';

export default function AdminArticlesPage() {
  const router = useRouter();

  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSyncing, setIsSyncing] = useState(false);
  const [error, setError] = useState(null);

  const fetchArticles = useCallback(async (sync = false) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `/api/articles${sync ? '?sync=true' : ''}`,
        {
          cache: 'no-store',
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch articles');
      }

      const data = await response.json();

      setArticles(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error(err);
      setError('Failed to fetch articles.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  const handleSync = async () => {
    setIsSyncing(true);

    try {
      await fetchArticles(true);
      router.refresh();
    } finally {
      setIsSyncing(false);
    }
  };

  const handleDelete = async (articlePath) => {
    const confirmed = confirm(
      'Apakah Anda yakin ingin memindahkan artikel ini ke Trash?'
    );

    if (!confirmed) return;

    try {
      const response = await fetch(
        `/api/articles?path=${encodeURIComponent(articlePath)}`,
        {
          method: 'DELETE',
        }
      );

      if (!response.ok) {
        throw new Error('Failed to delete article');
      }

      await fetchArticles(true);

      router.refresh();
    } catch (err) {
      console.error(err);
      alert('Gagal menghapus artikel.');
    }
  };

  if (isLoading) {
    return (
      <div className="container mx-auto p-4">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-4 text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">

      <h1 className="mb-6 text-2xl font-bold">
        Article Management
      </h1>

      <div className="mb-6 flex justify-between">

        <div className="flex gap-2">

          <Link href="/admin">
            <Button>
              Dashboard
            </Button>
          </Link>

          <Link href="/admin/trash">
            <Button variant="outline">
              Trash Bin
            </Button>
          </Link>

        </div>

        <div className="flex gap-2">

          <Button
            onClick={handleSync}
            disabled={isSyncing}
          >
            {isSyncing ? 'Syncing...' : 'Sync Articles'}
          </Button>

          <Link href="/admin/berita/create">
            <Button>
              Create New Article
            </Button>
          </Link>

        </div>

      </div>

      <Table>

        <TableHeader>

          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Created</TableHead>
            <TableHead>Last Modified</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>

        </TableHeader>

        <TableBody>

          {articles.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={5}
                className="text-center"
              >
                Tidak ada artikel.
              </TableCell>
            </TableRow>
          ) : (
            articles.map((article) => (
              <TableRow key={article.path}>

                <TableCell>
                  {article.title}
                </TableCell>

                <TableCell>
                  {article.description}
                </TableCell>

                <TableCell>
                  {new Date(article.date).toLocaleDateString('id-ID')}
                </TableCell>

                <TableCell>
                  {new Date(article.lastModified).toLocaleString('id-ID')}
                </TableCell>

                <TableCell>

                  <div className="flex gap-2">

                    <Link
                      href={`/admin/berita/edit?path=${encodeURIComponent(article.path)}`}
                    >
                      <Button size="sm">
                        Edit
                      </Button>
                    </Link>

                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => handleDelete(article.path)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>

                  </div>

                </TableCell>

              </TableRow>
            ))
          )}

        </TableBody>

      </Table>

    </div>
  );
}