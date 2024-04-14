import Link from "next/link";


export function HeaderTab ({title, imgUrl, href}:{title: string, imgUrl: string, href : string}) {
    return(
    <div className="w-full h-full text-[13px] lg:text-[16px] 2xl:text-[20px] leading-[28px] tracking-widest">
        <div className="w-full h-full border-transparent  border-b-2 border-[#272A2A] hover:border-b-2 hover:border-jala-red duration-500">
            <Link className="w-full h-full flex justify-center items-center space-x-2" href={href}>
            <img className="h-4 xl:h-4" src={imgUrl}/>        
            <div>{title}</div>
            </Link>
        </div>
    </div>
    )
}