import { useCheckIsMobile } from "@/hooks/useCheckIsMobile";
import { SectionDivider } from "./ui/SectionDivider";



export default function GameSection () {
  const isMobile = useCheckIsMobile();

    return(
      <>
      {isMobile ? 
      <>
        <img className="w-full absolute" src="/images/bg-diagonal-lines-mobile.svg"/>
        <div className='w-full  px-[5%]'>
            <SectionDivider/>
            <div className='relative text-[80px] leading-[88px] font-medium text-start py-10'>
              <span className='text-[#FF1D00]'>JALA:</span>
              <br/>
              A NEW GAME.
            </div>
        </div>
      </>
        :
        <div className='w-full'>
          <img className="absolute md:w-[855px] 2xl:w-fit" src="/images/bg-diagonal-line.svg"/>
          <div className=" border-t border-[#272A2A] px-[25px]">
            <SectionDivider/>
            <div className='relative md:text-[120px] 2xl:text-[186px] leading-[100%] font-medium text-start py-6'>
              <span className='text-[#FF1D00]'>JALA</span>
               — A NEW GAME.
            </div>
          </div>
        </div>
      }
      </>
    )
}