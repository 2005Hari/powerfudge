"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function StoryHero() {
  return (
    <section className="relative min-h-[70vh] flex flex-col justify-center items-center text-center overflow-hidden bg-card px-6">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl z-10"
      >
        <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-6">Our Story</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading text-foreground leading-[1.05] tracking-tight mb-8">
          Born from a <span className="text-primary italic">Craving</span>. <br />
          Built on <span className="text-primary italic">Integrity</span>.
        </h1>
      </motion.div>
      
      {/* Abstract luxury backdrop */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <Image 
          src="https://images.unsplash.com/photo-1614088915856-78b1ce215dc3?auto=format&fit=crop&q=80&w=1920"
          alt="Cacao texture"
          fill
          className="object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent" />
      </div>
    </section>
  );
}
