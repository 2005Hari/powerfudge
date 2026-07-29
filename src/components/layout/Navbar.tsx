"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Search, Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import MobileMenu from "@/components/layout/MobileMenu";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setIsScrolled(latest > 50);
  });

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
          isScrolled 
            ? "bg-card/95 backdrop-blur-md border-b border-border shadow-[0_4px_30px_rgba(0,0,0,0.03)]" 
            : "bg-background/30 backdrop-blur-md border-b border-border/20"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Left: Hamburger & Search (Mobile/Desktop split) */}
          <div className="flex items-center gap-6 flex-1">
            <button 
              onClick={() => setIsMobileMenuOpen(true)} 
              className="text-foreground hover:text-primary transition-colors"
            >
              <Menu className="w-5 h-5" strokeWidth={1.5} />
            </button>
            <button className="hidden md:block text-foreground hover:text-primary transition-colors">
              <Search className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>

          {/* Center: Brand Logo */}
          <Link href="/" className="flex-1 flex justify-center">
            <span className="font-heading text-2xl md:text-3xl font-medium tracking-tight text-foreground uppercase">
              Power<span className="text-primary italic font-light lowercase">fudge</span>
            </span>
          </Link>

          {/* Right: Navigation */}
          <div className="flex items-center justify-end gap-6 flex-1">
            <nav className="hidden lg:flex items-center gap-8">
              <Link href="/shop" className="relative text-sm font-medium tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[1px] after:bg-primary after:scale-x-0 after:origin-right hover:after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-500 after:ease-out">
                Shop
              </Link>
              <Link href="/corporate-gifting" className="relative text-sm font-medium tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[1px] after:bg-primary after:scale-x-0 after:origin-right hover:after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-500 after:ease-out">
                Gifting
              </Link>
              <Link href="/about" className="relative text-sm font-medium tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[1px] after:bg-primary after:scale-x-0 after:origin-right hover:after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-500 after:ease-out">
                Story
              </Link>
            </nav>
          </div>

        </div>
      </motion.header>
      
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}
