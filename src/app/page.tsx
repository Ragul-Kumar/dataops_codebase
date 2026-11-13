import { Footer } from "@/components/layout/Footer";
import { CostComparison } from "@/components/sections/CostComparison";
import { FinalCta } from "@/components/sections/FinalCta";
import { Hero } from "@/components/sections/hero/Hero";
import { Objections } from "@/components/sections/Objections";
import { Process } from "@/components/sections/Process";
import { Proof } from "@/components/sections/Proof";

export default function HomePage() {
  return (
    <>
      <Hero />
      <main>
        <Proof />
        <Process />
        <CostComparison />
        <Objections />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
