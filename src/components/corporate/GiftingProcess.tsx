"use client";

import { motion } from "framer-motion";
import { Package, PencilRuler, Truck } from "lucide-react";

export default function GiftingProcess() {
  const steps = [
    {
      icon: <Package className="w-8 h-8 text-primary" />,
      title: "Curate Your Selection",
      desc: "Choose from our signature tasting boxes, single origins, or let us curate a custom flavour profile specifically for your brand."
    },
    {
      icon: <PencilRuler className="w-8 h-8 text-primary" />,
      title: "Custom Branding",
      desc: "We offer luxury custom sleeves, gold-foil logos, and personalized insert cards to ensure your brand remains front and center."
    },
    {
      icon: <Truck className="w-8 h-8 text-primary" />,
      title: "White-Glove Delivery",
      desc: "Provide us with your recipient list, and we handle the rest. Tracked, temperature-controlled shipping directly to their doorsteps."
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading text-foreground mb-4">
            A Seamless <span className="text-primary italic">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg font-light max-w-xl mx-auto">
            From curation to delivery, our dedicated concierge team handles every detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[1px] bg-border/50" />
          
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative flex flex-col items-center text-center space-y-6"
            >
              <div className="w-24 h-24 rounded-full bg-background border border-border/50 flex items-center justify-center z-10 shadow-lg">
                {step.icon}
              </div>
              <h3 className="text-xl font-heading text-foreground">{step.title}</h3>
              <p className="text-muted-foreground font-light leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
