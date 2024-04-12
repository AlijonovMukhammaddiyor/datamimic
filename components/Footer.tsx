import { useCheckIsMobile } from "@/hooks/useCheckIsMobile"

export default function Footer () {
    const isMobile = useCheckIsMobile();
    return(
      <>
      {isMobile ? 
      <div className='w-full h-[246px] font-sans flex flex-col space-y-10 justify-center items-center'>
          <div><img src='/images/jala-symbol-img.png'/></div>
          <div className='flex space-x-4'>
          <img className="w-5" src='/images/icons/medium-icon.svg'/>
          <img className="w-4" src='/images/icons/discord-icon.svg'/>
          <img className="w-4" src='/images/icons/git-icon.png'/>
          <img className="w-4" src='/images/icons/x-icon.svg'/>
          </div>
      </div>
      :
      <div className='w-full h-[188px] flex justify-between items-center font-sans'>
        <div><img src='/images/jala-symbol-img.png'/></div>
        <div className='flex space-x-2'>
          <img className="w-5" src='/images/icons/medium-icon.svg'/>
          <img className="w-5" src='/images/icons/discord-icon.svg'/>
          <img className="w-5" src='/images/icons/git-icon.png'/>
          <img className="w-5" src='/images/icons/x-icon.svg'/>
        </div>
      </div>
      }
      </>
    )
    
}