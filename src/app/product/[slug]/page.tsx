import { products } from "@/data/products";
import { notFound } from "next/navigation";
import ProductGallery from "@/components/shop/ProductGallery";
import StickyATC from "@/components/shop/StickyATC";
import AddToCartButton from "@/components/shop/AddToCartButton";
import { ShoppingBag, ChevronDown } from "lucide-react";

// Generate static params for all products
export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const product = products.find((p) => p.slug === resolvedParams.slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="flex-1 pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Top Section: Gallery & Purchase Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Left: Sticky Gallery */}
          <div className="lg:sticky lg:top-24 h-fit">
            <ProductGallery images={product.images} />
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col pt-4">
            <div className="mb-8 border-b border-border/50 pb-8">
              <h1 className="text-4xl md:text-5xl font-heading text-foreground mb-4">{product.name}</h1>
              <p className="text-2xl text-foreground font-light mb-6">₹{product.price}</p>
              <p className="text-muted-foreground text-lg leading-relaxed font-light">
                {product.description}
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">
                Why It's Different
              </h3>
              <ul className="space-y-3">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-foreground font-light">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <AddToCartButton product={product} />

            {/* Accordions / Tabs */}
            <div className="border-t border-border/50 divide-y divide-border/50">
              <details className="group" open>
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none py-6 text-foreground uppercase tracking-wider text-sm hover:text-primary transition-colors">
                  Ingredients
                  <span className="transition group-open:rotate-180">
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </summary>
                <div className="text-muted-foreground font-light leading-relaxed pb-6 animate-in slide-in-from-top-2">
                  Premium Dates, Raw Cacao Powder, Cacao Butter, Roasted Almonds, Organic Virgin Coconut Oil, Himalayan Pink Salt. 
                  <br /><br />
                  <span className="text-foreground font-medium">Allergen Info:</span> Contains nuts. Made in a facility that processes dairy.
                </div>
              </details>
              
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none py-6 text-foreground uppercase tracking-wider text-sm hover:text-primary transition-colors">
                  Nutritional Value
                  <span className="transition group-open:rotate-180">
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </summary>
                <div className="text-muted-foreground font-light leading-relaxed pb-6 animate-in slide-in-from-top-2">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="border-b border-border/50 pb-2">Calories</div>
                    <div className="border-b border-border/50 pb-2 text-right">180 kcal</div>
                    <div className="border-b border-border/50 pb-2">Protein</div>
                    <div className="border-b border-border/50 pb-2 text-right">4g</div>
                    <div className="border-b border-border/50 pb-2">Total Fat</div>
                    <div className="border-b border-border/50 pb-2 text-right">12g</div>
                    <div className="border-b border-border/50 pb-2">Total Carbohydrates</div>
                    <div className="border-b border-border/50 pb-2 text-right">16g</div>
                    <div className="border-b border-border/50 pb-2">Dietary Fiber</div>
                    <div className="border-b border-border/50 pb-2 text-right">3g</div>
                    <div className="border-b border-border/50 pb-2">Total Sugars (Natural)</div>
                    <div className="border-b border-border/50 pb-2 text-right">10g</div>
                  </div>
                </div>
              </details>
            </div>
            
          </div>
        </div>
      </div>

      <StickyATC product={product} />
    </main>
  );
}
