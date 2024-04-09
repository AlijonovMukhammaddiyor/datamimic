import { motion } from "framer-motion"
import Image from "next/image";
import { useRef } from "react";

export function StatdiumSection() {
    const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            delayChildren: 0
          }
        }
      }
      const container1 = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            delayChildren: 0.2
          }
        }
      }
      const container2 = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            delayChildren: 0.4
          }
        }
      }
      const container3 = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            delayChildren: 0.6
          }
        }
      }
      const container4 = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            delayChildren: 0.8
          }
        }
      }
      const container5 = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            delayChildren: 1.0
          }
        }
      }
      const container6 = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            delayChildren: 1.2
          }
        }
      }
      const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
      }

      return (
      <div className="flex justify-center h-[200px] md:h-[400px] 2xl:h-[500px]" >
          <motion.ul
          variants={container}
          initial="hidden"
          animate="show"
          className="absolute "
          >
          <motion.li variants={item} >
          <img src='/images/Stadium1.svg' className="px-[5%] md:px-[20%] 2xl:px-[5%]"  alt={""}/>
          </motion.li>
        </motion.ul>
        <motion.ul
          variants={container1}
          initial="hidden"
          animate="show"
          className="absolute translate-y-[10px]"
        >
          <motion.li variants={item} >
          <img src='/images/Stadium2.svg'  className="px-[5%] md:px-[20%] 2xl:px-[5%]" alt={""}/>
          </motion.li>
        </motion.ul>
        <motion.ul
          variants={container2}
          initial="hidden"
          animate="show"
          className="absolute translate-y-[20px]"
        >
          <motion.li variants={item} >
          <img src='/images/Stadium3.svg' className="px-[5%] md:px-[20%] 2xl:px-[5%]" alt={""}/>
          </motion.li>
        </motion.ul>
        <motion.ul
          variants={container3}
          initial="hidden"
          animate="show"
          className="absolute translate-y-[30px]"
        >
          <motion.li variants={item} >
          <img src='/images/Stadium4.svg' className="px-[5%] md:px-[20%] 2xl:px-[5%]" alt={""}/>
          </motion.li>
        </motion.ul>
        <motion.ul
          variants={container4}
          initial="hidden"
          animate="show"
          className="absolute translate-y-[40px]"
        >
          <motion.li variants={item} >
          <img src='/images/Stadium5.svg' className="px-[5%] md:px-[20%] 2xl:px-[5%]" alt={""}/>
          </motion.li>
        </motion.ul>
        <motion.ul
          variants={container5}
          initial="hidden"
          animate="show"
          className="absolute translate-y-[50px] "

        >
          <motion.li variants={item} >
          <img src='/images/Stadium6.svg' className="px-[5%] md:px-[20%] 2xl:px-[5%]" alt={""}/>
          </motion.li>
        </motion.ul>
        <motion.ul
          variants={container6}
          initial="hidden"
          animate="show"
          className="absolute translate-y-[60px]"
        >
          <motion.li variants={item} >
          <img src='/images/Stadium7.svg'  className="px-[5%] md:px-[20%] 2xl:px-[5%]" alt={""}/>
          </motion.li>
        </motion.ul>
        </div>
      )
}