import { useCheckIsMobile } from "@/hooks/useCheckIsMobile";
import AssetCard from "@/components/ui/AssetCard";
import Marquee from "react-fast-marquee";

interface AssetProp {
  title: string;
  subtitle: string;
  logo: string;
}
const assetProps: AssetProp[] = [
  {
    title: "Chiliz",
    subtitle: "Sports Blockchain",
    logo: "/images/chiliz-logo.svg",
  },
  {
    title: "Socios",
    subtitle: "Chiliz Engagement Platform",
    logo: "/images/socio-logo.svg",
  },
  /* [Request] {
      title : 'Bitget',
      subtitle : 'Non-Custodial Wallet',
      logo : '/images/bitget-logo.svg',
  },
*/
  {
    title: "Coin98",
    subtitle: "Non-Custodial Wallet",
    logo: "/images/coin98-logo.svg",
  },
  /*  [Request] {
      title : 'Community Treasury',
      subtitle : 'Crypto insturance',
      logo : '/images/icons/openzeppelin-icon.png',
  },
*/
];

export default function AssetSection() {
  const isMobile = useCheckIsMobile();

  return (
    <div className="w-full 2xl:py-10">
      <section>
        {isMobile ? (
          <>
            <div className="px-[5%] space-y-4 py-16">
              <div className="uppercase text-[48px] leading-[56px] font-medium text-start">
                <span className="text-white">Our </span>
                <span className="text-[#FF1D00] ">Collaboration</span>
              </div>
              {/* [Request]
          <div className='uppercase text-[48px] leading-[56px] font-medium text-start text-white '>Your assets,<br/><span className='text-jala-red'>secured.</span></div>
          <div className='w-[340px] text-lg font-tight font-light text-white'>Audited by the world’s leading security firms, security of Jalaswap is the highest priority.</div>
          */}
            </div>
            <div className="flex justify-center px-[10%]">
              <div className="font-tight md:w-[760px] sm:w-[600px] w-[300px] min-[350px]:w-[300px] min-[450px]:w-[380px] min-[550px]:w-[500px]">
                <Marquee pauseOnHover>
                  {assetProps.map((asset, index) => (
                    <AssetCard key={index} logo={asset.logo} title={asset.title} subtitle={asset.subtitle} />
                  ))}
                </Marquee>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="w-full px-[20px] space-y-20">
              <div className="flex justify-between items-center">
                <div className="uppercase text-[80px] leading-[88px] text-start ">
                  <span className="text-white">Our </span>
                  <span className="text-[#FF1D00] ">Collaboration</span>
                </div>
                <img src="/images/icons/background-icon2.svg" alt="background-icon" />
              </div>
              {/* [Request]
          <div className='w-[50%] md:py-10 2xl:py-20 space-y-3'>
            <div className='uppercase text-[80px] leading-[88px] font-semibold text-start text-white '>Your assets,<br/><span className='text-jala-red'>secured.</span></div>
              <div className=''>
              <div className='w-[400px] font-sans text-[20px] font-light text-jala-gray-1'>Audited by the world’s leading security firms, security of Jalaswap is the highest priority.</div>
            </div>
          </div>
          */}
            </div>
            <div className="flex font-tight overflow-x-hidden">
              {assetProps.map((asset, index) => (
                <AssetCard key={index} logo={asset.logo} title={asset.title} subtitle={asset.subtitle} />
              ))}
            </div>
          </>
        )}
      </section>
    </div>
  );
}
