"use client"
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

export default function Home() {
  const isMobile = useCheckIsMobile();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted && <div className="bg-bg-main text-white font-medium flex flex-col justify-start items-center overflow-x-hidden">
      {isMobile ? 
      <>
        <div className="fixed w-full z-10 h-[5530px] overflow-y-hidden">
          <img className="bg-repeat w-full " src="/images/jalaswap-landing-page-bg-mobile.svg"/>
        </div>
        <div className="fixed z-20 w-full bg-bg-main border-b border-[#272A2A]">
          <Header/>
        </div>

        <div className="relative z-10 space-y-16 ">
          <TitleSection/>
          <StatdiumSection/>
          <WhatWeDoSection/>
          <TokenSection/>   
          <AssetSection/>
        <PartnerSection/>
      </div>
      <div className="z-10 w-full  border-y  border-[#272A2A]">
        <GameSection/>
      </div>
      <div className="z-10 w-full">
      <Footer/>
      </div>
    </>
    :
    <>
    <div className="fixed z-10 2xl:h-[6270px] md:h-[5000px] overflow-y-hidden ">
      <img className="md:w-[1024px] 2xl:w-[1728px] bg-repeat-y " src="/images/jalaswap-landing-page-bg.svg"/>
    </div>
    <div className='md:w-[1024px] md:px-[85px] 2xl:w-[1728px] 2xl:px-[145px] fixed z-20 bg-bg-main h-[72px] border-b border-[#272A2A]'>
      <Header/>
    </div>
    <div className="z-10 2xl:w-[1728px] 2xl:px-[170px] md:w-[1024px] md:px-[105px]">
      <TitleSection/>
    
      {/* cylinder section */}
      <StatdiumSection/>
      {/* whatwedo section */}
      <WhatWeDoSection/>
    </div>
    <div className="z-10 2xl:w-[1728px] 2xl:px-[145px] md:w-[1024px] md:px-[85px]">
      {/* token section */}
      <TokenSection/>
      {/* secure section */}
      <AssetSection/>
    </div>
    <div className="z-10 2xl:w-[1728px] 2xl:px-[170px] md:w-[1024px] md:px-[105px]">
      {/* partners section */}
      <PartnerSection/>
    </div>
      
      {/* news&update section */}
      {/* [Auxili's Request] <NewsSection/>*/}

    <div className="z-10 2xl:w-[1728px] 2xl:px-[145px] md:w-[1024px] md:px-[85px]">
      {/* game section */}
      <GameSection/>
    </div>
    <div className="z-10 2xl:w-[1728px] 2xl:px-[170px] md:w-[1024px] md:px-[105px]">
      {/* footer section */}
      <Footer/>
    </div>
    </>
    }
    </div>
  )
}
