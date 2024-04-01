import { useCheckIsMobile } from "@/hooks/useCheckIsMobile"


export default function Footer () {
    const isMobile = useCheckIsMobile();
    return(
      <>
      {isMobile ? 
      <div className='w-full h-20 font-sans flex flex-col space-y-10 justify-between items-center'>
          <div><img src='/images/jala-symbol-img.png'/></div>
          <div>Jalaswap, Inc.  •  Copyright 2024</div>
          <div className='flex space-x-2'>
            <img src='/images/icons/linkedin-icon.png'/>
            <img src='/images/icons/discord-icon.png'/>
            <img src='/images/icons/git-icon.png'/>
            <img src='/images/icons/x-icon.png'/>
          </div>
      </div>
      :
      <div className='w-full h-10 flex justify-between items-center font-sans'>
        <div><img src='/images/jala-symbol-img.png'/></div>
        <div>Jalaswap, Inc.  •  Copyright 2024</div>
        <div className='flex space-x-2'>
          <img src='/images/icons/linkedin-icon.png'/>
          <img src='/images/icons/discord-icon.png'/>
          <img src='/images/icons/git-icon.png'/>
          <img src='/images/icons/x-icon.png'/>
        </div>
      </div>
      }
      </>
    )
}