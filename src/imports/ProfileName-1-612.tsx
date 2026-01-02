import svgPaths from "./svg-vbzdq5yh9t";
import imgImg67984 from "figma:asset/e1a52535b96285560d5839469e93831403faa42a.png";
import { imgImg67983 } from "./svg-bpxdj";

function MaskGroup() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Mask group">
      <div className="[grid-area:1_/_1] h-[108.013px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[49px_12px] mask-size-[64px_64px] ml-[-49px] mt-[-12px] relative w-[162px]" data-name="IMG_6798 3" style={{ maskImage: `url('${imgImg67983}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImg67984} />
      </div>
    </div>
  );
}

function ProfileImage() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Profile_image">
      <MaskGroup />
    </div>
  );
}

function VuesaxOutlineCopy() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/outline/copy">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="copy">
          <path d={svgPaths.p13fea600} fill="var(--fill-0, #A4A7AE)" id="Vector" />
          <path d={svgPaths.p3a133b00} fill="var(--fill-0, #A4A7AE)" id="Vector_2" />
          <g id="Vector_3" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function Copy() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="copy">
      <VuesaxOutlineCopy />
    </div>
  );
}

function EmailText() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Email_text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#a4a7ae] text-[16px] text-nowrap">oloyedeoluwalonimi@gmail.com</p>
      <Copy />
    </div>
  );
}

function Name() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[261px]" data-name="Name">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#171717] text-[18px] w-full">Oloyede Oluwalonimi Francis</p>
      <EmailText />
    </div>
  );
}

export default function ProfileName() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative size-full" data-name="Profile_name">
      <ProfileImage />
      <Name />
    </div>
  );
}