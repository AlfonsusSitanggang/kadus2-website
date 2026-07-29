import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Identitas Website */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-gray-900">Kadus 2 Kecemen</h2>

            <p className="mt-1 text-sm font-medium text-gray-600">
              Desa Kecemen, Kecamatan Manisrenggo, Kabupaten Klaten
            </p>

            <p className="mt-4 max-w-xl text-sm leading-6 text-gray-500">
              Website informasi Kadus 2 Desa Kecemen sebagai media penyampaian
              informasi, publikasi kegiatan, potensi wilayah, UMKM, statistik,
              dan informasi pemetaan wilayah kepada masyarakat.
            </p>

            <div className="mt-5">
              <p className="text-sm text-gray-500">
                Wilayah Kadus 2 mencakup RW 06 sampai RW 10 dan RT 16 sampai RT
                30.
              </p>
            </div>
          </div>

          {/* Navigasi */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-700">
              Navigasi
            </h3>

            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-500 transition-colors hover:text-gray-900"
                >
                  Beranda
                </Link>
              </li>

              <li>
                <Link
                  href="/profil"
                  className="text-sm text-gray-500 transition-colors hover:text-gray-900"
                >
                  Profil Kadus
                </Link>
              </li>

              <li>
                <Link
                  href="/statistik"
                  className="text-sm text-gray-500 transition-colors hover:text-gray-900"
                >
                  Statistik
                </Link>
              </li>

              <li>
                <Link
                  href="/umkm"
                  className="text-sm text-gray-500 transition-colors hover:text-gray-900"
                >
                  UMKM
                </Link>
              </li>

              <li>
                <Link
                  href="/potensi"
                  className="text-sm text-gray-500 transition-colors hover:text-gray-900"
                >
                  Potensi
                </Link>
              </li>

              <li>
                <Link
                  href="/berita"
                  className="text-sm text-gray-500 transition-colors hover:text-gray-900"
                >
                  Berita
                </Link>
              </li>
            </ul>
          </div>

          {/* Informasi Wilayah */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-700">
              Wilayah
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-gray-500">
              <li>RW 06 — RT 16 sampai RT 18</li>
              <li>RW 07 — RT 19 sampai RT 21</li>
              <li>RW 08 — RT 22 sampai RT 24</li>
              <li>RW 09 — RT 25 sampai RT 27</li>
              <li>RW 10 — RT 28 sampai RT 30</li>
            </ul>

            <div className="mt-6">
              <Link
                href="/peta"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900"
              >
                Lihat Peta Wilayah →
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-gray-200 pt-8">
          <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
            <p className="text-center text-sm text-gray-400 md:text-left">
              &copy; {new Date().getFullYear()} Kadus 2 Desa Kecemen. Seluruh
              hak cipta dilindungi.
            </p>

            <p className="text-center text-xs text-gray-400 md:text-right">
              Website Informasi Wilayah Kadus 2
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
