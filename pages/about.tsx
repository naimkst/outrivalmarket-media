import { AboutSection } from "@/components/About/AboutSection";
import { ChainDockSection } from "@/components/About/ChainDockSection";
import { HeroSection } from "@/components/About/HeroSection";
import { KnowledgeSection } from "@/components/About/KnowledgeSection";
import { OurTeam } from "@/components/About/OurTeam";
import { ReadyForStart } from "@/components/About/ReadyForStart";
import { TogetherToday } from "@/components/About/TogetherToday";
import { Seo } from "@/components/GlobalComponent/Seo";
import { FooterContent } from "@/components/Home/FooterContent";
import React from "react";

export default function About() {
  return (
    <div className="overflow-hidden">
      <Seo />
      <HeroSection />
      <AboutSection />
      <div>
        <img
          src="/assets/images/about/full-shape.svg"
          alt=""
          className="m-auto"
        />
      </div>
      <KnowledgeSection />
      <ReadyForStart />
      <OurTeam />
      <ChainDockSection />
      <TogetherToday />
      <FooterContent />
    </div>
  );
}
