import { DISCORD_LINK, DOCS_LINK, SWAP_PRODUCT_LINK, X_LINK } from "@/config/links";
import { useCheckIsMobile } from "@/hooks/useCheckIsMobile";
import { NavigationItem } from "@/types/menu";
import Link from "next/link";
import { useState } from "react";
import { HeaderTab } from "./ui/HeaderTab";
import { Logo } from "./ui/Logo";

export function Header() {
  const isMobile = useCheckIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnterLaunch = () => setIsHovered(true);
  const onMouseLeaveLaunch = () => setIsHovered(false);

  const toggleMenu = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.stopPropagation(); // 이벤트 캡쳐링 방지
    setIsOpen((prevState) => !prevState);
  };

  const navigation: NavigationItem[] = [
    {
      name: "PRESALE",
      href: "https://app.kayen.org/presale",
      backgrounded: true,
    },
    {
      name: "DOCS",
      href: DOCS_LINK,
      icon: "/images/icons/docs-icon.svg",
    },
    {
      name: "DISCORD",
      href: DISCORD_LINK,
      icon: "/images/icons/discord-icon.svg",
    },
    {
      name: "TWITTER",
      href: X_LINK,
      icon: "/images/icons/x-icon.svg",
    },
    /*{
      name: "LEADERBOARD",
      href: "/",
      icon : "/images/icons/point-icon.svg"
    },  */
  ];

  return (
    <>
      {isMobile ? (
        <div
          onClick={() => setIsOpen(false)}
          className="flex w-full h-[59px] bg-bg-main  justify-between text-[20px] text-[#D3D3D3] leading-[28px]  font-medium  uppercase"
        >
          <Logo />
          <div className="flex">
            <Link
              className="pl-10 pr-5 duration-500 border-[#272A2A] flex items-center justify-center
                 hover:bg-white hover:text-jala-red"
              href={"https://sanjar-techie.github.io/"}
              onMouseEnter={onMouseEnterLaunch}
              onMouseLeave={onMouseLeaveLaunch}
            >
              {isHovering ? (
                <>
                  <div className="tracking-wide">LEARN MORE</div>
                  <img className="h-4" src="/images/icons/arrow-top-right-red.svg" alt="arrow-top-right-red" />
                </>
              ) : (
                <>
                  <div className="tracking-wide">LEARN MORE</div>
                  <img className="h-4" src="/images/icons/arrow-top-right.svg" alt="arrow-top-right" />
                </>
              )}
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex justify-between md:h-[60px] xl:h-[72px] text-[20px]  text-[#D3D3D3] leading-[28px]  font-medium  uppercase">
          <Logo />
          {/* [Auxili's Request]
        <div className="w-[18%] flex justify-center items-center border-r border-[#272A2A] space-x-2 ">
          <img className="h-4 xl:h-4" src="/images/icons/gov-icon.svg"/>        
          <div>Governance</div>
        </div>
        */}
          {/* <div className="w-[25%] lg:w-[20%] 2xl:w-[15%] flex justify-center items-center space-x-2 ">
            <HeaderTab
              title={"presale"}
              href={"https://app.kayen.org/presale"}
              backgrounded
            />
          </div>
          <div className="w-[25%] lg:w-[20%] 2xl:w-[15%] flex justify-center items-center space-x-2 ">
            <HeaderTab
              title={"documentation"}
              imgUrl={"/images/icons/docs-icon.svg"}
              href={DOCS_LINK}
            />
          </div>
          <div className="w-[20%] lg:w-[15%] 2xl:w-[10%] flex justify-center items-center space-x-2 ">
            <HeaderTab
              title={"discord"}
              imgUrl={"/images/icons/discord-icon.svg"}
              href={DISCORD_LINK}
            />
          </div>
          <div className="w-[20%] lg:w-[15%] 2xl:w-[10%] flex justify-center items-center space-x-2 ">
            <HeaderTab
              title={"twitter"}
              imgUrl={"/images/icons/x-icon.svg"}
              href={X_LINK}
            />
          </div> */}
          <div className="w-[25%] lg:w-[30%] 2xl:w-[40%] flex justify-center items-center space-x-2" />
          <a
            className="flex font-medium text-[16px] lg:text-[20px] leading-[28px] tracking-widest w-[179px]"
            href={"https://datamimic.github.io"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className="w-full space-x-2 flex items-center justify-center
                  bg-jala-red text-white 
                 hover:bg-white hover:text-jala-red duration-500"
              onMouseEnter={onMouseEnterLaunch}
              onMouseLeave={onMouseLeaveLaunch}
            >
              {isHovering ? (
                <>
                  <img className="h-4" src="/images/icons/arrow-top-right-red.svg" alt="arrow-top-right-red" />
                  <div>LEARN MORE</div>
                </>
              ) : (
                <>
                  <img className="h-4" src="/images/icons/arrow-top-right.svg" alt="arrow-top-right" />
                  <div>LEARN MORE</div>
                </>
              )}
            </div>
          </a>
        </div>
      )}
    </>
  );
}
