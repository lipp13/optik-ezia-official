"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
    { href: "/about", label: "Tentang Kami" },
    { href: "/services", label: "Layanan & Refraksi" },
    { href: "/collection", label: "Kurasi Eyewear" },
    { href: "/stores", label: "Lokasi Cabang" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "glass-effect py-3.5 border-b border-sand-border/60 shadow-soft"
            : "bg-transparent py-5 sm:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Logo with Image */}
          <Link
            href="/"
            className="group flex items-center gap-3.5 focus:outline-none relative"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-md overflow-hidden border border-charcoal/20 shadow-sm bg-black group-hover:scale-105 group-hover:shadow-medium transition-all duration-300">
              <Image
                src="/images/logo.png"
                alt="Optik Ezia Logo"
                fill
                className="object-cover"
                priority
              />
              {/* Shine effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-x-full group-hover:translate-x-full" />
            </div>
            <div className="flex flex-col items-start">
              <span className="text-lg sm:text-xl font-light tracking-[0.22em] uppercase text-charcoal font-display group-hover:text-accent-terracotta transition-colors">
                {OPTIK_EZIA_CONFIG.name}
              </span>
              <span className="text-[8px] uppercase tracking-[0.28em] text-charcoal-muted -mt-0.5">
                EYEWEAR & OPTICAL CARE
              </span>
            </div>
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
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-none bg-charcoal text-ivory text-[11px] font-semibold uppercase tracking-[0.16em] hover:bg-charcoal-deep hover:shadow-medium active:scale-95 transition-all group shadow-sm relative overflow-hidden"
              data-cursor-text="LOKASI"
            >
              {/* Button shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-x-full group-hover:translate-x-full" />
              <MapPin className="w-3.5 h-3.5 text-accent-gold relative z-10" />
              <span className="relative z-10">Cari Cabang</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform relative z-10" />
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
