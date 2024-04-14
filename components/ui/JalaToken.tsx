import Link from "next/link";
import { useEffect, useState } from "react";



export function JalaToken () {
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
                                w-[170px] lg:w-[322px] 2xl:w-[352px] h-[170px] lg:h-[322px] 2xl:h-[352px]">
                                    <div className="flex justify-center items-center rounded-full border border-jala-red 
                                        w-[155px] lg:w-[300px] 2xl:w-[330px] h-[155px] lg:h-[300px] 2xl:h-[330px]">
                                        <Link id="stadium-section" href={""}
                                            onMouseEnter={onMouseEnterLaunch}
                                            onMouseLeave={onMouseLeaveLaunch}
                                            className="duration-700 flex justify-center items-center 
                                                w-[160px] h-[160px] lg:w-[300px] lg:h-[300px] 2xl:w-[330px] 2xl:h-[330px] hover:bg-jala-red rounded-full">    
                                            {isHovering ?
                                            <img className="flex p-8 lg:p-16 items-center justify-center" src='/images/kayen-logo.svg'/>
                                            :
                                            <img className="flex p-8 lg:p-16 items-center justify-center " src='/images/kayen-logo-red.svg'/>
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