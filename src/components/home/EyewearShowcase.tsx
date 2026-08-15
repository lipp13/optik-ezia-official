"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Eye, Sparkles } from "lucide-react";
import { PRODUCTS_DATA, EyewearProduct } from "@/data/products";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function EyewearShowcase() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProduct, setSelectedProduct] = useState<EyewearProduct | null>(null);

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
    <section className="py-24 sm:py-32 bg-ivory relative overflow-hidden">
      {/* Subtle Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-accent-gold/8 to-transparent rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent-terracotta/6 to-transparent rounded-full blur-3xl opacity-60" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-sand-border gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="editorial-tag text-accent-terracotta block mb-2">
              PRODUK & KURASI
            </span>
            <h2 className="editorial-headline text-3xl sm:text-5xl text-charcoal">
              Koleksi Kacamata & Lensa
            </h2>
          </motion.div>

          {/* Category Switcher with animated pill background */}
          <motion.div 
            className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative px-4 py-2 text-xs uppercase tracking-[0.15em] font-medium whitespace-nowrap transition-colors duration-300 ${
                    isActive ? "text-ivory" : "text-charcoal-muted hover:text-charcoal"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryPill"
                      className="absolute inset-0 bg-charcoal -z-10 shadow-sm"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  {!isActive && (
                    <div className="absolute inset-0 bg-sand/40 -z-20 hover:bg-sand/70 transition-colors" />
                  )}
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* Animated Product Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="group flex flex-col justify-between bg-ivory-warm border border-sand-border/80 p-6 transition-all duration-500 hover:shadow-medium hover:border-charcoal/30 hover:-translate-y-2 relative overflow-hidden"
              >
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/0 via-transparent to-accent-terracotta/0 group-hover:from-accent-gold/5 group-hover:to-accent-terracotta/5 transition-all duration-500 pointer-events-none" />
                {/* Top Meta */}
                <div className="flex items-center justify-between text-[11px] uppercase tracking-wider text-charcoal-light pb-4 relative z-10">
                  <span>{product.categoryLabel}</span>
                  <span className="text-[10px] tracking-wider text-charcoal-muted font-medium px-2 py-1 bg-sand/40 group-hover:bg-accent-gold/20 transition-colors">
                    {product.type}
                  </span>
                </div>

                {/* Product Visual with Zoom on Hover */}
                <div className="relative aspect-[4/3] w-full my-4 overflow-hidden bg-ivory flex items-center justify-center p-4 border border-sand-border/30 group-hover:border-accent-terracotta/30 transition-colors relative z-10">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-4 group-hover:scale-110 transition-transform duration-700 ease-editorial"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Sparkle icon on hover */}
                  <div className="absolute top-3 right-3 bg-ivory/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Sparkles className="w-4 h-4 text-accent-gold" />
                  </div>
                </div>

                {/* Product Info */}
                <div className="pt-4 border-t border-sand-border/60 space-y-2">
                  <h3 className="text-lg font-light tracking-wide text-charcoal font-display">
                    {product.name}
                  </h3>

                  <p className="text-xs text-charcoal-muted line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Card Actions */}
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
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Banner to Full Catalog with Magnetic Button */}
        <div className="mt-16 text-center pt-8 border-t border-sand-border">
          <MagneticButton strength={0.2}>
            <Link
              href="/collection"
              className="btn-editorial-outline inline-flex items-center gap-3"
              data-cursor-text="SEMUA"
            >
              <span>Buka Seluruh Koleksi Optik Ezia</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
