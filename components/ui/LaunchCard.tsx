import Link from "next/link";
import { useState } from "react";



export function LaunchCard ({isLaunched, title, index, description}:{isLaunched: boolean, title: string, index:string, description : string}) {
    
    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);
    
    return(
        <div
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className="sm:w-[480px]">
            {isHovering ? 
            <>
            <div className='flex items-center space-x-3 pb-4'>
                <img className='h-3 w-3' src='/images/icons/icon.png'/>
                <div className='font-tight text-jala-red text-[14px] leading-[22px] tracking-[20%] font-semibold'>
                    {isLaunched? "LAUNCHED" : "COMMING SOON"}
                </div>
                </div>
                <div className='flex items-center space-x-2 duration-500'>
                <div className='text-3xl font-semibold  duration-500'>{title}</div>
                <div className='font-tight  border border-[#D3D3D3] rounded-xl px-2 my-2  duration-500'>{index}</div>
                </div>
                <div className='font-tight font-medium text-[16px] text-[#D3D3D3] pr-10 2xl:pr-32 sm:pr-56  duration-500'> 
                {description}
            </div>
            </>
            :
            <>
            <div className='flex items-center space-x-3 pb-4'>
                <img className='h-3 w-3' src='/images/icons/icon.png'/>
                <div className='font-tight text-jala-red text-[14px] leading-[22px] tracking-[20%] font-semibold'>
                    {isLaunched? "LAUNCHED" : "COMMING SOON"}
                </div>
                </div>
                <div className='flex items-center space-x-2  duration-500'>
                <div className='text-3xl font-semibold text-[#7E7E7E]  duration-500'>{title}</div>
                <div className='border border-[#595959] font-tight  text-[#595959] rounded-xl px-2 my-2  duration-500'>{index}</div>
                </div>
                <div className='font-tight font-medium text-[16px] text-[#595959] pr-10 2xl:pr-32 sm:pr-56  duration-500'> 
                {description}
            </div>
            </>
            }
      </div>

    )
}