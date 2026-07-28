"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }
  }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.2 } }
};

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden px-6 md:px-12 lg:px-24">

      <motion.div 
        className="relative z-10 max-w-5xl"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        <motion.p 
          variants={fadeUp}
          className="text-primary text-xs md:text-sm tracking-[0.3em] uppercase font-medium mb-6 md:mb-8"
        >
          Honest, Homemade & Guilt-Free
        </motion.p>
        
        <motion.h1 
          variants={fadeUp}
          className="text-5xl md:text-7xl lg:text-8xl font-heading text-foreground leading-[1.05] tracking-tight mb-8"
        >
          A Treat, Not A <br className="hidden md:block" />
          <span className="text-primary italic font-light">Compromise</span>
        </motion.h1>
        
        <motion.p 
          variants={fadeUp}
          className="text-muted-foreground text-lg md:text-2xl max-w-2xl font-light leading-relaxed mb-12"
        >
          Satisfy your sweet tooth with our fresh, handcrafted fudge. Made in small batches with zero refined sugar, no maida, and only ingredients you can actually pronounce.
        </motion.p>
        
        <motion.div 
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-start gap-6"
        >
          <Button 
            asChild
            size="lg" 
            className="h-14 px-8 text-base md:text-lg rounded-none tracking-wide bg-primary text-primary-foreground hover:bg-primary/90 group"
          >
            <Link href="/shop">
              Explore Collection
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button 
            asChild
            size="lg" 
            variant="outline" 
            className="h-14 px-8 text-base md:text-lg rounded-none tracking-wide border-primary/20 hover:bg-primary/10 hover:text-primary transition-colors"
          >
            <Link href="/about">
              Read Our Story
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
