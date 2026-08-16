"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Instagram,
  ExternalLink,
  Check,
  Info,
  Phone,
  MessageCircle,
  Clock,
  Navigation,
  X,
  Copy,
  CheckCheck,
  Share2,
} from "lucide-react";
import { STORES_DATA, StoreBranch, OPTIK_EZIA_CONTACT } from "@/data/stores";
import { OPTIK_EZIA_CONFIG } from "@/data/optikEzia";
import { TextReveal } from "@/components/ui/TextReveal";

export default function StoresPage() {
  const [selectedCity, setSelectedCity] = useState<string>("all");
  const [activeMapStore, setActiveMapStore] = useState<StoreBranch | null>(null);
  const [copiedAddressId, setCopiedAddressId] = useState<string | null>(null);

  const cities = [
    { id: "all", label: "Semua Area Cabang" },
    { id: "Depok", label: "Depok" },
    { id: "Bogor", label: "Bogor" },
    { id: "Tangerang", label: "Tangerang" },
  ];

  const filteredStores =
    selectedCity === "all"
      ? STORES_DATA
      : STORES_DATA.filter((s) => s.city === selectedCity);

  const handleCopyAddress = (store: StoreBranch) => {
    navigator.clipboard.writeText(store.address);
    setCopiedAddressId(store.id);
    setTimeout(() => {
      setCopiedAddressId(null);
    }, 2500);
  };

  return (
    <div className="pt-28 pb-32 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Page Header */}
        <div className="max-w-4xl pb-12 border-b border-sand-border">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sand/50 border border-sand-border text-[10px] uppercase tracking-[0.2em] text-accent-terracotta mb-4">
            <MapPin className="w-3.5 h-3.5" />
            <span>Jaringan Outlet Resmi</span>
          </div>

          <TextReveal
            as="h1"
            text="Lokasi Cabang & Kontak Resmi Optik Ezia"
            className="editorial-headline text-4xl sm:text-6xl text-charcoal"
          />
          <p className="text-base sm:text-lg font-light text-charcoal-muted mt-4 leading-relaxed">
            Kunjungi gerai resmi Optik Ezia terdekat untuk layanan pemeriksaan refraksi mata terstandar, fitting kacamata, konsultasi lensa spesialis, dan perawatan gratis seumur hidup.
          </p>
        </div>

        {/* Central Verified Contact Bar from Linktree */}
        <div className="mt-8 p-6 bg-ivory-warm border border-sand-border grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-accent-gold/20 flex items-center justify-center text-charcoal shrink-0">
              <MessageCircle className="w-5 h-5 text-accent-terracotta" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-charcoal-light font-medium block">
                Pusat Informasi (WhatsApp)
              </span>
              <a
                href={OPTIK_EZIA_CONTACT.generalInfoWa}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm font-semibold text-charcoal hover:text-accent-terracotta transition-colors"
              >
                {OPTIK_EZIA_CONTACT.generalInfoPhone}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-accent-terracotta/20 flex items-center justify-center text-charcoal shrink-0">
              <Phone className="w-5 h-5 text-accent-terracotta" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-charcoal-light font-medium block">
                Customer Service Ezia
              </span>
              <a
                href={OPTIK_EZIA_CONTACT.customerServiceWa}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm font-semibold text-charcoal hover:text-accent-terracotta transition-colors"
              >
                {OPTIK_EZIA_CONTACT.customerServicePhone}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-charcoal/10 flex items-center justify-center text-charcoal shrink-0">
              <Instagram className="w-5 h-5 text-charcoal" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-charcoal-light font-medium block">
                Instagram Resmi
              </span>
              <a
                href={OPTIK_EZIA_CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm font-semibold text-charcoal hover:text-accent-terracotta transition-colors"
              >
                {OPTIK_EZIA_CONTACT.instagramHandle}
              </a>
            </div>
          </div>
        </div>

        {/* City Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto py-8 scrollbar-none border-b border-sand-border">
          {cities.map((city) => (
            <button
              key={city.id}
              onClick={() => setSelectedCity(city.id)}
              className={`px-5 py-2.5 text-xs uppercase tracking-[0.16em] font-medium whitespace-nowrap transition-all duration-300 ${
                selectedCity === city.id
                  ? "bg-charcoal text-ivory shadow-xs"
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
              className="bg-ivory-warm border border-sand-border p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center hover:border-charcoal/40 transition-all hover-lift"
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
                <div className="absolute top-3 left-3 bg-charcoal/90 text-ivory text-[9px] uppercase tracking-widest px-2.5 py-1 backdrop-blur-xs">
                  {store.city}
                </div>
                <div className="absolute bottom-3 right-3 bg-ivory/90 text-charcoal text-[9px] uppercase tracking-widest px-2.5 py-1 backdrop-blur-xs font-mono font-medium">
                  {store.branchNumber ? `Cabang ${store.branchNumber}` : "Official Branch"}
                </div>
              </div>

              {/* Store Info */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="text-2xl font-light text-charcoal font-display">
                      {store.name}
                    </h3>
                  </div>

                  <span className="text-xs uppercase tracking-wider text-accent-terracotta font-medium block mb-2 font-mono">
                    Area: {store.area} ({store.city})
                  </span>

                  <p className="text-xs sm:text-sm font-light text-charcoal-muted leading-relaxed">
                    {store.address}
                  </p>

                  <div className="flex items-center gap-2 mt-3 text-xs text-charcoal-muted">
                    <Clock className="w-3.5 h-3.5 text-accent-terracotta shrink-0" />
                    <span>{store.openingHours}</span>
                  </div>
                </div>

                {/* Services list */}
                <div className="border-t border-sand-border pt-4">
                  <span className="text-[10px] uppercase tracking-wider text-charcoal-light block mb-2 font-medium">
                    Fasilitas & Layanan Cabang:
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

                {/* Actions: Map View, WhatsApp, and Copy */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  {/* Button Lihat Peta (Opens Interactive Map Modal) */}
                  <button
                    type="button"
                    onClick={() => setActiveMapStore(store)}
                    className="btn-editorial-primary flex-1 text-center py-3 text-xs justify-center"
                  >
                    <MapPin className="w-3.5 h-3.5 text-accent-gold" />
                    <span>Lihat Peta (Maps)</span>
                  </button>

                  {/* Button WhatsApp Cabang */}
                  <a
                    href={store.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 flex-1 py-3 px-4 bg-charcoal text-ivory text-xs uppercase tracking-wider font-semibold hover:bg-charcoal-deep transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-accent-gold" />
                    <span>WhatsApp Cabang</span>
                  </a>

                  {/* Button Copy Address */}
                  <button
                    type="button"
                    onClick={() => handleCopyAddress(store)}
                    className="inline-flex items-center justify-center gap-2 py-3 px-4 border border-charcoal/20 text-charcoal text-xs uppercase tracking-wider font-medium hover:bg-sand/60 transition-colors"
                    title="Salin Alamat Lengkap"
                  >
                    {copiedAddressId === store.id ? (
                      <>
                        <CheckCheck className="w-3.5 h-3.5 text-accent-terracotta" />
                        <span className="text-accent-terracotta font-semibold">Tersalin</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-charcoal-muted" />
                        <span>Salin</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ======================================================== */}
      {/* HIGH-PERFORMANCE 60FPS INTERACTIVE GOOGLE MAPS MODAL     */}
      {/* ======================================================== */}
      <AnimatePresence>
        {activeMapStore && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop: GPU Accelerated Solid Dim without heavy blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setActiveMapStore(null)}
              className="absolute inset-0 bg-black/65 cursor-pointer"
            />

            {/* Modal Content Card */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="bg-ivory max-w-3xl w-full border border-sand-border shadow-2xl overflow-hidden relative flex flex-col max-h-[90vh] z-10 will-change-transform transform-gpu"
            >
              {/* Modal Header */}
              <div className="p-5 sm:p-6 bg-ivory-warm border-b border-sand-border flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="editorial-tag text-accent-terracotta">
                      PETA LOKASI RESMI
                    </span>
                    <span className="text-[10px] font-mono text-charcoal-light uppercase">
                      • {activeMapStore.city}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-light text-charcoal font-display">
                    {activeMapStore.name}
                  </h3>
                  <p className="text-xs text-charcoal-muted mt-1 max-w-xl leading-relaxed">
                    {activeMapStore.address}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveMapStore(null)}
                  className="p-2 text-charcoal hover:bg-sand rounded-full transition-colors shrink-0 ml-4"
                  aria-label="Tutup Peta"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Embedded Google Maps View with Smooth Loading */}
              <div className="relative w-full h-80 sm:h-96 bg-sand/20 border-b border-sand-border">
                <iframe
                  title={`Peta Lokasi ${activeMapStore.name}`}
                  src={activeMapStore.embedMapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="eager"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full relative z-10"
                />
              </div>

              {/* Modal Footer Actions */}
              <div className="p-5 sm:p-6 bg-ivory flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-charcoal-muted flex items-center gap-2">
                  <Clock className="w-4 h-4 text-accent-terracotta" />
                  <span>{activeMapStore.openingHours}</span>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href={activeMapStore.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-editorial-primary flex-1 sm:flex-initial text-center py-3 text-xs"
                  >
                    <Navigation className="w-3.5 h-3.5 text-accent-gold" />
                    <span>Petunjuk Arah (Google Maps)</span>
                    <ExternalLink className="w-3 h-3 ml-1 opacity-70" />
                  </a>

                  <a
                    href={activeMapStore.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 py-3 px-4 bg-charcoal text-ivory text-xs uppercase tracking-wider font-semibold hover:bg-charcoal-deep transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-accent-gold" />
                    <span>Hubungi WA</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

