/**
 * Optik Ezia — Official Brand Information & Configuration
 * 
 * Source of truth for brand data.
 * All factual data follows strict accuracy rules:
 * - Brand Name: Optik Ezia
 * - Official Instagram: @optikezia (https://www.instagram.com/optikezia)
 * - Safe, non-fabricated creative copy and verified service scope.
 */

export interface BrandConfig {
  name: string;
  tagline: string;
  shortDescription: string;
  instagram: {
    handle: string;
    url: string;
  };
  contact: {
    whatsappNumberPlaceholder: string;
    whatsappUrl: string;
    emailPlaceholder: string;
    customerServiceHours: string;
    verified: boolean;
  };
}

export const OPTIK_EZIA_CONFIG: BrandConfig = {
  name: "Optik Ezia",
  tagline: "Modern Eyewear & Eye Care Experience",
  shortDescription:
    "Optik Ezia menghadirkan kurasi kacamata, frame, lensa, sunglasses, dan softlens pilihan dengan layanan pemeriksaan mata serta fitting yang nyaman dan terpercaya.",
  instagram: {
    handle: "@optikezia",
    url: "https://www.instagram.com/optikezia",
  },
  contact: {
    whatsappNumberPlaceholder: "WhatsApp Resmi Optik Ezia",
    whatsappUrl: "https://www.instagram.com/optikezia", // Directs to official IG pending client confirmed WA number
    emailPlaceholder: "info@optikezia.com",
    customerServiceHours: "Senin – Minggu",
    verified: false,
  },
};
