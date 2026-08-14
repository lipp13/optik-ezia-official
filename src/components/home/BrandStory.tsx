"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { TextReveal } from "@/components/ui/TextReveal";

export function BrandStory() {
  return (
    <section className="py-24 sm:py-32 bg-ivory-warm border-t border-b border-sand-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <span className="editorial-tag text-accent-terracotta block mb-3">
              FILOSOFI LAYANAN
            </span>
            <TextReveal
              as="h2"
              text="Bukan Sekadar Kacamata. Kenyamanan Pandangan Anda."
              className="editorial-headline text-3xl sm:text-4xl lg:text-5xl text-charcoal"
            />
          </div>

          <div className="lg:col-span-7 space-y-6 text-charcoal-muted font-light leading-relaxed">
            <p className="text-base sm:text-lg">
              Di Optik Ezia, kami percaya kacamata adalah perpaduan antara fungsi optik yang tepat dan rasa percaya diri pemakainya. Kami siap membantu Anda menemukan kacamata yang tidak hanya pas dengan ukuran mata, tetapi juga serasi dengan bentuk wajah dan rutinitas harian.
            </p>
            <p className="text-sm sm:text-base">
              Dari pemeriksaan mata, konsultasi kebutuhan lensa anti-radiasi atau progresif, hingga penyetelan kenyamanan bingkai, kami berkomitmen memberikan pelayanan optik yang ramah dan terpercaya.
            </p>
          </div>
        </div>

        {/* Editorial Asymmetric Visual Grid with ImageReveal */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-16 lg:mt-24 items-center">
          {/* Main Large Image */}
          <div className="md:col-span-7 relative group overflow-hidden bg-sand/30 border border-sand-border">
            <ImageReveal
              src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=1200"
              alt="Optik Ezia Lifestyle Eyewear"
              aspectRatio="aspect-[4/3]"
            />
            <div className="p-6 bg-ivory/95 flex items-center justify-between border-t border-sand-border text-xs tracking-wider">
              <div>
                <span className="font-semibold uppercase text-charcoal block">Pilihan Frame & Lensa</span>
                <span className="text-charcoal-light">Konsultasi penyesuaian bentuk wajah di cabang</span>
              </div>
              <span className="editorial-tag text-charcoal">OPTIK EZIA</span>
            </div>
          </div>

          {/* Secondary Stacked Content & Detail Card */}
          <div className="md:col-span-5 flex flex-col space-y-8">
            <div className="relative aspect-[5/4] w-full overflow-hidden bg-sand/30 border border-sand-border group">
              <ImageReveal
                src="https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&q=80&w=1000"
                alt="Frame Kacamata Berkualitas"
                aspectRatio="aspect-[5/4]"
              />
              <div className="absolute top-4 right-4 bg-charcoal/90 text-ivory text-[10px] uppercase tracking-widest px-3 py-1.5 backdrop-blur-xs z-10">
                Koleksi Eyewear
              </div>
            </div>

            {/* Feature Checklist */}
            <div className="p-8 bg-ivory border border-sand-border space-y-4">
              <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-charcoal">
                Fokus Pelayanan Optik Ezia
              </h4>
              <ul className="space-y-3 text-xs text-charcoal-muted">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-accent-terracotta shrink-0 mt-0.5" />
                  <span>Pemeriksaan ketajaman mata dan refraksi</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-accent-terracotta shrink-0 mt-0.5" />
                  <span>Pilihan frame optikal, sunglasses, dan softlens</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-accent-terracotta shrink-0 mt-0.5" />
                  <span>Penyetelan posisi kacamata agar pas dan nyaman</span>
                </li>
              </ul>
              
              <div className="pt-4 border-t border-sand-border">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-charcoal hover:text-accent-terracotta transition-colors group"
                >
                  <span>Selengkapnya Tentang Optik Ezia</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
