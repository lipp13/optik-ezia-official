"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, MapPin } from "lucide-react";
import { MobileMenu } from "./MobileMenu";
import { OPTIK_EZIA_CONFIG } from "@/data/optikEzia";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/collection", label: "Koleksi" },
    { href: "/services", label: "Pemeriksaan & Lensa" },
    { href: "/stores", label: "Lokasi Cabang" },
    { href: "/about", label: "Tentang Kami" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#FAF8F5]/90 backdrop-blur-md py-4 border-b border-sand-border/60 shadow-[0_4px_24px_rgba(0,0,0,0.03)]"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="group flex flex-col items-start focus:outline-none"
          >
            <span className="text-xl sm:text-2xl font-light tracking-[0.25em] uppercase text-charcoal font-display group-hover:opacity-80 transition-opacity">
              {OPTIK_EZIA_CONFIG.name}
            </span>
            <span className="text-[8px] uppercase tracking-[0.3em] text-charcoal-muted -mt-0.5">
              EYEWEAR & OPTICAL CARE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-9">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs font-medium uppercase tracking-[0.18em] transition-all relative py-1 group ${
                    isActive ? "text-charcoal font-semibold" : "text-charcoal-muted hover:text-charcoal"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 h-[1.5px] bg-charcoal transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Action CTA & Mobile Trigger */}
          <div className="flex items-center space-x-4">
            <Link
              href="/stores"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-none bg-charcoal text-ivory text-[11px] font-semibold uppercase tracking-[0.16em] hover:bg-charcoal-deep active:scale-95 transition-all group shadow-xs"
              data-cursor-text="LOKASI"
            >
              <MapPin className="w-3.5 h-3.5 text-accent-gold" />
              <span>Cari Cabang</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2 text-charcoal hover:bg-sand/50 rounded-none transition-colors"
              aria-label="Buka Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={navLinks}
        currentPath={pathname}
      />
    </>
  );
}
