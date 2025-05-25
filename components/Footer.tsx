import { DISCORD_LINK, GIUTUB_LINK, MEDIUM_LINK, X_LINK } from "@/config/links";
import { useCheckIsMobile } from "@/hooks/useCheckIsMobile";
import Link from "next/link";

export default function Footer() {
  const isMobile = useCheckIsMobile();
  return (
    <>
      {isMobile ? (
        <div className="w-full py-10 flex flex-col space-y-10 justify-center items-center font-tight font-light text-[14px]  text-[#D3D3D3]">
          <Link href={"/"}>
            <img src="/images/jala-symbol-img.png" alt="kayen-symbol-img" />
          </Link>
          <div>KAYEN Protocol • Copyright 2024</div>
          <div className="flex space-x-4">
            <Link href={MEDIUM_LINK}>
              <img className="w-5" src="/images/icons/medium-icon.svg" alt="medium-icon" />
            </Link>
            <Link href={DISCORD_LINK}>
              <img className="w-5" src="/images/icons/discord-icon.svg" alt="discord-icon" />
            </Link>
            <Link href={GIUTUB_LINK}>
              <img className="w-5" src="/images/icons/git-icon.png" alt="git-icon" />
            </Link>
            <Link href={X_LINK}>
              <img className="w-5" src="/images/icons/x-icon.svg" alt="x-icon" />
            </Link>
          </div>
        </div>
      ) : (
        <div className=" px-[20px] w-full h-[188px] flex justify-between items-center font-tight font-light text-[14px] text-[#D3D3D3]">
          <Link href={"/"}>
            <img src="/images/jala-symbol-img.png" alt="kayen-symbol-img" />
          </Link>
          <div>KAYEN Protocol • Copyright 2024</div>
          <div className="flex space-x-2">
            <Link href={MEDIUM_LINK}>
              <img className="w-5" src="/images/icons/medium-icon.svg" alt="medium-icon" />
            </Link>
            <Link href={DISCORD_LINK}>
              <img className="w-5" src="/images/icons/discord-icon.svg" alt="discord-icon" />
            </Link>
            <Link href={GIUTUB_LINK}>
              <img className="w-5" src="/images/icons/git-icon.png" alt="git-icon" />
            </Link>
            <Link href={X_LINK}>
              <img className="w-5" src="/images/icons/x-icon.svg" alt="x-icon" />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
