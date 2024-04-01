import { useCheckIsMobile } from "@/hooks/useCheckIsMobile";


export default function WhatWeDoSection() {
    const isMobile = useCheckIsMobile();
    return(
    <div className='flex-col w-full'>
    {isMobile ? 
        <>
        <div className="pb-3"><img src="/images/icons/globe-icon.svg"></img></div>
          <div className='flex justify-start uppercase text-4xl md:text-[60px] font-bold text-[#FF1D00]'>WHAT WE DO</div>
          <div className='flex flex-col items-center'>
            <div className='flex flex-col items-start justify-evenly gap-y-10 py-10'>
                <div>
                  <div className='flex items-center space-x-3 pb-4'>
                    <img className='h-3 w-3' src='/images/icons/icon.png'/>
                    <div className='text-[#FF1D00] font-sans font-semibold'>LAUNCHED</div>
                  </div>
                  <div className='flex space-x-2 items-center'>
                    <div className='text-[40px] font-medium'>DEX</div>
                    <div className='border border-[#D3D3D3] font-sans rounded-xl px-2 my-2'>001</div>
                  </div>
                  <div className='w-[90%] font-sans text-[#D3D3D3]'> 
                  Chiliz tokens are automatically wrapped and unwrapped on swaps to provide an intricate DEFI experience.
                  </div>
                </div>

                <div className="border-y py-6">
                  <div className='flex items-center space-x-3 pb-4'>
                    <img className='h-3 w-3' src='/images/icons/icon.png'/>
                    <div className='text-[#FF1D00] font-sans font-semibold'>COMMING SOON</div>
                  </div>
                  <div className='flex space-x-2 items-center'>
                    <div className='text-[40px] font-medium text-[#7E7E7E]'>LAUNCHPAD</div>
                    <div className='border border-[#595959] font-sans text-[#595959] rounded-xl px-2 my-2'>002</div>
                  </div>
                  <div className=' w-[90%] font-sans text-[#595959]'> 
                  Support your favorite team by trading on Jalaswap while also earning seasonal JALA rewards backed by fees.
                  </div>
                </div>
                <div>
                  <div className='flex items-center space-x-3 pb-4'>
                    <img className='h-3 w-3' src='/images/icons/icon.png'/>
                    <div className='text-[#FF1D00] font-sans font-semibold'>COMMING SOON</div>
                  </div>
                  <div className='flex space-x-2 items-center'>
                    <div className='text-[40px] font-medium text-[#7E7E7E]'>NFT MARKETPLACE</div>
                    <div className='border border-[#595959] font-sans text-[#595959] rounded-xl px-2 my-2'>003</div>
                  </div>
                  <div className=' w-[90%] font-sans text-[#595959]'> 
                  Support your favorite team by trading on Jalaswap while also earning seasonal JALA rewards backed by fees.                  
                  </div>
            </div>
        </div>    
        <img className="px-6" src='/images/section2-img.png'></img>       
    </div>
    </>
    : 
    <>
        <div className='flex justify-start items-center space-x-10 py-20'>
            <div className="uppercase text-[80px] leading-[88px] text-[#FF1D00]">WHAT WE DO</div>
            <img className="h-12 object-cover" src="/images/icons/globe-icon.svg"></img>
        </div>
        <div className='md:grid md:grid-cols-3'>
            <div className='flex flex-col items-start justify-evenly gap-y-10 pl-6'>
                <div>
                  <div className='flex items-center space-x-3 pb-4'>
                    <img className='h-3 w-3' src='/images/icons/icon.png'/>
                    <div className='font-sans text-[#FF1D00]'>LAUNCHED</div>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <div className='text-3xl font-semibold'>DEX</div>
                    <div className='font-sans  border border-[#D3D3D3] rounded-xl px-2 my-2'>001</div>
                  </div>
                  <div className='font-sans text-[#D3D3D3]'> 
                  Chiliz tokens are automatically wrapped and unwrapped on swaps to provide an intricate DEFI experience.
                  </div>
                </div>

                <div>
                  <div className='flex items-center space-x-3 pb-4'>
                    <img className='h-3 w-3' src='/images/icons/icon.png'/>
                    <div className='font-sans text-[#FF1D00]'>COMMING SOON</div>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <div className='text-3xl font-semibold text-[#7E7E7E]'>LAUNCHPAD</div>
                    <div className='border border-[#595959] font-sans  text-[#595959] rounded-xl px-2 my-2'>002</div>
                  </div>
                  <div className='font-sans text-[#595959]'> 
                  Show your support for your top picks on Chiliz. Join the adventure and make a difference.
                  </div>
                </div>
            </div>
            <img src='/images/section2-img.png'></img>
            <div className='flex flex-col items-start justify-center gap-y-10 pl-10'>
                <div>
                  <div className='flex items-center space-x-3 pb-4'>
                    <img className='h-3 w-3' src='/images/icons/icon.png'/>
                    <div className='font-sans text-[#FF1D00]'>COMMING SOON</div>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <div className='text-3xl font-semibold text-[#7E7E7E]'>NFT MARKETPLACE</div>
                    <div className='border border-[#595959] font-sans  text-[#595959] rounded-xl px-2 my-2'>003</div>
                  </div>
                  <div className='font-sans text-[#595959]'> 
                  A dedicated space for sports and entertainment NFTs. Show your support for your favorite athletes, teams, and entertainers.
                  </div>
                </div>
            </div>
          </div>
    </>
    }
    </div> 
    )
}