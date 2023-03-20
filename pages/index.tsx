import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { HeroSection } from "@/components/Home/HeroSection";
import { WeKnowSection } from "@/components/Home/WeKnowSection";
import { SliderSection } from "@/components/Home/SliderSection";
import { WeDontRip } from "@/components/Home/WeDontRip";
import { TestimonialSection } from "@/components/Home/TestimonialSection";
import { MarketingDirectorSection } from "@/components/Home/MarketingDirectorSection";
import { FeelSocialSection } from "@/components/Home/FeelSocialSection";
import { BookCoverSection } from "@/components/Home/BookCoverSection";
import { CallToAction } from "@/components/Home/CallToAction";
import { OurProcessSection } from "@/components/Home/OutProcessSection";
import { TogetherToday } from "@/components/Home/TogetherToday";
import { FooterContent } from "@/components/Home/FooterContent";
import { Seo } from "@/components/GlobalComponent/Seo";
import useFetch from "@/hooks/useFetch";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const {
    loading,
    error,
    data: home,
  } = useFetch(`${process.env.NEXT_PUBLIC_API_URL}/home-page?populate=deep`);
  const data: any = home;
  return (
    <>
      <Seo />
      {data?.data?.attributes?.HeroSection?.IsShow && (
        <HeroSection data={data?.data?.attributes?.HeroSection} />
      )}

      {data?.data?.attributes?.WeKnow?.IsShow && (
        <WeKnowSection data={data?.data?.attributes?.WeKnow} />
      )}

      {data?.data?.attributes?.SocialSliderImage?.IsShow && (
        <>
          <SliderSection data={data?.data?.attributes?.SocialSliderImage} />
          <section className="m-auto w-full text-center">
            <img
              src="/assets/images/double-shape.svg"
              alt="Shape"
              className="m-auto"
            />
          </section>
        </>
      )}

      {data?.data?.attributes?.Promising?.IsShow && (
        <WeDontRip data={data?.data?.attributes?.Promising} />
      )}

      {data?.data?.attributes?.Testimonial?.IsShow && <TestimonialSection />}

      {data?.data?.attributes?.MarketingSection?.IsShow && (
        <MarketingDirectorSection
          data={data?.data?.attributes?.MarketingSection}
        />
      )}

      {data?.data?.attributes?.FeelSocialSection?.IsShow && (
        <FeelSocialSection data={data?.data?.attributes?.FeelSocialSection} />
      )}

      {data?.data?.attributes?.BookCover?.IsShow && (
        <BookCoverSection data={data?.data?.attributes?.BookCover} />
      )}

      {data?.data?.attributes?.ReadyToCta?.IsShow && (
        <>
          <CallToAction data={data?.data?.attributes?.ReadyToCta} />
          <section>
            <img
              src="/assets/images/cta-shap.svg"
              alt="Shape"
              className="m-auto"
            />
          </section>
        </>
      )}

      {data?.data?.attributes?.OurProcess?.IsShow && (
        <OurProcessSection data={data?.data?.attributes?.OurProcess} />
      )}

      {data?.data?.attributes?.LetsTogether?.IsShow && (
        <TogetherToday data={data?.data?.attributes?.LetsTogether} />
      )}

      {data?.data?.attributes?.FooterAbout?.IsShow && (
        <FooterContent data={data?.data?.attributes?.FooterAbout} />
      )}
    </>
  );
}
