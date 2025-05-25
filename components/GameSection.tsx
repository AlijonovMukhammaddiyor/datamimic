import { useCheckIsMobile } from "@/hooks/useCheckIsMobile";
import { SectionDivider } from "./ui/SectionDivider";

export default function GameSection() {
  const isMobile = useCheckIsMobile();

  return (
    <>
      {isMobile ? (
        <>
          <img className="absolute w-full" src="/images/bg-diagonal-lines-mobile.svg" alt="bg-diagonal-lines-mobile" />
          <div className="w-full  px-[5%]">
            <SectionDivider
              isVertical={false}
              numbers={["01", "02", "03", "04", "05", "06"]}
              mobileNumbers={["01", "02", "03", "04"]}
            />
            <div className="relative text-5xl font-medium text-start pb-10 pt-6">
              <span className="text-[#FF1D00]">KAYEN:</span>
              <br />A NEW GAME.
            </div>
          </div>
        </>
      ) : (
        <div className="w-full">
          <img
            className="absolute md:w-[1020px] xl:w-[1277px]  2xl:w-[1437px] "
            src="/images/bg-diagonal-line.svg"
            alt="bg-diagonal-line"
          />
          <div className=" border-t border-[#272A2A] px-[25px]">
            <SectionDivider
              isVertical={false}
              numbers={["01", "02", "03", "04", "05", "06"]}
              mobileNumbers={["01", "02", "03", "04"]}
            />
            <div className="relative md:text-[120px] 2xl:text-[186px] leading-[100%] font-medium text-start py-6">
              <span className="text-[#FF1D00]">KAYEN</span>— A NEW GAME.
            </div>
          </div>
        </div>
      )}
    </>
  );
}
