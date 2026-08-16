import React from "react";
import { Hero } from "@/components/home/Hero";
import { KineticTicker } from "@/components/ui/KineticTicker";
import { BrandStory } from "@/components/home/BrandStory";
import { EyeCareSection } from "@/components/home/EyeCareSection";
import { InteractiveLensPreview } from "@/components/home/InteractiveLensPreview";
import { EyewearShowcase } from "@/components/home/EyewearShowcase";
import { EziaExperience } from "@/components/home/EziaExperience";
import { CorporateEyecare } from "@/components/home/CorporateEyecare";
import { WhyOptikEzia } from "@/components/home/WhyOptikEzia";
import { StoreFinderPreview } from "@/components/home/StoreFinderPreview";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <KineticTicker />
      <BrandStory />
      <EyeCareSection />
      <InteractiveLensPreview />
      <EyewearShowcase />
      <EziaExperience />
      <CorporateEyecare />
      <WhyOptikEzia />
      <StoreFinderPreview />
      <FinalCTA />
    </>
  );
}

