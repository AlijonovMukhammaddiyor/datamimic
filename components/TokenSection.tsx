import { useCheckIsMobile } from "@/hooks/useCheckIsMobile";
import { SectionDivider } from "./ui/SectionDivider";
// Marquee and JalaToken seem unused in the current context of TokenSection based on the goal, can be reviewed later if needed.
// import Marquee from "react-fast-marquee";
// import { JalaToken } from "./ui/JalaToken";

export default function TokenSection() {
  const isMobile = useCheckIsMobile();

  const commonContent = (
    <div className="py-8 md:py-10 w-full flex flex-col justify-center items-center px-4">
      <div className="uppercase text-lg tracking-wide sm:text-4xl md:text-[42px] 2xl:text-[56px] leading-snug md:leading-[50px] text-center text-white max-w-xs sm:max-w-md md:max-w-2xl 2xl:max-w-3xl">
        Building in-house data pipelines is <span className="text-jala-red">slow</span>,{" "}
        <span className="text-jala-red">costly</span>, and and <span className="text-jala-red">can't scale</span> to
        provide the diverse motion data needed for training gen-purpose robot policies.
      </div>
      <p className="text-center mt-4 md:mt-3 text-sm sm:text-base md:text-sm max-w-xs sm:max-w-md md:max-w-xl font-tight text-[#D3D3D3] tracking-wide ">
        DataMimic provides turnkey data solutions for humanoid robotics, relieving robot companies and research labs of
        the time-consuming burden of data collection so your team can focus on AI innovation.
      </p>
      <div className="w-full max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl mt-3 md:mt-6">
        <video src="/IMG_4736.mp4" autoPlay loop muted className="w-full aspect-video rounded-md object-cover" />
      </div>
    </div>
  );

  return (
    <>
      {isMobile ? (
        <div className="w-full min-h-screen border-y border-[#272A2A] px-[5%]">
          <SectionDivider
            isVertical={false}
            numbers={["01", "02", "03", "04", "05", "06"]}
            mobileNumbers={["01", "02", "03", "04"]}
          />
          {commonContent}
          <SectionDivider
            isVertical={false}
            numbers={["01", "02", "03", "04", "05", "06"]}
            mobileNumbers={["01", "02", "03", "04"]}
          />
        </div>
      ) : (
        <div className="min-h-screen border-y border-[#272A2A] md:px-[25px]">
          <SectionDivider
            isVertical={false}
            numbers={["01", "02", "03", "04", "05", "06"]}
            mobileNumbers={["01", "02", "03", "04"]}
          />
          {commonContent}
          <SectionDivider
            isVertical={false}
            numbers={["01", "02", "03", "04", "05", "06"]}
            mobileNumbers={["01", "02", "03", "04"]}
          />
        </div>
      )}
    </>
  );
}
