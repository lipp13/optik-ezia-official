"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Activity, Eye, Shield } from "lucide-react";
import { LENS_OPTIONS } from "@/data/services";

export function EyeCareSection() {
  return (
    <section className="py-24 sm:py-32 bg-ivory-warm border-t border-sand-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="editorial-tag text-accent-terracotta">
              LAYANAN REFRAKSI & LENSA
            </span>
            <h2 className="editorial-headline text-3xl sm:text-5xl text-charcoal">
              Pemeriksaan Mata & Rekomendasi Lensa Tepat.
            </h2>
            <p className="text-base sm:text-lg font-light text-charcoal-muted leading-relaxed">
              Kenyamanan melihat ditentukan oleh keakuratan resep dan kecocokan jenis lensa dengan aktivitas Anda. Optik Ezia melayani pemeriksaan refraksi dan konsultasi pemilihan lensa anti-radiasi, transisi, maupun progresif.
            </p>

            <div className="pt-2 space-y-4">
              <div className="flex items-start gap-4 p-4 bg-ivory border border-sand-border">
                <Eye className="w-5 h-5 text-accent-terracotta shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-charcoal">
                    Pemeriksaan Ketajaman Mata
                  </h4>
                  <p className="text-xs text-charcoal-muted mt-1 leading-relaxed">
                    Pengecekan minus, plus, dan silinder secara teliti untuk kenyamanan penglihatan jarak dekat maupun jauh.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-ivory border border-sand-border">
                <Activity className="w-5 h-5 text-accent-terracotta shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-charcoal">
                    Penyetelan & Fitting Bingkai
                  </h4>
                  <p className="text-xs text-charcoal-muted mt-1 leading-relaxed">
                    Penyesuaian posisi bantalan hidung dan gagang kacamata agar stabil dan tidak menekan wajah.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/services"
                className="btn-editorial-primary group"
                data-cursor-text="LAYANAN"
              >
                <span>Pelajari Layanan Pemeriksaan</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Visual Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-sand/30 border border-sand-border group">
              <Image
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200"
                alt="Pemeriksaan Mata Optik Ezia"
                fill
                className="object-cover transition-transform duration-700 ease-editorial group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 text-ivory">
                <span className="text-[10px] uppercase tracking-widest text-accent-gold block mb-1">
                  Konsultasi Optik Ezia
                </span>
                <p className="text-sm font-light leading-snug">
                  Pemeriksaan ketajaman mata dan panduan memilih frame yang sesuai proporsi wajah.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Lens Options Cards */}
        <div className="mt-20 pt-16 border-t border-sand-border">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="editorial-tag text-accent-terracotta block mb-2">
              PILIHAN JENIS LENSA
            </span>
            <h3 className="editorial-headline text-2xl sm:text-3xl text-charcoal">
              Solusi Lensa untuk Kebutuhan Visual Harian
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {LENS_OPTIONS.map((lens) => (
              <div
                key={lens.id}
                className="p-8 bg-ivory border border-sand-border flex flex-col justify-between space-y-6 hover:border-charcoal/30 transition-colors"
              >
                <div>
                  <span className="editorial-tag text-charcoal-light block mb-2">
                    {lens.tag}
                  </span>
                  <h4 className="text-lg font-light tracking-wide text-charcoal font-display mb-3">
                    {lens.name}
                  </h4>
                  <p className="text-xs text-charcoal-muted leading-relaxed mb-6">
                    {lens.description}
                  </p>

                  <ul className="space-y-2.5 text-xs text-charcoal border-t border-sand-border pt-4">
                    {lens.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-accent-terracotta shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/services"
                  className="text-xs uppercase tracking-wider font-semibold text-charcoal hover:text-accent-terracotta inline-flex items-center gap-1 group"
                >
                  <span>Info Selengkapnya</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
