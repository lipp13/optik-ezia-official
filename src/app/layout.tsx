import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { CustomCursor } from "@/components/ui/CustomCursor";

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Optik Ezia — Modern Optical & Precision Eyewear",
  description:
    "Pusat refraksi visual dan kurasi bingkai kacamata Japanese Beta-Titanium serta lensa presisi ZEISS Jerman di Indonesia. Kunjungi 6 butik kami di Jakarta, Surabaya, Bandung, Bali, dan Yogyakarta.",
  keywords: [
    "Optik Ezia",
    "kacamata titanium",
    "pemeriksaan mata Jakarta",
    "lensa ZEISS Indonesia",
    "kacamata anak",
    "optik Surabaya",
    "optik Bandung",
    "optik Bali",
  ],
  openGraph: {
    title: "Optik Ezia — Modern Optical & Precision Eyewear",
    description:
      "Perpaduan bingkai kacamata presisi Japanese Beta-Titanium dan standar pemeriksaan mata ZEISS Jerman.",
    type: "website",
    locale: "id_ID",
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
