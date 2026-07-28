export type Category = "Singles" | "Gift Boxes" | "Corporate";

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  images: string[];
  features: string[];
  dietary: string[];
  isBestSeller?: boolean;
}

export const products: Product[] = [
  {
    id: "p1",
    slug: "classic-cacao-fudge",
    name: "Classic Cacao Fudge",
    description: "Our signature original recipe. Dense, rich, and intensely chocolatey without any of the guilt.",
    price: 499,
    category: "Singles",
    images: ["/images/products/classic_cacao_fudge.png"],
    features: ["Handcrafted", "Zero Refined Sugar"],
    dietary: ["Gluten-Free", "Vegan-Friendly"],
    isBestSeller: true,
  },
  {
    id: "p2",
    slug: "roasted-almond-sea-salt",
    name: "Roasted Almond & Sea Salt",
    description: "The perfect balance of sweet dates, rich cacao, and crunchy roasted almonds with a hint of sea salt.",
    price: 549,
    category: "Singles",
    images: ["/images/products/roasted_almond_sea_salt.png"],
    features: ["Protein Rich", "Zero Maida"],
    dietary: ["Gluten-Free"],
  },
  {
    id: "p3",
    slug: "the-luxury-tasting-box",
    name: "The Luxury Tasting Box",
    description: "An elegant assortment of our 4 signature flavours. Beautifully packaged for the ultimate gifting experience.",
    price: 1899,
    category: "Gift Boxes",
    images: ["/images/products/luxury_tasting_box.png"],
    features: ["Assorted Flavours", "Premium Packaging", "Gift Note Included"],
    dietary: ["Gluten-Free"],
    isBestSeller: true,
  },
  {
    id: "p4",
    slug: "corporate-wellness-bundle",
    name: "Corporate Wellness Bundle",
    description: "Curated for teams. A health-conscious gifting solution that shows you care about their wellbeing.",
    price: 4500,
    category: "Corporate",
    images: ["/images/products/corporate_wellness_bundle.png"],
    features: ["Custom Logo Sleeve", "Bulk Discount Applied"],
    dietary: ["Gluten-Free", "Vegan-Friendly"],
  }
];
