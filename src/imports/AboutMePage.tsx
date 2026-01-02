import svgPaths from "./svg-cmi68vbzvw";
import imgImg67984 from "figma:asset/e1a52535b96285560d5839469e93831403faa42a.png";
import imgWhatsAppImage20251226At170330 from "figma:asset/274bd42eba111765dad6f8ab947267c2de7844d8.png";
import imgWhatsAppImage20251226At1658181 from "figma:asset/06d4adc1952fb9a8058811a64f4eb5f35bec8846.png";
import imgWhatsAppImage20251226At165818 from "figma:asset/fc3e360a05e85e93ff9f34ea215aab4611b09b65.png";
import imgWhatsAppImage20251226At170222 from "figma:asset/b06bf342d6991f4f7369fcd7c959a8c2095354c9.png";
import imgImages1 from "figma:asset/5f26186a69a10021ead18186f9b2e330f8939a59.png";
import imgImages3 from "figma:asset/5e418fab8a221cce43138133f05c9a6fed17bd17.png";
import imgImages4 from "figma:asset/4cf0abc3616be65774caacb3fa0804edc67abb00.png";
import imgImages from "figma:asset/3b19d7d6e008331bfdfa8268d73daa3a4b72354a.png";
import imgImages2 from "figma:asset/7b9961ba1b70afdb99a2b7e47e12e0c4840fdbd4.png";
import { imgImg67983 } from "./svg-ao764";

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

function Picture1() {
  return (
    <div className="h-[190px] overflow-clip relative shrink-0 w-[149px]" data-name="Picture1">
      <div className="absolute h-[216px] left-[-6px] top-0 w-[162px]" data-name="WhatsApp Image 2025-12-26 at 17.03.30">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgWhatsAppImage20251226At170330} />
      </div>
    </div>
  );
}

function Picture2() {
  return (
    <div className="h-[190px] overflow-clip relative shrink-0 w-[149px]" data-name="Picture 2">
      <div className="absolute h-[198.667px] left-0 top-[-3.67px] w-[149px]" data-name="WhatsApp Image 2025-12-26 at 16.58.18 (1)">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgWhatsAppImage20251226At1658181} />
      </div>
    </div>
  );
}

function Picture3() {
  return (
    <div className="h-[190px] overflow-clip relative shrink-0 w-[149px]" data-name="Picture 3">
      <div className="absolute h-[190px] left-[-4.11px] top-0 w-[156.222px]" data-name="WhatsApp Image 2025-12-26 at 16.58.18">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgWhatsAppImage20251226At165818} />
      </div>
    </div>
  );
}

function Picture4() {
  return (
    <div className="h-[190px] overflow-clip relative shrink-0 w-[149px]" data-name="Picture 4">
      <div className="absolute h-[247.9px] left-0 top-[-0.9px] w-[192.581px]" data-name="WhatsApp Image 2025-12-26 at 17.02.22">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgWhatsAppImage20251226At170222} />
      </div>
    </div>
  );
}

function Picture() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Picture">
      <Picture1 />
      <Picture2 />
      <Picture3 />
      <Picture4 />
    </div>
  );
}

function Introduction() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[644px]" data-name="Introduction">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#171717] text-[18px] w-full">Hi i am Nimi - A design engineer</p>
      <Picture />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Text">
      <Introduction />
      <div className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] min-w-full not-italic relative shrink-0 text-[#171717] text-[18px] w-[min-content]">
        <p className="mb-0">{`I am someone who is obsessed about my craft, managing every detail to ensure the end user has the best `}</p>
        <p className="mb-0">experience whilst using the product. I try to stay curious and experiment as much as i can, reading books, asking</p>
        <p className="mb-0">questions and trying to bring things in my imagination to life. Also, when i a not obsessing over craft i am either</p>
        <p>reading on philosophy, watching movies, or hanging out with my friends.</p>
      </div>
    </div>
  );
}

function LikeText() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium gap-[6px] items-start leading-[normal] not-italic relative shrink-0 text-[#171717] text-[14px] w-full" data-name="like text">
      <p className="relative shrink-0 w-full">Music</p>
      <p className="relative shrink-0 w-full">God</p>
      <p className="relative shrink-0 w-full">Good food</p>
      <p className="relative shrink-0 w-full">Philosophy</p>
      <p className="relative shrink-0 w-full">Design</p>
      <p className="relative shrink-0 w-full">My friend</p>
      <p className="relative shrink-0 w-full">F1</p>
      <p className="relative shrink-0 w-full">Football</p>
    </div>
  );
}

function ILike() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-[80px]" data-name="i like">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#5c5c5c] text-[14px] w-full">{`Things i like `}</p>
      <LikeText />
    </div>
  );
}

function LikeLine() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[315px]" data-name="like line">
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-0.5px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 315 0.5">
            <line id="Line 2" stroke="var(--stroke-0, #D4D4D4)" strokeWidth="0.5" x2="315" y1="0.25" y2="0.25" />
          </svg>
        </div>
      </div>
      <ILike />
    </div>
  );
}

function CourageToBeDismliked() {
  return (
    <div className="h-[48px] overflow-clip relative shrink-0 w-[32px]" data-name="Courage to be dismliked">
      <div className="absolute h-[48px] left-0 top-0 w-[31px]" data-name="images (1)">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[1.06%] max-w-none top-[-0.49%] w-[100.09%]" src={imgImages1} />
        </div>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium gap-[4px] items-start leading-[normal] not-italic relative shrink-0 text-[14px] w-[178px]" data-name="Text">
      <p className="relative shrink-0 text-[#171717] w-full">{`The courage to be disliked `}</p>
      <p className="relative shrink-0 text-[#5c5c5c] w-full">Fumitake koga</p>
    </div>
  );
}

function CourageToBeDisliked() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Courage to be disliked">
      <CourageToBeDismliked />
      <Text1 />
    </div>
  );
}

function Sprit() {
  return (
    <div className="h-[48px] overflow-clip relative shrink-0 w-[32px]" data-name="Sprit">
      <div className="absolute h-[49px] left-0 top-[-1px] w-[31px]" data-name="images (3)">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImages3} />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium gap-[4px] items-start leading-[normal] not-italic relative shrink-0 text-[14px] w-[134px]" data-name="Text">
      <p className="relative shrink-0 text-[#171717] w-full">Spirit soul and body</p>
      <p className="relative shrink-0 text-[#5c5c5c] w-full">Andrew wommack</p>
    </div>
  );
}

function SpiritSoulAndBoody() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Spirit soul and boody">
      <Sprit />
      <Text2 />
    </div>
  );
}

function MakeSomething() {
  return (
    <div className="h-[48px] overflow-clip relative shrink-0 w-[32px]" data-name="Make something">
      <div className="absolute h-[51px] left-0 top-[-1px] w-[32px]" data-name="images (4)">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImages4} />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium gap-[4px] items-start leading-[normal] not-italic relative shrink-0 text-[14px] w-[183px]" data-name="Text">
      <p className="relative shrink-0 text-[#171717] w-full">Make something wonderful</p>
      <p className="relative shrink-0 text-[#5c5c5c] w-full">Steve jobs</p>
    </div>
  );
}

function MakeSomehtingWonderful() {
  return (
    <div className="[grid-area:2_/_1] content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Make somehting wonderful">
      <MakeSomething />
      <Text3 />
    </div>
  );
}

function Habit() {
  return (
    <div className="h-[48px] overflow-clip relative shrink-0 w-[32px]" data-name="Habit">
      <div className="absolute left-[-20px] size-[72px] top-[-12px]" data-name="images">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImages} />
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium gap-[4px] items-start leading-[normal] not-italic relative shrink-0 text-[14px] w-[134px]" data-name="Text">
      <p className="relative shrink-0 text-[#171717] w-full">The power of habits</p>
      <p className="relative shrink-0 text-[#5c5c5c] w-full">Charles Duhigg</p>
    </div>
  );
}

function ThePowerOfHabits() {
  return (
    <div className="[grid-area:2_/_2] content-stretch flex gap-[8px] items-center relative shrink-0" data-name="The power of habits">
      <Habit />
      <Text4 />
    </div>
  );
}

function TheCurage() {
  return (
    <div className="h-[48px] overflow-clip relative shrink-0 w-[32px]" data-name="The curage">
      <div className="absolute h-[48px] left-0 top-0 w-[32px]" data-name="images (2)">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImages2} />
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium gap-[4px] items-start leading-[normal] not-italic relative shrink-0 text-[14px] w-[98px]" data-name="Text">
      <p className="relative shrink-0 text-[#171717] w-full">Start with why</p>
      <p className="relative shrink-0 text-[#5c5c5c] w-full">Simon sinek</p>
    </div>
  );
}

function StartWithWhy() {
  return (
    <div className="[grid-area:3_/_1] content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Start with why">
      <TheCurage />
      <Text5 />
    </div>
  );
}

function Books() {
  return (
    <div className="gap-[27px] grid grid-cols-[repeat(2,_fit-content(100%))] grid-rows-[repeat(3,_fit-content(100%))] relative shrink-0 w-full" data-name="Books">
      <CourageToBeDisliked />
      <SpiritSoulAndBoody />
      <MakeSomehtingWonderful />
      <ThePowerOfHabits />
      <StartWithWhy />
    </div>
  );
}

function Read() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Read">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#5c5c5c] text-[16px] w-full">Currently reading</p>
      <Books />
    </div>
  );
}

function ReadLine() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[424px]" data-name="Read line">
      <div className="h-0 relative shrink-0 w-[315px]">
        <div className="absolute inset-[-0.5px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 315 0.5">
            <line id="Line 3" stroke="var(--stroke-0, #D4D4D4)" strokeWidth="0.5" x2="315" y1="0.25" y2="0.25" />
          </svg>
        </div>
      </div>
      <Read />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[181px] items-start relative shrink-0">
      <LikeLine />
      <ReadLine />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full">
      <Text />
      <Frame />
    </div>
  );
}

function Body1() {
  return (
    <div className="content-stretch flex flex-col gap-[92px] items-start relative shrink-0 w-[976px]" data-name="Body1">
      <Nav />
      <Frame1 />
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
        <g clipPath="url(#clip0_1_457)" id="Social Icons">
          <path d={svgPaths.pa42b330} fill="var(--fill-0, #000100)" id="Vector" />
          <path d={svgPaths.p28ca0900} fill="var(--fill-0, #000100)" id="Vector_2" />
          <path d={svgPaths.p231e5ff0} fill="var(--fill-0, #000100)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_1_457">
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
        <g clipPath="url(#clip0_1_454)" id="Social Icons">
          <path d={svgPaths.p3bf36e80} fill="var(--fill-0, #0A66C2)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_454">
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

function Connect() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[92px]" data-name="Connect">
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
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[132px]" data-name="Dare to know">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#2a2a2a] text-[14px] w-full">Dare to know?</p>
      <Knowing />
    </div>
  );
}

function Realize() {
  return (
    <div className="absolute content-stretch flex items-start justify-between left-[232px] top-[16px] w-[380px]" data-name="Realize">
      <Connect />
      <DareToKnow />
    </div>
  );
}

function Quote() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium gap-[12px] items-end left-[1049px] not-italic text-[#5c5c5c] text-[14px] text-right top-[16px] w-[306px]" data-name="Quote">
      <p className="leading-[normal] relative shrink-0 w-full">12:32:05 PM</p>
      <p className="leading-[normal] relative shrink-0 w-full">
        <span>{`To live is Christ to die is gain - `}</span>
        <span className="font-['Inter:Medium_Italic',sans-serif] font-medium italic">Philippians 1:21</span>
      </p>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#fafafa] h-[96px] overflow-clip relative shrink-0 w-full" data-name="Footer">
      <Realize />
      <Quote />
    </div>
  );
}

function Body() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[122px] items-center left-0 top-[96px] w-[1440px]" data-name="Body">
      <Body1 />
      <Footer />
    </div>
  );
}

export default function AboutMePage() {
  return (
    <div className="bg-white relative size-full" data-name="About me page">
      <div className="absolute h-0 left-[296px] top-[calc(16.67%+90.71px)] w-[36.003px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36.0026 1">
            <line id="Line 1" stroke="var(--stroke-0, #5C5C5C)" strokeDasharray="4 4" strokeLinecap="square" x1="0.5" x2="35.5026" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Body />
    </div>
  );
}