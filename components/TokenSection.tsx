import { useCheckIsMobile } from "@/hooks/useCheckIsMobile";
import { SectionDivider } from "./ui/SectionDivider";
import Marquee from "react-fast-marquee";
import { JalaToken } from "./ui/JalaToken";

export default function TokenSection() {
  const isMobile = useCheckIsMobile();

  return (
    <>
      {isMobile ? (
        <div className="w-full border-y  border-[#272A2A] px-[5%]">
          <SectionDivider
            isVertical={false}
            numbers={["01", "02", "03", "04", "05", "06"]}
            mobileNumbers={["01", "02", "03", "04"]}
          />
          <div className="flex justify-start uppercase text-[48px] leading-[56px] font-medium text-start text-[#FF1D00]">
            <div className="w-[350px]">
              Collecting training data for humanoid robots is <span className="text-jala-red">slow</span>,{" "}
              <span className="text-jala-red">costly</span>, and inherently
              <span className="text-jala-red"> unscalable</span>
            </div>
          </div>
          <div className="flex justify-center overflow-hidden"></div>
          <div className="flex w-full justify-end uppercase text-[48px] leading-[56px] font-medium text-start text-white">
            <div className="w-[300px]">
              Watch for the
              <br /> seasonal events and
              <br />
              <span className="text-[#FF1D00] ">earn token rewards.</span>
            </div>
          </div>
          <SectionDivider
            isVertical={false}
            numbers={["01", "02", "03", "04", "05", "06"]}
            mobileNumbers={["01", "02", "03", "04"]}
          />
        </div>
      ) : (
        <div className=" border-y  border-[#272A2A] md:px-[25px]">
          <SectionDivider
            isVertical={false}
            numbers={["01", "02", "03", "04", "05", "06"]}
            mobileNumbers={["01", "02", "03", "04"]}
          />
          <div className="py-10 w-full flex flex-col justify-center items-center">
            {/* Upper Title */}
            <div className="uppercase md:text-[56px]  2xl:text-[76px] leading-[84px] text-center text-white md:w-[800px] 2xl:w-[1000px]">
              Collecting training data for humanoid robots is <span className="text-jala-red">slow</span>,{" "}
              <span className="text-jala-red">costly</span>, and inherently
              <span className="text-jala-red"> unscalable</span>
            </div>
            <p className="text-center mt-3 text-lg max-w-[600px] font-tight text-[#D3D3D3] tracking-wide ">
              DataMimic provides turnkey data solutions for humanoid robotics, relieving robot companies and research
              labs of the time-consuming burden of data collection so your team can focus on AI innovation.
            </p>
            <iframe
              src="https://www.youtube.com/embed/9qvbCUorK34?autoplay=1&mute=1&loop=1&playlist=9qvbCUorK34&controls=0&showinfo=0&autohide=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="object-cover aspect-video rounded-md mt-5"
              // width={800}
              height={500}
            ></iframe>
          </div>
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
