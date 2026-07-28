"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -50px 0px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-card border-t border-border mt-auto"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-24">
        
        {/* Top Section: Newsletter & Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 mb-24">
          
          {/* Newsletter (Takes up half on desktop) */}
          <div className="md:col-span-6 space-y-6">
            <h3 className="font-heading text-3xl md:text-4xl text-foreground">
              Join the <span className="text-primary italic">Inner Circle</span>
            </h3>
            <p className="text-muted-foreground font-light leading-relaxed max-w-md">
              Subscribe to receive exclusive access to limited-edition flavours, private tasting events, and the latest from our kitchen.
            </p>
            <form className="flex max-w-md pt-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email Address" 
                className="flex-1 h-14 bg-background border border-border/50 px-4 focus:outline-none focus:border-primary transition-colors text-foreground"
              />
              <Button type="submit" className="h-14 px-8 rounded-none bg-primary text-primary-foreground hover:bg-primary/90">
                <ArrowRight className="w-5 h-5" />
              </Button>
            </form>
          </div>

          {/* Links (Takes up the other half) */}
          <div className="md:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-widest text-primary font-medium mb-6">Shop</h4>
              <ul className="space-y-3">
                <li><Link href="/shop" className="text-muted-foreground hover:text-foreground font-light transition-colors">All Products</Link></li>
                <li><Link href="/shop" className="text-muted-foreground hover:text-foreground font-light transition-colors">Signature Singles</Link></li>
                <li><Link href="/shop" className="text-muted-foreground hover:text-foreground font-light transition-colors">Gift Boxes</Link></li>
                <li><Link href="/corporate-gifting" className="text-muted-foreground hover:text-foreground font-light transition-colors">Corporate Orders</Link></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-widest text-primary font-medium mb-6">Brand</h4>
              <ul className="space-y-3">
                <li><Link href="/about" className="text-muted-foreground hover:text-foreground font-light transition-colors">Our Story</Link></li>
                <li><Link href="/about" className="text-muted-foreground hover:text-foreground font-light transition-colors">Ingredients</Link></li>
                <li><Link href="/about" className="text-muted-foreground hover:text-foreground font-light transition-colors">Sustainability</Link></li>
                <li><Link href="/contact" className="text-muted-foreground hover:text-foreground font-light transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div className="space-y-4 hidden sm:block">
              <h4 className="text-xs uppercase tracking-widest text-primary font-medium mb-6">Social</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-muted-foreground hover:text-foreground font-light transition-colors flex items-center gap-2">Instagram</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground font-light transition-colors flex items-center gap-2">Twitter</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground font-light transition-colors flex items-center gap-2">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright & Legal */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/50 gap-4">
          <p className="text-xs text-muted-foreground tracking-wider uppercase">
            © {new Date().getFullYear()} PowerFudge. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground tracking-wider uppercase">
            <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </motion.footer>
  );
}
