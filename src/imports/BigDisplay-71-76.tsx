import imgMacBookAir15Inch from "figma:asset/a4757152273cde317d0dd0d97a7f94415f38e141.png";

export default function BigDisplay() {
  return (
    <div className="bg-[#e2debc] relative size-full" data-name="Big display">
      <div className="absolute h-[336px] left-[99px] top-0 w-[448px]" data-name="MacBook Air (15 inch)">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMacBookAir15Inch} />
      </div>
    </div>
  );
}