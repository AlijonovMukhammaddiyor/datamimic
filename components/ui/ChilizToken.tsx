import Link from "next/link";
import { useEffect, useState } from "react";



export function ChilizToken () {
    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnterLaunch = () => setIsHovered(true);
    const onMouseLeaveLaunch = () => setIsHovered(false);

    return(
        <div className="flex absolute z-10 justify-center items-center rounded-full border border-jala-red border-opacity-15
                                w-[241px] lg:w-[450px] 2xl:w-[480px] h-[241px] lg:h-[450px] 2xl:h-[480px]">
            <div className="flex absolute z-10 justify-center items-center rounded-full border border-jala-red bg-[#0F1212] bg-opacity-30  border-opacity-30 
                                w-[230px] lg:w-[428px] 2xl:w-[458px] h-[230px] lg:h-[428px] 2xl:h-[458px]">
                <div className="flex absolute z-10 justify-center items-center rounded-full border border-jala-red bg-[#0F1212] bg-opacity-40 border-opacity-40
                                w-[219px] lg:w-[407px] 2xl:w-[437px] h-[219px] lg:h-[407px] 2xl:h-[437px]">
                    <div className="flex absolute z-10 justify-center items-center rounded-full border border-jala-red bg-[#0F1212] bg-opacity-55 border-opacity-55
                                w-[208px] lg:w-[386px] 2xl:w-[416px] h-[208px] lg:h-[386px] 2xl:h-[416px]">
                        <div className="flex absolute z-10 justify-center items-center rounded-full border border-jala-red bg-[#0F1212] bg-opacity-70 border-opacity-70
                                w-[197px] lg:w-[364px] 2xl:w-[394px] h-[197px] lg:h-[364px] 2xl:h-[394px]">
                            <div className="flex absolute z-10 justify-center items-center rounded-full border border-jala-red bg-[#0F1212] bg-opacity-70 border-opacity-85
                                w-[186px] lg:w-[343px] 2xl:w-[373px] h-[186px] lg:h-[343px] 2xl:h-[373px]">
                                <div className="flex justify-center items-center rounded-full border border-jala-red bg-[#0F1212]
                                w-[175px] lg:w-[322px] 2xl:w-[352px] h-[175px] lg:h-[322px] 2xl:h-[352px]">
                                    <div className="flex justify-center items-center rounded-full border border-jala-red 
                                        w-[160px] lg:w-[300px] 2xl:w-[330px] h-[160px] lg:h-[300px] 2xl:h-[330px]">
                                        <Link id="stadium-section" className="" href={""}
                                            onMouseEnter={onMouseEnterLaunch}
                                            onMouseLeave={onMouseLeaveLaunch}>    
                                            {isHovering ?
                                            <img className="flex px-4 bg-contain w-[160px] lg:w-[300px] 2xl:w-[330px]" src='/images/chiliz-logo-red.png'/>
                                            :
                                            <img className="flex px-4 bg-contain w-[160px] lg:w-[300px] 2xl:w-[330px]" src='/images/chiliz-logo.png'/>
                                            }
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}