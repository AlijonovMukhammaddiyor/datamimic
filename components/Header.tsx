import { useCheckIsMobile } from "@/hooks/useCheckIsMobile";
import { Logo } from "./ui/Logo";
import { HeaderTab } from "./ui/HeaderTab";
import Link from "next/link";
import { useState } from "react";

export function Header () {
  const isMobile = useCheckIsMobile();

  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnterLaunch = () => setIsHovered(true);
  const onMouseLeaveLaunch = () => setIsHovered(false);
  
    return(
      <>
      {isMobile ? 
      <div className='flex w-full h-[56px] bg-bg-main border-b border-[#272A2A] justify-between text-[20px] text-[#D3D3D3] leading-[28px]  font-medium  uppercase'>
        <Logo/>
        <div className="flex">
          <Link className="px-10 border-t border-x space-x-2  duration-500 border-[#272A2A] flex items-center justify-center
                 hover:bg-white hover:text-jala-red"  href={""}
          onMouseEnter={onMouseEnterLaunch}
          onMouseLeave={onMouseLeaveLaunch}>    
          {isHovering ? 
          <>
            <img className="h-4" src="/images/icons/arrow-top-right-red.svg"/>
            <div>LAUNCH APP</div>
          </>
          :
          <>
            <img className="h-4" src="/images/icons/arrow-top-right.svg"/>
            <div>LAUNCH APP</div>
          </>          
        }
        </Link>
          <div className="px-6  flex items-center justify-center  duration-500 border-transparent  border-b-2 border-[#272A2A]
                  hover:border-b-2 hover:border-jala-red"><img src="/images/icons/hamburger-icon.png"/></div>
        </div>
      </div>
      :
      <div className='flex h-[72px] bg-bg-main border-b border-[#272A2A] text-[20px]   text-[#D3D3D3] leading-[28px]  font-medium  uppercase'>
        <Logo/>
        {/* [Auxili's Request]
        <div className="w-[18%] flex justify-center items-center border-r border-[#272A2A] space-x-2 ">
          <img className="h-4 xl:h-4" src="/images/icons/gov-icon.svg"/>        
          <div>Governance</div>
        </div>
        */}
        <div className="w-[25%] lg:w-[20%] 2xl:w-[15%] flex justify-center items-center space-x-2 ">
          <HeaderTab title={"documentation"} imgUrl={"/images/icons/docs-icon.svg"}/>
        </div>
        <div className="w-[20%] lg:w-[15%] 2xl:w-[10%] flex justify-center items-center space-x-2 ">
          <HeaderTab title={"discord"} imgUrl={"/images/icons/discord-icon.png"}/>
        </div>
        <div className="w-[20%] lg:w-[15%] 2xl:w-[10%] flex justify-center items-center space-x-2 ">
          <HeaderTab title={"twitter"} imgUrl={"/images/icons/x-icon.svg"}/>
        </div>
        <div className="w-[25%] lg:w-[20%] 2xl:w-[14%] flex justify-center items-center space-x-2 ">
          <HeaderTab title={"leaderboard"} imgUrl={"/images/icons/point-icon.svg"}/>
        </div>
        <div className="w-[25%] lg:w-[30%] 2xl:w-[40%] flex justify-center items-center space-x-2"/>
        {/* [Auxili's Request]
        <div className="w-[18%] flex justify-center items-center space-x-2">
          <img className="h-4 xl:h-4" src="/images/icons/community-icon.svg"/>        
          <div>community</div>
        </div>
        <div className="flex items-center w-[17%]"/>
        */}
        <Link className="flex font-medium text-[16px] lg:text-[20px] leading-[28px] tracking-widest w-[179px]" href={""}>
        <div className="w-full space-x-2 flex items-center justify-center
                  bg-jala-red text-white 
                 hover:bg-white hover:text-jala-red duration-500"
          onMouseEnter={onMouseEnterLaunch}
          onMouseLeave={onMouseLeaveLaunch}>    
        {isHovering ? 
          <>
            <img className="h-4" src="/images/icons/arrow-top-right-red.svg"/>
            <div>LAUNCH APP</div>
          </>
          :
          <>
            <img className="h-4" src="/images/icons/arrow-top-right.svg"/>
            <div>LAUNCH APP</div>
          </>          
        }
        </div>
        </Link>
      </div>
      }
      </>
    )
    
}