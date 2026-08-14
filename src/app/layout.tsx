import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Preloader } from "@/components/ui/Preloader";

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://optikezia.com"),
  title: "Optik Ezia — Modern Eyewear & Optical Care",
  description:
    "Kurasi kacamata, frame optikal, lensa, sunglasses, dan softlens dengan layanan pemeriksaan mata terpercaya di Indonesia. Cabang di Pondok Cina, Depok Town Square, Sentul City, Cimanggu, dan Gading Serpong.",
  icons: {
    icon: "/images/logo.png",
  },
  openGraph: {
    title: "Optik Ezia — Modern Eyewear & Optical Care",
    description:
      "Kurasi kacamata, frame optikal, lensa, sunglasses, dan layanan pemeriksaan mata di Indonesia.",
    type: "website",
    locale: "id_ID",
    images: [
      {
        url: "/images/logo.png",
        width: 400,
        height: 400,
        alt: "Optik Ezia Logo",
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
        <Preloader />
        <SmoothScroll>
          <CustomCursor />
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
