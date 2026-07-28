"use client";

import { motion } from "framer-motion";

export default function SocialProof() {
  const reviews = [
    {
      quote: "The only sweet I've ever felt completely guilt-free eating. It feels incredibly premium, yet the ingredients are so honest.",
      author: "Priya S.",
      role: "Verified Buyer"
    },
    {
      quote: "We used PowerFudge for our corporate Diwali gifting. The luxury packaging and health-conscious approach made it the absolute perfect choice for our clients.",
      author: "Rahul M.",
      role: "Marketing Director"
    },
    {
      quote: "A true masterclass in how to do confectionery right. You can taste the quality of the cacao and the dates instantly. Never going back to normal fudge.",
      author: "Ananya T.",
      role: "Fitness Enthusiast"
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-card border-y border-border/30">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm tracking-[0.3em] uppercase font-medium text-primary mb-4">
            Real Love From Real People
          </h2>
          <p className="text-3xl md:text-5xl font-heading text-foreground">
            What Our <span className="italic font-light">Family Thinks</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reviews.map((review, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center space-y-6"
            >
              <span className="text-6xl font-heading text-primary/20 leading-none h-8">"</span>
              <p className="text-lg text-foreground font-light leading-relaxed flex-1 italic">
                {review.quote}
              </p>
              <div>
                <p className="font-medium text-primary tracking-wide uppercase text-sm">{review.author}</p>
                <p className="text-muted-foreground text-xs uppercase tracking-widest mt-1">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
