"use client";

import { MessageCircle } from "lucide-react";
import { type Product } from "@/data/products";

export default function AddToCartButton({ product }: { product: Product }) {
  const whatsappNumber = "917798452398";
  const whatsappMessage = encodeURIComponent(`Hi! I would like to order: ${product.name}`);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-full h-14 rounded-none tracking-widest text-lg bg-primary text-primary-foreground hover:bg-primary/90 mb-12 transition-colors"
    >
      <MessageCircle className="w-5 h-5 mr-3" />
      ORDER ON WHATSAPP
    </a>
  );
}
