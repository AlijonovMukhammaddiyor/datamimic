import { useCheckIsMobile } from "@/hooks/useCheckIsMobile";
import { SectionDivider } from "./ui/SectionDivider";
// Marquee and JalaToken seem unused in the current context of TokenSection based on the goal, can be reviewed later if needed.
// import Marquee from "react-fast-marquee";
// import { JalaToken } from "./ui/JalaToken";

export default function TokenSection() {
  const isMobile = useCheckIsMobile();

  const commonContent = (
    <div className="py-8 md:py-10 w-full flex flex-col justify-center items-center px-4">
      <div className="uppercase text-3xl sm:text-4xl md:text-[56px] 2xl:text-[76px] leading-tight md:leading-[84px] text-center text-white max-w-xs sm:max-w-md md:max-w-2xl 2xl:max-w-3xl">
        Collecting training data for humanoid robots is <span className="text-jala-red">slow</span>,{" "}
        <span className="text-jala-red">costly</span>, and inherently <span className="text-jala-red"> unscalable</span>
      </div>
      <p className="text-center mt-4 md:mt-3 text-sm sm:text-base md:text-lg max-w-xs sm:max-w-md md:max-w-xl font-tight text-[#D3D3D3] tracking-wide ">
        DataMimic provides turnkey data solutions for humanoid robotics, relieving robot companies and research labs of
        the time-consuming burden of data collection so your team can focus on AI innovation.
      </p>
      <div className="w-full max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl mt-6 md:mt-10">
        <iframe
          src="https://www.youtube.com/embed/9qvbCUorK34?autoplay=1&mute=1&loop=1&playlist=9qvbCUorK34&controls=0&showinfo=0&autohide=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full aspect-video rounded-md object-cover"
        ></iframe>
      </div>
    </div>
  );

  return (
    <>
      {isMobile ? (
        <div className="w-full border-y border-[#272A2A] px-[5%]">
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
        <div className="border-y border-[#272A2A] md:px-[25px]">
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
