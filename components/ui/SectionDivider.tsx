import { useCheckIsMobile } from "@/hooks/useCheckIsMobile";

export function SectionDivider({
  isVertical = false,
  numbers = ["01", "02", "03", "04", "05", "06"],
  mobileNumbers = ["01", "02", "03", "04"],
}: {
  isVertical: boolean;
  numbers: string[];
  mobileNumbers: string[];
}) {
  const isMobile = useCheckIsMobile();
  return (
    <>
      {isMobile ? (
        <div className="flex justify-between font-tight py-6 text-[#595959] text-xs">
          {mobileNumbers.map((num, index) => {
            return <div key={index}>{num}</div>;
          })}
        </div>
      ) : (
        <>
          {isVertical ? (
            <div className="flex flex-col z-[100] justify-between">
              {/* {numbers.map((num, index) => {
                return <div key={index}>{num}</div>;
              })} */}
            </div>
          ) : (
            <div className="flex justify-between font-tight py-6 text-[#595959] text-xs z-[100]">
              {/* {numbers.map((num, index) => {
                return <div key={index}>{num}</div>;
              })} */}
            </div>
          )}
        </>
      )}
    </>
  );
}
