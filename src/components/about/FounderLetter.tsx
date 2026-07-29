"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function FounderLetter() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-background border-b border-border/50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-8"
        >
          <h2 className="text-3xl md:text-5xl font-heading text-foreground">
            A Note from the <span className="text-primary italic">Founder</span>
          </h2>
          <div className="w-16 h-[1px] bg-primary/40" />
          <div className="space-y-6 text-muted-foreground text-lg font-light leading-relaxed">
            <p>
              It started with a simple problem — I love sweets, but hated the guilt that came with them! My husband&apos;s a gym-goer, always hunting for something healthy to munch on. I&apos;m the sweet-tooth in the house, always craving chocolate but trying to cut back on sugar.
            </p>
            <p>
              Between the two of us, every &quot;healthy&quot; snack in the market felt either bland, overpriced, or full of things I couldn&apos;t even pronounce! So I started making my own:
            </p>
            <ul className="space-y-2 py-2 text-foreground font-medium list-disc list-inside">
              <li>No maida</li>
              <li>No refined sugar</li>
              <li>Just real ingredients like roasted chana, khajur, cashews, almonds and cocoa powder.</li>
            </ul>
            <p>
              Made fresh, in my own kitchen. What began as a way to satisfy my own cravings guilt-free turned into something my whole family loved!
            </p>
            <p>
              And I have a feeling I&apos;m not the only one looking for a sweet that&apos;s actually honest — homemade, affordable, and doesn&apos;t ask you to choose between taste and health.
            </p>
            <p className="font-medium text-foreground text-xl italic pt-2">
              That&apos;s PowerFudge. A treat, not a compromise!
            </p>
          </div>
          <div className="pt-4">
            <p className="font-heading text-2xl text-foreground">Megha</p>
            <p className="text-sm uppercase tracking-widest text-primary mt-1">Founder, PowerFudge</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex-1 w-full relative aspect-[3/4] bg-muted overflow-hidden rounded-md"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full relative"
          >
            {/* Founder Image */}
            <Image
              src="/images/founder.jpg"
              alt="Megha, Founder of PowerFudge"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700 object-top"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
