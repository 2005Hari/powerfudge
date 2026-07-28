"use client";

import { motion } from "framer-motion";

export default function CorporateHero() {
  return (
    <section className="relative min-h-[60vh] flex flex-col justify-center items-center text-center overflow-hidden bg-background px-6 border-b border-border/50">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl z-10 pt-20"
      >
        <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-6">Corporate & Events</p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading text-foreground leading-[1.05] tracking-tight mb-8">
          The Gift of <span className="text-primary italic">Better Health</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
          Elevate your corporate gifting with luxury, handcrafted confectionery that shows you care about their wellbeing as much as your relationship.
        </p>
      </motion.div>
      
      {/* Subtle luxury glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
}
