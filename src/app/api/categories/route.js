import { NextResponse } from "next/server";

const categories = [
  {
    id: "kegiatan-warga",
    name: "Kegiatan Warga",
  },
  {
    id: "pengumuman",
    name: "Pengumuman",
  },
  {
    id: "gotong-royong",
    name: "Gotong Royong",
  },
  {
    id: "umkm",
    name: "UMKM",
  },
  {
    id: "kesehatan",
    name: "Kesehatan",
  },
  {
    id: "pendidikan",
    name: "Pendidikan",
  },
  {
    id: "lingkungan",
    name: "Lingkungan",
  },
  {
    id: "lainnya",
    name: "Lainnya",
  },
];

export async function GET() {
  return NextResponse.json(categories);
}