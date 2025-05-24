import Image from "next/image";
import { useCheckIsMobile } from "@/hooks/useCheckIsMobile";
import { SectionDivider } from "./ui/SectionDivider";
import styles from "../styles/blobAnimation.module.css";
import { useState } from "react";

export function TitleSection() {
  const isMobile = useCheckIsMobile();
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="relative w-full overflow-hidden">
      <div className={styles.container}>
        <div className={styles.blob_c}>
          <div className={styles.shape_blob}></div>
          <div className={`${styles.shape_blob} ${styles.shape_blob_one}`}></div>
          <div className={`${styles.shape_blob} ${styles.shape_blob_two}`}></div>
          <div className={`${styles.shape_blob} ${styles.shape_blob_three}`}></div>
          <div className={`${styles.shape_blob} ${styles.shape_blob_four}`}></div>
          <div className={`${styles.shape_blob} ${styles.shape_blob_five}`}></div>
          <div className={`${styles.shape_blob} ${styles.shape_blob_six}`}></div>
        </div>
      </div>

      <div className="relative z-10">
        {isMobile ? (
          <div className="w-full space-y-5 flex flex-col items-center justify-center font-bold pt-32 px-[5%]">
            {/* <img src={'/images/title.svg'} alt="title" className=" w-full" /> */}
            <div className="text-center text-5xl sm:text-6xl font-extrabold font-main text-white py-4 w-full">
              Get training data for
              <br />
              Humanoid Robots
            </div>
            <div className="text-center text-5xl font-medium text-jala-red">SPORTS MEETS WEB3</div>
            {/* [Request]
            <div className='text-center text-5xl font-medium'>Community-Driven DeFi Platform</div>
            */}
            <div className="space-y-5 py-6 flex flex-col items-center">
              <div className="flex w-[300px] sm:w-[330px] text-[#D3D3D3] text-center text-lg sm:text-xl font-tight font-light leading-[26px]">
                Community-Driven & All-In-One Sports DeFi Ecosystem
                {/* Community-Driven, DeFi Ecosystem */}
                {/* [Request]
                  The first DEX on Chiliz to swap, wrap, provide liquidity and stake fan tokens.
                */}
              </div>
              <div className="flex text-jala-red font-mono space-x-2">
                {/* <div className="font-tight font-medium text-[15px]">Powered By</div> */}
                <Image
                  width={150}
                  height={50}
                  src="/images/powered-by-chiliz-white.png"
                  alt="powered-by-chiliz-white"
                />
              </div>
            </div>
          </div>
        ) : (
          <>
            <div
              className="flex justify-between absolute z-5 font-tight text-[12px] leading-[20px] text-[#595959] pt-[40px]
                        md:h-[500px] xl:h-[700px] 2xl:h-[900px] 
                        md:w-[980px] xl:w-[1240px] 2xl:w-[1390px]"
            >
              <SectionDivider
                isVertical={true}
                numbers={["01", "02", "03", "04", "05", "06"]}
                mobileNumbers={["01", "02", "03", "04"]}
              />
              <SectionDivider
                isVertical={true}
                numbers={["01", "02", "03", "04", "05", "06"]}
                mobileNumbers={["01", "02", "03", "04"]}
              />
            </div>
            <div className="w-full flex flex-col items-center justify-center py-[7%] px-[30px]">
              {/* <Image src={'/images/title.svg'} alt="title" width={2000} height={200} className="w-full z-10" /> */}
              <div className="text-center  text-6xl lg:text-7xl xl:text-8xl font-main font-extrabold text-white pt-16 w-full z-10">
                GET TRAINING DATA FOR
                <br />
                <span className="text-jala-red">HUMANOID ROBOTS</span>
              </div>
              <p className="text-center mt-3 text-xl max-w-[600px] font-tight text-[#D3D3D3] tracking-wide ">
                We build the foundational data infrastructure for the next generation of humanoid robots
              </p>
              <div className="flex flex-col z-10 justify-center mt-8">
                <a
                  className="flex group items-center justify-center border  px-4 py-2 hover:text-jala-red hover:border-jala-red font-medium text-[16px] lg:text-[20px] leading-[28px] tracking-widest w-[179px]"
                  href={"https://sanjar-techie.github.io/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <div>REQUEST DATA</div>
                  <img
                    className={`h-4 ${
                      isHovering ? "translate-x-2 text-jala-red" : ""
                    } transition-transform duration-300`}
                    src={isHovering ? "/images/icons/arrow-top-right-red.svg" : "/images/icons/arrow-top-right.svg"}
                    alt="arrow-top-right"
                  />
                </a>
              </div>
              <div className="flex w-full flex-row justify-end mt-[100px] items-center space-x-2">
                <p className="text-center text-sm max-w-[600px] font-tight text-[#acabab] tracking-wide ">backend by</p>
                <div className="flex text-jala-red flex-row font-mono space-x-2 items-center">
                  <Image width={120} height={50} src="/images/founders_inc.jpg" alt="powered-by-chiliz-white" />
                  <Image width={150} height={50} src="/images/GTOneLine.png" alt="powered-by-chiliz-white" />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
