import React from 'react';
import { Users, Map, Home, Briefcase, TrendingUp, UserCheck } from 'lucide-react';
// Sesuaikan import Button dengan struktur folder proyek Anda (contoh: shadcn/ui)
import { Button } from '@/components/ui/button';

export default function StatisticsPage() {
    // Data dummy statistik untuk Dusun II
    const stats = [
        { id: 1, name: 'Total Penduduk', value: '1.250', unit: 'Jiwa', icon: Users },
        { id: 2, name: 'Kepala Keluarga', value: '420', unit: 'KK', icon: Home },
        { id: 3, name: 'Luas Wilayah', value: '15,5', unit: 'Hektar', icon: Map },
        { id: 4, name: 'Mata Pencaharian', value: 'Petani', unit: '', icon: Briefcase },
    ];

    return (
        <main className="flex min-h-screen flex-col bg-slate-50">
            {/* ====================================================== */}
            {/* HERO SECTION */}
            {/* ====================================================== */}
            <section className="bg-emerald-800 py-20 text-white md:py-28">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-6xl">
                        Statistik Dusun II
                    </h1>
                    <p className="mx-auto max-w-2xl text-lg text-emerald-100 md:text-xl leading-relaxed">
                        Data demografi, luas wilayah, dan informasi potensi kependudukan terkini di wilayah Dusun II, Desa Kecemen.
                    </p>
                </div>
            </section>

            {/* ====================================================== */}
            {/* STATS GRID SECTION */}
            {/* ====================================================== */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Ringkasan Data</h2>
                        <p className="mt-4 text-gray-600">Angka penting kependudukan Dusun II tahun ini</p>
                    </div>
                    
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {stats.map((stat) => {
                            const Icon = stat.icon;
                            return (
                                <div key={stat.id} className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-100 transition-all hover:shadow-md hover:-translate-y-1">
                                    <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                                        <Icon className="h-7 w-7" />
                                    </div>
                                    <dt className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{stat.name}</dt>
                                    <dd className="mt-2 flex items-baseline gap-x-2">
                                        <span className="text-4xl font-bold tracking-tight text-gray-900">{stat.value}</span>
                                        {stat.unit && <span className="text-sm font-medium text-gray-500">{stat.unit}</span>}
                                    </dd>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ====================================================== */}
            {/* DETAIL DEMOGRAFI SECTION */}
            {/* ====================================================== */}
            <section className="bg-white py-16 md:py-24 border-t border-gray-100">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="grid gap-16 md:grid-cols-2 items-center">
                        {/* Kiri: Progress Bars */}
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Distribusi Penduduk</h2>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Penduduk Dusun II memiliki persebaran gender yang relatif seimbang. Hal ini mendukung produktivitas kelompok tani dan kegiatan sosial kemasyarakatan yang optimal.
                            </p>
                            
                            <div className="space-y-6">
                                {/* Bar Laki-laki */}
                                <div>
                                    <div className="flex justify-between text-sm font-medium mb-2">
                                        <span className="text-gray-700 flex items-center gap-2">
                                            <UserCheck className="w-4 h-4 text-emerald-600"/> Laki-laki
                                        </span>
                                        <span className="text-gray-900 font-bold">600 Jiwa (48%)</span>
                                    </div>
                                    <div className="w-full bg-gray-100 rounded-full h-3">
                                        <div className="bg-emerald-600 h-3 rounded-full transition-all duration-1000" style={{ width: '48%' }}></div>
                                    </div>
                                </div>
                                
                                {/* Bar Perempuan */}
                                <div>
                                    <div className="flex justify-between text-sm font-medium mb-2">
                                        <span className="text-gray-700 flex items-center gap-2">
                                            <UserCheck className="w-4 h-4 text-emerald-600"/> Perempuan
                                        </span>
                                        <span className="text-gray-900 font-bold">650 Jiwa (52%)</span>
                                    </div>
                                    <div className="w-full bg-gray-100 rounded-full h-3">
                                        <div className="bg-emerald-500 h-3 rounded-full transition-all duration-1000" style={{ width: '52%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Kanan: Info Box */}
                        <div className="bg-emerald-50 rounded-3xl p-8 border border-emerald-100 shadow-sm relative overflow-hidden">
                            <div className="absolute -right-4 -top-4 opacity-5">
                                <TrendingUp className="w-48 h-48" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2 relative z-10">
                                <TrendingUp className="w-6 h-6 text-emerald-600" />
                                Tren Pertumbuhan
                            </h3>
                            <p className="text-gray-600 text-base leading-relaxed mb-8 relative z-10">
                                Terdapat peningkatan jumlah kepala keluarga sebesar 2.5% dibandingkan tahun sebelumnya, yang sebagian besar didominasi oleh keluarga muda yang menetap di perbatasan wilayah desa.
                            </p>
                            <div className="bg-white p-5 rounded-2xl border border-emerald-100 text-center relative z-10">
                                <span className="block text-4xl font-extrabold text-emerald-600 mb-2">+2.5%</span>
                                <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">Pertumbuhan KK per Tahun</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ====================================================== */}
            {/* CTA SECTION */}
            {/* ====================================================== */}
            <section className="bg-emerald-700 py-24 text-white">
                <div className="mx-auto max-w-4xl px-6 text-center">
                    <h2 className="mb-6 text-3xl font-bold md:text-5xl">
                        Pelajari Lebih Lanjut Tentang Dusun II
                    </h2>
                    <p className="mb-10 text-lg leading-8 text-emerald-100 max-w-2xl mx-auto">
                        Punya pertanyaan atau butuh informasi spesifik lainnya terkait data statistik, demografi, maupun potensi wilayah Desa Kecemen?
                    </p>
                    <Button
                        size="lg"
                        className="rounded-full bg-white px-8 text-emerald-700 hover:bg-gray-100 hover:text-emerald-800 font-semibold shadow-lg transition-transform hover:scale-105"
                    >
                        Hubungi Pemerintah Desa
                    </Button>
                </div>
            </section>
        </main>
    );
}