import type { Metadata } from "next";
import {
  Playfair_Display,
  Outfit,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";
import SacredGeometryBg from "@/components/global/SacredGeometryBg";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";
import PageLoader from "@/components/global/PageLoader";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Seraphic Sonic — Quantum-Geometric Audio Plugins",
  description:
    "Experience sound engineered at the frequency level. Sacred geometry DSP in pure Rust. Zero latency. Infinite possibilities.",
  themeColor: "#ffb000",
  openGraph: {
    title: "Seraphic Sonic — Quantum-Geometric Audio Plugins",
    description:
      "Experience sound engineered at the frequency level. Sacred geometry DSP in pure Rust.",
    type: "website",
    url: "https://seraphicsonic.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Seraphic Sonic",
    description: "Quantum-Geometric Audio Engine",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${outfit.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="relative bg-[var(--c-abyss)] text-[var(--c-text-secondary)] overflow-x-hidden">
        <PageLoader />
        <SacredGeometryBg />
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
