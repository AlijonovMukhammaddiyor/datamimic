import { useCheckIsMobile } from "@/hooks/useCheckIsMobile"

export default function TokenSection () {
    const isMobile = useCheckIsMobile();

    return(
    <>{isMobile ? 
        <div className='w-full'>
            <div className='flex justify-start uppercase text-[48px] leading-[56px] font-medium text-start text-[#FF1D00]'>
                <div className="w-[99%]">80+ real world-based <br/><span className='text-white'>fan tokens ready to be traded and staked.</span>
            </div>
        </div>
        <div className='flex justify-center items-start h-[400px]'>
            <div className="carousel_wrapper">
                <div className="carousels">
                    <div className="slide one">
                    <img className="px-4" src='/images/chiliz-token-img.svg'></img>
                    </div>
                    <div className="slide two">
                    <img className="px-4"  src='/images/psg-token-img.svg'></img>
                    </div>
                    <div className="slide three">
                    <img className="px-4"  src='/images/bvb-token-img.svg'></img>
                    </div>
                    <div className="slide four">
                    <img className="px-4"  src='/images/fcb-token-img.svg'></img>
                    </div>
                    <div className="slide five">
                    <img className="px-4"  src='/images/manu-token-img.svg'></img>
                    </div>
                    <div className="slide six">
                    <img className="px-4"  src='/images/cbf-token-img.svg'></img>
                    </div>
                    <div className="slide seven">
                    <img className="px-4"  src='/images/oc-token-img.svg'></img>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex justify-end uppercase text-[48px] leading-[56px] font-medium text-start text-white'>
            <div className="w-[90%]">Watch for the seasonal events and<br/>
            <span className='text-[#FF1D00] '>earn token rewards.</span>
            </div>    
        </div>   
    </div>
    :
    <div className='w-full'>
        <div className='uppercase text-[96px] leading-[104px] text-start text-[#FF1D00] w-[800px] xl:w-[1200px]'>80+ real world-based <span className='text-white'>fan tokens ready to be traded and staked.</span></div>
        <div className='flex justify-center items-start h-[600px] py-20'>
            <div className="carousel_wrapper">
                <div className="carousels">
                    <div className="slide one">
                    <img className="px-4" src='/images/chiliz-token-img.svg'></img>
                    </div>
                    <div className="slide two">
                    <img className="px-4"  src='/images/psg-token-img.svg'></img>
                    </div>
                    <div className="slide three">
                    <img className="px-4"  src='/images/bvb-token-img.svg'></img>
                    </div>
                    <div className="slide four">
                    <img className="px-4"  src='/images/fcb-token-img.svg'></img>
                    </div>
                    <div className="slide five">
                    <img className="px-4"  src='/images/manu-token-img.svg'></img>
                    </div>
                    <div className="slide six">
                    <img className="px-4"  src='/images/cbf-token-img.svg'></img>
                    </div>
                    <div className="slide seven">
                    <img className="px-4"  src='/images/oc-token-img.svg'></img>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex justify-end">
            <div className='uppercase text-[96px] leading-[104px] text-start text-white  w-[800px] xl:w-[1200px]'>Watch for the seasonal events and <span className='text-[#FF1D00] '>earn token rewards.</span></div>
        </div>
    </div>
    }
    </>
    )
}