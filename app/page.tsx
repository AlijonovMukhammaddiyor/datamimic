"use client"
import AssetSection from "@/components/AssetSection";
import Footer from "@/components/Footer";
import GameSection from "@/components/GameSection";
import { Header } from "@/components/Header";
import NewsSection from "@/components/NewsSection";
import PartnerSection from "@/components/PartnerSection";
import { TitleSection } from "@/components/TitleSection";
import TokenSection from "@/components/TokenSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import { useCheckIsMobile } from "@/hooks/useCheckIsMobile"
import Image from "next/image";

export default function Home() {
  const isMobile = useCheckIsMobile();

  return (
    <>
      <Header/>
      <div className="flex flex-col items-center justify-center text-white gap-y-20 px-[5%] py-10">
        {/* title section */}
        <TitleSection/>
        {/* cylinder section */}
        <Image src='/images/section1-img.svg' width={2000} height={700} alt={""}></Image>
        {/* whatwedo section */}
        <WhatWeDoSection/>
        {/* token section */}
        <TokenSection/>
        {/* secure section */}
        <AssetSection/>
        {/* partners section */}
        <PartnerSection/>
        {/* news&update section */}
        <NewsSection/>
        {/* game section */}
        <GameSection/>
        {/* footer section */}
        <Footer/>
      </div>
  </>
  )
}

