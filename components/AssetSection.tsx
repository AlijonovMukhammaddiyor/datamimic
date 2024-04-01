import { useCheckIsMobile } from "@/hooks/useCheckIsMobile";
import { motion, useScroll,
  MotionProps,
  useTransform
   } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { throttle } from "throttle-debounce-ts";
import AssetCard from "./ui/AssetCard";


interface AssetProp {
  title : string,
  subtitle : string,
  logo : string,
}
const assetProps : AssetProp[] = [
  {
      title : 'Nexus Mutual',
      subtitle : 'Crypto insturance',
      logo : '/images/icons/nexus-icon.png',
  },
  {
      title : 'OpenZeppelin',
      subtitle : 'Crypto insturance',
      logo : '/images/icons/openzeppelin-icon.png',
  },
  {
      title : 'Immunefi',
      subtitle : 'Crypto insturance',
      logo : '/images/icons/immunefi-icon.png',
  },
  {
      title : 'Hacken',
      subtitle : 'Crypto insturance',
      logo : '/images/icons/hacken-icon.png',
  },
  {
      title : 'Community Treasury',
      subtitle : 'Crypto insturance',
      logo : '/images/icons/openzeppelin-icon.png',
  },
]

// * based on: https://gist.github.com/coleturner/34396fb826c12fbd88d6591173d178c2
function useElementViewportPosition(ref: React.RefObject<HTMLElement>) {
  const [position, setPosition] = useState<[number, number]>([0, 0]);

  useEffect(() => {
    if (!ref || !ref.current) return;

    const pageHeight = document.body.scrollHeight;
    const start = ref.current.offsetTop;
    const end = start + ref.current.offsetHeight;

    setPosition([start / pageHeight, end / pageHeight]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { position };
}

const slideAnimation: MotionProps = {
  variants: {
    full: { backgroundColor: "#663399" },
    partial: { backgroundColor: "#808080" }
  },
  initial: "partial",
  whileInView: "full",
  viewport: { amount: 1, once: true }
};

export default function AssetSection() {
  const ref = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const { position } = useElementViewportPosition(ref);
  const [carouselEndPosition, setCarouselEndPosition] = useState(0);
  const { scrollYProgress, scrollY } = useScroll();
  const x = useTransform(scrollYProgress, position, [0, carouselEndPosition]);

  useEffect(() => {
    window.addEventListener("scroll", () =>
      console.log({ scrollYProgress: scrollYProgress.cuurent, scrollY })
    );
  }, []);

  useEffect(() => {
    if (!carouselRef || !carouselRef.current) return;
    const parent = carouselRef.current.parentElement;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    const resetCarouselEndPosition = () => {
      if (carouselRef && carouselRef.current) {
        const newPosition =
          carouselRef.current.clientWidth -
          window.innerWidth +
          scrollbarWidth +
          (parent as HTMLElement).offsetLeft * 2;

        setCarouselEndPosition(-newPosition);
      }
    };

    resetCarouselEndPosition();
    const handleResize = throttle(10, resetCarouselEndPosition);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = useCheckIsMobile();

  return(
      <div ref={ref}  className='w-full py-20 '>
      <section >
        {isMobile ? 
        <div className="space-y-4">
          <div className='uppercase text-[48px] leading-[56px] font-medium text-start text-[#FF1D00] '>Your assets,<br/><span className='text-white'>secured.</span></div>
          <div className='pr-10 text-lg font-sans font-light'>Audited by the world’s leading security firms, security of Jalaswap is the highest priority.</div>
        </div>
        :
        <div className='w-full space-y-20'>
          <div className='w-[40%] py-10'>
            <div className='uppercase text-[80px] leading-[88px] font-semibold text-start text-[#FF1D00] '>Your assets,<br/><span className='text-white'>secured.</span></div>
            <div className='space-y-3'>
              <div className='font-sans text-[20px] font-light'>Audited by the world’s leading security firms, security of Jalaswap is the highest priority.</div>
          </div>
        </div>
      </div>
      }
<section ref={ref}>
        <div className="container" >
          <div className="sticky-wrapper">
            <motion.div ref={carouselRef} className="carousel" style={{ x }}>
              {assetProps.map((asset, index) => (
                <motion.div
                  {...slideAnimation}
                  key={index}
                  className="carousel__slide"
                >
                  <AssetCard logo={asset.logo} title={asset.title} subtitle={asset.subtitle}/>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </section>
  </div>
  )
}
