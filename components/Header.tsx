import { useCheckIsMobile } from "@/hooks/useCheckIsMobile";

export function Header () {
  const isMobile = useCheckIsMobile();

    return(
      <>
      {isMobile ? 
      <div className='flex justify-between w-full h-[56px] border-b border-[#272A2A] font-sans'>
        <div className="px-4 bg-[#FF1D00] flex items-center justify-center">
          <img src="/images/jala-symbol-img.png"/>
        </div>
        <div className="flex">
          <div className="px-6 text-sm  border-t border-l space-x-2  border-[#272A2A] text-[#D3D3D3] flex items-center justify-center">
            <img src="/images/arrow-top-right-icon.png"/>
            <div>LAUNCH APP</div>
          </div>
          <div className="px-6 border-x border-[#272A2A] flex items-center justify-center"><img src="/images/icons/hamburger-icon.png"/></div>
        </div>
      </div>
      :
      <div className='flex w-full h-[56px] border-b border-[#272A2A] text-[8px]  lg:text-sm text-[#D3D3D3] font-sans px-[5%] uppercase'>
        <div className="px-4 bg-[#FF1D00] flex items-center justify-center">
          <img src="/images/jala-symbol-img.png"/>
        </div>
        <div className="w-[18%] flex justify-center items-center border-r border-[#272A2A] space-x-2 ">
          <img className="h-4 xl:h-4" src="/images/icons/gov-icon.svg"/>        
          <div>Governance</div>
        </div>
        <div className="w-[18%] flex justify-center items-center border-r border-[#272A2A] space-x-2 ">
          <img className="h-4 xl:h-4" src="/images/icons/docs-icon.svg"/>        
          <div>Docs</div>
        </div>
        <div className="w-[18%] flex justify-center items-center border-r border-[#272A2A] space-x-2">
          <img className="h-4 xl:h-4" src="/images/icons/x-icon.svg"/>        
          <div>Twitter</div>
        </div>
        <div className="w-[18%] flex justify-center items-center border-r border-[#272A2A] space-x-2">
          <img className="h-4 xl:h-4" src="/images/icons/point-icon.svg"/>        
          <div>JALAPOINT</div>
        </div>
        <div className="w-[18%] flex justify-center items-center border-r border-[#272A2A] space-x-2">
          <img className="h-4 xl:h-4" src="/images/icons/community-icon.svg"/>        
          <div>Community</div>
        </div>
        <div className="flex items-center w-[17%]"/>

        <div className="flex w-[25%]">
          <div className="px-6 bg-[#FF1D00]  border-t border-l space-x-2  border-[#272A2A] text-white flex items-center justify-center">
            <img className="h-4" src="/images/arrow-top-right-icon.png"/>
            <div>LAUNCH APP</div>
          </div>
        </div>
      </div>
      }
      </>
    )
}