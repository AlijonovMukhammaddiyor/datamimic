import { useCheckIsMobile } from "@/hooks/useCheckIsMobile";


export function SectionDivider () {
    const isMobile = useCheckIsMobile();

    return(
    <>
    {isMobile ? 
    <div className="flex justify-between font-tight py-6 text-[#595959] text-xs">
        <div>01</div>
        <div>02</div>
        <div>03</div>
        <div>04</div>
    </div>:
    <div className="flex justify-between font-tight py-6 text-[#595959] text-xs">
        <div>01</div>
        <div>02</div>
        <div>03</div>
        <div>04</div>
        <div>05</div>
        <div>06</div>
    </div>
    }
    </>
    )
}