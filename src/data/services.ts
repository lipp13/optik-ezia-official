/**
 * Optik Ezia — Services & Eye Care Process
 * 
 * Standar layanan optik dan pemeriksaan mata yang aman dan terpercaya,
 * tanpa klaim medis yang berlebihan atau spekulatif.
 */

export interface ServiceProcessStep {
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  detailPoints: string[];
  image: string;
}

export const SERVICES_PROCESS: ServiceProcessStep[] = [
  {
    stepNumber: "01",
    title: "Pemeriksaan Refraksi Mata",
    subtitle: "Evaluasi Ketajaman Penglihatan",
    description:
      "Pemeriksaan ketajaman mata untuk menentukan ukuran minus, plus, atau silinder yang tepat bagi kebutuhan penglihatan Anda.",
    detailPoints: [
      "Pengecekan ketajaman visual jarak jauh & dekat",
      "Evaluasi kenyamanan fokus penglihatan",
      "Konsultasi keluhan mata lelah atau buram",
    ],
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200",
  },
  {
    stepNumber: "02",
    title: "Konsultasi Kebutuhan & Aktivitas",
    subtitle: "Menyesuaikan dengan Kebiasaan Harian",
    description:
      "Diskusi mengenai aktivitas utama Anda, baik bekerja di depan layar monitor, membaca, berkendara, maupun olahraga.",
    detailPoints: [
      "Penyesuaian kebutuhan lensa anti-radiasi atau transisi",
      "Rekomendasi jenis lensa sesuai rutinitas harian",
      "Pilihan antara kacamata atau softlens",
    ],
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=1200",
  },
  {
    stepNumber: "03",
    title: "Pemilihan Frame Sesuai Wajah",
    subtitle: "Estetika & Kesesuaian Proporsi",
    description:
      "Membantu Anda menemukan bentuk bingkai yang paling pas dengan kontur wajah, hidung, dan preferensi gaya personal Anda.",
    detailPoints: [
      "Pilihan berbagai siluet (Round, Square, Aviator, Panthos)",
      "Pencocokan warna bingkai dengan skin tone",
      "Material asetat, titanium, kawat tipis, dan lainnya",
    ],
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=1200",
  },
  {
    stepNumber: "04",
    title: "Penyetelan & Fitting Ergonomis",
    subtitle: "Kenyamanan Posisi Pakai",
    description:
      "Penyelarasan posisi kacamata agar terpasang stabil di hidung dan belakang telinga tanpa menimbulkan rasa tertekan.",
    detailPoints: [
      "Penyetelan sudut bantalan hidung (nosepad)",
      "Penyesuaian lengkungan gagang kacamata",
      "Pengecekan stabilitas saat bergerak",
    ],
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=1200",
  },
  {
    stepNumber: "05",
    title: "Perawatan & Servis Berkala",
    subtitle: "Dukungan Kacamata Jangka Panjang",
    description:
      "Layanan perawatan seperti pembersihan kacamata dan pengencangan sekrup bingkai di cabang Optik Ezia.",
    detailPoints: [
      "Pembersihan kacamata & lensa",
      "Pengencangan dan penggantian sekrup bingkai",
      "Konsultasi penyesuaian kembali posisi kacamata",
    ],
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200",
  },
];

export const LENS_OPTIONS = [
  {
    id: "anti-blue",
    name: "Lensa Anti-Radiasi Blue Light",
    tag: "Aktivitas Digital",
    description:
      "Lapisan filter sinar biru untuk membantu kenyamanan mata saat bekerja lama di depan komputer atau smartphone.",
    benefits: [
      "Membantu mengurangi silau layar digital",
      "Mendukung kenyamanan saat bekerja lama",
      "Lapisan anti-refleksi jernih",
    ],
  },
  {
    id: "photochromic",
    name: "Lensa Photochromic / Transisi",
    tag: "Indoor & Outdoor",
    description:
      "Lensa yang berubah warna menjadi lebih gelap otomatis saat terpapar sinar matahari di luar ruangan.",
    benefits: [
      "Praktis 2-in-1 untuk indoor dan outdoor",
      "Perlindungan sinar UV di luar ruangan",
      "Kembali jernih saat berada di dalam ruangan",
    ],
  },
  {
    id: "progressive",
    name: "Lensa Progresif / Multifokal",
    tag: "Jarak Dekat & Jauh",
    description:
      "Lensa tanpa garis pembatas untuk membantu penglihatan jelas pada jarak dekat, menengah, dan jauh sekaligus.",
    benefits: [
      "Transisi pandangan halus tanpa batas garis",
      "Nyaman untuk membaca dan melihat jauh",
      "Tampilan estetik seperti lensa normal",
    ],
  },
];

export const CORPORATE_SERVICES = {
  title: "Corporate & Community Eyecare Program",
  subtitle: "Program Kemitraan Kesehatan Mata untuk Perusahaan & Institusi",
  description:
    "Optik Ezia melayani program pemeriksaan mata massal terstandar, voucher korporat, dan penyediaan kacamata kerja untuk institusi, sekolah, maupun perusahaan.",
  benefits: [
    {
      title: "Pemeriksaan On-Site",
      description: "Tim optometris kami dapat hadir langsung di kantor Anda dengan peralatan refraksi portabel standar industri.",
    },
    {
      title: "Skema Manfaat Karyawan",
      description: "Kerjasama voucher kacamata atau sistem reimburse fleksibel sesuai paket tunjangan kesehatan perusahaan.",
    },
    {
      title: "Edukasi & Konsultasi Mata Digital",
      description: "Sesi sharing seputar kesehatan mata di era digital (Computer Vision Syndrome) untuk produktivitas karyawan.",
    },
  ],
};

export const WARRANTY_POLICIES = [
  {
    title: "Garansi Akurasi Refraksi",
    duration: "30 Hari",
    description: "Penyesuaian ukuran lensa gratis jika dalam 30 hari pertama Anda merasa kurang nyaman atau pusing dengan ukuran baru.",
  },
  {
    title: "Gratis Penyetelan & Fitting",
    duration: "Seumur Hidup",
    description: "Layanan fitting ulang posisi nosepad, kencangkan baut frame, dan perataan engsel di semua cabang Optik Ezia.",
  },
  {
    title: "Gratis Pembersihan Ultrasonik",
    duration: "Seumur Hidup",
    description: "Pembersihan mendalam menggunakan gelombang ultrasonik untuk mengangkat debu dan kotoran pada sela-sela bingkai.",
  },
  {
    title: "Jaminan Keaslian Lensa & Frame",
    duration: "100% Original",
    description: "Semua lensa optik dan bingkai yang didistribusikan terjamin keaslian dan mutunya langsung dari distributor resmi.",
  },
];
