import { TogetherToday } from "@/components/Portfolio/TogetherToday";
import { FooterContent } from "@/components/Home/FooterContent";
import { CallToAction } from "@/components/Portfolio/CallToAction";
import { FireUpUsSection } from "@/components/Portfolio/FireUpUsSection";
import { HeroSection } from "@/components/Portfolio/HeroSection";
import { IndrustrySection } from "@/components/Portfolio/IndrustrySection";
import { InstagramVideoSection } from "@/components/Portfolio/InstagramVideoSection";
import { NotSureSection } from "@/components/Portfolio/NotSureSection";
import { Platform } from "@/components/Portfolio/Platform";
import React from "react";
import { MotionSection } from "@/components/Portfolio/MotionSection";
import { Seo } from "@/components/GlobalComponent/Seo";

export default function Portfolio() {
  return (
    <div className="overflow-hidden">
      <Seo />
      <HeroSection />
      <Platform />
      <IndrustrySection />
      <TogetherToday />
      <MotionSection />
      <CallToAction />
      <NotSureSection />
      <FireUpUsSection />
      <InstagramVideoSection />
      <TogetherToday />
      <FooterContent />
    </div>
  );
}
