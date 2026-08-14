"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Instagram, ArrowRight, ExternalLink, Info } from "lucide-react";
import { STORES_DATA } from "@/data/stores";
import { OPTIK_EZIA_CONFIG } from "@/data/optikEzia";

export function StoreFinderPreview() {
  const [selectedCity, setSelectedCity] = useState<string>("all");

  const cities = [
    { id: "all", label: "Semua Area" },
    { id: "Depok", label: "Depok" },
    { id: "Bogor", label: "Bogor" },
    { id: "Tangerang", label: "Tangerang" },
  ];

  const filteredStores =
    selectedCity === "all"
      ? STORES_DATA
      : STORES_DATA.filter((s) => s.city === selectedCity);

  return (
    <section className="py-24 sm:py-32 bg-ivory relative" id="store-finder">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-sand-border gap-6">
          <div>
            <span className="editorial-tag text-accent-terracotta block mb-2">
              LOKASI & CABANG
            </span>
            <h2 className="editorial-headline text-3xl sm:text-5xl text-charcoal">
              Temukan Cabang Optik Ezia
            </h2>
          </div>

          {/* City Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {cities.map((city) => (
              <button
                key={city.id}
                onClick={() => setSelectedCity(city.id)}
                className={`px-4 py-2 text-xs uppercase tracking-[0.15em] font-medium whitespace-nowrap transition-all duration-300 ${
                  selectedCity === city.id
                    ? "bg-charcoal text-ivory"
                    : "bg-sand/40 text-charcoal-muted hover:bg-sand hover:text-charcoal"
                }`}
              >
                {city.label}
              </button>
            ))}
          </div>
        </div>

        {/* Verification Note */}
        <div className="mt-6 p-4 bg-sand/30 border border-sand-border flex items-start gap-3 text-xs text-charcoal-muted">
          <Info className="w-4 h-4 text-accent-terracotta shrink-0 mt-0.5" />
          <p>
            Informasi lokasi cabang di bawah ini dihimpun dari direktori area Optik Ezia. Untuk konfirmasi jam buka dan ketersediaan model frame di masing-masing cabang, silakan hubungi Instagram resmi kami di <a href={OPTIK_EZIA_CONFIG.instagram.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-charcoal underline underline-offset-2">{OPTIK_EZIA_CONFIG.instagram.handle}</a>.
          </p>
        </div>

        {/* Stores Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
          {filteredStores.map((store) => (
            <div
              key={store.id}
              className="bg-ivory-warm border border-sand-border flex flex-col justify-between overflow-hidden hover:border-charcoal/40 transition-all duration-300 group"
            >
              {/* Store Photo */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-sand/30">
                <Image
                  src={store.image}
                  alt={store.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-editorial"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-3 left-3 bg-charcoal/90 text-ivory text-[9px] uppercase tracking-widest px-2.5 py-1">
                  {store.city}
                </div>
              </div>

              {/* Store Details */}
              <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-light tracking-wide text-charcoal font-display mb-1">
                    {store.name.replace("Optik Ezia — ", "")}
                  </h3>
                  <span className="text-[10px] uppercase tracking-wider text-accent-terracotta font-medium block mb-3">
                    Area: {store.area}
                  </span>
                  <p className="text-xs text-charcoal-muted leading-relaxed font-light mb-4">
                    {store.address}
                  </p>

                  <div className="space-y-1 text-[11px] text-charcoal-muted border-t border-sand-border pt-3">
                    <span className="text-charcoal-light block">Layanan di cabang:</span>
                    <span className="text-charcoal font-medium">
                      {store.services.join(" • ")}
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-sand-border flex items-center justify-between gap-3">
                  <a
                    href={OPTIK_EZIA_CONFIG.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 bg-charcoal text-ivory text-[11px] font-semibold uppercase tracking-wider hover:bg-charcoal-deep transition-colors"
                  >
                    <Instagram className="w-3.5 h-3.5 text-accent-gold" />
                    <span>Tanya Cabang Ini</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 p-8 bg-ivory-warm border border-sand-border flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-base font-light text-charcoal font-display">
              Ingin Mengetahui Koleksi yang Tersedia di Cabang Anda?
            </h4>
            <p className="text-xs text-charcoal-muted">
              Hubungi Instagram resmi Optik Ezia untuk informasi stok frame, lensa, dan pemeriksaan mata.
            </p>
          </div>
          <Link
            href="/stores"
            className="btn-editorial-outline whitespace-nowrap"
          >
            <span>Lihat Semua Lokasi</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
