"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Instagram, ExternalLink, Check, Info } from "lucide-react";
import { STORES_DATA } from "@/data/stores";
import { OPTIK_EZIA_CONFIG } from "@/data/optikEzia";

export default function StoresPage() {
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
    <div className="pt-28 pb-32 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Page Header */}
        <div className="max-w-3xl pb-12 border-b border-sand-border">
          <span className="editorial-tag text-accent-terracotta block mb-3">
            DIREKTORI CABANG
          </span>
          <h1 className="editorial-headline text-4xl sm:text-6xl text-charcoal">
            Lokasi Cabang Optik Ezia
          </h1>
          <p className="text-base sm:text-lg font-light text-charcoal-muted mt-4 leading-relaxed">
            Daftar area cabang Optik Ezia untuk layanan pemeriksaan mata, pembelian frame kacamata, lensa anti-radiasi, sunglasses, dan perawatan kacamata.
          </p>
        </div>

        {/* Verification Note */}
        <div className="mt-8 p-5 bg-sand/30 border border-sand-border flex items-start gap-3.5 text-xs text-charcoal-muted">
          <Info className="w-4 h-4 text-accent-terracotta shrink-0 mt-0.5" />
          <p>
            Daftar cabang berikut merujuk pada area operasional Optik Ezia. Untuk konfirmasi jam operasional terkini dan ketersediaan stok produk spesifik, disarankan menghubungi Instagram resmi kami di <a href={OPTIK_EZIA_CONFIG.instagram.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-charcoal underline underline-offset-2">{OPTIK_EZIA_CONFIG.instagram.handle}</a>.
          </p>
        </div>

        {/* City Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto py-8 scrollbar-none border-b border-sand-border">
          {cities.map((city) => (
            <button
              key={city.id}
              onClick={() => setSelectedCity(city.id)}
              className={`px-5 py-2.5 text-xs uppercase tracking-[0.16em] font-medium whitespace-nowrap transition-all duration-300 ${
                selectedCity === city.id
                  ? "bg-charcoal text-ivory"
                  : "bg-sand/40 text-charcoal-muted hover:bg-sand hover:text-charcoal"
              }`}
            >
              {city.label}
            </button>
          ))}
        </div>

        {/* Stores List */}
        <div className="space-y-12 pt-12">
          {filteredStores.map((store) => (
            <div
              key={store.id}
              id={store.id}
              className="bg-ivory-warm border border-sand-border p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center hover:border-charcoal/40 transition-colors"
            >
              {/* Photo */}
              <div className="lg:col-span-5 relative aspect-[16/10] w-full overflow-hidden bg-sand/30 border border-sand-border group">
                <Image
                  src={store.image}
                  alt={store.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-editorial"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute top-3 left-3 bg-charcoal/90 text-ivory text-[9px] uppercase tracking-widest px-2.5 py-1">
                  {store.city}
                </div>
              </div>

              {/* Store Info */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="text-2xl font-light text-charcoal font-display mb-1">
                    {store.name}
                  </h3>
                  <span className="text-xs uppercase tracking-wider text-accent-terracotta font-medium block mb-3">
                    Area: {store.area} ({store.city})
                  </span>
                  <p className="text-xs sm:text-sm font-light text-charcoal-muted leading-relaxed">
                    {store.address}
                  </p>
                </div>

                {/* Services list */}
                <div className="border-t border-sand-border pt-4">
                  <span className="text-[10px] uppercase tracking-wider text-charcoal-light block mb-2">
                    Layanan di Cabang Ini:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {store.services.map((srv, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-sand/60 text-charcoal text-[11px] flex items-center gap-1.5"
                      >
                        <Check className="w-3 h-3 text-accent-terracotta" />
                        <span>{srv}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href={OPTIK_EZIA_CONFIG.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-editorial-primary flex-1 text-center py-3 text-xs"
                  >
                    <Instagram className="w-3.5 h-3.5 text-accent-gold" />
                    <span>Tanya via Instagram @optikezia</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
