import CorporateHero from "@/components/corporate/CorporateHero";
import GiftingProcess from "@/components/corporate/GiftingProcess";
import InquiryForm from "@/components/corporate/InquiryForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate Gifting | PowerFudge",
  description: "Elevate your corporate gifting with luxury, handcrafted confectionery.",
};

export default function CorporateGiftingPage() {
  return (
    <main className="flex-1 flex flex-col w-full overflow-hidden">
      <CorporateHero />
      <GiftingProcess />
      <InquiryForm />
    </main>
  );
}
