import Image from "next/image";
import { useCheckIsMobile } from "@/hooks/useCheckIsMobile"
import { SectionDivider } from "./ui/SectionDivider";

export function TitleSection() {
  const isMobile = useCheckIsMobile();
  return(
  <>{isMobile ?
    <div className='w-full space-y-5 flex flex-col items-center justify-center font-bold pt-32 px-[5%]'>
        <img  src={"/images/title.svg"} alt={""} className=" w-full"/>
        <div className='text-center text-5xl font-medium text-jala-red'>THE NEW SPORTS BLOCKCHAIN</div>
          {/* [Request]
          <div className='text-center text-5xl font-medium'>Community-Driven DeFi Platform</div>
          */}
          <div className='space-y-5 py-6 flex flex-col items-center'>
            <div className='flex w-[300px] sm:w-[330px] text-[#D3D3D3] text-center text-lg sm:text-xl font-tight font-light leading-[26px]'>
                Community-Driven & All-In-One 
                Sports DeFi Ecosystem
              {/* Community-Driven, DeFi Ecosystem */}
              {/* [Request]
                The first DEX on Chiliz to swap, wrap, provide liquidity and stake fan tokens.
              */}
            </div>
            <div className="flex text-jala-red font-mono space-x-2">
              <div className="font-tight font-medium text-[15px]">Powered By</div>
              <Image width={54} height={44} src='/images/chiliz-img.svg' alt={""}/>
            </div>
          </div>
      </div>
      :
      <>
      <div className="flex justify-between absolute z-5 font-tight text-[12px] leading-[20px] text-[#595959] pt-[100px]
                      md:h-[500px] 2xl:h-[700px]  3xl:h-[900px] 
                      md:w-[800px] 2xl:w-[1150px] 3xl:w-[1388px]">
        <SectionDivider isVertical={true} numbers={['01', '02', '03', '04', '05', '06']} mobileNumbers={['01', '02','03','04']}/>
        <SectionDivider isVertical={true} numbers={['01', '02', '03', '04', '05', '06']} mobileNumbers={['01', '02','03','04']}/>
      </div>
      <div className=' w-full space-y-7 flex flex-col items-center justify-center font-bold md:py-[15%] 2xl:py-[11%] px-[30px]'>
        <Image  src={"/images/title.svg"} alt={""} width={2000} height={200}	className="w-full z-10"/>
        <div className="flex w-full justify-between items-center 2xl:items-end space-x-4">
          <div className='text-jala-red text-center text-[40px] 2xl:text-[72px] 3xl:text-[80px] leader-[96px] font-extrabold'>
            THE NEW SPORTS BLOCKCHAIN
            </div>
            {/* [Request]
            <div className='text-white text-center text-[40px] 2xl:text-[80px] leader-[96px] font-extrabold'>
            Community-Driven DeFi Platform
            </div>
            */}
            <div className='space-y-3 flex flex-col items-start'>
              <div className='font-tight flex w-[250px] 2xl:w-[320px] text-[#D3D3D3] text-start text-md 2xl:text-xl font-light'>
              Community-Driven & All-In-One 
                Sports DeFi Ecosystem
              {/* Community-Driven, DeFi Ecosystem */}
                {/* [Request]
                The first DEX on Chiliz to swap, wrap, provide liquidity and stake fan tokens.
                */}
                </div>
              <div className="flex text-jala-red font-mono space-x-2">
                <div className="font-tight font-medium text-[15px]">Powered By</div>
                <Image width={54} height={44} src='/images/chiliz-img.svg' alt={""}/>
            </div>
          </div>
        </div>
      </div>
      </>
      }
  </>
  )
}