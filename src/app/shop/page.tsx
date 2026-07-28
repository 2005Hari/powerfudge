"use client";

import { useState } from "react";
import { products, type Category } from "@/data/products";
import ProductCard from "@/components/shop/ProductCard";
import { motion } from "framer-motion";

export default function ShopPage() {
  const categories: ("All" | Category)[] = ["All", "Singles", "Gift Boxes", "Corporate"];
  const [activeCategory, setActiveCategory] = useState<"All" | Category>("All");

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <main className="flex-1 pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Header & Filters */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16 border-b border-border/50 pb-8">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-foreground mb-4">
              The <span className="text-primary italic">Collection</span>
            </h1>
            <p className="text-muted-foreground max-w-md font-light">
              Explore our range of premium, handcrafted confectionery designed for true indulgence.
            </p>
          </div>
          
          <div className="flex gap-4 overflow-x-auto pb-2 w-full md:w-auto hide-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium tracking-wide whitespace-nowrap transition-all ${
                  activeCategory === cat 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-card border border-border/50 text-muted-foreground hover:border-primary/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProducts.map((product, idx) => (
            <ProductCard key={product.id} product={product} index={idx} />
          ))}
        </motion.div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-24 text-muted-foreground">
            No products found in this category.
          </div>
        )}

      </div>
    </main>
  );
}
