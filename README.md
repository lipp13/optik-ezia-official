# Optik Ezia — Official Website

Website profil perusahaan dan katalog resmi **Optik Ezia** yang dirancang dengan konsep **Modern Optical × Editorial Commerce × Premium Retail × Buttery Smooth Motion**.

Dikembangkan secara khusus oleh **Alif Alfathar** dengan arsitektur performa tinggi yang sangat ringan, cepat, bersih, dan nyaman dijelajahi oleh pelanggan.

---

## 📌 Keunggulan & Arsitektur Performa

- **Ultra Lightweight & Fast (158 kB First Load JS)**: Bebas dari library 3D WebGL berat yang membebani GPU/RAM, digantikan dengan akselerasi GPU murni CSS 3D Transforms (`will-change: transform`, `preserve-3d`, `translate3d`).
- **Hero Kinetic 3D Typography ("EZIA OPTICAL")**: Watermark 3D elegan bertuliskan *EZIA OPTICAL* yang merespons pergerakan kursor mouse secara kinetik tanpa *frame drop*.
- **Preloader Mewah & Beranimasi**: Layar pembuka elegan dengan logo resmi *EZIA OPTICAL*, persentase progresif, dan transisi tirai penutup yang mulus.
- **Galeri Horizontal Eyewear**: Eksplorasi koleksi frame dan kacamata hitam dengan navigasi horizontal yang halus dan kontrol geser.
- **Katalog Produk Terkurasi & Tab Animasi**: Kategori lengkap (Frame Optikal, Sunglasses, Lensa Kacamata, Softlens) dengan transisi tata letak mulus.
- **Alur Layanan & Pemeriksaan (The Ezia Experience)**: Panduan 5 tahapan layanan terpadu dengan transisi *crossfade* visual dan indikator aktif bertahap.
- **Direktori Cabang & Area**: Informasi area cabang resmi Optik Ezia (Pondok Cina, Depok Town Square, Sentul City, Cimanggu, Gading Serpong) terhubung langsung ke media sosial resmi [@optikezia](https://www.instagram.com/optikezia).

---

## 🛠️ Teknologi & Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, TypeScript)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Motion & Animasi**: [Framer Motion](https://www.framer.com/motion/), [GSAP](https://gsap.com/)
- **Smooth Scrolling**: [Lenis](https://lenis.darkroom.engineering/) (Tuned 60 FPS)
- **Ikonografi**: [Lucide React](https://lucide.dev/)

---

## 📂 Struktur Direktori

```text
src/
├── app/
│   ├── layout.tsx         # Root Layout, metadata, preloader & smooth scroll
│   ├── page.tsx           # Halaman utama (Homepage)
│   ├── collection/        # Halaman katalog lengkap kacamata & lensa
│   ├── services/          # Halaman layanan pemeriksaan mata & fitting
│   ├── stores/            # Halaman direktori cabang
│   ├── about/             # Halaman profil & filosofi Optik Ezia
│   └── globals.css        # Desain token, warna Warm Ivory & utilitas
├── components/
│   ├── home/              # Komponen section homepage (Hero, KineticText, BrandStory, dll.)
│   ├── layout/            # Navbar, Mobile Menu, dan Footer
│   └── ui/                # Motion primitives (Preloader, TextReveal, ImageReveal, MagneticButton, CustomCursor)
└── data/
    ├── optikEzia.ts       # Konfigurasi brand & media sosial resmi
    ├── stores.ts          # Data lokasi cabang
    ├── products.ts        # Data kurasi koleksi eyewear
    └── services.ts        # Data alur layanan & opsi lensa
```

---

## 🚀 Menjalankan Project Secara Lokal

1. **Clone repository:**
   ```bash
   git clone https://github.com/lipp13/optik-ezia-official.git
   cd optik-ezia-official
   ```

2. **Install dependensi:**
   ```bash
   npm install
   ```

3. **Jalankan server pengembangan:**
   ```bash
   npm run dev
   ```
   Buka [http://localhost:3000](http://localhost:3000) pada browser Anda.

4. **Build untuk produksi:**
   ```bash
   npm run build
   npm run start
   ```

---

## 📄 Lisensi & Hak Cipta

Proyek ini dilindungi di bawah lisensi **MIT License**.  
Hak Cipta (c) 2026 **Alif Alfathar**. Seluruh hak cipta dilindungi undang-undang.
