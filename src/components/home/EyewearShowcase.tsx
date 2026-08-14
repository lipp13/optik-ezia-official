"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { PRODUCTS_DATA } from "@/data/products";

export function EyewearShowcase() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "Semua Kategori" },
    { id: "optical", label: "Frame Optikal" },
    { id: "sunglasses", label: "Sunglasses" },
    { id: "lenses", label: "Lensa Kacamata" },
    { id: "softlens", label: "Softlens" },
  ];

  const filteredProducts =
    activeCategory === "all"
      ? PRODUCTS_DATA
      : PRODUCTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <section className="py-24 sm:py-32 bg-ivory relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-sand-border gap-6">
          <div>
            <span className="editorial-tag text-accent-terracotta block mb-2">
              PRODUK & KURASI
            </span>
            <h2 className="editorial-headline text-3xl sm:text-5xl text-charcoal">
              Koleksi Kacamata & Lensa
            </h2>
          </div>

          {/* Category Switcher */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs uppercase tracking-[0.15em] font-medium whitespace-nowrap transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-charcoal text-ivory shadow-xs"
                    : "bg-sand/40 text-charcoal-muted hover:bg-sand/80 hover:text-charcoal"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col justify-between bg-ivory-warm border border-sand-border/80 p-6 transition-all duration-500 hover:shadow-[0_16px_40px_rgba(0,0,0,0.04)] hover:border-charcoal/30 relative"
            >
              {/* Top Meta */}
              <div className="flex items-center justify-between text-[11px] uppercase tracking-wider text-charcoal-light pb-4">
                <span>{product.categoryLabel}</span>
                <span className="text-[10px] tracking-wider text-charcoal-muted font-medium">
                  {product.type}
                </span>
              </div>

              {/* Product Visual */}
              <div className="relative aspect-[4/3] w-full my-4 overflow-hidden bg-ivory flex items-center justify-center p-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-700 ease-editorial"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Product Info */}
              <div className="pt-4 border-t border-sand-border/60 space-y-2">
                <h3 className="text-lg font-light tracking-wide text-charcoal font-display">
                  {product.name}
                </h3>

                <p className="text-xs text-charcoal-muted line-clamp-2 leading-relaxed">
                  {product.description}
                </p>

                {/* Card Action */}
                <div className="pt-4 flex items-center justify-between">
                  <Link
                    href={`/collection#${product.id}`}
                    className="text-xs uppercase tracking-[0.16em] font-semibold text-charcoal hover:text-accent-terracotta transition-colors inline-flex items-center gap-1 group/link"
                  >
                    <span>Lihat Detail</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    href="/stores"
                    className="text-[11px] uppercase tracking-wider text-charcoal-muted hover:text-charcoal transition-colors border-b border-charcoal/20 pb-0.5"
                  >
                    Cek di Cabang
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner to Full Catalog */}
        <div className="mt-16 text-center pt-8 border-t border-sand-border">
          <Link
            href="/collection"
            className="btn-editorial-outline inline-flex items-center gap-3"
            data-cursor-text="SEMUA"
          >
            <span>Buka Seluruh Koleksi Optik Ezia</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
