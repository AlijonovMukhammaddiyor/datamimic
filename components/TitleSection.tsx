import Image from "next/image";
import { useCheckIsMobile } from "@/hooks/useCheckIsMobile"

export function TitleSection() {
  const isMobile = useCheckIsMobile();
  return(
  <>{isMobile ?
    <div className='w-full space-y-5 flex flex-col items-center justify-center font-bold'>
        <Image  src={"/images/title.svg"} alt={""} width={500} height={200}	/>
          <div className='text-center text-5xl font-medium'>FAN TOKENS & ECOSYSTEM</div>
          <div className='space-y-5 md:space-y-3 flex flex-col items-center'>
            <div className='flex w-[300px] text-[#D3D3D3] text-center text-lg font-sans font-extralight'>The first DEX on Chiliz to swap, wrap, provide liquidity and stake fan tokens.</div>
            <img className="h-[24px]" src='/images/power-title-img.svg'/>
          </div>
      </div>
      :
      <div className='w-full space-y-5 flex flex-col items-center justify-center font-bold'>
        <Image  src={"/images/title.svg"} alt={""} width={2000} height={200}	/>
        <div className="flex w-full justify-between items-start">
        <div className='text-center text-[80px] leader-[96px] font-extrabold'>FAN TOKENS & ECOSYSTEM</div>
          <div className='space-y-3 flex flex-col items-start'>
            <div className='flex w-[350px] text-[#D3D3D3] font-sans text-start text-xl font-light'>The first DEX on Chiliz to swap, wrap, provide liquidity and stake fan tokens.</div>
            <img className="w-48" src='/images/power-title-img.svg'/>
          </div>
        </div>
      </div>
      }
  </>
  )
}