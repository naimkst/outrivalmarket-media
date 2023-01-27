import { AboutSection } from "@/components/About/AboutSection";
import { ChainDockSection } from "@/components/About/ChainDockSection";
import { HeroSection } from "@/components/About/HeroSection";
import { KnowledgeSection } from "@/components/About/KnowledgeSection";
import { OurTeam } from "@/components/About/OurTeam";
import { ReadyForStart } from "@/components/About/ReadyForStart";
import { TogetherToday } from "@/components/About/TogetherToday";
import { FooterContent } from "@/components/Home/FooterContent";
import React from "react";

export default function About() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <div>
        <img src="/assets/images/about/full-shape.svg" alt="" />
      </div>
      <KnowledgeSection />
      <ReadyForStart />
      <OurTeam />
      <ChainDockSection />
      <TogetherToday />
      <FooterContent />
    </>
  );
}
