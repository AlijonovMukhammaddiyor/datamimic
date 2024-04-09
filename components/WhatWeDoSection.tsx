import { useCheckIsMobile } from "@/hooks/useCheckIsMobile";
import { LaunchCard } from "./ui/LaunchCard";


export default function WhatWeDoSection() {
    const isMobile = useCheckIsMobile();
    return(
    <div className='flex-col w-full'>
    {isMobile ? 
    <div className=" px-[5%]">
      <div className="pb-3"><img src="/images/icons/globe-icon.svg"></img></div>
      <div className='flex justify-start uppercase text-[48px] leading-[56px] font-medium text-[#FF1D00]'>WHAT WE DO</div>
      <div className='flex flex-col items-start justify-evenly gap-y-10 py-10'>
        <LaunchCard isLaunched={true} title={"DEX"} index={"001"} description={"Chiliz tokens are automatically wrapped and unwrapped on swaps to provide an intricate DEFI experience."}/>
        <div className="border-b border-[#595959] w-full"></div>
        <LaunchCard isLaunched={false} title={"LAUNCHPAD"} index={"002"} description={"Show your support for your top picks on Chiliz. Join the adventure and make a difference."}/>
        <div className="border-b border-[#595959] w-full"></div>
        <LaunchCard isLaunched={false} title={"NFT MARKETPLACE"} index={"003"} description={"A dedicated space for sports and entertainment NFTs. Show your support for your favorite athletes, teams, and entertainers."}/>
        <div className="w-full flex justify-center">
        <img className="px-6" src='/images/section2-img.png'></img>       
        </div>
      </div>
    </div>
    : 
    <div className="py-20">
        <div className='flex justify-between items-center py-20'>
          <div className="flex items-center space-x-6">
            <div className="uppercase text-[80px] leading-[88px]  text-[#FF1D00]">WHAT WE DO</div>
              <img className="h-12 object-cover" src="/images/icons/globe-icon.svg"></img>
          </div>
          <img src="/images/icons/background-icon.svg"/>
        </div>
        <div className='md:grid md:grid-cols-3'>
            <div className='flex flex-col items-start justify-evenly gap-y-10 '>
              <LaunchCard isLaunched={true} title={"DEX"} index={"001"} description={"Chiliz tokens are automatically wrapped and unwrapped on swaps to provide an intricate DEFI experience."}/>
              <LaunchCard isLaunched={false} title={"LAUNCHPAD"} index={"002"} description={"Show your support for your top picks on Chiliz. Join the adventure and make a difference."}/>
            </div>
            <img src='/images/section2-img.png'></img>
            <div className='flex flex-col items-start justify-center gap-y-10 pl-10'>
            <LaunchCard isLaunched={false} title={"NFT MARKETPLACE"} index={"003"} description={"A dedicated space for sports and entertainment NFTs. Show your support for your favorite athletes, teams, and entertainers."}/>
            </div>
        </div>

    </div>
    }
    </div> 
    )
}