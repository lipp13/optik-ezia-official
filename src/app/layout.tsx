import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Preloader } from "@/components/ui/Preloader";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { FloatingWhatsAppWidget } from "@/components/ui/FloatingWhatsAppWidget";

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://optikezia.com"),
  title: {
    default: "Optik Ezia — Modern Eyewear & Optical Care",
    template: "%s | Optik Ezia",
  },
  description:
    "Pusat optik modern berstandar klinis di Indonesia. Layanan periksa mata refraksi 5 tahap, kurasi frame titanium & asetat, lensa anti-radiasi, serta garansi seumur hidup. Cabang di Pondok Cina, Depok Town Square, Sentul City, Cimanggu, dan Gading Serpong.",
  keywords: [
    "Optik Ezia",
    "kacamata depok",
    "optik bogor",
    "optik gading serpong",
    "periksa mata depok",
    "lensa anti radiasi",
    "optik margonda",
    "frame titanium",
    "optik sentul",
  ],
  icons: {
    icon: "/images/logo.png",
  },
  openGraph: {
    title: "Optik Ezia — Modern Eyewear & Optical Care",
    description:
      "Pusat optik modern berstandar klinis di Indonesia. Layanan periksa mata refraksi, kurasi bingkai premium, dan garansi seumur hidup di seluruh cabang.",
    type: "website",
    locale: "id_ID",
    siteName: "Optik Ezia",
    images: [
      {
        url: "/images/logo.png",
        width: 400,
        height: 400,
        alt: "Optik Ezia Official Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${sansFont.variable}`}>
      <body className="bg-ivory text-charcoal antialiased selection:bg-sand selection:text-charcoal font-sans">
        <ScrollProgress />
        <Preloader />
        <SmoothScroll>
          <CustomCursor />
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <FloatingWhatsAppWidget />
        </SmoothScroll>
      </body>
    </html>
  );
}

