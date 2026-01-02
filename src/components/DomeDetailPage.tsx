import svgPaths from "../imports/svg-fn2eewxpef";
import imgImg67984 from "figma:asset/e1a52535b96285560d5839469e93831403faa42a.png";
import imgIPhone12ProWoodenHands from "figma:asset/030ddb6a58fa9ee1b8f81d8895982772117b9475.png";
import imgV1HomeSfPro3 from "figma:asset/af91b04069cf8bfa11989f7b366a9f6b7da5336b.png";
import imgAdd from "figma:asset/8833d7fa6a7dc8cede932dffab79430858296648.png";
import imgAdd2 from "figma:asset/3b5f025dcaab1dab1cd3afae843d6f38757d1824.png";
import imgV1HomeSfPro1 from "figma:asset/c9ef8c017519e87f37ec837fb9058af1bf0ba1f5.png";
import imgDateAndTimePicker from "figma:asset/f373de4dd89e2e444020d490cd8da81b61ab5f2a.png";
import imgProfile from "figma:asset/17572aca9451b23990df4711f4b844bf0df37114.png";
import { imgImg67983 } from "../imports/svg-n44ul";
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function SectionNav() {
  const [activeSection, setActiveSection] = useState<string>('problem');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['problem', 'solution', 'research', 'flow'];
      const scrollPosition = window.scrollY + 200; // Offset for better detection

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium gap-[8px] items-start leading-[normal] not-italic relative shrink-0 text-[18px] w-[96px]">
      <Link 
        to="/" 
        className="relative shrink-0 text-[#5c5c5c] w-full no-underline hover:text-[#171717] transition-colors duration-150"
      >
        Back
      </Link>
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Mask group">
      <div className="[grid-area:1_/_1] h-[64px] w-[64px] relative overflow-hidden" data-name="IMG_6798 3" style={{ maskImage: `url('${imgImg67983}')`, maskSize: 'contain', maskRepeat: 'no-repeat', maskPosition: 'center', WebkitMaskImage: `url('${imgImg67983}')`, WebkitMaskSize: 'contain', WebkitMaskRepeat: 'no-repeat', WebkitMaskPosition: 'center' }}>
        <img alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" src={imgImg67984} />
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

function Copy({ isHovered, isCopied }: { isHovered: boolean; isCopied: boolean }) {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="copy">
      <div
        style={{
          opacity: isCopied ? 0 : (isHovered ? 1 : 0.75),
          transition: 'opacity 180ms ease',
          // @ts-ignore - CSS custom property
          '--fill-0': isHovered ? '#171717' : '#A4A7AE'
        }}
      >
        <VuesaxOutlineCopy />
      </div>
    </div>
  );
}

function EmailText() {
  const [isCopied, setIsCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleCopy = () => {
    const email = 'oloyedeoluwalonimi@gmail.com';
    
    const textarea = document.createElement('textarea');
    textarea.value = email;
    textarea.style.position = 'fixed';
    textarea.style.left = '-999999px';
    textarea.style.top = '-999999px';
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    
    try {
      document.execCommand('copy');
    } catch (err) {
      // Silent fail
    }
    
    textarea.remove();
    
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1000);
  };

  return (
    <div 
      className="content-stretch flex gap-[6px] items-center relative shrink-0 w-fit cursor-pointer select-none" 
      data-name="Email_text"
      onClick={handleCopy}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="button"
      tabIndex={0}
      aria-live="polite"
    >
      <div 
        className="relative inline-block"
        style={{
          width: '247px',
          height: '19px'
        }}
      >
        <span
          className="absolute left-0 top-0 font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic text-[16px] text-nowrap"
          style={{
            color: isHovered ? '#171717' : '#a4a7ae',
            opacity: isCopied ? 0 : 1,
            filter: isCopied ? 'blur(2px)' : 'blur(0px)',
            transition: isCopied 
              ? 'opacity 180ms ease-in-out, filter 180ms ease-in-out, color 120ms ease'
              : 'opacity 200ms ease-out, filter 200ms ease-out, color 120ms ease',
            willChange: 'opacity, filter, transform'
          }}
        >
          oloyedeoluwalonimi@gmail.com
        </span>
        <span
          className="absolute left-0 top-0 font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic text-[16px] text-nowrap"
          style={{
            color: isHovered ? '#171717' : '#a4a7ae',
            opacity: isCopied ? 1 : 0,
            filter: isCopied ? 'blur(0px)' : 'blur(4px)',
            transform: isCopied ? 'scale(1)' : 'scale(0.99)',
            transformOrigin: 'left center',
            transition: isCopied 
              ? 'opacity 200ms ease-out, filter 200ms ease-out, transform 200ms ease-out, color 120ms ease'
              : 'opacity 180ms ease-in-out, filter 180ms ease-in-out, transform 180ms ease-in-out, color 120ms ease',
            willChange: 'opacity, filter, transform'
          }}
        >
          Copied
        </span>
      </div>
      <Copy isHovered={isHovered} isCopied={isCopied} />
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
      <Link to="/" className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#171717] text-[18px] text-nowrap no-underline">
        Home
      </Link>
    </div>
  );
}

function Concept() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Concept">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#5c5c5c] text-[16px] text-nowrap">CONCEPT</p>
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
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] min-w-full not-italic relative shrink-0 text-[#171717] text-[48px] w-[min-content]">Dome</p>
    </div>
  );
}

function BigDisplay() {
  return (
    <div className="bg-[#e2bcbc] h-[333px] overflow-clip relative shrink-0 w-full" data-name="Big display">
      <div className="absolute h-[490.5px] left-[-4px] top-[-66px] w-[654px]" data-name="iPhone 12 Pro (Wooden Hands)">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgIPhone12ProWoodenHands} />
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
    <div className="content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium gap-[8px] items-start leading-[normal] not-italic relative shrink-0 text-[#5c5c5c] text-[16px] w-[133px]" data-name="Role">
      <p className="relative shrink-0 w-full">ROLE</p>
      <p className="relative shrink-0 w-full">Product Designer</p>
    </div>
  );
}

function Stack() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium gap-[8px] items-start leading-[normal] not-italic relative shrink-0 text-[#5c5c5c] text-[16px] w-[133px]" data-name="Stack">
      <p className="relative shrink-0 w-full">STACK</p>
      <p className="relative shrink-0 w-full">Figma</p>
      <p className="relative shrink-0 w-full">Chat Gpt</p>
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
    <div id="problem" className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Problems">
      <Header1 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] min-w-full not-italic relative shrink-0 text-[#2a2a2a] text-[16px] w-[min-content]">{`I needed a solution to help my with my forgetfulness and procrastination with tasks. I lose motivation to write down tasks each day and then do them, on other days i procrastinate and then forget to do these tasks.    `}</p>
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
    <div id="solution" className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Solution">
      <Header2 />
      <div className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] min-w-full not-italic relative shrink-0 text-[#2a2a2a] text-[16px] w-[min-content]">
        <p className="mb-0">{`I came up with dome as a solution to this problem. It is a productivity app that lets you keep streaks by marking off tasks each day, these streaks are recorded in a calendar and after certain strides, you earn a badge.  How does it solve the problems `}</p>
        <p className="mb-0">&nbsp;</p>
        <ul className="mb-0">
          <li className="list-disc ms-[24px]">
            <span>Points : You earn points for completing certain activities like writing down tasks and marking them off.</span>
          </li>
        </ul>
        <p className="mb-0">&nbsp;</p>
        <ul className="mb-0">
          <li className="list-disc ms-[24px]">
            <span>Streaks : After you reach a certain amount of points for a day, your streak count goes up.</span>
          </li>
        </ul>
        <p className="mb-0">&nbsp;</p>
        <ul className="mb-0">
          <li className="list-disc ms-[24px]">
            <span>{`Constant messaging : Each day you get a message for all the tasks you have to do that day, You get a message an hour before and during certain tasks. `}</span>
          </li>
        </ul>
        <p className="mb-0">&nbsp;</p>
      </div>
    </div>
  );
}

function Concept3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Concept">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#5c5c5c] text-[16px] text-nowrap">RESEARCH</p>
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
    <div id="research" className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Research">
      <Header3 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] min-w-full not-italic relative shrink-0 text-[#2a2a2a] text-[16px] w-[min-content]">{`For research, i started with multiple questions i felt needed to be answered before i started, i wanted the goal and the design to align and sole the issue properly. `}</p>
    </div>
  );
}

function Concept4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Concept">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#5c5c5c] text-[16px] text-nowrap">FLOW</p>
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

function Frame6() {
  return (
    <div className="bg-[#dbbce2] h-[332px] overflow-clip relative shrink-0 w-[232px]">
      <div className="absolute h-[281.875px] left-[51px] rounded-[12px] top-[25px] w-[130.02px]" data-name="V.1 Home SF pro 3">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[12px] size-full" src={imgV1HomeSfPro3} />
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#f7e6fb] h-[332px] overflow-clip relative shrink-0 w-[232px]">
      <div className="absolute h-[281.875px] left-[51px] top-[25px] w-[130.02px]" data-name="Add">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgAdd} />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#dbbce2] h-[332px] overflow-clip relative shrink-0 w-[232px]">
      <div className="absolute h-[281.875px] left-[51px] top-[25px] w-[130.02px]" data-name="Add 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgAdd2} />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#f7e6fb] h-[332px] overflow-clip relative shrink-0 w-[232px]">
      <div className="absolute h-[282px] left-[51px] top-[25px] w-[130.077px]" data-name="V.1 Home SF pro 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgV1HomeSfPro1} />
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#dbbce2] h-[332px] overflow-clip relative shrink-0 w-[232px]">
      <div className="absolute h-[281.875px] left-[51px] top-[25px] w-[130.02px]" data-name="Date and time picker">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgDateAndTimePicker} />
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#f7e6fb] h-[332px] overflow-clip relative shrink-0 w-[232px]">
      <div className="absolute h-[281.875px] left-[51px] top-[25px] w-[130.02px]" data-name="Profile">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgProfile} />
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-start flex flex-wrap gap-[32px_16px] items-start relative shrink-0 w-full">
      <Frame6 />
      <Frame4 />
      <Frame3 />
      <Frame1 />
      <Frame5 />
      <Frame2 />
    </div>
  );
}

function Flow() {
  return (
    <div id="flow" className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[728px]" data-name="Flow">
      <Header4 />
      <Frame7 />
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

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[112px] items-end relative shrink-0 w-[976px]">
      <Intro />
      <Body />
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute content-stretch flex items-start gap-[134px] left-[136px] top-[96px]">
      <SectionNav />
      <Frame8 />
    </div>
  );
}

export function DomeDetailPage() {
  return (
    <div className="bg-white relative size-full overflow-y-auto" data-name="Product">
      <Frame9 />
    </div>
  );
}