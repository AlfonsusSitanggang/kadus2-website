export const maps = {
  title: "Peta Dusun II Desa Kecemen",

  subtitle:
    "Informasi spasial Dusun II Desa Kecemen yang meliputi administrasi wilayah, fasilitas umum, dan persebaran potensi lokal.",

  introduction: [
    "Peta Dusun II disusun sebagai media informasi geografis untuk memberikan gambaran mengenai kondisi wilayah, batas administrasi, fasilitas umum, serta persebaran potensi yang dimiliki masyarakat.",

    "Seluruh peta merupakan hasil kegiatan pemetaan lapangan yang dilakukan selama pelaksanaan Kuliah Kerja Nyata (KKN).",
  ],

  documents: [
    {
      id: "administrasi",

      title: "Peta Administrasi Dusun II",

      image: "maps/PETA_ADMINISTRASI_KADUS2.jpg",

      pdf: "maps/PETA_ADMINISTRASI_KADUS2.pdf",

      description:
        "Menampilkan batas wilayah, pembagian RW dan RT, jaringan jalan, sungai, persawahan, serta fasilitas umum.",

      category: "Administrasi",
    },

    {
      id: "potensi",

      title: "Peta Potensi dan Fasilitas",

      image: "maps/PETA_POTENSI_DAN_FASILITAS_KADUS2.jpg",

      pdf: "maps/PETA_POTENSI_DAN_FASILITAS_KADUS2.pdf",

      description:
        "Menampilkan persebaran UMKM, fasilitas umum, perdagangan, jasa, dan berbagai potensi ekonomi masyarakat.",

      category: "Potensi",
    },

    {
      id: "ph",

      title: "Peta pH (Potential of Hydrogen)",

      image: "maps/PETA PH_page-0001.jpg",

      pdf: "maps/PETA PH.pdf",

      description:
        "Menampilkan sebaran tingkat keasaman (pH) air sumur di wilayah Dusun II. Nilai pH berkisar 5,42–6,57 dengan rata-rata 5,99 (RT 22: 5,86; RT 23: 5,94; RT 24: 6,16). Seluruh sampel berada di bawah baku mutu 6,5–8,5 sehingga tergolong relatif asam, diduga dipengaruhi karakteristik tanah vulkanik di kawasan lereng Merapi dan berpotensi menyebabkan korosi pada pipa maupun pompa air.",

      category: "Kualitas Air",
    },

    {
      id: "mat",

      title: "Peta MAT (Muka Air Tanah)",

      image: "maps/PETA MAT_page-0001.jpg",

      pdf: "maps/PETA MAT.pdf",

      description:
        "Menampilkan kondisi muka air tanah (MAT) di wilayah Dusun II. Berdasarkan hasil pengujian lapangan, nilai berada pada kisaran 120–220 ppm dengan rata-rata 164,4 ppm, jauh di bawah baku mutu 1000 mg/L sehingga memenuhi persyaratan kualitas air bersih dan menunjukkan kandungan zat padat terlarut yang tergolong rendah hingga sedang.",

      category: "Kualitas Air",
    },

    {
      id: "tds",

      title: "Peta TDS (Total Dissolved Solids)",

      image: "maps/PETA TDS_page-0001.jpg",

      pdf: "maps/PETA TDS.pdf",

      description:
        "Menampilkan sebaran nilai TDS (Total Dissolved Solids) air tanah di wilayah Dusun II. Nilai EC berkisar antara 237–444 µS/cm dengan rata-rata 332,4 µS/cm dan berkorelasi sangat kuat dengan TDS (r = 0,99), menunjukkan kandungan ion terlarut yang relatif rendah. Pada titik yang diduga terkontaminasi septic tank, nilai tetap rendah sehingga pencemaran kemungkinan lebih bersifat mikrobiologis daripada kimiawi.",

      category: "Kualitas Air",
    },

    {
      id: "temperature",

      title: "Peta Temperatur Air Tanah",

      image: "maps/PETA TEMPERATURE_page-0001.jpg",

      pdf: "maps/PETA TEMPERATURE.pdf",

      description:
        "Menampilkan sebaran suhu air tanah di wilayah Dusun II. Suhu air berkisar antara 26,6–28,9°C dengan rata-rata 27,88°C. Variasi suhu yang kecil menunjukkan kondisi air tanah yang relatif stabil, sehingga perbedaan pH, TDS, dan EC antar sumur lebih dipengaruhi oleh kondisi geokimia dibandingkan suhu saat pengukuran.",

      category: "Kualitas Air",
    },

    {
      id: "ec",

      title: "Peta EC (Electrical Conductivity)",

      image: "maps/PETA EC_page-0001.jpg",

      pdf: "maps/PETA EC.pdf",

      description:
        "Menampilkan sebaran daya hantar listrik (EC) air tanah di wilayah Dusun II. Kedalaman muka air tanah berkisar antara 1,16–5,57 m dengan rata-rata 2,75 m (RT 22: 1,98 m; RT 23: 2,75 m; RT 24: 3,45 m), meningkat dari RT 22 menuju RT 24. Sumur dengan muka air tanah lebih dangkal berpotensi lebih besar mengalami pencemaran dari permukaan, sedangkan sumur yang lebih dalam relatif lebih terlindungi namun membutuhkan energi pemompaan lebih besar.",

      category: "Kualitas Air",
    },
  ],

  facilities: [
    {
      name: "SD Negeri 2 Kecemen",
      type: "Pendidikan",
    },

    {
      name: "Puskesmas Pembantu",
      type: "Kesehatan",
    },

    {
      name: "Masjid",
      type: "Peribadatan",
    },

    {
      name: "Makam",
      type: "Fasilitas Umum",
    },
  ],

  landmarks: [
    "Rumah Kepala Desa",
    "Rumah Sekretaris Desa",
    "Rumah Bayan",
    "Rumah Ketua RW",
    "Rumah Ketua RT",
  ],

  infrastructure: [
    "Jaringan Jalan Desa",
    "Sungai",
    "Area Persawahan",
    "Permukiman",
  ],

  administrativeArea: {
    rw: ["RW 06", "RW 07", "RW 08", "RW 09", "RW 10"],

    rt: [
      "RT 16",
      "RT 17",
      "RT 18",
      "RT 19",
      "RT 20",
      "RT 21",
      "RT 22",
      "RT 23",
      "RT 24",
      "RT 25",
      "RT 26",
      "RT 27",
      "RT 28",
      "RT 29",
      "RT 30",
    ],
  },

  umkmOnMap: [
    "Aneka Snack",
    "Aneka Kripik",
    "Kripik Belut Dimas",
    "Telur Asin",
    "Depo Kopi",
    "Jasa Jahit",
    "Jual Beli Kambing",
    "Toko Sangkal Jaya",
    "Toko Sembako",
  ],

  faq: {
    title: "Pertanyaan yang Sering Diajukan Masyarakat",

    subtitle:
      "Jawaban atas pertanyaan umum masyarakat terkait kondisi dan kualitas air sumur di Dusun II Desa Kecemen.",

    items: [
      {
        question:
          "Mengapa air sumur yang letaknya berdekatan bisa memiliki kualitas berbeda?",

        answer:
          "Meskipun letaknya berdekatan, kualitas air sumur dapat berbeda karena kondisi bawah permukaan tanah tidak seragam. Perbedaan tersebut dipengaruhi oleh kedalaman sumur, jenis tanah dan batuan, jarak terhadap sumber pencemar (seperti septic tank atau limbah), serta kondisi konstruksi sumur. Akibatnya, setiap sumur dapat mengambil air dari lapisan akuifer dengan karakteristik yang berbeda.",
      },

      {
        question:
          "Mengapa air yang awalnya jernih menjadi berendap setelah didiamkan?",

        answer:
          "Air yang terlihat jernih masih dapat mengandung mineral terlarut, terutama besi (Fe) dan mangan (Mn). Saat air didiamkan dan kontak dengan udara, mineral tersebut mengalami oksidasi sehingga membentuk partikel yang kemudian mengendap. Endapan juga dapat berasal dari partikel halus atau mineral lain yang sebelumnya tidak terlihat.",
      },

      {
        question: "Mengapa air sumur berbau?",

        answer:
          "Bau pada air sumur umumnya disebabkan oleh bahan organik yang membusuk, kontaminasi septic tank, atau aktivitas bakteri yang menghasilkan gas seperti hidrogen sulfida (H\u2082S). Selain itu, kandungan besi atau mangan yang tinggi juga dapat menimbulkan bau tertentu. Jika air berbau disertai perubahan warna atau rasa, sebaiknya dilakukan pemeriksaan lebih lanjut sebelum digunakan untuk konsumsi.\n\nKaitan dengan hasil pengujian di Dusun II Kecemen: nilai TDS dan EC yang diperoleh masih tergolong rendah, sehingga kandungan mineral terlarut tidak berlebihan. Namun, seluruh sampel memiliki pH yang cenderung asam, dan beberapa sumur menunjukkan kondisi berbau, berwarna, atau berasa, termasuk satu titik yang diduga terkontaminasi septic tank. Hal ini mengindikasikan bahwa penyebab bau lebih mungkin berasal dari pencemaran organik atau mikrobiologis daripada kandungan mineral. Untuk memastikan penyebabnya, diperlukan pengujian lanjutan terhadap parameter Fe, Mn, amonia, H\u2082S, Total Coliform, dan E. coli.",
      },
    ],

    note:
      "Perlu diperhatikan bahwa pengujian pada penelitian ini hanya mencakup parameter pH, Total Dissolved Solids (TDS), Electrical Conductivity (EC), suhu (temperature), dan muka air tanah (MAT). Hal ini disebabkan oleh keterbatasan alat, lama waktu pengujian, dan sumber daya yang tersedia selama penelitian. Oleh karena itu, beberapa parameter penting lainnya, seperti besi (Fe), mangan (Mn), amonia (NH\u2083), hidrogen sulfida (H\u2082S), kesadahan, nitrat, serta parameter mikrobiologi seperti Total Coliform dan Escherichia coli (E. coli) belum dapat dianalisis. Meskipun demikian, hasil pengujian terhadap parameter yang diukur telah memberikan gambaran awal mengenai kondisi kualitas air sumur di lokasi penelitian. Untuk memperoleh data yang lebih representatif dan menggambarkan kondisi kualitas air secara lebih menyeluruh, diperlukan pengujian lanjutan dengan cakupan parameter yang lebih lengkap, jumlah sampel yang lebih banyak, serta periode pengamatan yang lebih panjang.",
  },

  source: {
    author: "Tim KKN UPN Veteran Yogyakarta",

    year: 2026,

    location: "Dusun II Desa Kecemen, Kecamatan Manisrenggo, Kabupaten Klaten",
  },
};