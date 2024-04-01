import { useCheckIsMobile } from "@/hooks/useCheckIsMobile";



export default function GameSection () {
  const isMobile = useCheckIsMobile();

    return(
      <>
      {isMobile ? 
        <div className='w-full'>
          <div className='relative text-[80px] leading-[88px] font-medium text-start'>
            <span className='text-[#FF1D00]'>JALA:</span>
            <br/>
            A NEW GAME.
          </div>
        </div>
        :
        <div className='w-full'>
          <div className='relative text-[186px] leading-[100%] font-bold text-start'>
            <span className='text-[#FF1D00]'>JALA</span>
            -A NEW GAME
          </div>
        </div>

      }
      </>
    )
}