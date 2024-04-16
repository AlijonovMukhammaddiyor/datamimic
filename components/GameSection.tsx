import { useCheckIsMobile } from "@/hooks/useCheckIsMobile";
import { SectionDivider } from "./ui/SectionDivider";



export default function GameSection () {
  const isMobile = useCheckIsMobile();

    return(
      <>
      {isMobile ? 
      <>
        <img className="absolute w-full" src="/images/bg-diagonal-lines-mobile.svg"/>
        <div className='w-full  px-[5%]'>
            <SectionDivider isVertical={false} numbers={['01', '02', '03', '04', '05', '06']} mobileNumbers={['01', '02','03','04']}/>
            <div className='relative text-[80px] leading-[88px] font-medium text-start pb-[14%]'>
              <span className='text-[#FF1D00]'>KAYEN:</span>
              <br/>
              A NEW GAME.
            </div>
        </div>
      </>
        :
        <div className='w-full'>
          <img className="absolute md:w-[998px] xl:w-[1255px]  2xl:w-[1415px] " src="/images/bg-diagonal-line.svg"/>
          <div className=" border-t border-[#272A2A] px-[25px]">
            <SectionDivider isVertical={false} numbers={['01', '02', '03', '04', '05', '06']} mobileNumbers={['01', '02','03','04']}/>
            <div className='relative md:text-[120px] 2xl:text-[186px] leading-[100%] font-medium text-start py-6'>
              <span className='text-[#FF1D00]'>KAYEN</span>
               — A NEW GAME.
            </div>
          </div>
        </div>
      }
      </>
    )
}