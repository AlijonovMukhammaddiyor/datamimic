import { useCheckIsMobile } from "@/hooks/useCheckIsMobile";
import Link from "next/link";
import { useState } from "react";



export function Logo() {
    const isMobile = useCheckIsMobile();

    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);
    
    return(
    <>{isMobile ? 
        <div className="w-[76px] "
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}>    
        {isHovering ? 
        <Link 
        href={"/"}
        className="w-full h-full flex items-center justify-center  duration-500 bg-jala-white">
            <img src="/images/icons/jala-symbol-red.svg"/>
        </Link>
        :
        <Link 
        href={"/"}
        className="w-full h-full flex items-center justify-center duration-500 bg-jala-red">
            <img src="/images/icons/jala-symbol-white.svg"/>
        </Link>
        }
    </div>
        :
        <div className="w-[100px] "
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}>    
        {isHovering ? 
        <Link 
        href={"/"}
        className="w-full h-full flex items-center justify-center  duration-500 bg-jala-white">
            <img src="/images/icons/jala-symbol-red.svg"/>
        </Link>
        :
        <Link 
        href={"/"}
        className="w-full h-full flex items-center justify-center duration-500 bg-jala-red">
            <img src="/images/icons/jala-symbol-white.svg"/>
        </Link>
        }
    </div>
    }
    </>
   
    )
}