import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PowerFudge | Premium Healthy Indulgence",
  description: "Handcrafted healthy confectionery made from real ingredients. Zero refined sugar, zero maida, no artificial preservatives.",
};

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans selection:bg-accent selection:text-black bg-transparent">
        
        {/* Global Fixed Background Image */}
        <div className="fixed inset-0 z-[-2]">
          <Image 
            src="/images/hero_bg.png" 
            alt="PowerFudge Texture" 
            fill
            priority
            className="object-cover opacity-30"
            sizes="100vw"
          />
        </div>
        {/* Gradient overlay to ensure text readability */}
        <div className="fixed inset-0 z-[-1] bg-gradient-to-b from-background/90 via-background/60 to-background/90" />

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
