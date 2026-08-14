"use client";

import React from "react";
import Link from "next/link";
import { Eye, Glasses, Wrench, HeartHandshake } from "lucide-react";

export function WhyOptikEzia() {
  const values = [
    {
      icon: Eye,
      title: "Pemeriksaan Ketajaman Mata",
      description: "Pengecekan refraksi secara teliti untuk kenyamanan membaca, bekerja, dan beraktivitas.",
    },
    {
      icon: Glasses,
      title: "Pilihan Frame & Lensa Lengkap",
      description: "Koleksi frame optikal, kacamata hitam, lensa anti-radiasi, hingga softlens untuk berbagai kebutuhan.",
    },
    {
      icon: Wrench,
      title: "Penyetelan & Fitting Kacamata",
      description: "Penyesuaian sudut bantalan hidung dan gagang agar kacamata terpasang pas dan nyaman.",
    },
    {
      icon: HeartHandshake,
      title: "Konsultasi Ramah & Terpercaya",
      description: "Tim Optik Ezia siap membantu Anda memilih bentuk kacamata yang sesuai dengan proporsi wajah.",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-ivory-warm border-b border-sand-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="editorial-tag text-accent-terracotta block mb-2">
            NILAI & KOMITMEN
          </span>
          <h2 className="editorial-headline text-3xl sm:text-5xl text-charcoal">
            Pelayanan Optik yang Nyaman dan Terpercaya
          </h2>
        </div>

        {/* Value Statements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div
                key={idx}
                className="p-8 bg-ivory border border-sand-border flex flex-col justify-between space-y-6 hover:border-charcoal/30 transition-colors"
              >
                <div>
                  <div className="w-10 h-10 bg-sand/60 flex items-center justify-center mb-6 text-accent-terracotta">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-medium text-charcoal mb-2 font-display">
                    {val.title}
                  </h3>
                  <p className="text-xs text-charcoal-muted leading-relaxed font-light">
                    {val.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-sand-border/60 text-[10px] uppercase tracking-widest text-charcoal-light">
                  Komitmen Optik Ezia
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
