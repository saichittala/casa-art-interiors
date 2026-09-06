import type { Metadata } from "next";
import { Lora, Geist } from "next/font/google";
import "./globals.css";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-lora",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-geist",
  display: "swap",
});

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

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lora.variable} ${geist.variable}`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700;800&family=Lora:ital,wght@0,400..700;1,400..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${geist.className} antialiased`}>
        <ScrollRevealProvider>
          {children}
        </ScrollRevealProvider>
      </body>
    </html>
  );
}