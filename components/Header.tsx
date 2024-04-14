import { useCheckIsMobile } from "@/hooks/useCheckIsMobile";
import { Logo } from "./ui/Logo";
import { HeaderTab } from "./ui/HeaderTab";
import Link from "next/link";
import { useState } from "react";
import { NavigationItem } from "@/types/menu";
import { DISCORD_LINK, MEDIUM_LINK, X_LINK } from "@/config/links";

export function Header () {
  const isMobile = useCheckIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnterLaunch = () => setIsHovered(true);
  const onMouseLeaveLaunch = () => setIsHovered(false);
  
  const toggleMenu = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.stopPropagation(); // 이벤트 캡쳐링 방지
    setIsOpen(prevState => !prevState);
  }


  const navigation: NavigationItem[] = [  
    {
      name: "DOCS",
      href:  MEDIUM_LINK,
      icon : "/images/icons/docs-icon.svg"
    },  
    {
      name: "DISCORD",
      href: DISCORD_LINK,
      icon : "/images/icons/discord-icon.svg"
    },  
    {
      name: "TWITTER",
      href: X_LINK,
      icon : "/images/icons/x-icon.svg"
    },  
    {
      name: "LEADERBOARD",
      href: "/",
      icon : "/images/icons/point-icon.svg"
    },  
  ]
  

    return(
      <>
      {isMobile ? 
      <div
        onClick={() => setIsOpen(false)}
        className='flex w-full h-[56px] bg-bg-main  justify-between text-[20px] text-[#D3D3D3] leading-[28px]  font-medium  uppercase'>
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
          <div onClick={toggleMenu}
                  className="px-6  flex items-center justify-center  duration-500 
                  border-transparent hover:border-b-2 hover:border-jala-red">
            <img src="/images/icons/hamburger-icon.svg"/>
          </div>
        </div>
        {isOpen ? 
        <div className="absolute bg-bg-main right-0 top-[56px] min-h-screen w-full rounded-l-lg z-40">
          <ul className="text-white h-screen w-full justify-start items-center">
            {navigation.map((tab, index) => {
              return(
                <Link href={tab.href}>
                <li className="border-b border-[#272A2A] p-4 flex justify-between">
                  <div>{tab.name}</div>
                  <img src={tab.icon}/>
                </li> 
              </Link>
              )
            })}
          </ul>
        </div>
        :<></>
      }
      </div>
      :
      <div className='flex md:h-[60px] 2xl:h-[72px] text-[20px]  text-[#D3D3D3] leading-[28px]  font-medium  uppercase'>
        <Logo/>
        {/* [Auxili's Request]
        <div className="w-[18%] flex justify-center items-center border-r border-[#272A2A] space-x-2 ">
          <img className="h-4 xl:h-4" src="/images/icons/gov-icon.svg"/>        
          <div>Governance</div>
        </div>
        */}
        <div className="w-[25%] lg:w-[20%] 2xl:w-[15%] flex justify-center items-center space-x-2 ">
          <HeaderTab title={"documentation"} imgUrl={"/images/icons/docs-icon.svg"} href={MEDIUM_LINK}/>
        </div>
        <div className="w-[20%] lg:w-[15%] 2xl:w-[10%] flex justify-center items-center space-x-2 ">
          <HeaderTab title={"discord"} imgUrl={"/images/icons/discord-icon.svg"} href={DISCORD_LINK}/>
        </div>
        <div className="w-[20%] lg:w-[15%] 2xl:w-[10%] flex justify-center items-center space-x-2 ">
          <HeaderTab title={"twitter"} imgUrl={"/images/icons/x-icon.svg"} href={X_LINK}/>
        </div>
        <div className="w-[25%] lg:w-[20%] 2xl:w-[14%] flex justify-center items-center space-x-2 ">
          <HeaderTab title={"leaderboard"} imgUrl={"/images/icons/point-icon.svg"} href={""}/>
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