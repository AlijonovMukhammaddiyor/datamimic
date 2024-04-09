import Image from "next/image";
import { useCheckIsMobile } from "@/hooks/useCheckIsMobile"

export function TitleSection() {
  const isMobile = useCheckIsMobile();
  return(
  <>{isMobile ?
    <div className='w-full space-y-5 flex flex-col items-center justify-center font-bold pt-32 px-[5%]'>
        <img  src={"/images/title.svg"} alt={""} className=" w-full"/>
          <div className='text-center text-5xl font-medium'>Community-Driven DeFi Platform</div>
          <div className='space-y-5 py-6 flex flex-col items-center'>
            <div className='flex w-[300px] sm:w-[350px] text-[#D3D3D3] text-center text-lg sm:text-xl font-tight font-light leading-[26px]'>The first DEX on Chiliz to swap, wrap, provide liquidity and stake fan tokens.</div>
            <div className="flex text-jala-red font-mono space-x-2">
              <div className="font-tight font-medium text-[15px]">Powered By</div>
              <Image width={54} height={44} src='/images/chiliz-img.svg' alt={""}/>
            </div>
          </div>
      </div>
      :
      <>
      <div className="z-5 font-tight text-[12px] leading-[20px] text-[#595959] absolute md:w-[800px] md:h-[600px] 2xl:h-[900px] 2xl:w-[1388px]  flex justify-between pt-[100px]">
          <div className="flex flex-col justify-between">
            <div>01</div>
            <div>02</div>
            <div>03</div>
            <div>04</div>
            <div>05</div>
            <div>06</div>
          </div>
          <div className="flex flex-col justify-between">
            <div>01</div>
            <div>02</div>
            <div>03</div>
            <div>04</div>
            <div>05</div>
            <div>06</div>
          </div>
        </div>
      <div className=' w-full space-y-7 flex flex-col items-center justify-center font-bold md:py-[15%] 2xl:py-[11%]'>

        <Image  src={"/images/title.svg"} alt={""} width={2000} height={200}	className="w-full z-10"/>
        <div className="flex w-full justify-between items-center 2xl:items-end space-x-4">
        <div className='text-white text-center text-[40px] 2xl:text-[80px] leader-[96px] font-extrabold'>Community-Driven DeFi Platform</div>
          <div className='space-y-3 flex flex-col items-start'>
            <div className='font-tight flex w-[300px] 2xl:w-[350px] text-[#D3D3D3] text-start text-md 2xl:text-xl font-light'>The first DEX on Chiliz to swap, wrap, provide liquidity and stake fan tokens.</div>
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