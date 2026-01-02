import svgPaths from "./svg-k29c9ewziy";
import imgImg67984 from "figma:asset/e1a52535b96285560d5839469e93831403faa42a.png";
import imgMacBookAir15Inch from "figma:asset/aa1fb165afc4f73c43bbd2f0905c3fe19f06257c.png";
import imgHome3 from "figma:asset/10c9d4fa9a5d364fabef44a489a2b5921e0cf4c3.png";
import { imgImg67983 } from "./svg-zh31m";

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[96px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#5c5c5c] text-[18px] w-full">Back</p>
    </div>
  );
}

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
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#171717] text-[18px] text-nowrap">Home</p>
    </div>
  );
}

function Concept() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Concept">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#5c5c5c] text-[16px] text-nowrap">SHIPPED</p>
      <div className="relative shrink-0 size-[4px]" data-name="Dot">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #5C5C5C)" id="Dot" r="2" />
        </svg>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Header">
      <Concept />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#5c5c5c] text-[16px] text-nowrap">2025</p>
    </div>
  );
}

function Head() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[449px]" data-name="Head">
      <Header />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] min-w-full not-italic relative shrink-0 text-[#171717] text-[48px] w-[min-content]">Libras</p>
    </div>
  );
}

function BigDisplay() {
  return (
    <div className="bg-[#c2e2bc] h-[333px] overflow-clip relative shrink-0 w-full" data-name="Big display">
      <div className="absolute h-[335.25px] left-[100px] top-[-1px] w-[447px]" data-name="MacBook Air (15 inch)">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMacBookAir15Inch} />
      </div>
    </div>
  );
}

function Head1() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Head">
      <Head />
      <BigDisplay />
    </div>
  );
}

function Role() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium gap-[8px] items-start leading-[normal] not-italic relative shrink-0 text-[#5c5c5c] text-[16px] w-[144px]" data-name="Role">
      <p className="relative shrink-0 w-full">ROLE</p>
      <p className="relative shrink-0 w-full">Designer Engineer</p>
    </div>
  );
}

function Stack() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium gap-[8px] items-start leading-[normal] not-italic relative shrink-0 text-[#5c5c5c] text-[16px] w-[133px]" data-name="Stack">
      <p className="relative shrink-0 w-full">STACK</p>
      <p className="relative shrink-0 w-full">Figma</p>
      <p className="relative shrink-0 w-full">Chat Gpt</p>
      <p className="relative shrink-0 w-full">React</p>
    </div>
  );
}

function Descprition() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0" data-name="Descprition">
      <Role />
      <Stack />
    </div>
  );
}

function Introduction() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[646px]" data-name="introduction">
      <Head1 />
      <Descprition />
    </div>
  );
}

function Intro() {
  return (
    <div className="content-stretch flex flex-col gap-[127px] items-center relative shrink-0 w-full" data-name="Intro">
      <Nav />
      <Introduction />
    </div>
  );
}

function Concept1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Concept">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#5c5c5c] text-[16px] text-nowrap">PROBLEM</p>
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Header">
      <Concept1 />
    </div>
  );
}

function Problems() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Problems">
      <Header1 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] min-w-full not-italic relative shrink-0 text-[#2a2a2a] text-[16px] w-[min-content]">{`I am a man of different passions and desires, i am also a very curious person, i usually scour the internet to feed my curiosity and i often find thing i feel like are interesting. Now the issue is tha my mind sometimes acts like a RAM, i often forget the places or things that i find, i needed a place to store all the things i like so i could just check it when i needed to remember. `}</p>
    </div>
  );
}

function Concept2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Concept">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#5c5c5c] text-[16px] text-nowrap">SOLUTION</p>
    </div>
  );
}

function Header2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Header">
      <Concept2 />
    </div>
  );
}

function Solution() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Solution">
      <Header2 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] min-w-full not-italic relative shrink-0 text-[#2a2a2a] text-[16px] w-[min-content]">I came up libras as a solution to this issue, it is an archive of all the things that i like and want to store.</p>
    </div>
  );
}

function Concept3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Concept">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#5c5c5c] text-[16px] text-nowrap">DIRECTION</p>
    </div>
  );
}

function Header3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Header">
      <Concept3 />
    </div>
  );
}

function Research() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Research">
      <Header3 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] min-w-full not-italic relative shrink-0 text-[#2a2a2a] text-[16px] w-[min-content]">{`For this site, after looking at sites that do similar things, for example, cereal.com. I decided to go with a minimalist, editorial look. I picked Geist Mono for this site in line with the direction. I focused on whitespace, good grid arrangement and micro interactions. `}</p>
    </div>
  );
}

function Concept4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Concept">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#5c5c5c] text-[16px] text-nowrap">SCREENS</p>
    </div>
  );
}

function Header4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Header">
      <Concept4 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#c2e2bc] h-[332px] overflow-clip relative shrink-0 w-[723px]">
      <div className="absolute h-[278.756px] left-[166px] top-[27px] w-[392px]" data-name="Home 3">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgHome3} />
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#c2e2bc] content-start flex flex-wrap gap-[32px] items-start relative shrink-0 w-full">
      <Frame1 />
    </div>
  );
}

function Flow() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[728px]" data-name="Flow">
      <Header4 />
      <Frame2 />
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex flex-col gap-[56px] items-start relative shrink-0 w-[806px]" data-name="Body">
      <Problems />
      <Solution />
      <Research />
      <Flow />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[112px] items-end relative shrink-0 w-[976px]">
      <Intro />
      <Body />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex items-center left-[136px] top-[96px]">
      <Frame />
      <Frame3 />
    </div>
  );
}

export default function Libras() {
  return (
    <div className="bg-white relative size-full" data-name="Libras">
      <Frame4 />
    </div>
  );
}