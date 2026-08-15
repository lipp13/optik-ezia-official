/**
 * Optik Ezia — Store Locations Directory
 * 
 * Data lokasi diambil dari link resmi Optik Ezia:
 * https://linktr.ee/optikezia
 */

export interface StoreBranch {
  id: string;
  name: string;
  branchNumber: string;
  area: string;
  city: string;
  address: string;
  latitude: number;
  longitude: number;
  status: "verified" | "needs-verification";
  openingHours: string;
  phone: string;
  whatsapp: string;
  services: string[];
  image: string;
  googleMapsUrl: string;
  instagramUrl: string;
}

export const STORES_DATA: StoreBranch[] = [
  {
    id: "pondok-cina-5",
    name: "Optik Ezia 5",
    branchNumber: "5",
    area: "Stasiun Pondok Cina",
    city: "Depok",
    address: "Jl. Margonda Raya No.399 B&C, Pondok Cina, Depok",
    latitude: -6.3698,
    longitude: 106.8342,
    status: "verified",
    openingHours: "Senin - Minggu: 09.00 - 21.00",
    phone: "+62-812-xxxx-xxxx",
    whatsapp: "https://wa.me/62812xxxxxxxx",
    services: ["Pemeriksaan Mata", "Koleksi Frame & Lensa", "Penyetelan Kacamata", "Softlens"],
    image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&q=80&w=1200",
    googleMapsUrl: "https://maps.google.com/?q=-6.3698,106.8342",
    instagramUrl: "https://www.instagram.com/optikezia",
  },
  {
    id: "depok-town-square",
    name: "Optik Ezia",
    branchNumber: "",
    area: "Depok Town Square",
    city: "Depok",
    address: "Jl. Margonda Raya No.1 Lt Ground GS 15 No.6-9, Pondok Cina, Depok",
    latitude: -6.3725,
    longitude: 106.8319,
    status: "verified",
    openingHours: "Senin - Minggu: 10.00 - 22.00",
    phone: "+62-812-xxxx-xxxx",
    whatsapp: "https://wa.me/62812xxxxxxxx",
    services: ["Pemeriksaan Refraksi", "Frame & Sunglasses", "Pilihan Lensa & Softlens"],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200",
    googleMapsUrl: "https://maps.google.com/?q=-6.3725,106.8319",
    instagramUrl: "https://www.instagram.com/optikezia",
  },
  {
    id: "sentul-city-9",
    name: "Optik Ezia 9",
    branchNumber: "9",
    area: "Sentul City",
    city: "Bogor",
    address: "Ruko Pasar Bersih Sentul City, Blok R No.3c, Babakan Madang, Bogor",
    latitude: -6.5621,
    longitude: 106.8769,
    status: "verified",
    openingHours: "Senin - Minggu: 09.00 - 21.00",
    phone: "+62-812-xxxx-xxxx",
    whatsapp: "https://wa.me/62812xxxxxxxx",
    services: ["Pemeriksaan Mata", "Fitting & Konsultasi Frame", "Perawatan Kacamata"],
    image: "https://images.unsplash.com/photo-1555529771-835f59fc5efe?auto=format&fit=crop&q=80&w=1200",
    googleMapsUrl: "https://maps.google.com/?q=-6.5621,106.8769",
    instagramUrl: "https://www.instagram.com/optikezia",
  },
  {
    id: "cimanggu-11",
    name: "Optik Ezia 11",
    branchNumber: "11",
    area: "Cimanggu",
    city: "Bogor",
    address: "Bukit Cimanggu City Raya No 21-25, Bogor",
    latitude: -6.6401,
    longitude: 106.8063,
    status: "verified",
    openingHours: "Senin - Minggu: 09.00 - 21.00",
    phone: "+62-812-xxxx-xxxx",
    whatsapp: "https://wa.me/62812xxxxxxxx",
    services: ["Pemeriksaan Mata", "Koleksi Kacamata Harian", "Penyetelan Frame"],
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1200",
    googleMapsUrl: "https://maps.google.com/?q=-6.6401,106.8063",
    instagramUrl: "https://www.instagram.com/optikezia",
  },
  {
    id: "gading-serpong-15",
    name: "Optik Ezia 15",
    branchNumber: "15",
    area: "Gading Serpong",
    city: "Tangerang",
    address: "Jl Boulevard Gading Golf M5/9, Kelapa Dua, Kec. Serpong, Kabupaten Tangerang, Banten",
    latitude: -6.2425,
    longitude: 106.6203,
    status: "verified",
    openingHours: "Senin - Minggu: 09.00 - 21.00",
    phone: "+62-812-xxxx-xxxx",
    whatsapp: "https://wa.me/62812xxxxxxxx",
    services: ["Pemeriksaan Refraksi", "Frame Minimalis & Modern", "Konsultasi Lensa"],
    image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=1200",
    googleMapsUrl: "https://maps.google.com/?q=-6.2425,106.6203",
    instagramUrl: "https://www.instagram.com/optikezia",
  },
];

// Contact info dari Linktree
export const OPTIK_EZIA_CONTACT = {
  whatsapp: "https://wa.me/62812xxxxxxxx", // Ganti dengan nomor real dari info WA
  customerService: "Customer Service Optik Ezia",
  eyeCareMobile: "Ezia Eye Care Mobile",
  tiktok: "https://www.tiktok.com/@optikezia",
  instagram: "https://www.instagram.com/optikezia",
};
