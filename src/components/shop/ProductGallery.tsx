"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProductGallery({ images }: { images: string[] }) {
  // Mock multiple images by repeating the primary image for the demo
  const allImages = [images[0], images[0], images[0]];
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex lg:flex-col gap-4 overflow-x-auto lg:w-24 hide-scrollbar">
        {allImages.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIdx(idx)}
            className={`relative w-20 h-24 lg:w-full lg:h-32 flex-shrink-0 border transition-all ${
              activeIdx === idx ? "border-primary" : "border-transparent opacity-50 hover:opacity-100"
            }`}
          >
            <Image src={img} alt="Thumbnail" fill className="object-cover" />
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div className="relative aspect-[4/5] w-full bg-muted overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIdx}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Image 
              src={allImages[activeIdx]} 
              alt="Product Image" 
              fill 
              priority
              className="object-cover object-center" 
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
