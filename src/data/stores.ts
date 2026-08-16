/**
 * Optik Ezia — Official Store Locations Directory
 * 
 * Verified from official Linktree: https://linktr.ee/optikezia
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
  phoneRaw: string;
  whatsappUrl: string;
  services: string[];
  image: string;
  googleMapsUrl: string;
  embedMapUrl: string;
  instagramUrl: string;
}

export const STORES_DATA: StoreBranch[] = [
  {
    id: "pondok-cina-5",
    name: "Optik Ezia 5 (Stasiun Pondok Cina)",
    branchNumber: "5",
    area: "Stasiun Pondok Cina",
    city: "Depok",
    address: "Jl. Margonda Raya No.399 B&C, Pondok Cina, Beji, Kota Depok, Jawa Barat",
    latitude: -6.3698,
    longitude: 106.8342,
    status: "verified",
    openingHours: "Senin – Minggu: 09.00 – 21.00 WIB",
    phone: "0812-2212-7470",
    phoneRaw: "6281222127470",
    whatsappUrl: "https://api.whatsapp.com/send?phone=6281222127470&text=Halo%20Optik%20Ezia%205%20Pondok%20Cina%2C%20saya%20ingin%20konsultasi%20kacamata%20dan%20pemeriksaan%20mata",
    services: ["Pemeriksaan Refraksi Mata", "Kurasi Frame & Lensa", "Penyetelan Ergonomis", "Softlens & Cairan Pembersih"],
    image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&q=80&w=1200",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Optik+Ezia+Jl.+Margonda+Raya+No.399+B%26C+Pondok+Cina+Depok",
    embedMapUrl: "https://maps.google.com/maps?q=Optik+Ezia+Jl.+Margonda+Raya+No.399+B%26C+Pondok+Cina+Depok&t=&z=16&ie=UTF8&iwloc=&output=embed",
    instagramUrl: "https://www.instagram.com/optikezia",
  },
  {
    id: "depok-town-square",
    name: "Optik Ezia (Depok Town Square)",
    branchNumber: "DETOS",
    area: "Depok Town Square (DETOS)",
    city: "Depok",
    address: "Jl. Margonda Raya No.1 Lt Ground GS 15 No.6-9, Pondok Cina, Beji, Kota Depok, Jawa Barat",
    latitude: -6.3725,
    longitude: 106.8319,
    status: "verified",
    openingHours: "Senin – Minggu: 10.00 – 22.00 WIB",
    phone: "0812-8427-7110",
    phoneRaw: "6281284277110",
    whatsappUrl: "https://wa.me/+6281284277110?text=Halo%2C%20Optik%20Ezia%20Detos.%20Saya%20ingin%20bertanya%20mengenai%20koleksi%20dan%20layanan",
    services: ["Pemeriksaan Mata Terstandar", "Frame Optikal & Sunglasses", "Lensa Anti-Radiasi & Progresif", "Free Fitting"],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Optik+Ezia+Depok+Town+Square+Lt+Ground+Margonda+Depok",
    embedMapUrl: "https://maps.google.com/maps?q=Optik+Ezia+Depok+Town+Square+Margonda+Depok&t=&z=16&ie=UTF8&iwloc=&output=embed",
    instagramUrl: "https://www.instagram.com/optikezia",
  },
  {
    id: "sentul-city-9",
    name: "Optik Ezia 9 (Sentul City)",
    branchNumber: "9",
    area: "Pasar Bersih Sentul City",
    city: "Bogor",
    address: "Ruko Pasar Bersih Sentul City, Blok R No.3c, Babakan Madang, Kabupaten Bogor, Jawa Barat",
    latitude: -6.5621,
    longitude: 106.8769,
    status: "verified",
    openingHours: "Senin – Minggu: 09.00 – 21.00 WIB",
    phone: "0812-2212-7449",
    phoneRaw: "6281222127449",
    whatsappUrl: "https://api.whatsapp.com/send?phone=6281222127449&text=Halo%20Optik%20Ezia%209%20Sentul%20City%2C%20saya%20ingin%20konsultasi%20kacamata",
    services: ["Pemeriksaan Refraksi", "Konsultasi Model Sesuai Wajah", "Penyetelan Frame", "Servis Berkala"],
    image: "https://images.unsplash.com/photo-1555529771-835f59fc5efe?auto=format&fit=crop&q=80&w=1200",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Optik+Ezia+Ruko+Pasar+Bersih+Sentul+City+Blok+R+No.3c+Bogor",
    embedMapUrl: "https://maps.google.com/maps?q=Optik+Ezia+Pasar+Bersih+Sentul+City+Bogor&t=&z=16&ie=UTF8&iwloc=&output=embed",
    instagramUrl: "https://www.instagram.com/optikezia",
  },
  {
    id: "cimanggu-11",
    name: "Optik Ezia 11 (Cimanggu)",
    branchNumber: "11",
    area: "Bukit Cimanggu City",
    city: "Bogor",
    address: "Bukit Cimanggu City Raya No 21-25, Cibadak, Tanah Sereal, Kota Bogor, Jawa Barat",
    latitude: -6.6401,
    longitude: 106.8063,
    status: "verified",
    openingHours: "Senin – Minggu: 09.00 – 21.00 WIB",
    phone: "0812-2212-7472",
    phoneRaw: "6281222127472",
    whatsappUrl: "https://wa.me/+6281222127472?text=Halo%2C%20Optik%20Ezia%20Cimanggu.%20Saya%20ingin%20bertanya%20jadwal%20dan%20koleksi%20frame",
    services: ["Pemeriksaan Ketajaman Mata", "Koleksi Kacamata Harian & Stylish", "Pembersihan Ultrasonik", "Lensa Blue Light"],
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1200",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Optik+Ezia+Bukit+Cimanggu+City+Raya+Bogor",
    embedMapUrl: "https://maps.google.com/maps?q=Optik+Ezia+Bukit+Cimanggu+City+Bogor&t=&z=16&ie=UTF8&iwloc=&output=embed",
    instagramUrl: "https://www.instagram.com/optikezia",
  },
  {
    id: "gading-serpong-15",
    name: "Optik Ezia 15 (Gading Serpong)",
    branchNumber: "15",
    area: "Gading Serpong",
    city: "Tangerang",
    address: "Jl. Boulevard Gading Golf M5/9, Kelapa Dua, Kec. Serpong, Kabupaten Tangerang, Banten",
    latitude: -6.2425,
    longitude: 106.6203,
    status: "verified",
    openingHours: "Senin – Minggu: 09.00 – 21.00 WIB",
    phone: "0813-1515-804",
    phoneRaw: "628131515804",
    whatsappUrl: "https://api.whatsapp.com/send?phone=628131515804&text=Halo%20Optik%20Ezia%2015%20Gading%20Serpong%2C%20saya%20ingin%20bertanya%20layanan%20kacamata",
    services: ["Pemeriksaan Mata Lengkap", "Kurasi Bingkai Premium", "Lensa Photochromic / Transisi", "Fitting & Aftercare"],
    image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=1200",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Optik+Ezia+Jl+Boulevard+Gading+Golf+M5%2F9+Kelapa+Dua+Serpong+Tangerang",
    embedMapUrl: "https://maps.google.com/maps?q=Optik+Ezia+Jl+Boulevard+Gading+Golf+Kelapa+Dua+Serpong+Tangerang&t=&z=16&ie=UTF8&iwloc=&output=embed",
    instagramUrl: "https://www.instagram.com/optikezia",
  },
];

/**
 * Verified Official Central Contacts from Linktree
 */
export const OPTIK_EZIA_CONTACT = {
  generalInfoWa: "https://api.whatsapp.com/send?phone=6281311442007&text=Halo%20Optik%20Ezia%2C%20saya%20ingin%20informasi%20layanan",
  generalInfoPhone: "0813-1144-2007",
  customerServiceWa: "https://wa.me/+6281290665553?text=Halo%2C%20Customer%20Service%20Ezia.%20Saya%20ingin%20bertanya",
  customerServicePhone: "0812-9066-5553",
  eyeCareMobileWa: "https://wa.me/+6281290665553?text=Halo%2C%20Ezia%20Eye%20Care%20Mobile.%20Saya%20ingin%20bertanya%20layanan%20home%20visit%2Fcorporate",
  tiktok: "https://www.tiktok.com/@optik.ezia",
  instagram: "https://www.instagram.com/optikezia",
  instagramHandle: "@optikezia",
  linktree: "https://linktr.ee/optikezia",
};

