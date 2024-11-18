import { useCheckIsMobile } from "@/hooks/useCheckIsMobile";
import { useState } from "react";

export default function PartnerSection() {
  const isMobile = useCheckIsMobile();
  const [isSherlockHovering, setIsSherlockHovered] = useState(false);
  const [isCertikHovering, setIsCertikHovered] = useState(false);

  const onMouseEnterLaunchSherlock = () => setIsSherlockHovered(true);
  const onMouseLeaveLaunchSherlock = () => setIsSherlockHovered(false);

  const onMouseEnterLaunchCertik = () => setIsSherlockHovered(true);
  const onMouseLeaveLaunchCertik = () => setIsSherlockHovered(false);
  return (
    <>
      {isMobile ? (
        <div className="w-full space-y-10 pb-16">
          <div className="flex flex-col justify-center space-y-4">
            <img className="px-[20%]" src="/images/partners-asset.svg" alt="partners-asset" />
            <div className="uppercase text-[48px] leading-[56px] font-medium text-center text-[#FF1D00] ">
              <span className="text-white">Our </span>
              <span className="text-[#FF1D00] ">Security</span>
            </div>

            {/* [Request]
                <div className='uppercase text-[48px] leading-[56px] font-medium text-center text-[#FF1D00] '>Our Security</div>
                <div className='space-y-3'>
                    <div className='text-center font-sans text-lg font-light text-jala-gray-1'>Trusted friends and collaborators</div>
                </div>
                <div className='space-y-3'>
                    <div className='text-center font-sans text-lg font-light text-jala-gray-1'>Trusted friends and collaborators</div>
                </div>
                */}
          </div>
          <div className="w-full flex flex-col justify-center gap-y-4 px-[5%]">
            <div
              className="flex justify-center items-center text-center border border-[#272A2A] h-[160px] bg-[#0F1212] hover:border hover:border-jala-red hover:bg-transparent hover:duration-700"
              onMouseEnter={onMouseEnterLaunchSherlock}
              onMouseLeave={onMouseLeaveLaunchSherlock}
            >
              {isSherlockHovering ? (
                <img src="/images/sherlock-logo-with-title-hover.svg" alt="sherlock-logo-with-title-hover" />
              ) : (
                <img src="/images/sherlock-logo-with-title.svg" alt="sherlock-logo-with-title" />
              )}
            </div>
            <div className="flex justify-center items-center text-center border border-[#272A2A] h-[160px] bg-[#0F1212] hover:border hover:border-jala-red hover:bg-transparent hover:duration-700">
              <img src="/images/certik-logo-with-title.svg" alt="certik-logo-with-title" />
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full space-y-8 py-32  px-[20px]">
          <div className=" flex flex-col justify-center">
            <div className="flex justify-between items-center">
              <div className="uppercase text-[80px] leading-[88px] text-start ">
                <span className="text-white">Our </span>
                <span className="text-[#FF1D00] ">Security</span>
              </div>
              <img className="" src="/images/security-asset-vertical.svg" />
            </div>

            {/* [Request]
                <div className='uppercase text-[80px] leading-[88px] text-center text-[#FF1D00] '>Our Security</div>
                <div className='space-y-3'>
                    <div className='font-sans text-center text-[20px] font-light text-jala-gray-1'>Trusted friends and collaborators</div>
                </div>
                */}
          </div>
          <div className="w-full grid grid-cols-2 justify-center gap-x-4 gap-y-4">
            <div
              className="flex justify-center items-center text-center border border-[#272A2A] md:h-[160px] 2xl:h-[200px] bg-[#0F1212] hover:border hover:border-jala-red hover:bg-transparent hover:duration-300"
              onMouseEnter={onMouseEnterLaunchSherlock}
              onMouseLeave={onMouseLeaveLaunchSherlock}
            >
              {isSherlockHovering ? (
                <img src="/images/sherlock-logo-with-title-hover.svg" alt="sherlock-logo-with-title-hover" />
              ) : (
                <img src="/images/sherlock-logo-with-title.svg" alt="sherlock-logo-with-title" />
              )}
            </div>
            <div className="flex justify-center items-center text-center border border-[#272A2A] md:h-[160px] 2xl:h-[200px] bg-[#0F1212] hover:border hover:border-jala-red hover:bg-transparent hover:duration-300">
              <img src="/images/certik-logo-with-title-hover.svg" alt="certik-logo-with-title-hover" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
