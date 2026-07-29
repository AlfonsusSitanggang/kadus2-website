export const statistics = {
  title: "Statistik Dusun II Desa Kecemen",

  subtitle:
    "Gambaran umum kondisi wilayah, administrasi, penggunaan lahan, serta karakteristik masyarakat Dusun II.",

  overview: {
    totalArea: {
      value: 172,
      unit: "Hektare",
      description: "Luas wilayah Dusun II.",
    },

    agriculturalArea: {
      value: 100,
      unit: "Hektare",
      description: "Luas lahan pertanian produktif.",
    },

    neighborhood: {
      rw: 5,
      rt: 15,
    },
  },

  administration: {
    rw: [
      {
        name: "RW 06",
        rt: 3,
      },

      {
        name: "RW 07",
        rt: 3,
      },

      {
        name: "RW 08",
        rt: 3,
      },

      {
        name: "RW 09",
        rt: 3,
      },

      {
        name: "RW 10",
        rt: 3,
      },
    ],
  },

  landUse: [
    {
      category: "Lahan Pertanian",
      value: 100,
      unit: "Ha",
    },

    {
      category: "Wilayah Lain",
      value: 72,
      unit: "Ha",
    },
  ],

  economy: [
    {
      sector: "Pertanian",
      description: "Sektor ekonomi utama masyarakat.",
    },

    {
      sector: "Jasa",
      description: "Sektor pendukung perekonomian masyarakat.",
    },

    {
      sector: "Perdagangan",
      description: "Berbagai usaha perdagangan lokal.",
    },

    {
      sector: "UMKM",
      description: "Usaha Mikro, Kecil, dan Menengah masyarakat.",
    },
  ],

  agriculture: {
    commodities: [
      "Padi",
      "Jagung",
      "Ketela",
      "Sayuran Hortikultura",
    ],
  },

  education: {
    description:
      "Pendidikan menjadi salah satu fokus pembangunan masyarakat.",

    facilities: [
      "SD Negeri 2 Kecemen",
    ],
  },

  religion: {
    majority: "Islam",

    activities: [
      "TPA",
      "Pengajian",
      "Kegiatan Keagamaan",
    ],
  },

  infrastructure: [
    "Jalan Desa",
    "Masjid",
    "Puskesmas Pembantu",
    "Makam",
    "SD Negeri 2 Kecemen",
  ],

  developmentFocus: [
    "Peningkatan sektor pertanian.",
    "Pengembangan UMKM.",
    "Peningkatan kualitas pendidikan.",
    "Peningkatan pelayanan kesehatan.",
    "Penguatan ekonomi masyarakat.",
  ],

  notes: [
    "Data akan diperbarui secara berkala.",
    "Sebagian data statistik kependudukan menunggu publikasi resmi Pemerintah Desa.",
  ],

  source: {
    interview:
      "Wawancara Sekretaris Desa Kecemen (2026)",

    mapping:
      "Peta Administrasi Dusun II",

    survey:
      "Observasi Lapangan KKN UPN Veteran Yogyakarta 2026",
  },
};