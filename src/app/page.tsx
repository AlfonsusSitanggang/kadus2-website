import Link from "next/link";
import Image from "next/image";

import {
  ArrowRight,
  BarChart3,
  Building2,
  History,
  Map,
  MapPinned,
  Store,
} from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kadus 2 Kecemen",
  description:
    "Website informasi dan publikasi Kadus 2, Desa Kecemen, Kecamatan Manisrenggo, Kabupaten Klaten, Jawa Tengah.",
};

const menuItems = [
  {
    title: "Profil Wilayah",
    description: "Mengenal gambaran umum dan kondisi wilayah Kadus 2 Kecemen.",
    href: "/profil",
    icon: Building2,
  },
  {
    title: "Sejarah",
    description: "Menelusuri informasi dan perjalanan wilayah Kadus 2 Kecemen.",
    href: "/sejarah",
    icon: History,
  },
  {
    title: "UMKM",
    description:
      "Mengenal berbagai usaha masyarakat yang berkembang di Kadus 2.",
    href: "/umkm",
    icon: Store,
  },
  {
    title: "Potensi Wilayah",
    description:
      "Melihat potensi dan sumber daya yang dimiliki masyarakat Kadus 2.",
    href: "/potensi",
    icon: MapPinned,
  },
  {
    title: "Statistik",
    description: "Informasi dan data statistik wilayah Kadus 2 Kecemen.",
    href: "/statistik",
    icon: BarChart3,
  },
  {
    title: "Peta Digital",
    description: "Melihat informasi pemetaan wilayah dan kajian kualitas air.",
    href: "/peta",
    icon: Map,
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-[650px] overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/hero1.webp"
          alt="Kadus 2 Kecemen"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Content */}
        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-200">
              Website Informasi Wilayah
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Kadus 2 Kecemen
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-100 md:text-lg">
              Media informasi dan publikasi wilayah Kadus 2, Desa Kecemen,
              Kecamatan Manisrenggo, Kabupaten Klaten.
            </p>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-300">
              Mencakup wilayah RW 06 sampai RW 10 serta RT 16 sampai RT 30.
            </p>

            <div className="mt-8 flex justify-center">
              <Link
                href="/profil"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-200"
              >
                Jelajahi Profil
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tentang Singkat */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
            Tentang Wilayah
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900">
            Mengenal Kadus 2 Kecemen
          </h2>

          <p className="mt-6 leading-7 text-gray-600">
            Kadus 2 merupakan salah satu wilayah di Desa Kecemen yang terdiri
            atas lima Rukun Warga, yaitu RW 06, RW 07, RW 08, RW 09, dan RW 10.
            Website ini menjadi media informasi untuk memperkenalkan profil
            wilayah, potensi, UMKM, statistik, pemetaan, serta berbagai kegiatan
            masyarakat Kadus 2.
          </p>

          <Link
            href="/profil"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-gray-600"
          >
            Selengkapnya tentang Kadus 2
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Ringkasan Wilayah */}
      <section className="border-y bg-gray-50">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
              Ringkasan Wilayah
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900">
              Kadus 2 dalam Angka
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border bg-white p-6">
              <p className="text-4xl font-bold text-gray-900">5</p>

              <h3 className="mt-2 font-semibold text-gray-900">Rukun Warga</h3>

              <p className="mt-2 text-sm text-gray-500">
                RW 06 sampai dengan RW 10.
              </p>
            </div>

            <div className="rounded-xl border bg-white p-6">
              <p className="text-4xl font-bold text-gray-900">15</p>

              <h3 className="mt-2 font-semibold text-gray-900">
                Rukun Tetangga
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                RT 16 sampai dengan RT 30.
              </p>
            </div>

            <div className="rounded-xl border bg-white p-6 sm:col-span-2 lg:col-span-1">
              <p className="text-4xl font-bold text-gray-900">RW 08</p>

              <h3 className="mt-2 font-semibold text-gray-900">
                Pemetaan Kualitas Air
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Wilayah cakupan kajian dan pemetaan kualitas air.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Jelajahi Kadus 2 */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
            Informasi Wilayah
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900">
            Jelajahi Kadus 2
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            Temukan informasi mengenai profil wilayah, sejarah, UMKM, potensi,
            statistik, dan pemetaan Kadus 2 Kecemen.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-xl border bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-100 text-gray-900">
                  <Icon size={22} />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  {item.description}
                </p>

                <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-gray-900">
                  Lihat informasi
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
