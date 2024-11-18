import { useCheckIsMobile } from "@/hooks/useCheckIsMobile";

export default function NewsSection() {
  const isMobile = useCheckIsMobile();
  return (
    <>
      {isMobile ? (
        <div className="w-full space-y-16">
          <div className="">
            <div className="uppercase text-[48px] leading-[56px] font-medium text-start text-[#FF1D00] ">
              News&Updates
            </div>
            <div className="space-y-3">
              <div className="text-lg font-sans font-light">Global coverage for Jalaswap & Chiliz token</div>
            </div>
          </div>
          <div className="flex font-sans flex-col justify-between space-y-5">
            <div className="flex items-center justify-start text-[#FF1D00] space-x-4">
              <img className="h-4 w-4" src="/images/icons/icon.png" alt="icon" />
              <div>22 FEB 2024</div>
            </div>
            <div className="text-[#7E7E7E] text-2xl pr-10">
              Jalaswap, a decentralized exchange, raises $23 million to develop sports token swaps
            </div>
            <div className="col-span-1">
              <img src="/images/prepare-img.png" alt="prepare-img" />
            </div>
          </div>
          <div className="flex font-sans flex-col justify-between space-y-5">
            <div className="flex items-center justify-start text-[#FF1D00] space-x-4">
              <img className="h-4 w-4" src="/images/icons/icon.png" alt="icon" />
              <div>22 FEB 2024</div>
            </div>
            <div className="text-[#7E7E7E] text-2xl pr-10">
              Jalaswap, a decentralized exchange, raises $23 million to develop sports token swaps
            </div>
            <div className="col-span-1">
              <img src="/images/prepare-img.png" alt="prepare-img" />
            </div>
          </div>
          <div className="flex font-sans flex-col justify-between space-y-5">
            <div className="flex items-center justify-start text-[#FF1D00] space-x-4">
              <img className="h-4 w-4" src="/images/icons/icon.png" alt="icon" />
              <div>22 FEB 2024</div>
            </div>
            <div className="text-[#7E7E7E] text-2xl pr-10">
              Jalaswap, a decentralized exchange, raises $23 million to develop sports token swaps
            </div>
            <div className="col-span-1">
              <img src="/images/prepare-img.png" alt="prepare-img" />
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full space-y-16">
          <div className="w-[40%]">
            <div className="uppercase text-[80px] leading-[88px] text-start text-[#FF1D00] ">News&Updates</div>
            <div className="space-y-3">
              <div className="font-sans text-[20px] font-light">Global coverage for Jalaswap & Chiliz token</div>
            </div>
          </div>
          <div className="font-sans grid grid-cols-3">
            <div className="col-span-2">
              <div className="flex flex-col justify-between">
                <div className="flex text-[#FF1D00] space-x-4">
                  <img className="h-5 w-5" src="/images/icons/icon.png" alt="icon" />
                  <div>22 FEB 2024</div>
                </div>
                <div className="text-[#7E7E7E] text-[32px]">
                  Jalaswap, a decentralized exchange, raises
                  <br /> $23 million to develop sports token swaps
                </div>
              </div>
            </div>
            <div className="col-span-1 pl-6">
              <img src="/images/prepare-img.png" alt="prepare-img" />
            </div>
          </div>
          <div className="font-sans grid grid-cols-3">
            <div className="col-span-2">
              <div className="flex flex-col justify-between">
                <div className="flex text-[#FF1D00] space-x-4">
                  <img className="h-5 w-5" src="/images/icons/icon.png" alt="icon" />
                  <div>22 FEB 2024</div>
                </div>
                <div className="text-[#7E7E7E] text-[32px]">
                  Jalaswap, a decentralized exchange, raises
                  <br /> $23 million to develop sports token swaps
                </div>
              </div>
            </div>
            <div className="col-span-1 pl-6">
              <img src="/images/prepare-img.png" alt="prepare-img" />
            </div>
          </div>
          <div className="font-sans grid grid-cols-3">
            <div className="col-span-2">
              <div className="flex flex-col justify-between">
                <div className="flex text-[#FF1D00] space-x-4">
                  <img className="h-5 w-5" src="/images/icons/icon.png" alt="icon" />
                  <div>22 FEB 2024</div>
                </div>
                <div className="text-[#7E7E7E] text-[32px]">
                  Jalaswap, a decentralized exchange, raises
                  <br /> $23 million to develop sports token swaps
                </div>
              </div>
            </div>
            <div className="col-span-1 pl-6">
              <img src="/images/prepare-img.png" alt="prepare-img" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
