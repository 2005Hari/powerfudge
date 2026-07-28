import StoryHero from "@/components/about/StoryHero";
import FounderLetter from "@/components/about/FounderLetter";
import Manifesto from "@/components/about/Manifesto";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story | PowerFudge",
  description: "Learn about the origins of PowerFudge and our commitment to uncompromising luxury and health.",
};

export default function AboutPage() {
  return (
    <main className="flex-1 flex flex-col w-full overflow-hidden">
      <StoryHero />
      <FounderLetter />
      <Manifesto />
    </main>
  );
}
