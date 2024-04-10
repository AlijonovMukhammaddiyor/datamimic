import { useCheckIsMobile } from "@/hooks/useCheckIsMobile";
import { motion, useScroll,
  MotionProps,
  useTransform
   } from "framer-motion";
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
  /*
  {
      title : 'Community Treasury',
      subtitle : 'Crypto insturance',
      logo : '/images/icons/openzeppelin-icon.png',
  },
  */
]

export default function AssetSection() {
  const isMobile = useCheckIsMobile();

  return(
      <div className='w-full px-[25px] 2xl:py-10'>
      <section >
      {isMobile ? 
      <>
        <div className="space-y-4 py-16">
          <div className='uppercase text-[48px] leading-[56px] font-medium text-start'>
            <span className="text-white">Our </span>
            <span className="text-[#FF1D00] ">Partners</span>
          </div>
          {/* [Request]
          <div className='uppercase text-[48px] leading-[56px] font-medium text-start text-white '>Your assets,<br/><span className='text-jala-red'>secured.</span></div>
          <div className='w-[340px] text-lg font-tight font-light text-white'>Audited by the world’s leading security firms, security of Jalaswap is the highest priority.</div>
          */}
          </div>
        <AssetCard key={0} logo={'/images/icons/nexus-icon.png'} title={"Nexus Mutual"} subtitle={'Crypto insturance'}/>
      </>
        :
      <>
      <div className='w-full space-y-20'>
          <div className="flex justify-between items-center">
            <div className='uppercase text-[80px] leading-[88px] text-start '>
              <span className="text-white">Our </span>
              <span className="text-[#FF1D00] ">Partners</span>
            </div>
          <img src="/images/icons/background-icon2.svg"/>
        </div>
          {/* [Request]
          <div className='w-[50%] md:py-10 2xl:py-20 space-y-3'>
            <div className='uppercase text-[80px] leading-[88px] font-semibold text-start text-white '>Your assets,<br/><span className='text-jala-red'>secured.</span></div>
              <div className=''>
              <div className='w-[400px] font-sans text-[20px] font-light text-jala-gray-1'>Audited by the world’s leading security firms, security of Jalaswap is the highest priority.</div>
            </div>
          </div>
          */
          }

      </div>
      <div className="flex space-x-10 font-tight overflow-x-hidden">
      {assetProps.map((asset, index) => (
        <AssetCard key={index} logo={asset.logo} title={asset.title} subtitle={asset.subtitle}/>
      ))}
      </div>
      </>
      }
    </section>
  </div>
  )
}
