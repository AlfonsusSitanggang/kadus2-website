import { NextResponse } from 'next/server';
import { Octokit } from '@octokit/rest';
import { randomUUID } from 'crypto';
import { verifyRequestAuth } from '@/lib/auth';

export const runtime = 'nodejs';

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

const owner = process.env.GITHUB_OWNER;
const repo = process.env.GITHUB_REPO;

const ALLOWED_TYPES = [
  'image/jpeg',
  'image/png',
  'image/webp',
];

const ALLOWED_CATEGORIES = [
  'berita',
  'pengumuman',
  'umkm',
  'potensi',
  'galeri',
  'profil',
  'peta',
];

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB

function sanitizeFileName(fileName) {
  return fileName
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9._-]/g, '');
}

export async function POST(request) {
  // Cek autentikasi admin
  if (!verifyRequestAuth(request)) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  try {
    const formData = await request.formData();

    const file = formData.get('file');
    const category = formData.get('category');

    // Validasi file
    if (!file || typeof file === 'string') {
      return NextResponse.json(
        { error: 'File tidak ditemukan' },
        { status: 400 }
      );
    }

    // Validasi kategori
    if (!category || !ALLOWED_CATEGORIES.includes(category)) {
      return NextResponse.json(
        { error: 'Kategori media tidak valid' },
        { status: 400 }
      );
    }

    // Validasi tipe file
    if (!ALLOWED_TYPES.includes(file.type)) {
      return NextResponse.json(
        {
          error: 'Format file tidak didukung. Gunakan JPG, PNG, atau WebP.',
        },
        { status: 400 }
      );
    }

    // Validasi ukuran
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: 'Ukuran file maksimal 5 MB' },
        { status: 400 }
      );
    }

    // Membuat nama file unik
    const originalName = sanitizeFileName(file.name);
    const uniqueName = `${Date.now()}-${randomUUID()}-${originalName}`;

    const githubPath = `data/media/${category}/${uniqueName}`;

    // Konversi file ke Base64
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64Content = buffer.toString('base64');

    // Upload ke repository konten
    const { data } = await octokit.repos.createOrUpdateFileContents({
      owner,
      repo,
      path: githubPath,
      message: `Upload media: ${uniqueName}`,
      content: base64Content,
    });

    // URL untuk repository public
    const imageUrl =
      `https://raw.githubusercontent.com/${owner}/${repo}/main/${githubPath}`;

    return NextResponse.json({
      success: true,
      message: 'Gambar berhasil diunggah',
      media: {
        name: uniqueName,
        originalName: file.name,
        category,
        path: githubPath,
        url: imageUrl,
        sha: data.content?.sha,
      },
    });

  } catch (error) {
    console.error('Media upload error:', error);

    return NextResponse.json(
      {
        error: 'Gagal mengunggah gambar',
      },
      { status: 500 }
    );
  }
}