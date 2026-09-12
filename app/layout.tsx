import type { Metadata } from "next";
import "@fontsource/manrope/300.css";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import "@fontsource/manrope/800.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Casa Art Interiors | Luxury Interior Design & In-House Modular Factory Hyderabad",
  description: "Bespoke luxury interior design, in-house modular manufacturing, and end-to-end execution in Hyderabad. Official interior design partner for Magna Solitaire. Custom kitchens, wardrobes, living rooms & complete homes.",
  keywords: [
    "Casa Art Interiors",
    "interior design Hyderabad",
    "luxury interior designer Hyderabad",
    "modular kitchen Hyderabad",
    "modular wardrobes Hyderabad",
    "Magna Solitaire interior designer",
    "Neopolis Kokapet interior design",
    "interior design factory Hyderabad",
    "complete home interiors Hyderabad",
    "Gachibowli interior designers",
    "Financial District home interiors"
  ],
  authors: [{ name: "Casa Art Interiors" }],
  openGraph: {
    title: "Casa Art Interiors | Luxury Interior Design & In-House Modular Factory",
    description: "Bespoke luxury interiors designed around your lifestyle, manufactured with precision in our own modular factory, and executed end-to-end in Hyderabad.",
    url: "https://casaartinteriors.com",
    siteName: "Casa Art Interiors",
    images: [
      {
        url: "/assets/casa-art/hero-living.jpg",
        width: 1200,
        height: 630,
        alt: "Casa Art Interiors - Luxury Residence Hyderabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/assets/logo.png", type: "image/png" }
    ],
    apple: "/assets/logo.png"
  }
};

import ScrollRevealProvider from "./components/ScrollRevealProvider";
import Header from "./components/Header";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import TimedLeadModal from "./components/TimedLeadModal";

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="antialiased">
        <ScrollRevealProvider>
          <Header />
          {children}
          <FloatingWhatsApp />
          <TimedLeadModal />
        </ScrollRevealProvider>
      </body>
    </html>
  );
}