/**
 * Optik Ezia — Curated Eyewear & Optical Catalog
 * 
 * Struktur data produk modular siap disesuaikan dengan katalog resmi Optik Ezia.
 * Menghindari klaim fiktif dan harga yang belum dikonfirmasi.
 */

export interface EyewearProduct {
  id: string;
  name: string;
  category: "optical" | "sunglasses" | "lenses" | "softlens";
  categoryLabel: string;
  type: string;
  description: string;
  image: string;
  lifestyleImage: string;
  features: string[];
  status: "sample-curation" | "verified";
}

export const PRODUCTS_DATA: EyewearProduct[] = [
  {
    id: "ezia-optical-classic",
    name: "Classic Panthos Frame",
    category: "optical",
    categoryLabel: "Frame Optikal",
    type: "Frame Kacamata Harian",
    description:
      "Siluet panthos dengan proporsi seimbang yang nyaman digunakan untuk aktivitas kerja, membaca, dan pemakaian sehari-hari.",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=1000",
    lifestyleImage: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=1200",
    features: [
      "Material ringan dan tahan lama",
      "Bantalan hidung ergonomis",
      "Cocok untuk lensa minus, plus, dan silinder",
      "Dapat disesuaikan di cabang Optik Ezia",
    ],
    status: "sample-curation",
  },
  {
    id: "ezia-sunglasses-modern",
    name: "Modern Aviator Sunglasses",
    category: "sunglasses",
    categoryLabel: "Kacamata Hitam",
    type: "Kacamata Pelindung UV",
    description:
      "Kacamata hitam berdesain kontemporer dengan lensa pelindung sinar UV untuk kenyamanan berkendara dan aktivitas outdoor.",
    image: "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&q=80&w=1000",
    lifestyleImage: "https://images.unsplash.com/photo-1509695503492-412db56ae234?auto=format&fit=crop&q=80&w=1200",
    features: [
      "Perlindungan sinar UV",
      "Lensa anti-silau untuk outdoor",
      "Konstruksi bingkai kokoh",
      "Pilihan warna lensa beragam",
    ],
    status: "sample-curation",
  },
  {
    id: "ezia-optical-minimalist",
    name: "Minimalist Round Wire",
    category: "optical",
    categoryLabel: "Frame Optikal",
    type: "Frame Kawat Tipis",
    description:
      "Desain lingkaran minimalis dengan profil kawat tipis yang memberikan tampilan bersih, elegan, dan ringan di wajah.",
    image: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&q=80&w=1000",
    lifestyleImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1200",
    features: [
      "Bobot sangat ringan",
      "Desain minimalis modern",
      "Gagang fleksibel dan presisi",
      "Tersedia berbagai pilihan warna",
    ],
    status: "sample-curation",
  },
  {
    id: "ezia-optical-acetate",
    name: "Contemporary Acetate Frame",
    category: "optical",
    categoryLabel: "Frame Optikal",
    type: "Frame Asetat",
    description:
      "Frame asetat berkarakter tegas dengan finishing halus untuk gaya profesional maupun kasual.",
    image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&q=80&w=1000",
    lifestyleImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1200",
    features: [
      "Material asetat berkualitas tinggi",
      "Engsel kuat dan tahan lama",
      "Nyaman untuk pemakaian jangka panjang",
      "Pilihan motif dan solid color",
    ],
    status: "sample-curation",
  },
  {
    id: "ezia-lenses-digital",
    name: "Lensa Anti-Radiasi Blue Light",
    category: "lenses",
    categoryLabel: "Lensa Kacamata",
    type: "Lensa Khusus Layar Digital",
    description:
      "Lensa dengan lapisan filter sinar biru untuk membantu mengurangi kelelahan mata saat menatap layar komputer dan smartphone.",
    image: "https://images.unsplash.com/photo-1582142839970-2b9ffacce661?auto=format&fit=crop&q=80&w=1000",
    lifestyleImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200",
    features: [
      "Filter sinar biru gawai",
      "Lapisan anti-refleksi jernih",
      "Anti-gores dan mudah dibersihkan",
      "Tersedia untuk resep single vision & progresif",
    ],
    status: "sample-curation",
  },
  {
    id: "ezia-softlens-comfort",
    name: "Softlens & Kontak Lensa",
    category: "softlens",
    categoryLabel: "Softlens",
    type: "Lensa Kontak Harian & Bulanan",
    description:
      "Pilihan softlens bening dan berwarna dengan kadar air optimal untuk kenyamanan mata sepanjang hari.",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=1000",
    lifestyleImage: "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?auto=format&fit=crop&q=80&w=1200",
    features: [
      "Kadar air optimal untuk kelembapan mata",
      "Tersedia ukuran minus bervariasi",
      "Pilihan bening dan natural color",
      "Konsultasi pemakaian di cabang",
    ],
    status: "sample-curation",
  },
];
