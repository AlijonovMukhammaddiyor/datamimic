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
        1: "https://assets.chiliz.com/partner/c2d54ced-43c2-43e2-9d58-66684f02afb2/partner_logo/9bac0d35-de61-4265-9fc9-2641aa8a74fb.png?version=1674723871",
        3: "https://assets.chiliz.com/partner/a0ad0a62-728b-4634-bf69-b3cf23435527/partner_logo/63ced28f-9dea-4e56-a904-66df8a332016.png?version=1674722272",
        4: "https://assets.chiliz.com/partner/99dd7cc7-80a6-4728-84ea-fd96203fc223/partner_logo/b94be562-d5cd-4b43-bc97-e6565847f659.png?version=1674725743",
        5: "https://assets.chiliz.com/partner/3c79d471-a7ef-4616-983e-b1a61d4eb6e0/partner_logo/91f3f29a-b6f4-4bd4-919c-112c412cf2bd.png?version=1721659943",
        6: "https://assets.chiliz.com/partner/e28dfba1-10dd-42d6-8d50-1b5260fc296c/partner_logo/2f1bdb0c-0daf-4493-9c2a-30f853910016.png?version=1695892182",
        7: "https://assets.chiliz.com/partner/fc00f3c8-1f85-4bb6-bf73-c6a5c51c0131/partner_logo/c7bcca14-52ef-4e83-bfcd-cac8a9f5a307.png?version=1674726128",
        8: "https://assets.chiliz.com/partner/faebf0a5-1269-4935-a265-169caf483d6e/partner_logo/fc2755af-4d1b-49ce-839a-06c68016d369.png?version=1674724336",
        9: "https://assets.chiliz.com/partner/3392534e-774f-4cc0-b085-db27aef3aff4/partner_logo/b7bb0310-e6b1-4086-a4c0-c8d702ad90b4.png?version=1674725893",
        10: "https://assets.chiliz.com/partner/d4a1b857-b04c-4420-85b0-4a143191c760/partner_logo/9e16afc1-3335-481b-a797-9a60d73c871e.png?version=1674724537",
        11: "https://assets.chiliz.com/partner/8944b4a9-2a1a-451a-a360-678168c13d61/partner_logo/568bdefb-ea07-4e10-bb49-9dbd2802983b.png?version=1674725638",
        12: "https://assets.chiliz.com/partner/759e82b6-46c3-4891-bfb1-f239a42d0669/partner_logo/cafe261b-d555-4909-84d7-8c1a51429693.png?version=1674725143",
        13: "https://assets.chiliz.com/partner/f5230b16-f87f-4c26-b4d5-438db4371e7b/partner_logo/0f9a786a-1a63-4d77-8e16-2cfe0d6b3995.png?version=1674723803",
        14: "https://assets.chiliz.com/partner/9e9a2b43-528f-4669-97fa-b24224a80f6a/partner_logo/d92a61e2-c7d3-4145-9352-a5e487282306.png?version=1674724942",
        15: "https://assets.chiliz.com/partner/81bb56f5-2f8a-4cf9-ab87-f259681a15df/partner_logo/7697febf-055d-4561-8249-e2f287642804.png?version=1674725140"
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
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((id: number) => (
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
    <div className=' border-y  border-[#272A2A] md:px-[25px]'>
        <SectionDivider isVertical={false} numbers={['01', '02', '03', '04', '05', '06']} mobileNumbers={['01', '02','03','04']}/>
        <div className="py-10">
            {/* Upper Title */}
            <div className='uppercase md:text-[76px]  2xl:text-[96px] leading-[104px] text-start text-[#FF1D00] md:w-[800px] 2xl:w-[1000px]'>
                80+ real world-based 
                <span className='text-white'> fan tokens ready to be traded and staked.</span>
            </div>
            <div className='flex justify-center items-center h-[600px] py-20'>
                <Marquee pauseOnHover>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((id: number) => (
                    <img className="px-16 opacity-50 w-80" key={id} src={idToUrlMap[id]} />
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