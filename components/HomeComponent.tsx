"use client";

import AssetSection from "@/components/AssetSection";
import Footer from "@/components/Footer";
import GameSection from "@/components/GameSection";
import { Header } from "@/components/Header";
import PartnerSection from "@/components/PartnerSection";
import { TitleSection } from "@/components/TitleSection";
import TokenSection from "@/components/TokenSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import { useCheckIsMobile } from "@/hooks/useCheckIsMobile";
import { StatdiumSection } from "@/components/StatdiumSection";
import { useEffect, useState } from "react";

export function HomeComponent() {
  const isMobile = useCheckIsMobile();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return isMobile ? (
    <>
      <div className="flex justify-center w-full h-[60px]">
        <div className="fixed z-40 bg-bg-main  w-full">
          <Header />
        </div>
      </div>
      <div className="relative z-10 space-y-16 ">
        <TitleSection />
        <StatdiumSection />
        {/* <WhatWeDoSection /> */}
        <TokenSection />
        <AssetSection />
        {/* <PartnerSection /> */}
      </div>
      {/* <div className="z-10 w-full  border-y  border-[#272A2A]">
        <GameSection />
      </div>
      <div className="z-10 w-full">
        <Footer />
      </div> */}
    </>
  ) : (
    <>
      <div
        className="flex justify-center w-full
                    md:h-[60px] xl:h-[72px]"
      >
        <div
          className="fixed z-40 bg-bg-main
                      2xl:w-[1440px] xl:w-[1280px] lg:w-[1024px] 
                      h-[60px] xl:h-[73px] border-b border-[#272A2A] "
        >
          <Header />
        </div>
      </div>

      <div className="z-10 px-6">
        <TitleSection />
        {/* cylinder section */}
        <StatdiumSection />
        {/* whatwedo section */}
        {/* <WhatWeDoSection/> */}
      </div>
      <div className="z-10 ">
        {/* token section */}
        <TokenSection />
        {/* secure section */}
        <AssetSection />
        {/* partners section */}
        {/* <PartnerSection /> */}
        {/* news&update section */}
        {/* [Auxili's Request] <NewsSection/>*/}
        {/* game section */}
        {/* <GameSection /> */}
        {/* footer section */}
        {/* <Footer /> */}
      </div>
    </>
  );
}
