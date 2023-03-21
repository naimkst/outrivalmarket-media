import { TogetherToday } from "@/components/About/TogetherToday";
import { Seo } from "@/components/GlobalComponent/Seo";
import { FooterContent } from "@/components/Home/FooterContent";
import { AboutSection } from "@/components/Services/AboutSection";
import { CTASection } from "@/components/Services/CTASection";
import { HeroSection } from "@/components/Services/HeroSection";
import { HowItsWorkSection } from "@/components/Services/HowItsWorkSection";
import { LaunchingMediaSection } from "@/components/Services/LaunchingMediaSection";
import { OurProcessSection } from "@/components/Services/OutProcessSection";
import { ThereTwoOptionSection } from "@/components/Services/ThereTwoOptionSection";
import { ZtimeSection } from "@/components/Services/ZtimeSection";
import useFetch from "@/hooks/useFetch";
import React from "react";

export default function Services() {
  const {
    loading,
    error,
    data: home,
  } = useFetch(`${process.env.NEXT_PUBLIC_API_URL}/service?populate=deep`);
  const data: any = home;

  console.log(data?.data?.attributes);
  return (
    <div className="overflow-hidden">
      <Seo />
      {data?.data?.attributes?.HeroSection?.IsShow && (
        <HeroSection data={data?.data?.attributes?.HeroSection} />
      )}
      {data?.data?.attributes?.LocalBrand?.IsShow && (
        <>
          <AboutSection data={data?.data?.attributes?.LocalBrand} />
          <img
            src="/assets/images/services/service-section-shape.svg"
            alt=""
            className="m-auto"
          />
        </>
      )}
      {data?.data?.attributes?.CTA?.IsShow && (
        <>
          <ZtimeSection
            data={data?.data?.attributes?.CTA}
            ugc={data?.data?.attributes?.UGCSection}
          />
          <img
            src="/assets/images/services/shape-section.svg"
            alt=""
            className="m-auto"
          />
        </>
      )}
      {data?.data?.attributes?.HowWorks?.IsShow && (
        <HowItsWorkSection data={data?.data?.attributes?.HowWorks} />
      )}
      {data?.data?.attributes?.TwoOption?.IsShow && (
        <ThereTwoOptionSection data={data?.data?.attributes?.TwoOption} />
      )}

      {data?.data?.attributes?.ThrowCTA?.IsShow && (
        <CTASection data={data?.data?.attributes?.ThrowCTA} />
      )}
      <OurProcessSection />
      <LaunchingMediaSection />
      <TogetherToday />
      <FooterContent />
    </div>
  );
}
