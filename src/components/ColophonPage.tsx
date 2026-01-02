import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import svgPaths from "../imports/svg-yx51g1hy7j";

function NigeriaTimeDisplay() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      
      const now = new Date();
      const nigeriaTime = new Date(now.toLocaleString('en-US', { timeZone: 'Africa/Lagos' }));
      
      let hours = nigeriaTime.getHours();
      const minutes = nigeriaTime.getMinutes();
      const seconds = nigeriaTime.getSeconds();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      
      
      hours = hours % 12;
      hours = hours ? hours : 12; 
      
    
      const formattedTime = `${hours}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')} ${ampm}`;
      setTime(formattedTime);
    };

    
    updateTime();

    
    const interval = setInterval(updateTime, 1000);

    
    return () => clearInterval(interval);
  }, []);

  return <>{time}</>;
}


function Frame9() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to="/"
      className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[43px] no-underline"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#5c5c5c] text-[18px] w-full">Back</p>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43 1">
            <line
              id="Line 10"
              stroke={isHovered ? '#000000' : '#5C5C5C'}
              strokeDasharray={isHovered ? '0' : '2 2'}
              x2="43"
              y1="0.5"
              y2="0.5"
              style={{ transition: 'stroke 120ms ease-out, stroke-dasharray 120ms ease-out' }}
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}

function Frame1() {
  return (
    <div className="bg-black h-[190px] overflow-clip relative shrink-0 w-full">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[309px] not-italic text-[24px] text-nowrap text-white top-[129px]">INTER</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame1 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[rgb(42,42,42)] text-[16px] w-full">{`Inter is a very popular typeface, but, fun fact i don't like inter i feel like its ugly. I picked it to challenge myself. Did i do a good job?`}</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[rgb(92,92,92)] text-[18px] w-full">Typography</p>
      <Frame10 />
    </div>
  );
}


function Frame2() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href="https://www.fayeseun.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[172.003px] no-underline cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[rgb(42,42,42)] text-[18px] w-full">Adefaye Oluwaseun</p>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0] bg-[rgba(92,92,92,0)]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 172.003 1">
            <line
              id="Line 6"
              stroke={isHovered ? '#000000' : '#5C5C5C'}
              strokeDasharray={isHovered ? '0' : '2 2'}
              x2="172.003"
              y1="0.5"
              y2="0.5"
              style={{ transition: 'stroke 120ms ease-out, stroke-dasharray 120ms ease-out' }}
            />
          </svg>
        </div>
      </div>
    </a>
  );
}


function Frame3() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href="https://aydahnizzy.framer.website/"
      target="_blank"
      rel="noopener noreferrer"
      className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[98.005px] no-underline cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[rgb(42,42,42)] text-[18px] w-full">aydahnizzy</p>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0] bg-[rgba(92,92,92,0)]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 98.0051 1">
            <line
              id="Line 7"
              stroke={isHovered ? '#000000' : '#5C5C5C'}
              strokeDasharray={isHovered ? '0' : '2 2'}
              x2="98.0051"
              y1="0.5"
              y2="0.5"
              style={{ transition: 'stroke 120ms ease-out, stroke-dasharray 120ms ease-out' }}
            />
          </svg>
        </div>
      </div>
    </a>
  );
}


function Frame4() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href="https://shatermt.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[129px] no-underline cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[rgb(42,42,42)] text-[18px] w-full">Shater Tsavsar</p>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 129 1">
            <line
              id="Line 8"
              stroke={isHovered ? '#000000' : '#5C5C5C'}
              strokeDasharray={isHovered ? '0' : '2 2'}
              x2="129"
              y1="0.5"
              y2="0.5"
              style={{ transition: 'stroke 120ms ease-out, stroke-dasharray 120ms ease-out' }}
            />
          </svg>
        </div>
      </div>
    </a>
  );
}


function Frame5() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href="https://www.beingfemi.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[157px] no-underline cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[rgb(42,42,42)] text-[18px] w-full">Oluwafemi Soetan</p>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0] bg-[rgba(92,92,92,0)]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 157 1">
            <line
              id="Line 9"
              stroke={isHovered ? '#000000' : '#5C5C5C'}
              strokeDasharray={isHovered ? '0' : '2 2'}
              x2="157"
              y1="0.5"
              y2="0.5"
              style={{ transition: 'stroke 120ms ease-out, stroke-dasharray 120ms ease-out' }}
            />
          </svg>
        </div>
      </div>
    </a>
  );
}


function Frame6() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href="https://www.rachelchen.tech/"
      target="_blank"
      rel="noopener noreferrer"
      className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[112px] no-underline cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[rgb(42,42,42)] text-[18px] w-full">Rachel Chen</p>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0] bg-[rgba(92,92,92,0)]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 112 1">
            <line
              id="Line 9"
              stroke={isHovered ? '#000000' : '#5C5C5C'}
              strokeDasharray={isHovered ? '0' : '2 2'}
              x2="112"
              y1="0.5"
              y2="0.5"
              style={{ transition: 'stroke 120ms ease-out, stroke-dasharray 120ms ease-out' }}
            />
          </svg>
        </div>
      </div>
    </a>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame2 />
      <Frame3 />
      <Frame4 />
      <Frame5 />
      <Frame6 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[#2a2a2a] text-[16px] w-full">
        These guys helped me make sense of the ideas in my head, they gave me template and guidelines to run with.
      </p>
      <Frame15 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[rgb(92,92,92)] text-[18px] w-full">Inspiration</p>
      <Frame7 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[412.003px]">
      <Frame11 />
      <Frame8 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0">
      <Frame9 />
      <Frame12 />
    </div>
  );
}


function SocialIcons() {
  return (
    <a 
      href="https://www.instagram.com/nimitims/" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Instagram profile"
      className="relative shrink-0 size-[20px] cursor-pointer transition-opacity hover:opacity-70"
      data-name="Social Icons"
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Social Icons">
          <path d={svgPaths.p38deab00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </a>
  );
}


function SocialIcons1() {
  return (
    <a 
      href="https://x.com/Nimitimis" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="X profile"
      className="relative shrink-0 size-[20px] cursor-pointer transition-opacity hover:opacity-70"
      data-name="Social Icons"
    >
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
    </a>
  );
}


function SocialIcons2() {
  return (
    <a 
      href="https://www.linkedin.com/in/oloyede-oluwalonimi-2a1088252/" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="LinkedIn profile"
      className="relative shrink-0 size-[20px] cursor-pointer transition-opacity hover:opacity-70"
      data-name="Social Icons"
    >
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
    </a>
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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0 w-[51px] cursor-pointer" 
      data-name="Archive"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#5c5c5c] text-[14px] w-full">Archive</p>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 51 1">
            <line 
              id="Line 4" 
              stroke={isHovered ? '#000000' : '#5C5C5C'}
              strokeDasharray={isHovered ? '0' : '2 2'}
              x2="51" 
              y1="0.5" 
              y2="0.5"
              style={{ transition: 'stroke 120ms ease-out, stroke-dasharray 120ms ease-out' }}
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Colophon() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0 w-[65px] cursor-pointer" 
      data-name="Colophon"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#5c5c5c] text-[14px] w-full">Colophon</p>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 65 1">
            <line 
              id="Line 5" 
              stroke={isHovered ? '#000000' : '#5C5C5C'}
              strokeDasharray={isHovered ? '0' : '2 2'}
              x2="65" 
              y1="0.5" 
              y2="0.5"
              style={{ transition: 'stroke 120ms ease-out, stroke-dasharray 120ms ease-out' }}
            />
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
      <p className="leading-[normal] relative shrink-0 w-full"><NigeriaTimeDisplay /></p>
      <p className="leading-[normal] relative shrink-0 w-full">
        <span>{`To live is Christ to die is gain - `}</span>
        <span className="font-['Inter:Medium_Italic',sans-serif] font-medium italic">Philippians 1:21</span>
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#fafafa] h-[96px] overflow-clip relative shrink-0 w-full">
      <Realize />
      <Quote />
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[112px] items-center justify-center left-0 top-[87px] w-[1440px]">
      <Frame13 />
      <Frame />
    </div>
  );
}

export function ColophonPage() {
  return (
    <div className="bg-white relative size-full" data-name="Colophon">
      <Frame14 />
    </div>
  );
}