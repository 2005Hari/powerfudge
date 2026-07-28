"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function IngredientStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 1, 1, 0]);

  const ingredients = [
    { name: "Sweetened with Khajur", desc: "No refined sugar here. Just the natural, rich sweetness of premium dates." },
    { name: "Powered by Roasted Chana", desc: "We swapped out maida for roasted chana to give you a protein-packed, guilt-free bite." },
    { name: "Cashews & Almonds", desc: "Loaded with real nuts for that perfect crunch and healthy fats." },
    { name: "Rich Cocoa Powder", desc: "Intensely chocolatey to satisfy your deepest cravings without the crash." },
  ];

  return (
    <section ref={containerRef} className="py-32 px-6 md:px-12 lg:px-24 bg-card relative overflow-hidden">
      <motion.div style={{ y, opacity }} className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Typographic Story */}
        <div className="flex-1 space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-foreground leading-[1.1]">
            Real <span className="text-primary italic">Ingredients</span>.<br />
            No <span className="text-primary italic">Compromise</span>.
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl font-light max-w-lg leading-relaxed">
            Most &quot;healthy&quot; snacks force you to choose between your health and your cravings. We believe a true treat shouldn&apos;t ask you to compromise on either.
          </p>
          <div className="w-20 h-[1px] bg-primary/30 mt-8" />
        </div>

        {/* Ingredients Grid */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
          {ingredients.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
              className="p-6 border border-border/50 bg-background/50 backdrop-blur-sm group hover:border-primary/50 transition-colors duration-500"
            >
              <h3 className="text-xl font-heading text-foreground mb-3 group-hover:text-primary transition-colors">{item.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
        
      </motion.div>
    </section>
  );
}
