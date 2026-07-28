"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { type Product } from "@/data/products";

export default function StickyATC({ product }: { product: Product }) {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);
  
  const whatsappNumber = "917798452398";
  const whatsappMessage = encodeURIComponent(`Hi! I would like to order: ${product.name}`);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Show sticky ATC after scrolling past the main product section (~800px)
    if (latest > 800) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  });

  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: isVisible ? 0 : "100%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed bottom-0 inset-x-0 z-40 bg-background/80 backdrop-blur-md border-t border-border/50 py-4 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="hidden md:block">
          <h3 className="font-heading text-lg text-foreground">{product.name}</h3>
          <p className="text-muted-foreground text-sm">₹{product.price}</p>
        </div>
        
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-full md:w-auto h-12 px-12 rounded-none tracking-wider bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          <MessageCircle className="w-4 h-4 mr-2" />
          ORDER ON WHATSAPP
        </a>
      </div>
    </motion.div>
  );
}
