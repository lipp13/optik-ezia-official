/**
 * Optik Ezia — Official Brand Information & Configuration
 * 
 * Source of truth for brand data.
 * All factual data follows strict accuracy rules:
 * - Brand Name: Optik Ezia
 * - Official Instagram: @optikezia (https://www.instagram.com/optikezia)
 * - Safe, non-fabricated creative copy and verified service scope.
 */

export interface BrandConfig {
  name: string;
  tagline: string;
  shortDescription: string;
  extendedAbout: string;
  vision: string;
  mission: string[];
  coreValues: {
    title: string;
    description: string;
    icon: string;
  }[];
  stats: {
    value: string;
    label: string;
    detail: string;
  }[];
  instagram: {
    handle: string;
    url: string;
  };
  tiktok?: {
    handle: string;
    url: string;
  };
  linktree?: string;
  contact: {
    whatsappNumberPlaceholder: string;
    whatsappUrl: string;
    customerServicePhone?: string;
    customerServiceUrl?: string;
    eyeCareMobileUrl?: string;
    emailPlaceholder: string;
    customerServiceHours: string;
    verified: boolean;
  };
}

export const OPTIK_EZIA_CONFIG: BrandConfig = {
  name: "Optik Ezia",
  tagline: "Modern Eyewear & Professional Eye Care",
  shortDescription:
    "Optik Ezia adalah pusat optik modern yang berdedikasi menghadirkan layanan pemeriksaan mata terstandar, fitting kacamata ergonomis, serta kurasi frame dan lensa berkualitas tinggi.",
  extendedAbout:
    "Sejak awal berdirinya, Optik Ezia berkomitmen memadukan standar optometri profesional dengan estetika kacamata kontemporer. Kami percaya bahwa penglihatan yang optimal adalah hak setiap individu dan kacamata adalah representasi personal dari kenyamanan dan kepercayaan diri.",
  vision:
    "Menjadi jaringan pusat perawatan mata dan kacamata terpercaya di Indonesia yang dikenal atas keunggulan layanan optometri, keakuratan refraksi, dan kurasi produk yang berkelas.",
  mission: [
    "Menyediakan layanan pemeriksaan refraksi mata yang komprehensif, aman, dan menggunakan teknologi terstandar.",
    "Menghadirkan kurasi bingkai dan teknologi lensa optik berkualitas untuk segala kelompok usia dan kebutuhan visual.",
    "Memberikan kenyamanan konsultasi dan fitting presisi yang disesuaikan secara personal untuk setiap pelanggan.",
    "Menjaga standar kepuasan pelanggan melalui layanan purna jual, garansi lensa, dan perawatan kacamata berkala.",
  ],
  coreValues: [
    {
      title: "Presisi & Integritas",
      description: "Setiap pemeriksaan refraksi dan pemasangan lensa dikerjakan dengan ketelitian tinggi serta standar optometri teruji.",
      icon: "Eye",
    },
    {
      title: "Kenyamanan Pelanggan",
      description: "Kami mendengarkan kebutuhan visual Anda secara menyeluruh untuk memberikan solusi kacamata yang paling nyaman dipakai harian.",
      icon: "HeartHandshake",
    },
    {
      title: "Kualitas & Estetika",
      description: "Kurasi material bingkai ringan, tahan lama, dan desain elegan yang menyempurnakan bentuk wajah serta gaya hidup modern.",
      icon: "Award",
    },
    {
      title: "Dukungan Jangka Panjang",
      description: "Layanan purna jual lengkap meliputi gratis penyetelan bingkai, pembersihan ultrasonik, dan konsultasi berkala di seluruh cabang.",
      icon: "ShieldCheck",
    },
  ],
  stats: [
    {
      value: "100%",
      label: "Lensa Terstandar",
      detail: "Lensa bersertifikasi optik dengan filter perlindungan mata",
    },
    {
      value: "Multi-Branch",
      label: "Jaringan Cabang",
      detail: "Tersebar di Depok, Bogor, dan area strategis",
    },
    {
      value: "5 Tahap",
      label: "Alur Refraksi",
      detail: "Proses periksa mata & fitting komprehensif",
    },
    {
      value: "Lifetime",
      label: "Layanan Purna Jual",
      detail: "Gratis servis & adjustment di semua outlet resmi",
    },
  ],
  instagram: {
    handle: "@optikezia",
    url: "https://www.instagram.com/optikezia",
  },
  tiktok: {
    handle: "@optik.ezia",
    url: "https://www.tiktok.com/@optik.ezia",
  },
  linktree: "https://linktr.ee/optikezia",
  contact: {
    whatsappNumberPlaceholder: "0813-1144-2007",
    whatsappUrl: "https://api.whatsapp.com/send?phone=6281311442007&text=Halo%20Optik%20Ezia%2C%20saya%20ingin%20informasi%20layanan",
    customerServicePhone: "0812-9066-5553",
    customerServiceUrl: "https://wa.me/+6281290665553?text=Halo%2C%20Customer%20Service%20Ezia.%20Saya%20ingin%20bertanya",
    eyeCareMobileUrl: "https://wa.me/+6281290665553?text=Halo%2C%20Ezia%20Eye%20Care%20Mobile.%20Saya%20ingin%20bertanya",
    emailPlaceholder: "info@optikezia.com",
    customerServiceHours: "Senin – Minggu (09.00 - 21.00 WIB)",
    verified: true,
  },
};
