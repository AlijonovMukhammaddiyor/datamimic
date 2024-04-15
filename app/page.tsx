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

  if(!mounted) {
    return null
  }
  return (
    isMobile ? 
      <>
        <div className="fixed w-full z-10">
          <img className="bg-repeat w-full " src="/images/jalaswap-landing-page-bg-mobile.svg"/>
        </div>
        <div className="fixed z-20 w-full bg-bg-main border-y border-[#272A2A]">
          <Header/>
        </div>

        <div className="relative z-10 space-y-16 overflow-x-hidden">
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
    :<>
    <div className="fixed z-10 ">
      <img className="md:w-[1010px] 2xl:w-[1440px] 3xl:w-[1728px] bg-contain bg-no-repeat overflow-hidden " src="/images/jalaswap-landing-page-bg.svg"/>
    </div>
    <div className='flex justify-center z-20 w-full md:h-[60px] 2xl:h-[72px] bg-bg-main border-b border-[#272A2A] fixed'>
      <div className='md:w-[1010px] 2xl:w-[1440px] 3xl:w-[1728px]  
                      md:px-[85px] 2xl:px-[120px] 3xl:px-[145px] 
                      md:text-[60px] 3xl:h-[72px]'>
        <Header/>
      </div>
    </div>

    <div className="z-10 md:w-[1010px] 2xl:w-[1440px] 3xl:w-[1728px] 
                        md:px-[105px] 2xl:px-[145px] 3xl:px-[170px] overflow-hidden ">
      <TitleSection/>
    
      {/* cylinder section */}
      <StatdiumSection/>
      {/* whatwedo section */}
      <WhatWeDoSection/>
    </div>
    <div className="z-10 md:w-[1010px] 2xl:w-[1440px] 3xl:w-[1728px] 
                        md:px-[85px] 2xl:px-[120px] 3xl:px-[145px] ">
      {/* token section */}
      <TokenSection/>
      {/* secure section */}
      <AssetSection/>
    </div>
    <div className="z-10 md:w-[1010px] 2xl:w-[1440px] 3xl:w-[1728px] 
                        md:px-[105px] 2xl:px-[145px] 3xl:px-[170px] ">
      {/* partners section */}
      <PartnerSection/>
    </div>
      
      {/* news&update section */}
      {/* [Auxili's Request] <NewsSection/>*/}

    <div className="z-10 md:w-[1010px] 2xl:w-[1440px] 3xl:w-[1728px] 
                        md:px-[85px] 2xl:px-[120px] 3xl:px-[145px] ">
      {/* game section */}
      <GameSection/>
    </div>
    <div className="z-10 md:w-[1010px] 2xl:w-[1440px] 3xl:w-[1728px] 
                        md:px-[105px] 2xl:px-[145px] 3xl:px-[170px] ">
      {/* footer section */}
      <Footer/>
    </div>
    </>
  )
}
