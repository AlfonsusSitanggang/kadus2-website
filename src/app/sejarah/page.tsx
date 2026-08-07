import { history } from "@/data/history";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays, Clock3, BookOpen, ArrowDown } from "lucide-react";
import Image from "next/image";

export default function HistoryPage() {
  return (
    <main className="bg-background">
      {/* ====================================================== */}
      {/* HERO */}
      {/* ====================================================== */}

      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero4.webp')",
          }}
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white">
          <Badge
            variant="secondary"
            className="mb-6 bg-white/15 px-4 py-1 text-white backdrop-blur"
          >
            Sejarah Dusun II
          </Badge>

          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
            {history.title}
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-gray-200 md:text-xl">
            {history.subtitle}
          </p>

          <Button size="lg" className="mt-10 gap-2 rounded-full">
            Jelajahi Sejarah
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
              src="/images/hero4.webp"
              alt="Sejarah Dusun II"
              className="h-[520px] w-full rounded-3xl object-cover shadow-xl"
            />
          </div>

          <div>
            <Badge className="mb-4">Latar Belakang</Badge>

            <h2 className="mb-8 text-4xl font-bold">
              Awal Mula
              <br />
              Dusun II Desa Kecemen
            </h2>

            <div className="space-y-6 text-lg leading-9 text-muted-foreground">
              {history.introduction.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* TIMELINE */}
      {/* ====================================================== */}

      <section className="bg-muted/30 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <Badge className="mb-4">Timeline</Badge>

            <h2 className="text-4xl font-bold">Perjalanan Sejarah</h2>

            <p className="mt-3 text-muted-foreground">
              Tonggak penting perkembangan Desa Kecemen.
            </p>
          </div>

          <div className="space-y-10">
            {history.timeline.map((item, index) => (
              <div key={index} className="flex gap-8">
                <div className="flex flex-col items-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white">
                    <CalendarDays className="h-6 w-6" />
                  </div>

                  {index !== history.timeline.length - 1 && (
                    <div className="mt-2 h-full w-1 bg-emerald-200" />
                  )}
                </div>

                <Card className="flex-1">
                  <CardContent className="p-8">
                    <Badge className="mb-4">{item.year}</Badge>

                    <h3 className="mb-4 text-2xl font-semibold">
                      {item.title}
                    </h3>

                    <p className="leading-8 text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* FILOSOFI */}
      {/* ====================================================== */}

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <Badge className="mb-4">Filosofi</Badge>
            <h2 className="text-4xl font-bold">{history.philosophy.title}</h2>
            <p className="mx-auto mt-4 max-w-3xl leading-8 text-muted-foreground">
              {history.philosophy.description}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {history.philosophy.values.map((item, index) => (
              <Card
                key={index}
                className="transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100">
                    <BookOpen className="h-7 w-7 text-emerald-700" />
                  </div>
                  <p className="font-medium text-foreground">{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* KONDISI GEOGRAFIS */}
      {/* ====================================================== */}

      {/* <section className="bg-muted/30 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <Badge className="mb-4">Kondisi Wilayah</Badge>
            <h2 className="text-4xl font-bold">{history.geography.title}</h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div>
              <img
                src="/images/history/geography.jpg"
                alt="Geografi Desa"
                className="h-[400px] w-full rounded-3xl object-cover shadow-xl"
              />
            </div>

            <div className="space-y-5">
              <Card>
                <CardContent className="flex gap-6 p-8">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-emerald-100">
                    <Clock3 className="h-7 w-7 text-emerald-700" />
                  </div>
                  <p className="text-lg leading-8 text-muted-foreground">
                    {history.geography.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section> */}

      {/* ====================================================== */}
      {/* PERKEMBANGAN EKONOMI */}
      {/* ====================================================== */}

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <Badge className="mb-4">Perekonomian</Badge>
            <h2 className="text-4xl font-bold">{history.economy.title}</h2>
            <p className="mx-auto mt-4 max-w-3xl leading-8 text-muted-foreground">
              {history.economy.description}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {history.economy.sectors.map((sector, index) => (
              <Card
                key={index}
                className="transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <CardContent className="p-8 text-center">
                  <Badge variant="outline" className="mb-5">
                    Sektor
                  </Badge>
                  <h3 className="text-lg font-semibold">{sector}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* PERKEMBANGAN DUSUN */}
      {/* ====================================================== */}

      <section className="bg-muted/30 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <Badge className="mb-4">Perkembangan</Badge>
            <h2 className="text-4xl font-bold">{history.development.title}</h2>
            <p className="mx-auto mt-4 max-w-3xl leading-8 text-muted-foreground">
              {history.development.description}
            </p>
          </div>

          <div className="space-y-4">
            {history.development.priorities.map((priority, index) => (
              <Card key={index} className="transition-all hover:shadow-lg">
                <CardContent className="flex items-center gap-6 p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-600 font-bold text-white">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-medium text-foreground">
                    {priority}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* HARAPAN MASA DEPAN */}
      {/* ====================================================== */}

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-12 text-center">
            <Badge className="mb-4">Masa Depan</Badge>
            <h2 className="text-4xl font-bold">{history.future.title}</h2>
          </div>

          <Card className="transition-all duration-300 hover:shadow-xl">
            <CardContent className="flex gap-6 p-8 md:p-10">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-2xl font-bold text-emerald-700">
                ✓
              </div>
              <p className="text-lg leading-8 text-muted-foreground">
                {history.future.description}
              </p>
            </CardContent>
          </Card>

          <p className="mt-8 text-center text-sm text-muted-foreground italic">
            Sumber: {history.source.interview}
          </p>
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
                Sejarah Desa
              </Badge>

              <h2 className="max-w-3xl text-4xl font-bold leading-tight">
                Mengenal Sejarah,
                <br />
                Menjaga Warisan Desa
              </h2>

              <p className="mt-6 max-w-2xl text-lg text-emerald-100">
                Sejarah merupakan bagian penting dalam membangun identitas
                masyarakat serta menjadi dasar untuk melangkah menuju masa depan
                yang lebih baik.
              </p>

              <Button
                size="lg"
                variant="secondary"
                className="mt-10 text-emerald-900"
              >
                Lihat Potensi Desa
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
