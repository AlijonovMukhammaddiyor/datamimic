import Link from "next/link";

export function HeaderTab({
  title,
  imgUrl,
  href,
  backgrounded,
}: {
  title: string;
  imgUrl?: string;
  href: string;
  backgrounded?: boolean;
}) {
  return (
    <div className="relative w-full h-full text-[15px] lg:text-[20px] leading-[28px] tracking-widest">
      <div className="w-full h-full border-transparent  border-b-2 border-[#272A2A] hover:border-b-2 hover:border-jala-red duration-500">
        <Link className="w-full h-full flex justify-center items-center space-x-2" href={href}>
          {backgrounded && (
            <img
              className="absolute bottom-0 left-0 right-0 top-0 h-full w-full object-cover"
              src="/images/bg_presale_menu.svg"
            />
          )}
          {!!imgUrl && <img className="h-4 xl:h-4" src={imgUrl} />}
          <div className="z-10">{title}</div>
        </Link>
      </div>
    </div>
  );
}
