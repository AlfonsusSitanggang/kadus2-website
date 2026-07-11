'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Alert } from "@/components/ui/alert";

export default function CreateArticlePage() {
  const [article, setArticle] = useState({
    title: '',
    description: '',
    content: '',
    slug: '',
    category: '',
    thumbnail: ''
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
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(err =>
        console.error('Error fetching categories:', err)
      );
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setArticle(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setSelectedImage(file);

    const previewUrl = URL.createObjectURL(file);
    setPreviewImage(previewUrl);
  };

  const uploadImage = async () => {
    if (!selectedImage) {
      return null;
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
    setIsSaving(true);
    setError(null);

    try {
      // Upload gambar terlebih dahulu
      let thumbnailUrl = article.thumbnail;

      if (selectedImage) {
        thumbnailUrl = await uploadImage();
      }

      // Setelah upload berhasil, buat artikel
      const response = await fetch(
        '/api/articles/create',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            ...article,
            thumbnail: thumbnailUrl
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || 'Failed to create article'
        );
      }

      router.push('/admin/articles');

    } catch (error) {
      console.error(
        'Error creating article:',
        error
      );

      setError(error.message);

    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-4xl">

      <h1 className="text-2xl font-bold mb-6">
        Create New Article
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

        <Input
          name="title"
          value={article.title}
          onChange={handleInputChange}
          placeholder="Article Title"
        />

        <Input
          name="description"
          value={article.description}
          onChange={handleInputChange}
          placeholder="Article Description"
        />

        <Input
          name="slug"
          value={article.slug}
          onChange={handleInputChange}
          placeholder="Article Slug (e.g., kerja-bakti-warga)"
        />

        <div>
          <label className="block text-sm font-medium mb-2">
            Thumbnail / Gambar Utama
          </label>

          <Input
            type="file"
            accept="image/jpeg,image/png,image/webp"
            onChange={handleImageChange}
          />

          {previewImage && (
            <div className="mt-4">
              <img
                src={previewImage}
                alt="Preview"
                className="max-w-md w-full rounded-lg border"
              />
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Category (Optional)
          </label>

          <select
            name="category"
            value={article.category}
            onChange={handleInputChange}
            className="w-full border rounded px-3 py-2"
          >
            <option value="">
              No Category
            </option>

            {categories.map(cat => (
              <option
                key={cat.id}
                value={cat.id}
              >
                {cat.name}
              </option>
            ))}

          </select>
        </div>

        <Textarea
          name="content"
          value={article.content}
          onChange={handleInputChange}
          placeholder="Article Content (Markdown)"
          rows={20}
        />

        <Button
          onClick={handleSave}
          disabled={isSaving || isUploading}
        >
          {isUploading
            ? 'Uploading Image...'
            : isSaving
              ? 'Creating Article...'
              : 'Create Article'
          }
        </Button>

      </div>
    </div>
  );
}