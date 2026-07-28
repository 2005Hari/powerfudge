"use client";

import { motion } from "framer-motion";

export default function Manifesto() {
  const values = [
    {
      title: "Unyielding Quality",
      description: "We source only the highest grade cacao, dates, and nuts. If an ingredient isn't exceptional, it doesn't make the cut."
    },
    {
      title: "Radical Transparency",
      description: "No hidden sugars. No chemical preservatives. No unpronounceable additives. What you see is exactly what you taste."
    },
    {
      title: "Craft Over Commerce",
      description: "Every batch is handmade by artisans who care. We will never compromise our process for scale."
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-card">
      <div className="max-w-5xl mx-auto text-center">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-6"
        >
          Our Manifesto
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-heading text-foreground mb-16"
        >
          The New Rules of <span className="text-primary italic">Luxury</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
          {values.map((val, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="space-y-4"
            >
              <div className="text-4xl font-heading text-primary/20 leading-none">0{idx + 1}</div>
              <h3 className="text-xl font-heading text-foreground">{val.title}</h3>
              <p className="text-muted-foreground font-light leading-relaxed">{val.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
