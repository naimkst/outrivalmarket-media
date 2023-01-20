import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { HeroSection } from "@/components/Home/HeroSection";
import { WeKnowSection } from "@/components/Home/WeKnowSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <HeroSection />
      <WeKnowSection />
    </>
  );
}
