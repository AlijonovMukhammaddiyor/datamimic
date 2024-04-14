import { DISCORD_LINK, GIUTUB_LINK, MEDIUM_LINK, X_LINK } from "@/config/links";
import { useCheckIsMobile } from "@/hooks/useCheckIsMobile"
import Link from "next/link";

export default function Footer () {
    const isMobile = useCheckIsMobile();
    return(
      <>
      {isMobile ? 
      <div className='w-full h-[246px] flex flex-col space-y-10 justify-center items-center'>
        <Link href={"/"}>
          <img src='/images/jala-symbol-img.png'/>
        </Link>
        <div className='flex space-x-4'>
          <Link href={MEDIUM_LINK}>
            <img className="w-5" src='/images/icons/medium-icon.svg'/>
          </Link>
          <Link href={DISCORD_LINK}>
            <img className="w-5" src='/images/icons/discord-icon.svg'/>
          </Link>
          <Link href={GIUTUB_LINK}>
           <img className="w-5" src='/images/icons/git-icon.png'/>
          </Link>
          <Link href={X_LINK}>
            <img className="w-5" src='/images/icons/x-icon.svg'/>
          </Link>
        </div>
      </div>
      :
      <div className='w-full h-[188px] flex justify-between items-center'>
        <Link href={"/"}>
          <img src='/images/jala-symbol-img.png'/>
        </Link>
        <div className='flex space-x-2'>
          <Link href={MEDIUM_LINK}>
            <img className="w-5" src='/images/icons/medium-icon.svg'/>
          </Link>
          <Link href={DISCORD_LINK}>
            <img className="w-5" src='/images/icons/discord-icon.svg'/>
          </Link>
          <Link href={GIUTUB_LINK}>
            <img className="w-5" src='/images/icons/git-icon.png'/>
          </Link>
          <Link href={X_LINK}>
            <img className="w-5" src='/images/icons/x-icon.svg'/>
          </Link>
        </div>
      </div>
      }
      </>
    )
    
}