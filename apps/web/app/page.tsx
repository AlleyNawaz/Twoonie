import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { ProblemSection } from "@/components/sections/problem-section";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
import { WhySolanaSection } from "@/components/sections/why-solana-section";
import { LiveTickerSection } from "@/components/sections/live-ticker-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { BuiltForCanadaSection } from "@/components/sections/built-for-canada-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <WhySolanaSection />
      <LiveTickerSection />
      <PricingSection />
      <BuiltForCanadaSection />
      <FinalCtaSection />
      <Footer />
    </main>
  );
}
