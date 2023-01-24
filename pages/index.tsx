import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { HeroSection } from "@/components/Home/HeroSection";
import { WeKnowSection } from "@/components/Home/WeKnowSection";
import { SliderSection } from "@/components/Home/SliderSection";
import { WeDontRip } from "@/components/Home/WeDontRip";
import { TestimonialSection } from "@/components/Home/TestimonialSection";
import { MarketingDirectorSection } from "@/components/Home/MarketingDirectorSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <HeroSection />
      <WeKnowSection />
      <SliderSection />
      <section>
        <img src="/assets/images/double-shape.svg" alt="Shape" />
      </section>
      <WeDontRip />
      <TestimonialSection />
      <MarketingDirectorSection />
    </>
  );
}
