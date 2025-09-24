import { HeroSection } from "@/components/sections/HeroSection";
import { PainSection } from "@/components/sections/PainSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { TransformationSection } from "@/components/sections/TransformationSection";
import { ProductSection } from "@/components/sections/ProductSection";
import { GuaranteeSection } from "@/components/sections/GuaranteeSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalSection } from "@/components/sections/FinalSection";
import { FooterSection } from "@/components/sections/FooterSection";

const Index = () => {
  return (
    <main className="font-poppins">
      <HeroSection />
      <PainSection />
      <BenefitsSection />
      <ComparisonSection />
      <TransformationSection />
      <ProductSection />
      <GuaranteeSection />
      <FAQSection />
      <FinalSection />
      <FooterSection />
    </main>
  );
};

export default Index;
