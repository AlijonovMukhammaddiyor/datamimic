

export default function AssetCard ({logo, title, subtitle} : {logo: string, title : string, subtitle : string}) {
    return(
        <div className='border border-[#272A2A] w-[300px] h-[400px] flex flex-col justify-between bg-[#0F1212]'>
        <img className='h-5 w-5' src='/images/icons/icon.png'/>
        <div className='px-10 flex flex-col justify-between h-full'>
          <img className='h-10 w-10' src={logo}/>
          <div>
          <div className='text-[32px]'>{title}</div>
          <div>{subtitle}</div>
          </div>
        </div>
        <img src='/images/lines.png'/>
      </div>
    )
}