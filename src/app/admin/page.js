"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default function AdminDashboardPage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-12">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard Admin</h1>

        <p className="mt-2 text-gray-500">
          Kelola informasi dan publikasi Website Kadus 2 Kecemen.
        </p>
      </div>

      {/* Menu utama */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Kelola berita */}
        <Card>
          <CardHeader>
            <CardTitle>Kelola Berita</CardTitle>

            <CardDescription>
              Lihat, edit, dan kelola seluruh berita yang telah dipublikasikan.
            </CardDescription>

            <div className="pt-4">
              <Link href="/admin/berita">
                <Button className="w-full">Kelola Berita</Button>
              </Link>
            </div>
          </CardHeader>
        </Card>

        {/* Tambah berita */}
        <Card>
          <CardHeader>
            <CardTitle>Tambah Berita</CardTitle>

            <CardDescription>
              Buat dan publikasikan berita atau kegiatan terbaru Kadus 2.
            </CardDescription>

            <div className="pt-4">
              <Link href="/admin/berita/create">
                <Button className="w-full">Tambah Berita</Button>
              </Link>
            </div>
          </CardHeader>
        </Card>

        {/* Sampah */}
        <Card>
          <CardHeader>
            <CardTitle>Sampah Berita</CardTitle>

            <CardDescription>
              Pulihkan atau hapus permanen berita yang telah dihapus.
            </CardDescription>

            <div className="pt-4">
              <Link href="/admin/trash">
                <Button variant="outline" className="w-full">
                  Buka Sampah
                </Button>
              </Link>
            </div>
          </CardHeader>
        </Card>
      </div>

      {/* Informasi */}
      <div className="mt-12 rounded-lg border bg-gray-50 p-6">
        <h2 className="text-lg font-semibold">Website Kadus 2 Kecemen</h2>

        <p className="mt-2 text-sm leading-relaxed text-gray-600">
          Dashboard ini digunakan untuk mengelola konten publikasi Website Kadus
          2, Kecemen, Manisrenggo, Klaten, Jawa Tengah. Konten berita disimpan
          dan dikelola melalui repositori konten website.
        </p>
      </div>
    </div>
  );
}
