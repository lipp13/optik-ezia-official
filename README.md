# Optik Ezia — Official Website

Website profil perusahaan dan katalog resmi **Optik Ezia** yang dirancang dengan konsep **Modern Optical × Editorial Commerce × Premium Retail × Cinematic Motion**.

Dikembangkan secara khusus oleh **Alif Alfathar** untuk memberikan pengalaman visual yang tenang, hangat, informatif, dan interaktif bagi para pelanggan kacamata dan perawatan penglihatan di Indonesia.

---

## 📌 Fitur Utama

- **Hero & Interactive 3D Frame**: Presentasi kacamata modern dengan tipografi berjenjang (*Text Reveal*), tombol magnetik, dan aksen 3D ringan tanpa membebani performa.
- **Galeri Horizontal Eyewear**: Eksplorasi koleksi frame dan kacamata hitam dengan navigasi horizontal yang halus.
- **Katalog Produk Terkurasi**: Kategori lengkap mencakup Frame Optikal, Kacamata Hitam (Sunglasses), Lensa Anti-Radiasi, dan Softlens.
- **Alur Layanan & Pemeriksaan (The Ezia Experience)**: Panduan 5 tahapan layanan mulai dari pemeriksaan ketajaman mata, konsultasi kebutuhan lensa, pemilihan bentuk frame, fitting ergonomis, hingga perawatan berkala.
- **Direktori Cabang & Toko**: Informasi area lokasi cabang Optik Ezia (Pondok Cina, Depok Town Square, Sentul City, Cimanggu, Gading Serpong) terhubung langsung ke media sosial resmi.
- **Cinematic Motion Design**:
  - *Text Reveal* berbasis fisika kata per kata.
  - *Image Mask Transitions* menggunakan `clip-path` dan *parallax* halus.
  - *Custom Cursor* kontekstual untuk desktop.
  - *Smooth Scroll* menggunakan Lenis dengan dukungan `@media (prefers-reduced-motion: reduce)`.
- **Integrasi Media Sosial Resmi**: Terhubung langsung ke Instagram resmi [@optikezia](https://www.instagram.com/optikezia).

---

## 🛠️ Teknologi & Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, TypeScript)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Motion & Animasi**: [Framer Motion](https://www.framer.com/motion/), [GSAP](https://gsap.com/)
- **Smooth Scrolling**: [Lenis](https://lenis.darkroom.engineering/)
- **3D Engine**: [Three.js](https://threejs.org/) / [React Three Fiber](https://r3f.docs.pmnd.rs/) & [Drei](https://github.com/pmndrs/drei)
- **Ikonografi**: [Lucide React](https://lucide.dev/)

---

## 📂 Struktur Direktori

```text
src/
├── app/
│   ├── layout.tsx         # Root Layout, font, smooth scroll & kursor
│   ├── page.tsx           # Halaman utama (Homepage)
│   ├── collection/        # Halaman katalog lengkap kacamata & lensa
│   ├── services/          # Halaman layanan pemeriksaan mata & fitting
│   ├── stores/            # Halaman direktori cabang
│   ├── about/             # Halaman profil & filosofi Optik Ezia
│   └── globals.css        # Desain token, warna Warm Ivory & utilitas
├── components/
│   ├── 3d/                # Komponen canvas 3D frame ringan
│   ├── home/              # Komponen section homepage
│   ├── layout/            # Navbar, Mobile Menu, dan Footer
│   └── ui/                # Motion primitives (TextReveal, ImageReveal, MagneticButton, CustomCursor)
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
