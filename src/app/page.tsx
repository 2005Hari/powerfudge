import Hero from "@/components/home/Hero";
import IngredientStory from "@/components/home/IngredientStory";
import ComparisonEngine from "@/components/home/ComparisonEngine";
import SocialProof from "@/components/home/SocialProof";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col w-full overflow-hidden">
      <Hero />
      <IngredientStory />
      <ComparisonEngine />
      <SocialProof />
    </main>
  );
}
