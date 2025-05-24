import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

const stadiums = [
  "/images/Stadium1.svg",
  "/images/Stadium2.svg",
  "/images/Stadium3.svg",
  "/images/Stadium4.svg",
  "/images/Stadium5.svg",
  "/images/Stadium6.svg",
  "/images/Stadium7.svg",
];

export function StatdiumSection() {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.ul
      ref={ref}
      initial="hidden"
      variants={container}
      animate={control}
      className="flex justify-center h-[200px] md:h-[400px] 2xl:h-[500px]"
    >
      {stadiums.map((url, index) => (
        <motion.li key={index} variants={item} className="absolute" animate={{ y: `${index * 15}px` }}>
          <img
            src={url}
            className="w-[300px] min-[450px]:w-[400px] min-[550px]:w-[500px] sm:w-[600px] md:w-[850px] xl:w-[1200px] 3xl:w-[1360px]"
            alt="img"
          />
        </motion.li>
      ))}
    </motion.ul>
  );
}
