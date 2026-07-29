import { profile } from "@/data/profile";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { ArrowDown, MapPinned, Trees, Users, Home } from "lucide-react";

export default function ProfilePage() {
  return (
    <main className="bg-background">
      {/* ====================================================== */}
      {/* HERO */}
      {/* ====================================================== */}

      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/profile/hero.jpg')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white">
          <Badge
            variant="secondary"
            className="mb-6 bg-white/15 px-4 py-1 text-white backdrop-blur"
          >
            Desa Kecemen • Kecamatan Manisrenggo
          </Badge>

          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
            {profile.title}
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-gray-200 md:text-xl">
            {profile.subtitle}
          </p>

          <Button size="lg" className="mt-10 gap-2 rounded-full">
            Jelajahi Profil
            <ArrowDown className="h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* ====================================================== */}
      {/* STATISTIK */}
      {/* ====================================================== */}

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 text-center">
          <Badge className="mb-4">Gambaran Singkat</Badge>

          <h2 className="text-3xl font-bold">Statistik Wilayah</h2>

          <p className="mt-3 text-muted-foreground">
            Informasi umum mengenai kondisi administratif Dusun II Desa Kecemen.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {profile.statistics.map((item) => (
            <Card
              key={item.label}
              className="transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <CardContent className="p-8 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-emerald-100 p-4 text-emerald-700">
                    {item.label.includes("Wilayah") && (
                      <MapPinned className="h-7 w-7" />
                    )}

                    {item.label.includes("Pertanian") && (
                      <Trees className="h-7 w-7" />
                    )}

                    {item.label.includes("Rukun Warga") && (
                      <Home className="h-7 w-7" />
                    )}

                    {item.label.includes("Rukun Tetangga") && (
                      <Users className="h-7 w-7" />
                    )}
                  </div>
                </div>

                <h3 className="text-3xl font-bold">{item.value}</h3>

                <p className="mt-2 text-muted-foreground">{item.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ====================================================== */}
      {/* TENTANG DUSUN */}
      {/* ====================================================== */}

      <section className="bg-muted/30 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
          {/* Image */}

          <div>
            <img
              src="/images/profile/about.jpg"
              alt="Dusun II Desa Kecemen"
              className="h-[500px] w-full rounded-3xl object-cover shadow-xl"
            />
          </div>

          {/* Text */}

          <div>
            <Badge className="mb-4">Tentang Dusun</Badge>

            <h2 className="mb-8 text-4xl font-bold leading-tight">
              Mengenal
              <br />
              Dusun II Desa Kecemen
            </h2>

            <div className="space-y-6 text-lg leading-9 text-muted-foreground">
              {profile.overview.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* INFORMASI WILAYAH */}
      {/* ====================================================== */}

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center">
            <Badge className="mb-4">Lokasi</Badge>

            <h2 className="text-4xl font-bold">Informasi Wilayah</h2>

            <p className="mt-3 text-muted-foreground">
              Gambaran umum mengenai letak geografis Dusun II Desa Kecemen.
            </p>
          </div>

          <Card className="rounded-3xl">
            <CardContent className="grid gap-8 p-10 md:grid-cols-2">
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <MapPinned className="mt-1 h-6 w-6 text-emerald-600" />
                  <div>
                    <h4 className="font-semibold">Desa</h4>
                    <p className="text-muted-foreground">
                      {profile.location.village}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPinned className="mt-1 h-6 w-6 text-emerald-600" />
                  <div>
                    <h4 className="font-semibold">Dusun</h4>
                    <p className="text-muted-foreground">
                      {profile.location.hamlet}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPinned className="mt-1 h-6 w-6 text-emerald-600" />
                  <div>
                    <h4 className="font-semibold">Kecamatan</h4>
                    <p className="text-muted-foreground">
                      {profile.location.district}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPinned className="mt-1 h-6 w-6 text-emerald-600" />
                  <div>
                    <h4 className="font-semibold">Kabupaten</h4>
                    <p className="text-muted-foreground">
                      {profile.location.regency}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPinned className="mt-1 h-6 w-6 text-emerald-600" />
                  <div>
                    <h4 className="font-semibold">Provinsi</h4>
                    <p className="text-muted-foreground">
                      {profile.location.province}
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {profile.locationInfo.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 rounded-xl bg-muted/40 p-4"
                  >
                    <div className="mt-2 h-2 w-2 rounded-full bg-emerald-600" />

                    <p className="leading-7 text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ====================================================== */}
      {/* STRUKTUR RW & RT */}
      {/* ====================================================== */}

      <section className="bg-muted/30 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center">
            <Badge className="mb-4">Administrasi</Badge>

            <h2 className="text-4xl font-bold">Struktur RW & RT</h2>

            <p className="mt-3 text-muted-foreground">
              Pembagian wilayah administratif Dusun II Desa Kecemen.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {profile.rwStructure.map((rw) => (
              <Card
                key={rw.rw}
                className="transition-all hover:-translate-y-2 hover:shadow-xl"
              >
                <CardContent className="p-8">
                  <Badge className="mb-5">{rw.rw}</Badge>

                  <div className="space-y-3">
                    {rw.rt.map((rt) => (
                      <div
                        key={rt}
                        className="rounded-lg bg-muted/50 px-4 py-3 text-center font-medium"
                      >
                        {rt}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* KEHIDUPAN MASYARAKAT */}
      {/* ====================================================== */}

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center">
            <Badge className="mb-4">Kehidupan Sosial</Badge>

            <h2 className="text-4xl font-bold">Kehidupan Masyarakat</h2>

            <p className="mt-3 text-muted-foreground">
              Nilai-nilai sosial yang menjadi identitas masyarakat Dusun II.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {profile.communityLife.map((item, index) => (
              <Card
                key={index}
                className="h-full transition-all hover:-translate-y-2 hover:shadow-xl"
              >
                <CardContent className="flex h-full flex-col items-center p-8 text-center">
                  <div className="mb-6 rounded-full bg-emerald-100 p-4">
                    <Users className="h-8 w-8 text-emerald-700" />
                  </div>

                  <p className="leading-7 text-muted-foreground">{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* POTENSI EKONOMI */}
      {/* ====================================================== */}

      <section className="bg-muted/30 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center">
            <Badge className="mb-4">Perekonomian</Badge>

            <h2 className="text-4xl font-bold">Potensi Ekonomi</h2>

            <p className="mt-3 text-muted-foreground">
              Sektor-sektor yang menjadi penggerak utama perekonomian
              masyarakat.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {profile.economy.map((item, index) => (
              <Card
                key={index}
                className="transition-all hover:-translate-y-2 hover:shadow-xl"
              >
                <CardContent className="p-8">
                  <Badge className="mb-5">Sektor</Badge>

                  <h3 className="mb-4 text-xl font-semibold">{item}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* FASILITAS UMUM */}
      {/* ====================================================== */}

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center">
            <Badge className="mb-4">Fasilitas</Badge>

            <h2 className="text-4xl font-bold">Fasilitas Umum</h2>

            <p className="mt-3 text-muted-foreground">
              Berbagai fasilitas umum yang menunjang aktivitas masyarakat Dusun
              II Desa Kecemen.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {profile.facilities.map((facility) => (
              <Card
                key={facility.name}
                className="transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <CardContent className="p-8">
                  <Badge className="mb-4">{facility.category}</Badge>

                  <h3 className="mb-3 text-xl font-semibold">
                    {facility.name}
                  </h3>

                  <p className="leading-7 text-muted-foreground">
                    {facility.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* FOKUS PEMBANGUNAN */}
      {/* ====================================================== */}

      <section className="bg-muted/30 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-14 text-center">
            <Badge className="mb-4">Pembangunan</Badge>

            <h2 className="text-4xl font-bold">Fokus Pembangunan</h2>

            <p className="mt-3 text-muted-foreground">
              Prioritas pembangunan yang menjadi arah pengembangan Dusun II Desa
              Kecemen.
            </p>
          </div>

          <div className="space-y-5">
            {profile.developmentFocus.map((item, index) => (
              <Card key={index} className="transition-all hover:shadow-lg">
                <CardContent className="flex items-center gap-5 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 font-bold text-emerald-700">
                    {index + 1}
                  </div>

                  <p className="text-lg">{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* HARAPAN */}
      {/* ====================================================== */}

      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-14 text-center">
            <Badge className="mb-4">Harapan</Badge>

            <h2 className="text-4xl font-bold">Harapan untuk Masa Depan</h2>

            <p className="mt-3 text-muted-foreground">
              Komitmen bersama dalam membangun Dusun II yang lebih maju,
              mandiri, dan sejahtera.
            </p>
          </div>

          <div className="grid gap-6">
            {profile.hopes.map((hope, index) => (
              <Card
                key={index}
                className="transition-all duration-300 hover:border-emerald-500 hover:shadow-lg"
              >
                <CardContent className="flex gap-5 p-6">
                  <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white">
                    ✓
                  </div>

                  <p className="leading-7 text-muted-foreground">{hope}</p>
                </CardContent>
              </Card>
            ))}
          </div>
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
                Jelajahi Dusun II
              </Badge>

              <h2 className="max-w-3xl text-4xl font-bold leading-tight">
                Mengenal Lebih Dekat
                <br />
                Potensi Dusun II Desa Kecemen
              </h2>

              <p className="mt-6 max-w-2xl text-lg text-emerald-100">
                Pelajari berbagai potensi pertanian, UMKM, fasilitas umum, dan
                informasi menarik lainnya mengenai Dusun II.
              </p>

              <div className="mt-10">
                <Button size="lg" variant="secondary">
                  Lihat Potensi
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
