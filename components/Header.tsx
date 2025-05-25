import { useCheckIsMobile } from "@/hooks/useCheckIsMobile";
import Link from "next/link";
import { useState } from "react";
import { Logo } from "./ui/Logo";
import styles from "../styles/navbar.module.css";

export function Header() {
  const isMobile = useCheckIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnterLaunch = () => setIsHovered(true);
  const onMouseLeaveLaunch = () => setIsHovered(false);

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
              className="px-4 duration-500 border-[#272A2A] flex items-center justify-center text-base
                 hover:bg-white hover:text-jala-red"
              href={"https://sanjar-techie.github.io/"}
              onMouseEnter={onMouseEnterLaunch}
              onMouseLeave={onMouseLeaveLaunch}
            >
              {isHovering ? (
                <>
                  <div className="tracking-wide text-sm">LEARN MORE</div>
                  <img className="h-4" src="/images/icons/arrow-top-right-red.svg" alt="arrow-top-right-red" />
                </>
              ) : (
                <>
                  <div className="tracking-wide text-sm">LEARN MORE</div>
                  <img className="h-4" src="/images/icons/arrow-top-right.svg" alt="arrow-top-right" />
                </>
              )}
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex justify-between md:h-[60px] xl:h-[72px] text-[20px] leading-[28px] font-medium uppercase">
          <div className="flex items-center space-x-2 h-full justify-center px-10">
            <p className="text-white tracking-wide text-base">Humanola</p>
          </div>

          <div className="flex items-center space-x-2 h-full justify-center px-10">
            <a
              className="relative group font-medium rounded-full text-[16px] lg:text-[20px] leading-[28px] tracking-widest no-underline p-0.5 inline-block"
              href={"https://datamimic.github.io"}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={onMouseEnterLaunch}
              onMouseLeave={onMouseLeaveLaunch}
            >
              <span className="w-full h-full flex items-center justify-center space-x-2 px-4 py-2 text-white group-hover:bg-white group-hover:text-jala-red duration-300 transition-colors">
                {isHovering ? (
                  <>
                    <img className="h-4" src="/images/icons/arrow-top-right-red.svg" alt="arrow-top-right-red" />
                    <div className="text-sm">LEARN MORE</div>
                  </>
                ) : (
                  <>
                    <img className="h-4" src="/images/icons/arrow-top-right.svg" alt="arrow-top-right" />
                    <div className="text-sm">LEARN MORE</div>
                  </>
                )}
              </span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
