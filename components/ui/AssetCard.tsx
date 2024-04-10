

export default function AssetCard ({logo, title, subtitle} : {logo: string, title : string, subtitle : string}) {
    return(
        <div className='font-tight border border-[#272A2A] duration-1000 hover:border-jala-red shadow-sm hover:shadow-jala-red 
                        w-[300px] h-[424px]  md:h-[304px] 2xl:w-[300px] 2xl:h-[380px]  3xl:w-[300px] 3xl:h-[424px] 
                        flex flex-col justify-between bg-[#0F1212]'>
          <img className='h-5 w-5' src='/images/icons/icon.png'/>
          <div className='px-7 flex flex-col justify-between h-full'>
            <img className='3xl:h-[56px] 3xl:w-[56px] 2xl:h-[50px] 2xl:w-[50px] md:h-[40px] md:w-[40px] h-[40px] w-[40px]' src={logo}/>
            <div>
            <div className='text-[32px] md:text-[18px] 2xl:text-[26px] 3xl:text-[32px] leading-[40px]'>{title}</div>
            <div className='text-[16px] md:text-[12px] 2xl:text-[14px] 3xl:text-[16px] leading-[24px]'>{subtitle}</div>
            </div>
          </div>
          <img src='/images/lines.png'/>
      </div>
    )
}