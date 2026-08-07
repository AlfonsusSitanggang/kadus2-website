import { potential } from "@/data/potential";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

import {
  Sprout,
  Store,
  ShoppingBag,
  Briefcase,
  ArrowDown,
  Wheat,
  TrendingUp,
  MapPin,
} from "lucide-react";

export default function PotentialPage() {
  return (
    <main className="bg-background">
      {/* ====================================================== */}
      {/* HERO SECTION (Potensi Dusun II) */}
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
            Potensi Dusun II
          </Badge>

          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
            {potential.title}
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-gray-200 md:text-xl">
            {potential.subtitle}
          </p>

          <Button size="lg" className="mt-10 gap-2 rounded-full">
            Jelajahi Potensi
            <ArrowDown className="h-5 w-5" />
          </Button>
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
              alt="Potensi Dusun II"
              className="h-[520px] w-full rounded-3xl object-cover shadow-xl"
            />
          </div>

          <div>
            <Badge className="mb-4">Potensi Wilayah</Badge>

            <h2 className="mb-8 text-4xl font-bold">
              Potensi yang Dimiliki
              <br />
              Dusun II Desa Kecemen
            </h2>

            <div className="space-y-6 text-lg leading-9 text-muted-foreground">
              {potential.introduction.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* POTENSI UTAMA */}
      {/* ====================================================== */}

      <section className="bg-muted/30 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <Badge className="mb-4">Potensi Utama</Badge>

            <h2 className="text-4xl font-bold">Sumber Daya Unggulan</h2>

            <p className="mt-3 text-muted-foreground">
              Potensi utama yang menjadi kekuatan ekonomi Dusun II Desa Kecemen.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {potential.featured.map((item, index) => (
              <Card
                key={index}
                className="transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <CardContent className="p-8">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                    {item.icon === "sprout" && (
                      <Sprout className="h-8 w-8 text-emerald-700" />
                    )}
                    {item.icon === "store" && (
                      <Store className="h-8 w-8 text-emerald-700" />
                    )}
                    {item.icon === "shopping-bag" && (
                      <ShoppingBag className="h-8 w-8 text-emerald-700" />
                    )}
                    {item.icon === "briefcase" && (
                      <Briefcase className="h-8 w-8 text-emerald-700" />
                    )}
                  </div>

                  <h3 className="mb-4 text-xl font-semibold">{item.title}</h3>

                  <p className="leading-7 text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* PERTANIAN */}
      {/* ====================================================== */}

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <Badge className="mb-4">Pertanian</Badge>
            <h2 className="text-4xl font-bold">
              {potential.agriculture.title}
            </h2>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <img
                src="/images/hero2.webp"
                alt="Pertanian"
                className="h-[500px] w-full rounded-3xl object-cover shadow-xl"
              />
            </div>

            <div className="space-y-6">
              <Card className="border-emerald-100 bg-emerald-50/50 shadow-none">
                <CardContent className="p-6">
                  <p className="text-lg leading-8 text-emerald-900">
                    {potential.agriculture.description}
                  </p>
                </CardContent>
              </Card>

              <h3 className="text-2xl font-semibold pt-4">Komoditas Utama</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {potential.agriculture.commodities.map((item, index) => (
                  <Card key={index} className="transition-all hover:shadow-md">
                    <CardContent className="p-6">
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100">
                        <Wheat className="h-5 w-5 text-emerald-700" />
                      </div>
                      <h4 className="mb-2 font-semibold">{item.name}</h4>
                      <p className="text-sm leading-6 text-muted-foreground">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* EKONOMI (SEKTOR) */}
      {/* ====================================================== */}

      <section className="bg-muted/30 py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <Badge className="mb-4">Penggerak Ekonomi</Badge>
          <h2 className="mb-12 text-4xl font-bold">
            {potential.economy.title}
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            {potential.economy.sectors.map((sector, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="px-6 py-3 text-lg transition-colors hover:bg-emerald-100 hover:text-emerald-800"
              >
                <TrendingUp className="mr-2 h-5 w-5" />
                {sector}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* UMKM */}
      {/* ====================================================== */}

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <Badge className="mb-4">UMKM</Badge>

            <h2 className="text-4xl font-bold">Potensi UMKM</h2>

            <p className="mt-3 text-muted-foreground">
              Berbagai usaha masyarakat yang menjadi penggerak perekonomian
              lokal Dusun II Desa Kecemen.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {potential.umkm.map((item, index) => (
              <Card
                key={index}
                className="transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <CardContent className="p-8">
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-emerald-100">
                      <Store className="h-7 w-7 text-emerald-700" />
                    </div>
                    <Badge variant="outline" className="text-right">
                      {item.category}
                    </Badge>
                  </div>

                  <h3 className="mb-3 text-xl font-semibold">{item.name}</h3>

                  <p className="leading-7 text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* FASILITAS PENDUKUNG */}
      {/* ====================================================== */}

      <section className="bg-muted/30 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <Badge className="mb-4">Fasilitas</Badge>

            <h2 className="text-4xl font-bold">Sarana Pendukung</h2>

            <p className="mt-3 text-muted-foreground">
              Berbagai fasilitas umum yang mendukung aktivitas sosial dan
              ekonomi masyarakat.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {potential.facilities.map((item, index) => (
              <Card
                key={index}
                className="transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <CardContent className="flex flex-col items-center p-8 text-center">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-600">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <Badge className="mb-4 bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
                    {item.category}
                  </Badge>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* PELUANG PENGEMBANGAN */}
      {/* ====================================================== */}

      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-16 text-center">
            <Badge className="mb-4">Pengembangan</Badge>

            <h2 className="text-4xl font-bold">Peluang Pengembangan</h2>

            <p className="mt-3 text-muted-foreground">
              Berbagai peluang yang dapat dikembangkan untuk meningkatkan
              kesejahteraan masyarakat.
            </p>
          </div>

          <div className="space-y-4">
            {potential.developmentOpportunity.map((item, index) => (
              <Card key={index} className="transition-all hover:shadow-md">
                <CardContent className="flex items-center gap-6 p-6 md:p-8">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-600 font-bold text-white">
                    {index + 1}
                  </div>
                  <p className="text-lg font-medium text-foreground">{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center text-sm text-muted-foreground italic space-y-2">
            <p>Sumber Data:</p>
            <p>{potential.source.interview}</p>
            <p>{potential.source.mapping}</p>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* CTA */}
      {/* ====================================================== */}

      {/* <section className="pb-28">
        <div className="mx-auto max-w-6xl px-6">
          <Card className="overflow-hidden rounded-3xl bg-emerald-700 text-white">
            <CardContent className="flex flex-col items-center px-10 py-16 text-center">
              <Badge variant="secondary" className="mb-6">
                Potensi Dusun II
              </Badge>

              <h2 className="max-w-3xl text-4xl font-bold leading-tight">
                Bersama Mengembangkan
                <br />
                Potensi Lokal Desa
              </h2>

              <p className="mt-6 max-w-2xl text-lg text-emerald-100">
                Potensi pertanian, UMKM, serta fasilitas yang dimiliki Dusun II
                menjadi modal penting dalam mewujudkan pembangunan desa yang
                berkelanjutan.
              </p>

              <Button
                size="lg"
                variant="secondary"
                className="mt-10 text-emerald-900"
              >
                Lihat Data Lengkap Desa
              </Button>
            </CardContent>
          </Card>
        </div>
      </section> */}
    </main>
  );
}
