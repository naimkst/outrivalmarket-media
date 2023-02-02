import { TogetherToday } from "@/components/About/TogetherToday";
import { FooterContent } from "@/components/Home/FooterContent";
import { AboutSection } from "@/components/Services/AboutSection";
import { CTASection } from "@/components/Services/CTASection";
import { HeroSection } from "@/components/Services/HeroSection";
import { HowItsWorkSection } from "@/components/Services/HowItsWorkSection";
import { LaunchingMediaSection } from "@/components/Services/LaunchingMediaSection";
import { OurProcessSection } from "@/components/Services/OutProcessSection";
import { ThereTwoOptionSection } from "@/components/Services/ThereTwoOptionSection";
import { ZtimeSection } from "@/components/Services/ZtimeSection";
import React from "react";

export default function Services() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <img src="/assets/images/services/service-section-shape.svg" alt="" />
      <ZtimeSection />
      <img src="/assets/images/services/shape-section.svg" alt="" />
      <HowItsWorkSection />
      <ThereTwoOptionSection />
      <CTASection />
      <OurProcessSection />
      <LaunchingMediaSection />
      <TogetherToday />
      <FooterContent />
    </>
  );
}
