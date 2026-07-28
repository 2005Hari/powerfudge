"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { type Product } from "@/data/products";
import { MessageCircle } from "lucide-react";

export default function ProductCard({ product, index }: { product: Product; index: number }) {
  const whatsappNumber = "917798452398";
  const whatsappMessage = encodeURIComponent(`Hi! I would like to order: ${product.name}`);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative flex flex-col bg-card border border-border/50 overflow-hidden hover:border-primary/50 transition-all duration-500"
    >
      <Link href={`/product/${product.slug}`} className="block relative aspect-square overflow-hidden bg-muted">
        <Image 
          src={product.images[0]} 
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {product.isBestSeller && (
          <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest px-3 py-1">
            Best Seller
          </div>
        )}
      </Link>
      
      <div className="p-6 flex flex-col flex-1">
        <div className="flex justify-between items-start gap-4 mb-2">
          <Link href={`/product/${product.slug}`} className="hover:text-primary transition-colors">
            <h3 className="text-xl font-heading text-foreground">{product.name}</h3>
          </Link>
          <span className="text-lg font-medium text-foreground whitespace-nowrap">
            ₹{product.price}
          </span>
        </div>
        
        <p className="text-sm text-muted-foreground line-clamp-2 mb-6 flex-1">
          {product.description}
        </p>
        
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center rounded-none h-12 tracking-wider bg-transparent border border-primary/20 text-foreground hover:bg-primary hover:text-primary-foreground transition-all group/btn"
        >
          <MessageCircle className="w-4 h-4 mr-2 transition-transform group-hover/btn:-translate-y-0.5" />
          ORDER ON WHATSAPP
        </a>
      </div>
    </motion.div>
  );
}
