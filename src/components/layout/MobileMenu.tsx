"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight, MapPin, Instagram } from "lucide-react";
import { OPTIK_EZIA_CONFIG } from "@/data/optikEzia";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { href: string; label: string }[];
  currentPath: string;
}

export function MobileMenu({
  isOpen,
  onClose,
  navLinks,
  currentPath,
}: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] bg-ivory flex flex-col justify-between p-6 sm:p-10"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-sand-border pb-6">
            <Link
              href="/"
              onClick={onClose}
              className="flex flex-col items-start focus:outline-none"
            >
              <span className="text-xl font-light tracking-[0.25em] uppercase text-charcoal font-display">
                {OPTIK_EZIA_CONFIG.name}
              </span>
              <span className="text-[8px] uppercase tracking-[0.3em] text-charcoal-muted -mt-0.5">
                EYEWEAR & OPTICAL CARE
              </span>
            </Link>
            <button
              onClick={onClose}
              className="p-2.5 text-charcoal hover:bg-sand rounded-full transition-colors"
              aria-label="Tutup Menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col space-y-6 my-auto py-8">
            {navLinks.map((link, idx) => {
              const isActive = currentPath === link.href;
              return (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * idx, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className={`flex items-center justify-between text-2xl sm:text-3xl font-light tracking-[0.05em] py-2 transition-colors ${
                      isActive ? "text-charcoal font-medium pl-2 border-l-2 border-charcoal" : "text-charcoal-muted hover:text-charcoal"
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-5 h-5 opacity-40 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          {/* Bottom Action Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.4 }}
            className="border-t border-sand-border pt-6 flex flex-col sm:flex-row gap-4 justify-between"
          >
            <Link
              href="/stores"
              onClick={onClose}
              className="w-full flex items-center justify-center gap-3 py-4 bg-charcoal text-ivory text-xs uppercase tracking-[0.16em] font-semibold"
            >
              <MapPin className="w-4 h-4 text-accent-gold" />
              <span>Lokasi Cabang</span>
            </Link>

            <a
              href={OPTIK_EZIA_CONFIG.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 py-4 border border-charcoal/30 text-charcoal text-xs uppercase tracking-[0.16em] font-semibold hover:bg-sand"
            >
              <Instagram className="w-4 h-4 text-accent-terracotta" />
              <span>Instagram {OPTIK_EZIA_CONFIG.instagram.handle}</span>
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
