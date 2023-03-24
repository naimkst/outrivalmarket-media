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
import useFetch from "@/hooks/useFetch";

export default function Portfolio() {
  const {
    loading: loadingPortfolio,
    error: errorPortfolio,
    data: portfolioPage,
  } = useFetch(
    `${process.env.NEXT_PUBLIC_API_URL}/portfolio-page?populate=deep`
  );
  const data: any = portfolioPage;

  return (
    <div className="overflow-hidden">
      <Seo />

      {data?.data?.attributes?.HeroSection?.IsShow && (
        <HeroSection data={data?.data?.attributes?.HeroSection?.HeroSection} />
      )}

      {data?.data?.attributes?.Platform?.IsShow && (
        <Platform data={data?.data?.attributes?.Platform} />
      )}
      {data?.data?.attributes?.Industry?.IsShow && (
        <IndrustrySection data={data?.data?.attributes?.Industry} />
      )}

      {data?.data?.attributes?.CAT?.IsShow && (
        <TogetherToday data={data?.data?.attributes?.CAT} />
      )}
      {data?.data?.attributes?.StillMotion?.IsShow && (
        <MotionSection data={data?.data?.attributes?.StillMotion} />
      )}

      {data?.data?.attributes?.LetsTogether?.IsShow && (
        <CallToAction data={data?.data?.attributes?.LetsTogether} />
      )}
      {data?.data?.attributes?.HowItWork?.IsShow && (
        <NotSureSection data={data?.data?.attributes?.HowItWork} />
      )}
      {data?.data?.attributes?.FireUpSocial?.IsShow && (
        <FireUpUsSection data={data?.data?.attributes?.FireUpSocial} />
      )}
      <InstagramVideoSection />
      {data?.data?.attributes?.ContactUsCTA?.IsShow && (
        <TogetherToday data={data?.data?.attributes?.ContactUsCTA} />
      )}
      {data?.data?.attributes?.FooterAbout?.IsShow && (
        <FooterContent data={data?.data?.attributes?.FooterAbout} />
      )}
    </div>
  );
}
