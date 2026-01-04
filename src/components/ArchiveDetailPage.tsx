import svgPaths from "../imports/svg-2l05tqgcku";
import imgImg67984 from "figma:asset/e1a52535b96285560d5839469e93831403faa42a.png";
import imgMacBookAir15Inch from "figma:asset/a4757152273cde317d0dd0d97a7f94415f38e141.png";
import imgShelvesDashboard from "figma:asset/4d8a33af13aab07e6271950aadcaa839f8b977c3.png";
import imgChoose1 from "figma:asset/99db7b18df58a0593cbc8a0bf12a2204d3068d1f.png";
import imgApproach1 from "figma:asset/ffc30ba619cefc0add132d5a3b6ebb40403ac821.png";
import imgContentSummaries1 from "figma:asset/d44c175996e41d01c80e7c90a4d14eab9286ba10.png";
import imgStudyDashboard from "figma:asset/50e660ac11a1eea729b89f9b6dbed2a87078c6d0.png";
import { imgImg67983 } from "../imports/svg-7901j";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function SectionNav() {
  const [activeSection, setActiveSection] = useState<string>('problem');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['problem', 'solution', 'research', 'screens'];
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
    handleScroll(); // Check initial position

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
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] min-w-full not-italic relative shrink-0 text-[#171717] text-[48px] w-[min-content]">Archive</p>
    </div>
  );
}

function BigDisplay() {
  return (
    <div className="bg-[#e2debc] h-[333px] overflow-clip relative shrink-0 w-full" data-name="Big display">
      <div className="absolute h-[336px] left-[99px] top-0 w-[448px]" data-name="Image 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src="figma:asset/fdb890f31e6f3dda6ec3c6e3c39a6e6e70c3f5e3.png" />
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
    <div id="problem" className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Problems">
      <Header1 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] min-w-full not-italic relative shrink-0 text-[#2a2a2a] text-[16px] w-[min-content]">Archive started as Tobani's idea after struggling with switching between slides, ChatGPT, and Claude during exams. He wanted one platform where students could study with AI tools all in one place. He reached out to me to design the user interface and experience, making sure it aligned with the business goals. I worked with Dami, another designer, and Tobani, who led development, to bring the vision to life.</p>
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
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] min-w-full not-italic relative shrink-0 text-[#2a2a2a] text-[16px] w-[min-content]">Archive is a learning and productivity platform my teammate and I built from scratch to help students succeed. I led the design and product structure, while my teammate handled the backend and AI integration. Together, we developed the core idea, mapped out features like smart study tools, course vaults, and AI-led conversations, and shaped the overall strategy.</p>
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
      <div className="font-['Inter:Medium',sans-serif] font-medium leading-[0] min-w-full not-italic relative shrink-0 text-[#2a2a2a] text-[16px] w-[min-content]">
        <p className="leading-[28px] mb-0">My research was conducted with a diverse group of students between the ages of 16 to 24 passionate learners prepping for exams. Most of these individuals are highly familiar with AI tools like ChatGPT and Claude, yet they often voiced the same frustration: switching tabs, losing context, and not having one cohesive study environment.</p>
        <p className="leading-[28px] mb-0">I focused on simulating environments where Archive would be used—exam prep nights, quick study sprints, and group study sessions—often in noisy dorms or silent libraries where focus is crucial and time is limited.</p>
        <p className="leading-[28px] mb-0">Through interviews, surveys, and real-time feedback during informal tests, we uncovered the following:</p>
        <ul className="list-disc">
          <li className="mb-0 ms-[24px]">
            <span className="leading-[28px]">88% of students said they use AI tools to study but often get frustrated switching between apps.</span>
          </li>
          <li className="mb-0 ms-[24px]">
            <span className="leading-[28px]">74% admitted they've copied the same lecture notes into multiple AI tools because the tools don't remember context.</span>
          </li>
          <li className="mb-0 ms-[24px]">
            <span className="leading-[28px]">68% said that during exam prep, the biggest need is speed and clarity, not necessarily depth.</span>
          </li>
          <li className="mb-0 ms-[24px]">
            <span className="leading-[28px]">79% preferred a unified platform that combines content, questions, AI chat, and productivity features.</span>
          </li>
          <li className="ms-[24px]">
            <span className="leading-[28px]">61% wanted an AI feature that could reference their exact class slides and give tailored answers</span>
          </li>
        </ul>
      </div>
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

function Frame4() {
  return (
    <div className="bg-[#e2debc] h-[332px] overflow-clip relative shrink-0 w-[475px]">
      <div className="absolute h-[281.875px] left-[51px] rounded-[12px] top-[25px] w-[130.02px]" data-name="V.1 Home SF pro 3" />
      <div className="absolute h-[220px] left-[83px] top-[56px] w-[309.375px]" data-name="shelves dashboard">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgShelvesDashboard} />
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#e2dba1] h-[332px] overflow-clip relative shrink-0 w-[232px]">
      <div className="absolute h-[243.241px] left-[23px] top-[44px] w-[185px]" data-name="Choose 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgChoose1} />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#e2dba1] h-[332px] overflow-clip relative shrink-0 w-[232px]">
      <div className="absolute h-[180.092px] left-[17px] top-[76px] w-[198.101px]" data-name="Approach 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgApproach1} />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#e2debc] h-[332px] overflow-clip relative shrink-0 w-[475px]">
      <div className="absolute h-[209.298px] left-[91px] top-[61px] w-[294.297px]" data-name="content summaries 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgContentSummaries1} />
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#e2debc] h-[332px] overflow-clip relative shrink-0 w-[723px]">
      <div className="absolute h-[277.444px] left-[167px] top-[27px] w-[390.117px]" data-name="study dashboard">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgStudyDashboard} />
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-start flex flex-wrap gap-[32px_16px] items-start relative shrink-0 w-full">
      <Frame4 />
      <Frame2 />
      <Frame3 />
      <Frame1 />
      <Frame5 />
    </div>
  );
}

function Flow() {
  return (
    <div id="screens" className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[728px]" data-name="Flow">
      <Header4 />
      <Frame8 />
    </div>
  );
}

function Flow1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[728px]" data-name="Flow">
      <Flow />
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex flex-col gap-[56px] items-start relative shrink-0 w-[806px]" data-name="Body">
      <Problems />
      <Solution />
      <Research />
      <Flow1 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[112px] items-end relative shrink-0 w-[976px]">
      <Intro />
      <Body />
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative content-stretch flex items-start gap-[134px]">
      <SectionNav />
      <Frame6 />
    </div>
  );
}

export function ArchiveDetailPage() {
  return (
    <div className="bg-white relative w-full min-h-screen overflow-y-auto" data-name="Archive">
      <Frame7 />
    </div>
  );
}