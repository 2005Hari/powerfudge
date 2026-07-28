"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

export default function ComparisonEngine() {
  const comparisonData = [
    { feature: "Refined Sugar", us: false, them: true },
    { feature: "Maida / Refined Flour", us: false, them: true },
    { feature: "Ingredients You Can Pronounce", us: true, them: false },
    { feature: "Made Fresh in a Real Kitchen", us: true, them: false },
    { feature: "Honest & Affordable", us: true, them: false },
  ];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-background">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading text-foreground mb-4">
            The Honest <span className="text-primary italic">Truth</span>
          </h2>
          <p className="text-muted-foreground text-lg font-light max-w-xl mx-auto">
            We don&apos;t just taste better. We are better. See how PowerFudge stacks up against traditional, mass-produced sweets.
          </p>
        </div>

        <div className="border border-border/50 rounded-xl overflow-hidden bg-card/30 backdrop-blur-md">
          {/* Header */}
          <div className="grid grid-cols-3 bg-card p-6 border-b border-border">
            <div className="font-medium text-muted-foreground uppercase tracking-widest text-xs md:text-sm">Features</div>
            <div className="text-center font-heading text-primary text-xl md:text-2xl">PowerFudge</div>
            <div className="text-center font-heading text-muted-foreground text-xl md:text-2xl">Others</div>
          </div>
          
          {/* Rows */}
          <div className="divide-y divide-border/50">
            {comparisonData.map((row, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-3 p-4 md:p-6 items-center hover:bg-background/50 transition-colors"
              >
                <div className="font-light text-foreground text-sm md:text-base">{row.feature}</div>
                <div className="flex justify-center">
                  {row.us ? (
                    <Check className="w-6 h-6 text-primary" />
                  ) : (
                    <X className="w-6 h-6 text-muted-foreground/30" />
                  )}
                </div>
                <div className="flex justify-center">
                  {row.them ? (
                    <Check className="w-6 h-6 text-muted-foreground/30" />
                  ) : (
                    <X className="w-6 h-6 text-muted-foreground/30" />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
