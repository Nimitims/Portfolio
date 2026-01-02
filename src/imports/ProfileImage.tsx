import imgImg67984 from "figma:asset/e1a52535b96285560d5839469e93831403faa42a.png";
import { imgImg67983 } from "./svg-rl02q";

function MaskGroup() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Mask group">
      <div className="[grid-area:1_/_1] h-[108.013px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[49px_12px] mask-size-[64px_64px] ml-[-49px] mt-[-12px] relative w-[162px]" data-name="IMG_6798 3" style={{ maskImage: `url('${imgImg67983}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImg67984} />
      </div>
    </div>
  );
}

export default function ProfileImage() {
  return (
    <div className="content-stretch flex items-center relative size-full" data-name="Profile_image">
      <MaskGroup />
    </div>
  );
}