# Optik Ezia — Official Website

Website profil perusahaan dan katalog resmi **Optik Ezia** yang dirancang dengan konsep **Modern Optical × Editorial Commerce × Premium Retail × Cinematic Full Motion**.

Dikembangkan secara khusus oleh **Alif Alfathar** untuk memberikan pengalaman visual yang tenang, hangat, informatif, dan interaktif bagi para pelanggan kacamata dan perawatan penglihatan di Indonesia.

---

## 📌 Fitur Utama & Motion Design

- **Hero Editorial & Interactive Tilt**: Presentasi kacamata modern dengan tipografi berjenjang (*Text Reveal*), fisika kemiringan kartu mengikuti kursor mouse (*Mouse Tilt Parallax*), dan tombol magnetik responsif.
- **Galeri Horizontal Eyewear**: Eksplorasi koleksi frame dan kacamata hitam dengan navigasi horizontal yang halus dan kontrol geser.
- **Katalog Produk Terkurasi & Tab Animasi**: Kategori lengkap (Frame Optikal, Sunglasses, Lensa Kacamata, Softlens) dengan transisi tata letak mulus (*Layout Spring Animations*).
- **Alur Layanan & Pemeriksaan (The Ezia Experience)**: Panduan 5 tahapan layanan terpadu dengan transisi *crossfade* visual dan indikator aktif bertahap.
- **Direktori Cabang & Area**: Informasi area cabang resmi Optik Ezia (Pondok Cina, Depok Town Square, Sentul City, Cimanggu, Gading Serpong) terhubung langsung ke media sosial resmi.
- **Cinematic Motion Primitives**:
  - *Text Reveal*: Tipografi dinamis kata demi kata.
  - *Image Reveal*: Efek mask `clip-path` dan *parallax scroll* halus.
  - *Magnetic Buttons*: Tombol dengan tarikan gaya magnetik fisika pegas.
  - *Custom Cursor*: Kursor editorial khusus desktop dengan label aksi kontekstual (`LOKASI`, `KOLEKSI`), otomatis nonaktif pada layar sentuh/mobile.
  - *Smooth Scroll*: Lenis 60fps dengan fallback `@media (prefers-reduced-motion: reduce)`.
- **Integrasi Media Sosial Resmi**: Terhubung langsung ke Instagram resmi [@optikezia](https://www.instagram.com/optikezia).

---

## 🛠️ Teknologi & Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, TypeScript)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Motion & Animasi**: [Framer Motion](https://www.framer.com/motion/), [GSAP](https://gsap.com/)
- **Smooth Scrolling**: [Lenis](https://lenis.darkroom.engineering/)
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
│   ├── home/              # Komponen section homepage (Hero, BrandStory, HorizontalScroller, dll.)
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
