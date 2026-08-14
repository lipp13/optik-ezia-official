"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Instagram, CheckCircle2 } from "lucide-react";
import { OPTIK_EZIA_CONFIG } from "@/data/optikEzia";

export default function AboutPage() {
  return (
    <div className="pt-28 pb-32 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Page Header */}
        <div className="max-w-3xl pb-12 border-b border-sand-border">
          <span className="editorial-tag text-accent-terracotta block mb-3">
            TENTANG KAMI
          </span>
          <h1 className="editorial-headline text-4xl sm:text-6xl text-charcoal">
            Mengenal Lebih Dekat Optik Ezia
          </h1>
          <p className="text-base sm:text-lg font-light text-charcoal-muted mt-4 leading-relaxed">
            Menghadirkan pengalaman memilih kacamata dan pemeriksaan mata yang ramah, nyaman, dan terpercaya bagi setiap pelanggan.
          </p>
        </div>

        {/* Story Section 1: The Vision */}
        <div className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="editorial-tag text-accent-terracotta">
              01 / KOMITMEN KAMI
            </span>
            <h2 className="editorial-headline text-3xl sm:text-4xl text-charcoal">
              Kenyamanan Penglihatan & Kesesuaian Gaya.
            </h2>
            <p className="text-sm sm:text-base font-light text-charcoal-muted leading-relaxed">
              Optik Ezia hadir untuk membantu Anda menemukan kacamata yang sesuai dengan kebutuhan penglihatan dan karakter penampilan Anda. Kami memahami bahwa setiap orang memiliki kebutuhan ukuran lensa dan bentuk wajah yang unik.
            </p>
            <p className="text-sm sm:text-base font-light text-charcoal-muted leading-relaxed">
              Oleh karena itu, kami menyediakan beragam pilihan bingkai kacamata optikal, kacamata hitam, lensa anti-radiasi, hingga softlens, disertai konsultasi dan penyetelan kacamata yang teliti.
            </p>
          </div>

          <div className="lg:col-span-6 relative aspect-[4/3] w-full overflow-hidden bg-sand/30 border border-sand-border group">
            <Image
              src="https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&q=80&w=1200"
              alt="Suasana Optik Ezia"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-editorial"
            />
          </div>
        </div>

        {/* Story Section 2: Services */}
        <div className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-t border-sand-border">
          <div className="lg:col-span-6 order-2 lg:order-1 relative aspect-[4/3] w-full overflow-hidden bg-sand/30 border border-sand-border group">
            <Image
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1200"
              alt="Penyetelan dan Pelayanan Kacamata"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-editorial"
            />
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <span className="editorial-tag text-accent-terracotta">
              02 / PELAYANAN
            </span>
            <h2 className="editorial-headline text-3xl sm:text-4xl text-charcoal">
              Pelayanan Menyeluruh di Cabang Kami.
            </h2>
            <p className="text-sm sm:text-base font-light text-charcoal-muted leading-relaxed">
              Di setiap cabang Optik Ezia, tim kami siap melayani pemeriksaan ketajaman mata, pembersihan kacamata, penggantian bantalan hidung (nosepad), dan penyetelan gagang bingkai agar kacamata tetap nyaman dipakai setiap hari.
            </p>
            <p className="text-sm sm:text-base font-light text-charcoal-muted leading-relaxed">
              Kami juga terus memperbarui koleksi model frame agar Anda selalu mendapatkan pilihan kacamata yang modern dan berkualitas.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="py-16 border-t border-sand-border">
          <div className="max-w-2xl mb-12">
            <span className="editorial-tag text-accent-terracotta block mb-2">
              PRINSIP UTAMA
            </span>
            <h2 className="editorial-headline text-3xl sm:text-4xl text-charcoal">
              Nilai Pelayanan Optik Ezia
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-ivory-warm border border-sand-border space-y-3">
              <span className="text-xs uppercase tracking-widest text-accent-terracotta font-mono">01</span>
              <h3 className="text-lg font-light text-charcoal font-display">Pemeriksaan Cermat</h3>
              <p className="text-xs text-charcoal-muted leading-relaxed">
                Pemeriksaan refraksi mata untuk memastikan ketepatan resep lensa minus, plus, atau silinder Anda.
              </p>
            </div>

            <div className="p-8 bg-ivory-warm border border-sand-border space-y-3">
              <span className="text-xs uppercase tracking-widest text-accent-terracotta font-mono">02</span>
              <h3 className="text-lg font-light text-charcoal font-display">Kenyamanan Fitting</h3>
              <p className="text-xs text-charcoal-muted leading-relaxed">
                Penyetelan bingkai agar pas di hidung dan telinga tanpa menimbulkan rasa tertekan.
              </p>
            </div>

            <div className="p-8 bg-ivory-warm border border-sand-border space-y-3">
              <span className="text-xs uppercase tracking-widest text-accent-terracotta font-mono">03</span>
              <h3 className="text-lg font-light text-charcoal font-display">Dukungan Ramah</h3>
              <p className="text-xs text-charcoal-muted leading-relaxed">
                Konsultasi ramah dan layanan pembersihan serta perawatan berkala untuk kacamata Anda.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 p-10 bg-ivory-warm border border-sand-border text-center space-y-6">
          <h3 className="editorial-headline text-3xl text-charcoal max-w-xl mx-auto">
            Temukan Kacamata Impian Anda di Optik Ezia
          </h3>
          <p className="text-xs sm:text-sm text-charcoal-muted max-w-md mx-auto">
            Kunjungi cabang kami atau terhubung melalui media sosial resmi untuk informasi lebih lanjut.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link href="/stores" className="btn-editorial-primary inline-flex items-center gap-2">
              <span>Lokasi Cabang</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={OPTIK_EZIA_CONFIG.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-editorial-outline inline-flex items-center gap-2"
            >
              <Instagram className="w-4 h-4 text-accent-terracotta" />
              <span>Instagram @optikezia</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
