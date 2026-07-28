"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const menuVariants = {
    closed: { y: "-100%" },
    open: { y: 0 }
  };

  const linkVariants = {
    closed: { opacity: 0, y: 20 },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.2 + (i * 0.1) }
    })
  };

  const links = [
    { name: "Shop Collection", href: "/shop" },
    { name: "Corporate Gifting", href: "/corporate-gifting" },
    { name: "Our Story", href: "/about" }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[60] bg-card flex flex-col px-6 py-8"
        >
          {/* Header */}
          <div className="flex justify-between items-center h-12">
            <span className="font-heading text-2xl font-medium tracking-tight text-foreground uppercase">
              Power<span className="text-primary italic font-light lowercase">fudge</span>
            </span>
            <button onClick={onClose} className="text-foreground hover:text-primary transition-colors">
              <X className="w-6 h-6" strokeWidth={1.5} />
            </button>
          </div>

          {/* Links */}
          <nav className="flex-1 flex flex-col justify-center gap-8">
            {links.map((link, i) => (
              <motion.div key={link.name} custom={i} variants={linkVariants}>
                <Link 
                  href={link.href} 
                  onClick={onClose}
                  className="font-heading text-4xl md:text-5xl text-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Footer Info */}
          <motion.div 
            custom={4} 
            variants={linkVariants}
            className="pt-8 border-t border-border/50 flex flex-col gap-2"
          >
            <p className="text-xs uppercase tracking-widest text-primary font-medium">Say Hello</p>
            <a href="mailto:hello@powerfudge.com" className="text-muted-foreground font-light text-lg">hello@powerfudge.com</a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
