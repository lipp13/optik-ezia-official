"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, MapPin, Instagram } from "lucide-react";
import { OPTIK_EZIA_CONFIG } from "@/data/optikEzia";

export function FinalCTA() {
  return (
    <section className="py-24 sm:py-32 bg-ivory text-charcoal border-t border-sand-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
        <span className="editorial-tag text-accent-terracotta block mb-4">
          LANGKAH AWAL KENYAMANAN PENGLIHATAN
        </span>
        
        <h2 className="editorial-headline text-4xl sm:text-6xl lg:text-7xl max-w-4xl mx-auto mb-6">
          YOUR NEXT FRAME <br />
          <span className="italic font-serif text-charcoal/80">STARTS HERE.</span>
        </h2>

        <p className="text-base sm:text-lg font-light text-charcoal-muted max-w-xl mx-auto mb-10 leading-relaxed">
          Kunjungi cabang Optik Ezia terdekat untuk pemeriksaan mata dan pemilihan kacamata yang nyaman sesuai kebutuhan Anda.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/stores"
            className="btn-editorial-primary w-full sm:w-auto px-9 py-4 group"
            data-cursor-text="LOKASI"
          >
            <MapPin className="w-4 h-4 text-accent-gold" />
            <span>Cari Cabang Terdekat</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <a
            href={OPTIK_EZIA_CONFIG.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-editorial-outline w-full sm:w-auto px-9 py-4 group"
          >
            <Instagram className="w-4 h-4 text-accent-terracotta" />
            <span>Instagram {OPTIK_EZIA_CONFIG.instagram.handle}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
