import { useCheckIsMobile } from "@/hooks/useCheckIsMobile"
import { SectionDivider } from "./ui/SectionDivider";
import Marquee from "react-fast-marquee";
import { JalaToken } from "./ui/JalaToken";

export default function TokenSection () {
    const isMobile = useCheckIsMobile();

    
    type IdToUrlMap = {
        [key: number]: string;
      };
    
      const idToUrlMap: IdToUrlMap = {
        1: "/images/psg-token-img.svg",
        2: "/images/bvb-token-img.svg",
        3: "/images/fcb-token-img.svg",
        4: "/images/manu-token-img.svg",
        5: "/images/cbf-token-img.svg",
        6: "/images/oc-token-img.svg",
      };

    return(
    <>{isMobile ? 
        <div className='w-full border-y  border-[#272A2A] px-[5%]'>
            <SectionDivider isVertical={false} numbers={['01', '02', '03', '04', '05', '06']} mobileNumbers={['01', '02','03','04']}/>
            <div className='flex justify-start uppercase text-[48px] leading-[56px] font-medium text-start text-[#FF1D00]'>
                <div className="w-[350px]">80+ real world-based <br/><span className='text-white'>fan tokens ready to be traded and staked.</span>
            </div>
        </div>
        <div className="flex justify-center overflow-hidden">
            <div className='flex justify-center items-center h-[400px] w-[350px] sm:w-[600px] md:w-[600px] '>
                    <Marquee pauseOnHover>
                    {[1, 2, 3, 4, 5].map((id: number) => (
                        <img className="px-10 opacity-50 w-[160px]" key={id} src={idToUrlMap[id]} />
                    ))}
                    </Marquee>
                    <JalaToken/>
            </div>
        </div>
        <div className='flex w-full justify-end uppercase text-[48px] leading-[56px] font-medium text-start text-white'>
            <div className="w-[300px]">Watch for the<br/> seasonal events and<br/>
            <span className='text-[#FF1D00] '>earn token rewards.</span>
            </div>    
        </div>   
        <SectionDivider isVertical={false} numbers={['01', '02', '03', '04', '05', '06']} mobileNumbers={['01', '02','03','04']}/>

    </div>
    :
    <div className=' border-y  border-[#272A2A] md:px-[20px] 2xl:px-[25px]'>
        <SectionDivider isVertical={false} numbers={['01', '02', '03', '04', '05', '06']} mobileNumbers={['01', '02','03','04']}/>
        <div className="py-10">
            {/* Upper Title */}
            <div className='uppercase md:text-[76px]  2xl:text-[96px] leading-[104px] text-start text-[#FF1D00] md:w-[800px] 2xl:w-[1000px]'>
                80+ real world-based 
                <span className='text-white'> fan tokens ready to be traded and staked.</span>
            </div>
            <div className='flex justify-center items-center h-[600px] py-20'>
                <Marquee pauseOnHover>
                {[1, 2, 3, 4, 5, 6].map((id: number) => (
                    <img className="px-16 opacity-50" key={id} src={idToUrlMap[id]} />
                ))}
                </Marquee>
                <JalaToken/>
            </div>
            {/* Lower Title */}
            <div className="flex justify-end ">
                <div className='uppercase md:text-[76px] 2xl:text-[96px] leading-[104px] text-start text-white  md:w-[700px] 2xl:w-[837px]'>Watch for the seasonal events and <span className='text-[#FF1D00] '>earn token rewards.</span></div>
            </div>
        </div>
        <SectionDivider isVertical={false} numbers={['01', '02', '03', '04', '05', '06']} mobileNumbers={['01', '02','03','04']}/>
    </div>
    }
    </>
    )
}