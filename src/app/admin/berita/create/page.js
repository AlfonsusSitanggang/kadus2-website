'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Alert } from '@/components/ui/alert';

export default function CreateBeritaPage() {
  const [article, setArticle] = useState({
    title: '',
    description: '',
    content: '',
    slug: '',
    category: '',
    thumbnail: '',
  });

  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const [isSaving, setIsSaving] = useState(false);

  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    fetch('/api/categories?type=article')
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => {
        console.error('Error fetching categories:', err);
      });
  }, []);

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

    // Validasi ukuran maksimal 5 MB
    if (file.size > 5 * 1024 * 1024) {
      setError('Ukuran gambar maksimal 5 MB.');
      return;
    }

    setError(null);
    setSelectedImage(file);

    // Hapus preview lama
    if (previewImage) {
      URL.revokeObjectURL(previewImage);
    }

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
          data.error || 'Gagal mengunggah gambar'
        );
      }

      return data.media.url;
    } finally {
      setIsUploading(false);
    }
  };

  const handleSave = async () => {
    // Validasi sederhana
    if (!article.title.trim()) {
      setError('Judul berita wajib diisi.');
      return;
    }

    if (!article.slug.trim()) {
      setError('Slug berita wajib diisi.');
      return;
    }

    if (!article.content.trim()) {
      setError('Isi berita wajib diisi.');
      return;
    }

    setIsSaving(true);
    setError(null);

    try {
      // Upload gambar terlebih dahulu jika ada
      const thumbnailUrl = await uploadImage();

      // Simpan berita
      const response = await fetch('/api/articles/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...article,
          thumbnail: thumbnailUrl,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || 'Gagal membuat berita'
        );
      }

      router.push('/admin/berita');
      router.refresh();
    } catch (error) {
      console.error('Error creating berita:', error);

      setError(
        error.message || 'Terjadi kesalahan saat membuat berita.'
      );
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-2xl font-bold mb-6">
        Tambah Berita Baru
      </h1>

      {error && (
        <Alert
          variant="destructive"
          className="mb-4"
        >
          {error}
        </Alert>
      )}

      <div className="space-y-6">
        {/* Judul */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Judul Berita
          </label>

          <Input
            name="title"
            value={article.title}
            onChange={handleInputChange}
            placeholder="Contoh: Kerja Bakti Warga Kadus 2"
          />
        </div>

        {/* Deskripsi */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Ringkasan Berita
          </label>

          <Input
            name="description"
            value={article.description}
            onChange={handleInputChange}
            placeholder="Ringkasan singkat isi berita"
          />
        </div>

        {/* Slug */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Slug Berita
          </label>

          <Input
            name="slug"
            value={article.slug}
            onChange={handleInputChange}
            placeholder="Contoh: kerja-bakti-warga"
          />

          <p className="text-sm text-gray-500 mt-1">
            Gunakan huruf kecil, angka, dan tanda hubung (-).
          </p>
        </div>

        {/* Thumbnail */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Thumbnail / Gambar Utama
          </label>

          <Input
            type="file"
            accept="image/jpeg,image/png,image/webp"
            onChange={handleImageChange}
          />

          <p className="text-sm text-gray-500 mt-1">
            Format: JPG, PNG, atau WebP. Maksimal 5 MB.
          </p>

          {previewImage && (
            <div className="mt-4">
              <img
                src={previewImage}
                alt="Preview gambar berita"
                className="max-w-md w-full rounded-lg border object-cover"
              />
            </div>
          )}
        </div>

        {/* Kategori */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Kategori
          </label>

          <select
            name="category"
            value={article.category}
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

        {/* Isi Berita */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Isi Berita
          </label>

          <Textarea
            name="content"
            value={article.content}
            onChange={handleInputChange}
            placeholder="Tulis isi berita di sini. Mendukung format Markdown."
            rows={20}
          />
        </div>

        {/* Tombol */}
        <Button
          onClick={handleSave}
          disabled={isSaving || isUploading}
        >
          {isUploading
            ? 'Mengunggah Gambar...'
            : isSaving
              ? 'Menyimpan Berita...'
              : 'Tambah Berita'
          }
        </Button>
      </div>
    </div>
  );
}