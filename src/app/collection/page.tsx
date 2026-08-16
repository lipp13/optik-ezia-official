"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, MapPin, X, Instagram, Sparkles, Compass, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PRODUCTS_DATA, EyewearProduct } from "@/data/products";
import { OPTIK_EZIA_CONFIG } from "@/data/optikEzia";
import { TextReveal } from "@/components/ui/TextReveal";

export default function CollectionPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProduct, setSelectedProduct] = useState<EyewearProduct | null>(null);

  const categories = [
    { id: "all", label: "Semua Lini Kurasi" },
    { id: "optical", label: "Frame Optikal" },
    { id: "sunglasses", label: "Sunglasses UV400" },
    { id: "lenses", label: "Lensa Berstandar" },
    { id: "softlens", label: "Softlens Bersertifikasi" },
  ];

  const faceShapeGuides = [
    {
      shape: "Wajah Bulat (Round)",
      recommendation: "Frame Persegi, Wayfarer, atau Geometris bersudut tegas untuk mempertegas siluet wajah.",
    },
    {
      shape: "Wajah Kotak (Square)",
      recommendation: "Frame Bulat, Oval, atau Cat-Eye dengan garis kurva lembut untuk menyeimbangkan garis rahang.",
    },
    {
      shape: "Wajah Oval",
      recommendation: "Hampir semua siluet bingkai cocok, terutama model Aviator, Panthos, dan Rectangle proporsional.",
    },
    {
      shape: "Wajah Hati (Heart)",
      recommendation: "Frame Tipis Ringan, Rimless, atau Oval yang menyeimbangkan dahi lebar dan dagu ramping.",
    },
  ];

  const filteredProducts =
    activeCategory === "all"
      ? PRODUCTS_DATA
      : PRODUCTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-28 pb-32 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Page Header */}
        <div className="max-w-4xl pb-12 border-b border-sand-border">
          <span className="editorial-tag text-accent-terracotta block mb-3">
            PORTOFOLIO KURASI & KERAJINAN MATERIAL
          </span>
          <TextReveal
            as="h1"
            text="Kurasi Bingkai, Lensa & Pelindung UV Optik Ezia"
            className="editorial-headline text-4xl sm:text-6xl text-charcoal"
          />
          <p className="text-base sm:text-lg font-light text-charcoal-muted mt-5 leading-relaxed">
            Setiap model bingkai dan lensa dalam etalase Optik Ezia dipilih berdasarkan kenyamanan ergonomis, kekuatan material (Titanium, Italian Acetate, Ultralight TR90), serta kemampuan adaptasi resep refraksi yang akurat.
          </p>
        </div>

        {/* Face Shape Consultation Guide */}
        <div className="py-14 border-b border-sand-border">
          <div className="flex items-center gap-3 mb-6">
            <Compass className="w-5 h-5 text-accent-terracotta" />
            <h2 className="text-xs uppercase tracking-[0.2em] font-semibold text-charcoal">
              Panduan Pemilihan Frame Sesuai Bentuk Wajah
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {faceShapeGuides.map((guide, idx) => (
              <div key={idx} className="p-6 bg-ivory-warm border border-sand-border">
                <span className="text-xs font-semibold text-charcoal uppercase tracking-wider block mb-2 font-display">
                  {guide.shape}
                </span>
                <p className="text-xs text-charcoal-muted font-light leading-relaxed">
                  {guide.recommendation}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto py-8 scrollbar-none border-b border-sand-border">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 text-xs uppercase tracking-[0.16em] font-medium whitespace-nowrap transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-charcoal text-ivory shadow-xs"
                  : "bg-sand/40 text-charcoal-muted hover:bg-sand hover:text-charcoal"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              id={product.id}
              className="bg-ivory-warm border border-sand-border p-6 flex flex-col justify-between group hover:border-charcoal/40 transition-all duration-300 hover-lift"
            >
              <div>
                {/* Meta */}
                <div className="flex items-center justify-between text-[11px] uppercase tracking-wider text-charcoal-light pb-4 border-b border-sand-border/60">
                  <span>{product.categoryLabel}</span>
                  <span className="text-[10px] tracking-wider text-charcoal-muted font-medium">
                    {product.type}
                  </span>
                </div>

                {/* Main Product Image */}
                <div className="relative aspect-[4/3] w-full my-6 bg-ivory flex items-center justify-center p-4 border border-sand-border/40 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-700 ease-editorial"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-light text-charcoal font-display">
                    {product.name}
                  </h3>

                  <p className="text-xs text-charcoal-muted leading-relaxed font-light">
                    {product.description}
                  </p>

                  {/* Feature highlights */}
                  <div className="space-y-1.5 pt-3 border-t border-sand-border/60 text-[11px] text-charcoal-muted">
                    {product.features.slice(0, 2).map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Check className="w-3 h-3 text-accent-terracotta shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-6 mt-6 border-t border-sand-border flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedProduct(product)}
                  className="flex-1 py-2.5 px-3 border border-charcoal/20 text-charcoal text-xs uppercase tracking-wider font-semibold hover:bg-sand transition-colors text-center"
                >
                  Spesifikasi
                </button>

                <Link
                  href="/stores"
                  className="flex-1 py-2.5 px-3 bg-charcoal text-ivory text-xs uppercase tracking-wider font-semibold hover:bg-charcoal-deep transition-colors text-center"
                >
                  Fitting Cabang
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* In-Store Fitting Note */}
        <div className="mt-20 p-8 sm:p-10 bg-ivory-warm border border-sand-border text-center space-y-4">
          <span className="editorial-tag text-accent-terracotta">
            PENGALAMAN FITTING LANGSUNG
          </span>
          <h3 className="editorial-headline text-2xl sm:text-3xl text-charcoal max-w-xl mx-auto">
            Rasakan Kenyamanan Material di Seluruh Cabang Kami
          </h3>
          <p className="text-xs sm:text-sm text-charcoal-muted max-w-lg mx-auto leading-relaxed font-light">
            Setiap model bingkai dapat dicoba secara langsung di outlet resmi Optik Ezia dengan panduan penyesuaian sudut hidung dan telinga oleh staf ahli kami.
          </p>
          <div className="pt-2">
            <Link href="/stores" className="btn-editorial-primary inline-flex items-center gap-2">
              <MapPin className="w-4 h-4 text-accent-gold" />
              <span>Temukan Outlet Terdekat</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-black/65 cursor-pointer"
            />

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="bg-ivory max-w-2xl w-full border border-sand-border p-6 sm:p-8 max-h-[90vh] overflow-y-auto relative z-10 will-change-transform transform-gpu shadow-2xl"
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-6 right-6 p-2 text-charcoal hover:bg-sand rounded-full transition-colors"
                aria-label="Tutup Detail"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                <div className="relative aspect-[16/10] w-full bg-ivory-warm border border-sand-border">
                  <Image
                    src={selectedProduct.lifestyleImage || selectedProduct.image}
                    alt={selectedProduct.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <span className="editorial-tag text-accent-terracotta block mb-1">
                    {selectedProduct.categoryLabel}
                  </span>
                  <h3 className="text-2xl font-light text-charcoal font-display">
                    {selectedProduct.name}
                  </h3>
                </div>

                <p className="text-sm font-light text-charcoal-muted leading-relaxed">
                  {selectedProduct.description}
                </p>

                {/* Feature Points */}
                <div className="space-y-2 border-t border-sand-border pt-4">
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-charcoal mb-2">
                    Karakteristik & Material
                  </h4>
                  <ul className="space-y-2 text-xs text-charcoal-muted">
                    {selectedProduct.features?.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-accent-terracotta shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-sand-border flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/stores"
                    className="btn-editorial-primary flex-1 text-center"
                  >
                    <MapPin className="w-4 h-4 text-accent-gold" />
                    <span>Kunjungi Cabang Terdekat</span>
                  </Link>

                  <a
                    href={OPTIK_EZIA_CONFIG.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-editorial-outline flex-1 text-center"
                  >
                    <Instagram className="w-4 h-4 text-accent-terracotta" />
                    <span>Konsultasi Instagram</span>
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

