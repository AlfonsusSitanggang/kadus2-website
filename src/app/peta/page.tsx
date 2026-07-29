import Image from "next/image";

import { maps } from "@/data/map";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { ArrowDown, Download, Eye, Map, MapPinned, School } from "lucide-react";

const IMAGE_BASE_URL =
  "https://raw.githubusercontent.com/AlfonsusSitanggang/kadus2-content/main";

const GITHUB_BASE_URL =
  "https://github.com/AlfonsusSitanggang/kadus2-content/blob/main";

export default function MapPage() {
  return (
    <main className="bg-background">
      {/* ====================================================== */}
      {/* HERO */}
      {/* ====================================================== */}

      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/maps/hero.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white">
          <Badge
            variant="secondary"
            className="mb-6 bg-white/15 px-4 py-1 text-white backdrop-blur"
          >
            Peta Dusun II
          </Badge>

          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
            {maps.title}
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-gray-200 md:text-xl">
            {maps.subtitle}
          </p>

          <Button size="lg" className="mt-10 gap-2 rounded-full">
            Lihat Peta
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
            <Image
              src={`${IMAGE_BASE_URL}/maps/PETA_ADMINISTRASI_KADUS2.jpg`}
              alt="Peta Dusun II"
              width={1200}
              height={900}
              className="h-[520px] w-full rounded-3xl object-cover shadow-xl"
            />
          </div>

          <div>
            <Badge className="mb-4">Informasi Spasial</Badge>

            <h2 className="mb-8 text-4xl font-bold">
              Pemetaan
              <br />
              Dusun II Desa Kecemen
            </h2>

            <div className="space-y-6 text-lg leading-9 text-muted-foreground">
              {maps.introduction.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* DOKUMEN PETA */}
      {/* ====================================================== */}

      <section className="bg-muted/30 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <Badge className="mb-4">Dokumen</Badge>

            <h2 className="text-4xl font-bold">Koleksi Peta</h2>

            <p className="mt-3 text-muted-foreground">
              Dokumen hasil pemetaan wilayah Dusun II Desa Kecemen.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {maps.documents.map((document) => {
              const imageUrl = `${IMAGE_BASE_URL}/${document.image}`;
              const pdfViewUrl = `${GITHUB_BASE_URL}/${document.pdf}`;
              const pdfDownloadUrl = `${IMAGE_BASE_URL}/${document.pdf}`;

              return (
                <Card
                  key={document.id}
                  className="overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <CardContent className="p-0">
                    <div className="relative aspect-video w-full overflow-hidden">
                      <Image
                        src={imageUrl}
                        alt={document.title}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="rounded-xl object-cover transition duration-300 hover:scale-105"
                      />
                    </div>

                    <div className="p-8">
                      <Badge className="mb-4">{document.category}</Badge>

                      <h3 className="mb-4 text-2xl font-bold">
                        {document.title}
                      </h3>

                      <p className="mb-6 leading-8 text-muted-foreground">
                        {document.description}
                      </p>

                      <div className="flex flex-col gap-3 sm:flex-row">
                        <Button asChild variant="default" className="gap-2">
                          <a
                            href={pdfViewUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Eye className="h-4 w-4" />
                            Lihat
                          </a>
                        </Button>

                        <Button asChild variant="outline" className="gap-2">
                          <a href={pdfDownloadUrl} download>
                            <Download className="h-4 w-4" />
                            Unduh PDF
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* FASILITAS */}
      {/* ====================================================== */}

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <Badge className="mb-4">Fasilitas</Badge>

            <h2 className="text-4xl font-bold">Fasilitas Umum</h2>

            <p className="mt-3 text-muted-foreground">
              Lokasi fasilitas penting yang terdapat di Dusun II Desa Kecemen.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {maps.facilities.map((facility) => (
              <Card
                key={facility.name}
                className="transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <CardContent className="flex flex-col items-center p-8 text-center">
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                    <School className="h-8 w-8 text-emerald-700" />
                  </div>

                  <Badge className="mb-4">{facility.type}</Badge>

                  <h3 className="text-xl font-semibold">{facility.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* LANDMARK */}
      {/* ====================================================== */}

      <section className="bg-muted/30 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <Badge className="mb-4">Landmark</Badge>

            <h2 className="text-4xl font-bold">Titik Penting Wilayah</h2>

            <p className="mt-3 text-muted-foreground">
              Lokasi penting yang menjadi acuan dalam pemetaan wilayah Dusun II
              Desa Kecemen.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {maps.landmarks.map((landmark) => (
              <Card
                key={landmark}
                className="transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <CardContent className="flex items-center gap-5 p-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100">
                    <MapPinned className="h-7 w-7 text-emerald-700" />
                  </div>

                  <h3 className="text-lg font-semibold">{landmark}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* INFRASTRUKTUR */}
      {/* ====================================================== */}

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <Badge className="mb-4">Infrastruktur</Badge>

            <h2 className="text-4xl font-bold">Infrastruktur Wilayah</h2>

            <p className="mt-3 text-muted-foreground">
              Infrastruktur utama yang terdapat pada wilayah Dusun II Desa
              Kecemen.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {maps.infrastructure.map((item) => (
              <Card
                key={item}
                className="transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <CardContent className="flex flex-col items-center p-8 text-center">
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                    <Map className="h-8 w-8 text-emerald-700" />
                  </div>

                  <h3 className="text-lg font-semibold">{item}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* WILAYAH ADMINISTRASI */}
      {/* ====================================================== */}

      <section className="bg-muted/30 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <Badge className="mb-4">Administrasi</Badge>

            <h2 className="text-4xl font-bold">Pembagian Wilayah</h2>
          </div>

          <div className="grid gap-10 lg:grid-cols-2">
            <Card>
              <CardContent className="p-8">
                <h3 className="mb-8 text-2xl font-bold">Daftar RW</h3>

                <div className="grid gap-4 sm:grid-cols-2">
                  {maps.administrativeArea.rw.map((rw) => (
                    <div
                      key={rw}
                      className="rounded-xl bg-muted p-4 text-center font-medium"
                    >
                      {rw}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="mb-8 text-2xl font-bold">Daftar RT</h3>

                <div className="grid grid-cols-3 gap-4">
                  {maps.administrativeArea.rt.map((rt) => (
                    <div
                      key={rt}
                      className="rounded-xl bg-muted p-4 text-center font-medium"
                    >
                      {rt}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* PERSEBARAN UMKM */}
      {/* ====================================================== */}

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <Badge className="mb-4">UMKM</Badge>

            <h2 className="text-4xl font-bold">Persebaran UMKM</h2>

            <p className="mt-3 text-muted-foreground">
              Lokasi pelaku UMKM yang dipetakan pada wilayah Dusun II Desa
              Kecemen.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {maps.umkmOnMap.map((business) => (
              <Card
                key={business}
                className="transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <CardContent className="flex items-center gap-5 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                    <MapPinned className="h-6 w-6 text-emerald-700" />
                  </div>

                  <span className="font-medium">{business}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* SUMBER DATA */}
      {/* ====================================================== */}

      <section className="bg-muted/30 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <Card>
            <CardContent className="p-10">
              <div className="mb-10 text-center">
                <Badge className="mb-4">Sumber Data</Badge>

                <h2 className="text-3xl font-bold">Informasi Pemetaan</h2>

                <p className="mt-3 text-muted-foreground">
                  Seluruh informasi spasial pada halaman ini berasal dari hasil
                  pemetaan lapangan yang dilakukan selama kegiatan KKN.
                </p>
              </div>

              <div className="space-y-6">
                <div className="rounded-xl bg-muted p-6">
                  <h3 className="mb-2 font-semibold">Penyusun</h3>

                  <p className="text-muted-foreground">{maps.source.author}</p>
                </div>

                <div className="rounded-xl bg-muted p-6">
                  <h3 className="mb-2 font-semibold">Tahun</h3>

                  <p className="text-muted-foreground">{maps.source.year}</p>
                </div>

                <div className="rounded-xl bg-muted p-6">
                  <h3 className="mb-2 font-semibold">Lokasi</h3>

                  <p className="text-muted-foreground leading-7">
                    {maps.source.location}
                  </p>
                </div>
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
                Peta Digital Dusun II
              </Badge>

              <h2 className="max-w-3xl text-4xl font-bold leading-tight">
                Memahami Wilayah
                <br />
                Melalui Informasi Spasial
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-emerald-100">
                Pemetaan wilayah membantu masyarakat, pemerintah desa, maupun
                pemangku kepentingan dalam memahami kondisi administrasi,
                fasilitas umum, serta potensi yang dimiliki Dusun II Desa
                Kecemen secara lebih komprehensif.
              </p>

              <Button size="lg" variant="secondary" className="mt-10">
                Kembali ke Beranda
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}