"use client";

import React, { useState, useMemo, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Instagram, ArrowRight, ExternalLink, Info, Clock, Navigation, Phone } from "lucide-react";
import { STORES_DATA, OPTIK_EZIA_CONTACT } from "@/data/stores";
import { OPTIK_EZIA_CONFIG } from "@/data/optikEzia";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";

// Dynamic import for map to avoid SSR issues
const InteractiveMap = dynamic(
  () => import("@/components/ui/InteractiveMap").then((mod) => mod.InteractiveMap),
  { 
    ssr: false,
    loading: () => (
      <div className="w-full h-[400px] md:h-[500px] bg-sand/30 border-2 border-sand-border rounded-lg flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    ),
  }
);

export function StoreFinderPreview() {
  const [selectedCity, setSelectedCity] = useState<string>("all");
  const [selectedStoreId, setSelectedStoreId] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"map" | "list">("map");

  const cities = [
    { id: "all", label: "Semua Area" },
    { id: "Depok", label: "Depok" },
    { id: "Bogor", label: "Bogor" },
    { id: "Tangerang", label: "Tangerang" },
  ];

  const filteredStores = useMemo(() => 
    selectedCity === "all"
      ? STORES_DATA
      : STORES_DATA.filter((s) => s.city === selectedCity),
    [selectedCity]
  );

  const selectedStore = useMemo(
    () => selectedStoreId ? filteredStores.find((s) => s.id === selectedStoreId) : null,
    [selectedStoreId, filteredStores]
  );

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-ivory relative overflow-hidden" id="store-finder">
      {/* Subtle decorative background */}
      <div className="absolute top-0 right-0 w-80 h-80 sm:w-96 sm:h-96 bg-gradient-to-bl from-accent-gold/6 to-transparent rounded-full blur-3xl opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col gap-6 pb-8 sm:pb-12 border-b border-sand-border">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="editorial-tag text-accent-terracotta block mb-2">
              LOKASI & CABANG
            </span>
            <h2 className="editorial-headline text-2xl sm:text-4xl lg:text-5xl text-charcoal">
              Temukan Cabang Optik Ezia Terdekat
            </h2>
          </motion.div>

          {/* View Mode & City Filter */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            {/* View Mode Toggle - Mobile First */}
            <div className="flex items-center gap-2 bg-sand/40 p-1 rounded-lg w-full sm:w-auto">
              <button
                onClick={() => setViewMode("map")}
                className={`flex-1 sm:flex-none px-4 py-2 text-xs uppercase tracking-[0.15em] font-medium transition-all duration-300 rounded ${
                  viewMode === "map"
                    ? "bg-charcoal text-ivory shadow-sm"
                    : "text-charcoal-muted hover:text-charcoal"
                }`}
              >
                <MapPin className="w-4 h-4 inline mr-2" />
                Peta
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`flex-1 sm:flex-none px-4 py-2 text-xs uppercase tracking-[0.15em] font-medium transition-all duration-300 rounded ${
                  viewMode === "list"
                    ? "bg-charcoal text-ivory shadow-sm"
                    : "text-charcoal-muted hover:text-charcoal"
                }`}
              >
                Daftar
              </button>
            </div>

            {/* City Filter Pills - Scrollable on Mobile */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none w-full sm:w-auto">
              {cities.map((city) => (
                <button
                  key={city.id}
                  onClick={() => {
                    setSelectedCity(city.id);
                    setSelectedStoreId(null);
                  }}
                  className={`px-3 sm:px-4 py-2 text-xs uppercase tracking-[0.15em] font-medium whitespace-nowrap transition-all duration-300 rounded ${
                    selectedCity === city.id
                      ? "bg-charcoal text-ivory shadow-sm"
                      : "bg-sand/40 text-charcoal-muted hover:bg-sand hover:text-charcoal"
                  }`}
                >
                  {city.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="mt-8 sm:mt-12">
          <AnimatePresence mode="wait">
            {viewMode === "map" ? (
              <motion.div
                key="map-view"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6 sm:space-y-8"
              >
                {/* Map Container */}
                <div className="w-full">
                  <Suspense fallback={<LoadingSpinner />}>
                    <InteractiveMap
                      stores={filteredStores}
                      selectedStoreId={selectedStoreId || undefined}
                      onStoreSelect={setSelectedStoreId}
                      height="400px"
                      className="sm:h-[500px]"
                    />
                  </Suspense>
                </div>

                {/* Selected Store Details - Mobile Optimized */}
                {selectedStore && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-ivory-warm border border-sand-border p-4 sm:p-6 lg:p-8"
                  >
                    <div className="flex flex-col lg:flex-row gap-6">
                      {/* Store Image - Smaller on Mobile */}
                      <div className="lg:w-1/3">
                        <div className="relative aspect-[16/9] lg:aspect-square w-full overflow-hidden bg-sand/30 border border-sand-border">
                          <Image
                            src={selectedStore.image}
                            alt={selectedStore.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 33vw"
                          />
                        </div>
                      </div>

                      {/* Store Info - Stacked on Mobile */}
                      <div className="lg:w-2/3 space-y-4">
                        <div>
                          <div className="flex items-start justify-between gap-4 mb-2">
                            <h3 className="text-xl sm:text-2xl font-light tracking-wide text-charcoal font-display">
                              {selectedStore.name}
                            </h3>
                            {selectedStore.branchNumber && (
                              <span className="px-3 py-1 bg-accent-terracotta text-ivory text-xs font-bold rounded-full shrink-0">
                                #{selectedStore.branchNumber}
                              </span>
                            )}
                          </div>
                          <span className="text-xs uppercase tracking-wider text-accent-terracotta font-medium">
                            {selectedStore.area}, {selectedStore.city}
                          </span>
                        </div>

                        <div className="space-y-3 text-sm">
                          <div className="flex items-start gap-3">
                            <Navigation className="w-5 h-5 text-accent-terracotta shrink-0 mt-0.5" />
                            <p className="text-charcoal-muted">{selectedStore.address}</p>
                          </div>
                          
                          <div className="flex items-center gap-3">
                            <Clock className="w-5 h-5 text-accent-terracotta shrink-0" />
                            <p className="text-charcoal-muted">{selectedStore.openingHours}</p>
                          </div>
                        </div>

                        {/* Services - Grid on Mobile */}
                        <div className="pt-4 border-t border-sand-border">
                          <p className="text-xs uppercase tracking-wider text-charcoal-muted mb-3">Layanan Tersedia</p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {selectedStore.services.map((service, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-xs text-charcoal">
                                <div className="w-1.5 h-1.5 bg-accent-terracotta rounded-full" />
                                <span>{service}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Actions - Stack on Mobile */}
                        <div className="pt-4 flex flex-col sm:flex-row gap-3">
                          <a
                            href={selectedStore.googleMapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 bg-charcoal text-ivory text-xs font-semibold uppercase tracking-wider hover:bg-charcoal-deep transition-colors"
                          >
                            <Navigation className="w-4 h-4 text-accent-gold" />
                            <span>Buka di Google Maps</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                          
                          <a
                            href={selectedStore.whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 border border-charcoal text-charcoal text-xs font-semibold uppercase tracking-wider hover:bg-charcoal hover:text-ivory transition-colors"
                          >
                            <span>WhatsApp Cabang</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="list-view"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {/* Stores Grid - 1 col mobile, 2 col tablet, 3 col desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                  {filteredStores.map((store, idx) => (
                    <motion.div
                      key={store.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="bg-ivory-warm border border-sand-border flex flex-col overflow-hidden hover:border-charcoal/40 hover-lift transition-all duration-300 group"
                    >
                      {/* Store Photo */}
                      <div className="relative aspect-[16/9] w-full overflow-hidden bg-sand/30">
                        <Image
                          src={store.image}
                          alt={store.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-editorial"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute top-3 left-3 bg-charcoal/90 text-ivory text-[9px] uppercase tracking-widest px-2.5 py-1">
                          {store.city}
                        </div>
                        {store.branchNumber && (
                          <div className="absolute top-3 right-3 bg-accent-terracotta text-ivory text-xs font-bold px-2 py-1 rounded">
                            #{store.branchNumber}
                          </div>
                        )}
                      </div>

                      {/* Store Details */}
                      <div className="p-4 sm:p-6 flex flex-col flex-grow justify-between space-y-4">
                        <div>
                          <h3 className="text-base sm:text-lg font-light tracking-wide text-charcoal font-display mb-1">
                            {store.name}
                          </h3>
                          <span className="text-[10px] uppercase tracking-wider text-accent-terracotta font-medium block mb-3">
                            {store.area}
                          </span>
                          <p className="text-xs text-charcoal-muted leading-relaxed font-light mb-4 line-clamp-2">
                            {store.address}
                          </p>

                          {/* Services - Compact on Mobile */}
                          <div className="space-y-1 text-[11px] text-charcoal-muted border-t border-sand-border pt-3">
                            <span className="text-charcoal-light block">Layanan:</span>
                            <span className="text-charcoal font-medium line-clamp-2">
                              {store.services.join(" • ")}
                            </span>
                          </div>
                        </div>

                        {/* Actions - Full Width on Mobile */}
                        <div className="pt-4 border-t border-sand-border space-y-2">
                          <a
                            href={store.googleMapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-3 bg-charcoal text-ivory text-[11px] font-semibold uppercase tracking-wider hover:bg-charcoal-deep transition-colors"
                          >
                            <Navigation className="w-3.5 h-3.5 text-accent-gold" />
                            <span>Lihat Rute</span>
                          </a>
                          
                          <a
                            href={store.whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-3 border border-charcoal/20 text-charcoal text-[11px] font-semibold uppercase tracking-wider hover:border-charcoal hover:bg-charcoal/5 transition-colors"
                          >
                            <span>WhatsApp Cabang</span>
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom CTA - Better Spacing on Mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 p-6 sm:p-8 bg-ivory-warm border border-sand-border flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-base sm:text-lg font-light text-charcoal font-display">
              Butuh Informasi Lebih Lanjut?
            </h4>
            <p className="text-xs sm:text-sm text-charcoal-muted">
              Hubungi Instagram resmi Optik Ezia untuk informasi stok frame, lensa, dan pemeriksaan mata.
            </p>
          </div>
          <Link
            href="/stores"
            className="btn-editorial-outline whitespace-nowrap w-full md:w-auto text-center"
          >
            <span>Lihat Semua Lokasi</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
