/**
 * Optik Ezia — Store Locations Directory
 * 
 * Sesuai panduan akurasi data:
 * Lokasi diambil dari referensi cabang Optik Ezia yang pernah ditemukan (Pondok Cina, Depok Town Square, Sentul City, Cimanggu, Gading Serpong).
 * Diberi metadata `status: "needs-verification"` agar data dapat diverifikasi dan disesuaikan oleh pihak client sebelum publikasi final.
 */

export interface StoreBranch {
  id: string;
  name: string;
  area: string;
  city: string;
  address: string;
  status: "needs-verification" | "verified";
  source: string;
  openingHours: string;
  services: string[];
  image: string;
  instagramUrl: string;
}

export const STORES_DATA: StoreBranch[] = [
  {
    id: "depok-pondok-cina",
    name: "Optik Ezia — Pondok Cina",
    area: "Pondok Cina",
    city: "Depok",
    address: "Area Pondok Cina, Kota Depok, Jawa Barat",
    status: "needs-verification",
    source: "Direktori lokasi Optik Ezia",
    openingHours: "Hubungi untuk jam operasional",
    services: ["Pemeriksaan Mata", "Koleksi Frame & Lensa", "Penyetelan Kacamata"],
    image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&q=80&w=1200",
    instagramUrl: "https://www.instagram.com/optikezia",
  },
  {
    id: "depok-town-square",
    name: "Optik Ezia — Depok Town Square (Detos)",
    area: "Depok Town Square (Detos)",
    city: "Depok",
    address: "Mall Depok Town Square, Jl. Margonda Raya No. 1, Pondok Cina, Depok",
    status: "needs-verification",
    source: "Direktori lokasi Optik Ezia",
    openingHours: "Mengikuti jam operasional mall",
    services: ["Pemeriksaan Refraksi", "Frame & Sunglasses", "Pilihan Lensa & Softlens"],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200",
    instagramUrl: "https://www.instagram.com/optikezia",
  },
  {
    id: "bogor-sentul-city",
    name: "Optik Ezia — Sentul City",
    area: "Sentul City",
    city: "Bogor",
    address: "Kawasan Sentul City, Kabupaten Bogor, Jawa Barat",
    status: "needs-verification",
    source: "Direktori lokasi Optik Ezia",
    openingHours: "Hubungi untuk jam operasional",
    services: ["Pemeriksaan Mata", "Fitting & Konsultasi Frame", "Perawatan Kacamata"],
    image: "https://images.unsplash.com/photo-1555529771-835f59fc5efe?auto=format&fit=crop&q=80&w=1200",
    instagramUrl: "https://www.instagram.com/optikezia",
  },
  {
    id: "bogor-cimanggu",
    name: "Optik Ezia — Cimanggu",
    area: "Cimanggu",
    city: "Bogor",
    address: "Kawasan Cimanggu, Kota Bogor, Jawa Barat",
    status: "needs-verification",
    source: "Direktori lokasi Optik Ezia",
    openingHours: "Hubungi untuk jam operasional",
    services: ["Pemeriksaan Mata", "Koleksi Kacamata Harian", "Penyetelan Frame"],
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1200",
    instagramUrl: "https://www.instagram.com/optikezia",
  },
  {
    id: "tangerang-gading-serpong",
    name: "Optik Ezia — Gading Serpong",
    area: "Gading Serpong",
    city: "Tangerang",
    address: "Kawasan Gading Serpong, Tangerang, Banten",
    status: "needs-verification",
    source: "Direktori lokasi Optik Ezia",
    openingHours: "Hubungi untuk jam operasional",
    services: ["Pemeriksaan Refraksi", "Frame Minimalis & Modern", "Konsultasi Lensa"],
    image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=1200",
    instagramUrl: "https://www.instagram.com/optikezia",
  },
];
