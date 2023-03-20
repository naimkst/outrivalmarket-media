import { AboutSection } from "@/components/About/AboutSection";
import { ChainDockSection } from "@/components/About/ChainDockSection";
import { HeroSection } from "@/components/About/HeroSection";
import { KnowledgeSection } from "@/components/About/KnowledgeSection";
import { OurTeam } from "@/components/About/OurTeam";
import { ReadyForStart } from "@/components/About/ReadyForStart";
import { TogetherToday } from "@/components/About/TogetherToday";
import { Seo } from "@/components/GlobalComponent/Seo";
import { FooterContent } from "@/components/Home/FooterContent";
import useFetch from "@/hooks/useFetch";
import React from "react";

export default function About() {
  const {
    loading,
    error,
    data: home,
  } = useFetch(`${process.env.NEXT_PUBLIC_API_URL}/about-us?populate=deep`);
  const data: any = home;
  console.log(data?.data);
  return (
    <div className="overflow-hidden">
      <Seo />
      {data?.data?.attributes?.HeroSection?.IsShow && (
        <HeroSection data={data?.data?.attributes?.HeroSection} />
      )}
      <AboutSection data={data?.data?.attributes?.AboutContent} />
      {data?.data?.attributes?.KnowledgeSection?.IsShow && (
        <>
          <div>
            <img
              src="/assets/images/about/full-shape.svg"
              alt=""
              className="m-auto"
            />
          </div>
          <KnowledgeSection data={data?.data?.attributes?.KnowledgeSection} />
        </>
      )}
      {data?.data?.attributes?.ReadyToCta?.IsShow && (
        <ReadyForStart data={data?.data?.attributes?.ReadyToCta} />
      )}
      <OurTeam />
      <ChainDockSection />
      <TogetherToday />
      <FooterContent />
    </div>
  );
}
