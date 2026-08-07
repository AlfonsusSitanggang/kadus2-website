import { umkm } from "@/data/umkm";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import {
  ArrowDown,
  Store,
  ShoppingBag,
  Utensils,
  Wheat,
  Scissors,
  Beef,
  Package,
} from "lucide-react";

export default function UmkmPage() {
  const featuredBusinesses = umkm.businesses.filter(
    (business) => business.featured,
  );

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Kuliner":
        return <Utensils className="h-8 w-8 text-emerald-700" />;

      case "Makanan Ringan":
        return <Package className="h-8 w-8 text-emerald-700" />;

      case "Olahan Pangan":
        return <Wheat className="h-8 w-8 text-emerald-700" />;

      case "Jasa":
        return <Scissors className="h-8 w-8 text-emerald-700" />;

      case "Peternakan":
        return <Beef className="h-8 w-8 text-emerald-700" />;

      default:
        return <ShoppingBag className="h-8 w-8 text-emerald-700" />;
    }
  };

  return (
    <main className="bg-background">
      {/* ====================================================== */}
      {/* HERO SECTION (UMKM Dusun II) */}
      {/* ====================================================== */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden">
        {/* Latar Belakang Gambar */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero5.webp')",
          }}
        />

        {/* Overlay Hitam Transparan */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Konten Hero */}
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white">
          <Badge
            variant="secondary"
            className="mb-6 bg-white/15 px-4 py-1 text-white backdrop-blur"
          >
            UMKM Dusun II
          </Badge>

          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
            {umkm.title}
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-gray-200 md:text-xl">
            {umkm.subtitle}
          </p>

        </div>
      </section>

      {/* ====================================================== */}
      {/* PENGANTAR */}
      {/* ====================================================== */}

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
          <div>
            <img
              src="/images/hero10.webp"
              alt="UMKM Dusun II"
              className="h-[520px] w-full rounded-3xl object-cover shadow-xl"
            />
          </div>

          <div>
            <Badge className="mb-4">Ekonomi Lokal</Badge>

            <h2 className="mb-8 text-4xl font-bold">
              Peran UMKM
              <br />
              Dalam Perekonomian Dusun
            </h2>

            <div className="space-y-6 text-lg leading-9 text-muted-foreground">
              {umkm.introduction.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* KATEGORI */}
      {/* ====================================================== */}

      <section className="bg-muted/30 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <Badge className="mb-4">Kategori</Badge>

            <h2 className="text-4xl font-bold">Bidang Usaha UMKM</h2>

            <p className="mt-3 text-muted-foreground">
              Beragam sektor usaha yang berkembang di Dusun II Desa Kecemen.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {umkm.categories.map((category) => (
              <Card
                key={category}
                className="transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <CardContent className="flex flex-col items-center p-8 text-center">
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                    {getCategoryIcon(category)}
                  </div>

                  <h3 className="font-semibold">{category}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* UMKM UNGGULAN */}
      {/* ====================================================== */}

      {/* <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <Badge className="mb-4">Unggulan</Badge>

            <h2 className="text-4xl font-bold">UMKM Unggulan Dusun II</h2>

            <p className="mt-3 text-muted-foreground">
              Beberapa UMKM yang menjadi potensi unggulan masyarakat.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {featuredBusinesses.map((business) => (
              <Card
                key={business.id}
                className="overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <img
                  src={business.image}
                  alt={business.name}
                  className="h-56 w-full object-cover"
                />

                <CardContent className="p-8">
                  <Badge className="mb-4">{business.category}</Badge>

                  <h3 className="mb-3 text-2xl font-bold">{business.name}</h3>

                  <p className="mb-6 leading-7 text-muted-foreground">
                    {business.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {business.products.map((product) => (
                      <Badge key={product} variant="outline">
                        {product}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}
      {/* ====================================================== */}
      {/* DAFTAR UMKM */}
      {/* ====================================================== */}

      <section className="bg-muted/30 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <Badge className="mb-4">Direktori UMKM</Badge>

            <h2 className="text-4xl font-bold">Seluruh Pelaku UMKM</h2>

            <p className="mt-3 text-muted-foreground">
              Daftar usaha mikro, kecil, dan menengah yang berada di Dusun II
              Desa Kecemen.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {umkm.businesses.map((business) => (
              <Card
                key={business.id}
                className="overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <img
                  src={business.image}
                  alt={business.name}
                  className="h-56 w-full object-cover"
                />

                <CardContent className="p-8">
                  <div className="mb-4 flex items-center justify-between">
                    <Badge>{business.category}</Badge>

                    {business.featured && (
                      <Badge variant="secondary">Unggulan</Badge>
                    )}
                  </div>

                  <h3 className="mb-3 text-2xl font-bold">{business.name}</h3>

                  <p className="mb-6 leading-7 text-muted-foreground">
                    {business.description}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <p className="mb-2 text-sm font-semibold">Alamat</p>

                      <p className="text-sm text-muted-foreground">
                        {business.address}
                      </p>
                    </div>

                    <div>
                      <p className="mb-2 text-sm font-semibold">Produk</p>

                      <div className="flex flex-wrap gap-2">
                        {business.products.map((product) => (
                          <Badge key={product} variant="outline">
                            {product}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-semibold">RW</p>

                        <p className="text-sm text-muted-foreground">
                          {business.rw ?? "-"}
                        </p>
                      </div>

                      <div>
                        <p className="text-sm font-semibold">RT</p>

                        <p className="text-sm text-muted-foreground">
                          {business.rt ?? "-"}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-semibold">Pemilik</p>

                        <p className="text-sm text-muted-foreground">
                          {business.owner ?? "-"}
                        </p>
                      </div>

                      <div>
                        <p className="text-sm font-semibold">Telepon</p>

                        <p className="text-sm text-muted-foreground">
                          {business.phone ?? "-"}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* STATISTIK UMKM */}
      {/* ====================================================== */}

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <Badge className="mb-4">Statistik</Badge>

            <h2 className="text-4xl font-bold">Gambaran UMKM</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="p-8 text-center">
                <div className="mb-5 flex justify-center">
                  <div className="rounded-full bg-emerald-100 p-4">
                    <Store className="h-8 w-8 text-emerald-700" />
                  </div>
                </div>

                <h3 className="text-4xl font-bold">{umkm.businesses.length}</h3>

                <p className="mt-2 text-muted-foreground">Total UMKM</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <div className="mb-5 flex justify-center">
                  <div className="rounded-full bg-emerald-100 p-4">
                    <ShoppingBag className="h-8 w-8 text-emerald-700" />
                  </div>
                </div>

                <h3 className="text-4xl font-bold">{umkm.categories.length}</h3>

                <p className="mt-2 text-muted-foreground">Kategori Usaha</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <div className="mb-5 flex justify-center">
                  <div className="rounded-full bg-emerald-100 p-4">
                    <Store className="h-8 w-8 text-emerald-700" />
                  </div>
                </div>

                <h3 className="text-4xl font-bold">
                  {featuredBusinesses.length}
                </h3>

                <p className="mt-2 text-muted-foreground">UMKM Unggulan</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <div className="mb-5 flex justify-center">
                  <div className="rounded-full bg-emerald-100 p-4">
                    <Package className="h-8 w-8 text-emerald-700" />
                  </div>
                </div>

                <h3 className="text-4xl font-bold">
                  {umkm.development.length}
                </h3>

                <p className="mt-2 text-muted-foreground">
                  Program Pengembangan
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* ====================================================== */}
      {/* PENGEMBANGAN UMKM */}
      {/* ====================================================== */}

      <section className="bg-muted/30 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <Badge className="mb-4">Pengembangan</Badge>

            <h2 className="text-4xl font-bold">Arah Pengembangan UMKM</h2>

            <p className="mt-3 text-muted-foreground">
              Beberapa langkah strategis untuk mendorong pertumbuhan UMKM di
              Dusun II Desa Kecemen.
            </p>
          </div>

          <div className="space-y-6">
            {umkm.development.map((item, index) => (
              <Card
                key={index}
                className="transition-all duration-300 hover:shadow-lg"
              >
                <CardContent className="flex gap-6 p-8">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-lg font-bold text-white">
                    {index + 1}
                  </div>

                  <div>
                    <h3 className="mb-2 text-xl font-semibold">
                      Program {index + 1}
                    </h3>

                    <p className="leading-8 text-muted-foreground">{item}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* SUMBER DATA */}
      {/* ====================================================== */}

      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <Card>
            <CardContent className="p-10 text-center">
              <Badge className="mb-6">Sumber Data</Badge>

              <h2 className="mb-6 text-3xl font-bold">Informasi UMKM</h2>

              <p className="mx-auto max-w-3xl leading-8 text-muted-foreground">
                Seluruh data UMKM pada halaman ini disusun berdasarkan hasil hasil survey
                di Dusun II Desa Kecemen yang dilakukan dalam
                kegiatan KKN UPN Veteran Yogyakarta Tahun 2026.
              </p>

              <div className="mt-8 rounded-2xl bg-muted p-6">
                <p className="font-medium">{umkm.source.mapping}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ====================================================== */}
      {/* CTA */}
      {/* ====================================================== */}

      <section className="pb-28">
        <div className="mx-auto max-w-6xl px-6">
          <Card className="overflow-hidden rounded-3xl bg-emerald-700 text-white">
            <CardContent className="flex flex-col items-center px-10 py-16 text-center">
              <Badge variant="secondary" className="mb-6">
                UMKM Dusun II
              </Badge>

              <h2 className="max-w-3xl text-4xl font-bold leading-tight">
                Bersama Mendukung
                <br />
                Produk Lokal Masyarakat
              </h2>

              <p className="mt-6 max-w-2xl text-lg text-emerald-100">
                Pengembangan UMKM merupakan salah satu langkah penting dalam
                meningkatkan kesejahteraan masyarakat serta memperkuat
                perekonomian lokal Dusun II Desa Kecemen.
              </p>

              <Button size="lg" variant="secondary" className="mt-10">
                Jelajahi Potensi Desa
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
