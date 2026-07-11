'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Alert } from '@/components/ui/alert';

export default function ArticleEditor() {
  const [article, setArticle] = useState({
    title: '',
    description: '',
    content: '',
    path: '',
    category: '',
    thumbnail: '',
  });

  const [categories, setCategories] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState(null);

  const searchParams = useSearchParams();
  const router = useRouter();
  const path = searchParams.get('path');

  useEffect(() => {
    if (path) {
      fetchArticle(decodeURIComponent(path));
    } else {
      setError('Path berita tidak ditemukan.');
      setIsLoading(false);
    }

    fetch('/api/categories?type=article')
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => {
        console.error('Error fetching categories:', err);
      });
  }, [path]);

  const fetchArticle = async (articlePath) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `/api/articles?path=${encodeURIComponent(articlePath)}`
      );

      if (!response.ok) {
        throw new Error('Gagal mengambil data berita.');
      }

      const data = await response.json();

      setArticle({
        title: data.title || '',
        description: data.description || '',
        content: data.content || '',
        path: data.path || articlePath,
        category: data.category || '',
        thumbnail: data.thumbnail || '',
      });
    } catch (error) {
      console.error('Error fetching article:', error);
      setError('Gagal mengambil data berita.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setArticle((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      setError('Ukuran gambar maksimal 5 MB.');
      return;
    }

    if (previewImage) {
      URL.revokeObjectURL(previewImage);
    }

    setError(null);
    setSelectedImage(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  const uploadImage = async () => {
    if (!selectedImage) {
      return article.thumbnail || null;
    }

    setIsUploading(true);

    try {
      const formData = new FormData();

      formData.append('file', selectedImage);
      formData.append('category', 'berita');

      const response = await fetch('/api/media/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || 'Gagal mengunggah gambar.'
        );
      }

      return data.media.url;
    } finally {
      setIsUploading(false);
    }
  };

  const handleSave = async () => {
    if (!article.title.trim()) {
      setError('Judul berita wajib diisi.');
      return;
    }

    if (!article.content.trim()) {
      setError('Isi berita wajib diisi.');
      return;
    }

    setIsSaving(true);
    setError(null);

    try {
      // Upload gambar baru jika dipilih
      const thumbnailUrl = await uploadImage();

      const updatedArticle = {
        ...article,
        thumbnail: thumbnailUrl,
      };

      const response = await fetch('/api/articles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          article: updatedArticle,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || 'Gagal menyimpan perubahan berita.'
        );
      }

      router.push('/admin/berita');
      router.refresh();
    } catch (error) {
      console.error('Error saving article:', error);

      setError(
        error.message || 'Gagal menyimpan perubahan berita.'
      );
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return <div>Memuat berita...</div>;
  }

  return (
    <div className="space-y-6">
      {error && (
        <Alert
          variant="destructive"
          className="mb-4"
        >
          {error}
        </Alert>
      )}

      {/* Judul */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Judul Berita
        </label>

        <Input
          name="title"
          value={article.title}
          onChange={handleInputChange}
          placeholder="Judul Berita"
        />
      </div>

      {/* Ringkasan */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Ringkasan Berita
        </label>

        <Input
          name="description"
          value={article.description}
          onChange={handleInputChange}
          placeholder="Ringkasan singkat berita"
        />
      </div>

      {/* Thumbnail */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Thumbnail / Gambar Utama
        </label>

        {(previewImage || article.thumbnail) && (
          <div className="mb-4">
            <img
              src={previewImage || article.thumbnail}
              alt="Thumbnail berita"
              className="max-w-md w-full rounded-lg border object-cover"
            />
          </div>
        )}

        <Input
          type="file"
          accept="image/jpeg,image/png,image/webp"
          onChange={handleImageChange}
        />

        <p className="text-sm text-gray-500 mt-1">
          Pilih gambar baru hanya jika ingin mengganti thumbnail.
          Maksimal 5 MB.
        </p>
      </div>

      {/* Kategori */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Kategori
        </label>

        <select
          name="category"
          value={article.category || ''}
          onChange={handleInputChange}
          className="w-full border rounded px-3 py-2"
        >
          <option value="">
            Tanpa Kategori
          </option>

          {categories.map((cat) => (
            <option
              key={cat.id}
              value={cat.id}
            >
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      {/* Isi */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Isi Berita
        </label>

        <Textarea
          name="content"
          value={article.content}
          onChange={handleInputChange}
          placeholder="Isi Berita"
          rows={20}
        />
      </div>

      <Button
        onClick={handleSave}
        disabled={isSaving || isUploading}
      >
        {isUploading
          ? 'Mengunggah Gambar...'
          : isSaving
            ? 'Menyimpan Perubahan...'
            : 'Simpan Perubahan'
        }
      </Button>
    </div>
  );
}