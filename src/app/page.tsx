import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Building2,
  Droplets,
  History,
  Map,
  MapPinned,
  Newspaper,
  Store,
  Users,
  Wheat,
} from "lucide-react";

import { getSortedPostsData } from "@/lib/posts";
import ArticleList from "@/components/ArticleList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kadus 2 Kecemen",
  description:
    "Website informasi Kadus 2, Desa Kecemen, Kecamatan Manisrenggo, Kabupaten Klaten, Jawa Tengah.",
};

const menuKadus = [
  {
    title: "Profil Kadus",
    description:
      "Mengenal Kadus 2, wilayah, serta struktur lingkungan masyarakat.",
    href: "/profil",
    icon: Users,
  },
  {
    title: "Sejarah",
    description: "Informasi mengenai sejarah dan perkembangan Kadus 2 Kecemen.",
    href: "/sejarah",
    icon: History,
  },
  {
    title: "Statistik",
    description:
      "Informasi dan data ringkas mengenai wilayah serta masyarakat Kadus 2.",
    href: "/statistik",
    icon: BarChart3,
  },
  {
    title: "UMKM",
    description:
      "Mengenal usaha mikro, kecil, dan menengah yang berkembang di Kadus 2.",
    href: "/umkm",
    icon: Store,
  },
  {
    title: "Potensi Kadus",
    description:
      "Melihat berbagai potensi lingkungan dan masyarakat di Kadus 2.",
    href: "/potensi",
    icon: Wheat,
  },
  {
    title: "Peta Kadus",
    description:
      "Informasi wilayah, fasilitas, dan pemetaan yang tersedia di Kadus 2.",
    href: "/peta",
    icon: Map,
  },
];

export default async function Home() {
  const allPostsData = (await getSortedPostsData()).slice(0, 3);

  return (
    <main>
      {/* HERO */}
      <section className="border-b bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 py-20 md:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-slate-600">
              Desa Kecemen · Kecamatan Manisrenggo
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl md:text-6xl lg:text-7xl">
              Kadus 2 Kecemen
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
              Media informasi dan publikasi wilayah Kadus 2, Desa Kecemen,
              Kecamatan Manisrenggo, Kabupaten Klaten, Jawa Tengah.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/profil"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-6 py-3 font-medium text-white transition hover:bg-slate-800"
              >
                Jelajahi Kadus 2
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/berita"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 font-medium text-slate-900 transition hover:bg-slate-50"
              >
                <Newspaper size={18} />
                Lihat Berita
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROFIL SINGKAT */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
            Tentang Wilayah
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
            Sekilas Kadus 2
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Kadus 2 merupakan bagian dari Desa Kecemen, Kecamatan Manisrenggo,
            Kabupaten Klaten. Wilayah Kadus 2 terdiri atas 5 RW dan 15 RT, yaitu
            RW 6 sampai dengan RW 10.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border bg-white p-6 text-center shadow-sm">
            <MapPinned className="mx-auto mb-4 text-slate-700" size={32} />
            <p className="text-4xl font-bold text-slate-950">5</p>
            <p className="mt-2 text-slate-600">Rukun Warga</p>
          </div>

          <div className="rounded-2xl border bg-white p-6 text-center shadow-sm">
            <Users className="mx-auto mb-4 text-slate-700" size={32} />
            <p className="text-4xl font-bold text-slate-950">15</p>
            <p className="mt-2 text-slate-600">Rukun Tetangga</p>
          </div>

          <div className="rounded-2xl border bg-white p-6 text-center shadow-sm">
            <Building2 className="mx-auto mb-4 text-slate-700" size={32} />
            <p className="text-2xl font-bold text-slate-950">Kecemen</p>
            <p className="mt-2 text-slate-600">Desa</p>
          </div>
        </div>
      </section>

      {/* JELAJAHI KADUS */}
      <section className="border-y bg-slate-50">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              Informasi Kadus
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              Jelajahi Kadus 2
            </h2>

            <p className="mt-4 max-w-2xl text-slate-600">
              Temukan berbagai informasi mengenai wilayah, masyarakat, UMKM,
              potensi, dan pemetaan Kadus 2 Kecemen.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {menuKadus.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="mb-5 inline-flex rounded-xl bg-slate-100 p-3 text-slate-800">
                    <Icon size={24} />
                  </div>

                  <h3 className="text-xl font-semibold text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {item.description}
                  </p>

                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-slate-900">
                    Lihat informasi
                    <ArrowRight
                      size={16}
                      className="transition group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* BERITA TERBARU */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              Informasi Terkini
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              Berita Terbaru
            </h2>

            <p className="mt-4 max-w-2xl text-slate-600">
              Informasi kegiatan dan kabar terbaru dari lingkungan Kadus 2
              Kecemen.
            </p>
          </div>

          <Link
            href="/berita"
            className="inline-flex items-center gap-2 font-medium text-slate-900 hover:underline"
          >
            Semua berita
            <ArrowRight size={18} />
          </Link>
        </div>

        <ArticleList articles={allPostsData} showMoreLink={false} />
      </section>

      {/* PETA */}
      <section className="border-t bg-slate-950 text-white">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-400">
              Informasi Spasial
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Pemetaan Kadus 2
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              Akses informasi pemetaan wilayah dan fasilitas Kadus 2 serta hasil
              pemetaan kualitas air yang mencakup wilayah RW 8.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-4xl gap-5 md:grid-cols-2">
            <Link
              href="/peta"
              className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:bg-slate-800"
            >
              <MapPinned className="mb-5 text-slate-300" size={30} />

              <h3 className="text-xl font-semibold">
                Peta Administrasi dan Fasilitas
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                Informasi pemetaan wilayah, fasilitas, dan infrastruktur yang
                tersedia di Kadus 2.
              </p>

              <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium">
                Lihat peta
                <ArrowRight
                  size={16}
                  className="transition group-hover:translate-x-1"
                />
              </div>
            </Link>

            <Link
              href="/peta/kualitas-air"
              className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:bg-slate-800"
            >
              <Droplets className="mb-5 text-slate-300" size={30} />

              <h3 className="text-xl font-semibold">Peta Kualitas Air RW 8</h3>

              <p className="mt-3 leading-7 text-slate-400">
                Hasil pemetaan kualitas air yang secara khusus mencakup wilayah
                RW 8 Kadus 2.
              </p>

              <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium">
                Lihat pemetaan
                <ArrowRight
                  size={16}
                  className="transition group-hover:translate-x-1"
                />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
