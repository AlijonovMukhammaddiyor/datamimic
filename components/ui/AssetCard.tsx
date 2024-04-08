

export default function AssetCard ({logo, title, subtitle} : {logo: string, title : string, subtitle : string}) {
    return(
        <div className='font-tight border border-[#272A2A] duration-1000 hover:border-jala-red shadow-sm hover:shadow-jala-red w-[300px] h-[424px]  md:h-[304px] 2xl:w-[300px] 2xl:h-[424px] flex flex-col justify-between bg-[#0F1212]'>
          <img className='h-5 w-5' src='/images/icons/icon.png'/>
          <div className='px-7 flex flex-col justify-between h-full'>
            <img className='h-[56px] w-[56px]' src={logo}/>
            <div>
            <div className='text-[32px] md:text-[20px] 2xl:text-[32px] leading-[40px]'>{title}</div>
            <div className='text-[16px] md:text-[12px] 2xl:text-[16px] leading-[24px]'>{subtitle}</div>
            </div>
          </div>
          <img src='/images/lines.png'/>
      </div>
    )
}