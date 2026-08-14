"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, MapPin, X, Instagram } from "lucide-react";
import { PRODUCTS_DATA, EyewearProduct } from "@/data/products";
import { OPTIK_EZIA_CONFIG } from "@/data/optikEzia";

export default function CollectionPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProduct, setSelectedProduct] = useState<EyewearProduct | null>(null);

  const categories = [
    { id: "all", label: "Semua Koleksi" },
    { id: "optical", label: "Frame Optikal" },
    { id: "sunglasses", label: "Kacamata Hitam" },
    { id: "lenses", label: "Lensa Kacamata" },
    { id: "softlens", label: "Softlens" },
  ];

  const filteredProducts =
    activeCategory === "all"
      ? PRODUCTS_DATA
      : PRODUCTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-28 pb-32 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Page Header */}
        <div className="max-w-3xl pb-12 border-b border-sand-border">
          <span className="editorial-tag text-accent-terracotta block mb-3">
            KATALOG PRODUK
          </span>
          <h1 className="editorial-headline text-4xl sm:text-6xl text-charcoal">
            Koleksi Frame, Lensa & Sunglasses
          </h1>
          <p className="text-base sm:text-lg font-light text-charcoal-muted mt-4 leading-relaxed">
            Pilihan model kacamata optikal harian, sunglasses pelindung UV, lensa anti-radiasi, dan softlens. Temukan koleksi yang sesuai dengan kebutuhan penglihatan dan gaya personal Anda.
          </p>
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
              className="bg-ivory-warm border border-sand-border p-6 flex flex-col justify-between group hover:border-charcoal/40 transition-all duration-300"
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
                <div className="relative aspect-[4/3] w-full my-6 bg-ivory flex items-center justify-center p-4 border border-sand-border/40">
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

                  <p className="text-xs text-charcoal-muted leading-relaxed">
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
                  Detail Info
                </button>

                <Link
                  href="/stores"
                  className="flex-1 py-2.5 px-3 bg-charcoal text-ivory text-xs uppercase tracking-wider font-semibold hover:bg-charcoal-deep transition-colors text-center"
                >
                  Cek di Cabang
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-charcoal/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
          <div className="bg-ivory max-w-2xl w-full border border-sand-border p-6 sm:p-8 max-h-[90vh] overflow-y-auto relative">
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
                  Karakteristik Produk
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
                  <span>Tanya di Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
