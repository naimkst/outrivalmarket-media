import { TogetherToday } from "@/components/About/TogetherToday";
import { FooterContent } from "@/components/Home/FooterContent";
import { CallToAction } from "@/components/Portfolio/CallToAction";
import { FireUpUsSection } from "@/components/Portfolio/FireUpUsSection";
import { HeroSection } from "@/components/Portfolio/HeroSection";
import { IndrustrySection } from "@/components/Portfolio/IndrustrySection";
import { InstagramVideoSection } from "@/components/Portfolio/InstagramVideoSection";
import { NotSureSection } from "@/components/Portfolio/NotSureSection";
import { Platform } from "@/components/Portfolio/Platform";
import React from "react";

export default function Portfolio() {
  return (
    <div className="">
      <HeroSection />
      <Platform />
      <IndrustrySection />
      <CallToAction />
      <NotSureSection />
      <FireUpUsSection />
      <InstagramVideoSection />
      <TogetherToday />
      <FooterContent />
    </div>
  );
}
