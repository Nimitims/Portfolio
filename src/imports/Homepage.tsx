import svgPaths from "./svg-hkm1qd4lx2";
import imgImg67984 from "figma:asset/e1a52535b96285560d5839469e93831403faa42a.png";
import imgHome2 from "figma:asset/10c9d4fa9a5d364fabef44a489a2b5921e0cf4c3.png";
import imgDesktop92 from "figma:asset/83350641223abc3f2b826b1889f582e0fd2ae09f.png";
import { imgImg67983 } from "./svg-p0ru3";

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

function ProfileName() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[342px]" data-name="Profile_name">
      <ProfileImage />
      <Name />
    </div>
  );
}

function Nav() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Nav">
      <ProfileName />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#171717] text-[18px] text-nowrap">About Me</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-start not-italic relative shrink-0 w-full" data-name="Heading">
      <p className="font-['Tienne:Regular',sans-serif] leading-[normal] relative shrink-0 text-[48px] text-black w-full">Bawo Ni</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#2a2a2a] text-[16px] w-full">I’m a multidisciplinary designer based in Lagos, Nigeria, who crafts thoughtful digital experiences that solve real business problems. From product design to creative direction, I help startups, teams, and brands build usable, scalable, and visually impactful solutions — turning ideas into products that drive value, growth, and connection.</p>
    </div>
  );
}

function Display() {
  return (
    <div className="h-[273px] overflow-clip relative shrink-0 w-full" data-name="Display">
      <div className="absolute h-[344px] left-0 top-[-8px] w-[483px]" data-name="Home 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgHome2} />
        </div>
      </div>
    </div>
  );
}

function Naming() {
  return (
    <div className="content-stretch flex font-['Inter:Medium',sans-serif] font-medium gap-[192px] h-[20px] items-center leading-[20px] not-italic relative shrink-0 text-nowrap w-full" data-name="Naming">
      <p className="relative shrink-0 text-[#171717] text-[18px]">The Libras</p>
      <p className="relative shrink-0 text-[#5c5c5c] text-[16px]">{`Design Engineering  2025`}</p>
    </div>
  );
}

function DisplayN() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[480px]" data-name="Display_n">
      <Display />
      <Naming />
    </div>
  );
}

function Display1() {
  return (
    <div className="h-[273px] overflow-clip relative shrink-0 w-full" data-name="Display">
      <div className="absolute h-[341px] left-0 top-[-14px] w-[480px]" data-name="Desktop - 9 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgDesktop92} />
      </div>
    </div>
  );
}

function Naming1() {
  return (
    <div className="content-stretch flex font-['Inter:Medium',sans-serif] font-medium gap-[241px] h-[20px] items-center leading-[20px] not-italic relative shrink-0 text-nowrap w-full" data-name="Naming">
      <p className="relative shrink-0 text-[#171717] text-[18px]">Settings</p>
      <p className="relative shrink-0 text-[#5c5c5c] text-[16px]">{`Product design  2025`}</p>
    </div>
  );
}

function DisplayN1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[480px]" data-name="Display_n">
      <Display1 />
      <Naming1 />
    </div>
  );
}

function DisplayN2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Display_n">
      <DisplayN />
      <DisplayN1 />
    </div>
  );
}

function Fnh() {
  return (
    <div className="content-stretch flex flex-col gap-[78px] items-start relative shrink-0 w-full" data-name="FNH">
      <Heading />
      {[...Array(2).keys()].map((_, i) => (
        <DisplayN2 key={i} />
      ))}
    </div>
  );
}

function All() {
  return (
    <div className="content-stretch flex flex-col gap-[140px] items-start relative shrink-0 w-[976px]" data-name="All">
      <Nav />
      <Fnh />
    </div>
  );
}

function SocialIcons() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Social Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Social Icons">
          <path d={svgPaths.p38deab00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SocialIcons1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Social Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_485)" id="Social Icons">
          <path d={svgPaths.pa42b330} fill="var(--fill-0, #000100)" id="Vector" />
          <path d={svgPaths.p28ca0900} fill="var(--fill-0, #000100)" id="Vector_2" />
          <path d={svgPaths.p231e5ff0} fill="var(--fill-0, #000100)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_1_485">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SocialIcons2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Social Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_482)" id="Social Icons">
          <path d={svgPaths.p3bf36e80} fill="var(--fill-0, #0A66C2)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_482">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SocialMedia() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Social media">
      <SocialIcons />
      <SocialIcons1 />
      <SocialIcons2 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[232px] top-[16px] w-[92px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#2a2a2a] text-[14px] w-full">Find me on</p>
      <SocialMedia />
    </div>
  );
}

function Archive() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0 w-[51px]" data-name="Archive">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#5c5c5c] text-[14px] w-full">Archive</p>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 51 1">
            <line id="Line 4" stroke="var(--stroke-0, #5C5C5C)" strokeDasharray="2 2" x2="51" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Colophon() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0 w-[65px]" data-name="Colophon">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#5c5c5c] text-[14px] w-full">Colophon</p>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 65 1">
            <line id="Line 5" stroke="var(--stroke-0, #5C5C5C)" strokeDasharray="2 2" x2="65" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Knowing() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Knowing">
      <Archive />
      <Colophon />
    </div>
  );
}

function DareToKnow() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[480px] top-[16px] w-[132px]" data-name="Dare to know">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#2a2a2a] text-[14px] w-full">Dare to know?</p>
      <Knowing />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#fafafa] h-[96px] overflow-clip relative shrink-0 w-full">
      <Frame1 />
      <DareToKnow />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[1355px] not-italic text-[#5c5c5c] text-[14px] text-nowrap text-right top-[16px] translate-x-[-100%]">12:32:05 PM</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[1355px] not-italic text-[#5c5c5c] text-[14px] text-nowrap text-right top-[45px] translate-x-[-100%]">
        <span>{`To live is Christ to die is gain - `}</span>
        <span className="font-['Inter:Medium_Italic',sans-serif] italic">Philippians 1:21</span>
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[117px] items-center left-[-1px] top-[96px] w-[1440px]">
      <All />
      <Frame />
    </div>
  );
}

export default function Homepage() {
  return (
    <div className="bg-white relative size-full" data-name="Homepage">
      <Frame2 />
    </div>
  );
}