import { useCheckIsMobile } from "@/hooks/useCheckIsMobile";


export default function PartnerSection () {
    const isMobile = useCheckIsMobile();

    return(
    <>
    {isMobile ? 
        <div className='w-full space-y-10'>
            <div className='flex flex-col justify-center'>
                <div className='uppercase text-[48px] leading-[56px] font-medium text-center text-[#FF1D00] '>Our partners</div>
                <div className='space-y-3'>
                    <div className='text-center font-sans text-lg font-light'>Trusted friends and collaborators</div>
                </div>
            </div>
            <div className='w-full flex flex-col justify-center gap-y-4 px-[5%]'>
                <div className='flex justify-center items-center text-center border border-[#272A2A] h-32 bg-[#0F1212]'>
                    <img src='/images/icons/chiliz.png'/>
                </div>
                <div className='flex justify-center items-center text-center border border-[#272A2A] h-32 bg-[#0F1212]'>
                    <img src='/images/icons/frax.png'/>
                </div>
            </div>
        </div>
        :
        <div className='w-full space-y-20'>
            <div className='flex flex-col justify-center'>
                <div className='uppercase text-[80px] leading-[88px] text-center text-[#FF1D00] '>Our partners</div>
                <div className='space-y-3'>
                    <div className='font-sans text-center text-[20px] font-light'>Trusted friends and collaborators</div>
                </div>
            </div>
            <div className='w-full grid grid-cols-2 justify-center gap-x-4'>
                <div className='flex justify-center items-center text-center border border-[#272A2A] h-32 bg-[#0F1212]'>
                <img src='/images/icons/chiliz.png'/>
            </div>
            <div className='flex justify-center items-center text-center border border-[#272A2A] h-32 bg-[#0F1212]'>
                <img src='/images/icons/frax.png'/>
            </div>
        </div>
      </div>
    }
    </>
    )
}