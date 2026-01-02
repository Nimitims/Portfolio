import image_10d916d565aa1f86e9df63e404d9402972220085 from 'figma:asset/10d916d565aa1f86e9df63e404d9402972220085.png';
import image_10c9d4fa9a5d364fabef44a489a2b5921e0cf4c3 from 'figma:asset/10c9d4fa9a5d364fabef44a489a2b5921e0cf4c3.png';
import image_61c9cc9134abe23670e9f686cabcd702fe1d4a9d from 'figma:asset/61c9cc9134abe23670e9f686cabcd702fe1d4a9d.png';
import image_af91b04069cf8bfa11989f7b366a9f6b7da5336b from 'figma:asset/af91b04069cf8bfa11989f7b366a9f6b7da5336b.png';
import image_9a38459c7d83f9251d1a399351a0f7ddd4523b0c from 'figma:asset/9a38459c7d83f9251d1a399351a0f7ddd4523b0c.png';
import imgImg89916 from "figma:asset/b2ebbb46b3dbae6e9541e1aa62f33c10ed1e0c1e.png";
import imgProfilePic from "figma:asset/eb73f3e24eba982fd300b10fbcf7287b91dc9cbb.png";
import image_3b6a4c8d5ed2d850cc9bbad66ff0c6ae13c6c91a from 'figma:asset/3b6a4c8d5ed2d850cc9bbad66ff0c6ae13c6c91a.png';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import svgPaths from "../imports/svg-hkm1qd4lx2";
import imgDomePhone from "figma:asset/07b332d375a3f5c3ce9a9767399a645c5c3747e3.png";
import imgArchiveLaptop from "figma:asset/10c9d4fa9a5d364fabef44a489a2b5921e0cf4c3.png";
import imgLibrasLaptop from "figma:asset/10c9d4fa9a5d364fabef44a489a2b5921e0cf4c3.png";
import imgTheLibras from "figma:asset/83350641223abc3f2b826b1889f582e0fd2ae09f.png";
import { DraggableHeartToy } from './DraggableHeartToy';

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

function ProfileImage() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="Profile_image">
      <img 
        src={image_10d916d565aa1f86e9df63e404d9402972220085}
        alt="Profile"
        className="absolute inset-0 w-full h-full object-cover rounded-full"
      />
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
    
    // Use fallback method that works without Clipboard API
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
      
    }
    
    textarea.remove();
    
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1000);
  };

  return (
    <div 
      className="content-stretch flex gap-[-6px] items-center relative shrink-0 w-fit cursor-pointer select-none" 
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
          width: '234px',
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
      <Link to="/about-me" className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#171717] text-[18px] text-nowrap no-underline">
        About Me
      </Link>
    </div>
  );
}

function Heading() {
  const greetings = ['Hello', 'Bawo', 'Hola', 'Sannu', 'Ndewo', 'Bonjour'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % greetings.length;
          return nextIndex;
        });
        setIsTransitioning(false);
      }, 250);
    }, currentIndex === 6 ? 3000 : 1000);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div className="content-stretch flex flex-col gap-[9px] items-start not-italic relative shrink-0 w-full" data-name="Heading">
      <p 
        className="font-['Tienne:Regular',sans-serif] leading-[normal] relative shrink-0 text-[48px] text-black w-full transition-opacity duration-[250ms] ease-in-out"
        style={{ opacity: isTransitioning ? 0 : 1 }}
      >
        {greetings[currentIndex]}
      </p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#2a2a2a] text-[16px] w-full">I work at the intersection of design and engineering, blending thoughtful visual craft with solid technical foundations. I care deeply about how things look, how they’re built, and how people actually use them. Through careful details and micro-interactions, I aim to create products that feel intuitive, enjoyable, and alive.</p>
    </div>
  );
}


function DomeCard() {
  return (
    <Link to="/dome" className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[480px] no-underline cursor-pointer group">
      <div className="bg-[#E8C4C4] h-[273px] overflow-clip relative shrink-0 w-full rounded-[4px] transition-opacity duration-200 group-hover:opacity-90" data-name="Big display">
        <div className="absolute size-full">
          <img alt="Dome product showcase" className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[calc(-50%+119px)] w-[196px] h-auto object-contain rounded-[20px]" src={image_af91b04069cf8bfa11989f7b366a9f6b7da5336b} />
        </div>
      </div>
      <div className="content-stretch flex font-['Inter:Medium',sans-serif] font-medium gap-[192px] h-[20px] items-center leading-[20px] not-italic relative shrink-0 text-nowrap w-full">
        <p className="relative shrink-0 text-[#171717] text-[18px]">Dome</p>
        <p className="absolute right-0 text-[#5c5c5c] text-[16px]">Product Design</p>
      </div>
    </Link>
  );
}

// Work Card 2: Archive - Design Engineering
function ArchiveCard() {
  return (
    <Link to="/archive" className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[480px] no-underline cursor-pointer group">
      <div className="bg-[#C5B8E0] h-[273px] overflow-clip relative shrink-0 w-full rounded-[4px] flex items-center justify-center transition-opacity duration-200 group-hover:opacity-90">
        <img alt="Archive laptop view" className="w-auto h-[200px] object-contain" src={image_61c9cc9134abe23670e9f686cabcd702fe1d4a9d} />
      </div>
      <div className="content-stretch flex font-['Inter:Medium',sans-serif] font-medium gap-[192px] h-[20px] items-center leading-[20px] not-italic relative shrink-0 text-nowrap w-full">
        <p className="relative shrink-0 text-[#171717] text-[18px]">Archive</p>
        <p className="absolute right-0 text-[#5c5c5c] text-[16px]">Design Engineering</p>
      </div>
    </Link>
  );
}

// Work Card 3: Libras - Design Engineering
function LibrasCard() {
  return (
    <Link to="/libras" className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[480px] no-underline cursor-pointer group">
      <div className="bg-[#C5B8E0] h-[273px] overflow-clip relative shrink-0 w-full rounded-[4px] flex items-center justify-center transition-opacity duration-200 group-hover:opacity-90">
        <img alt="Libras laptop view" className="w-auto h-[200px] object-contain" src={imgLibrasLaptop} />
      </div>
      <div className="content-stretch flex font-['Inter:Medium',sans-serif] font-medium gap-[192px] h-[20px] items-center leading-[20px] not-italic relative shrink-0 text-nowrap w-full">
        <p className="relative shrink-0 text-[#171717] text-[18px]">Libras</p>
        <p className="absolute right-0 text-[#5c5c5c] text-[16px]">Design Engineering</p>
      </div>
    </Link>
  );
}

// Work grid rows
function WorkRow1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <DomeCard />
      <ArchiveCard />
    </div>
  );
}

function WorkRow2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <LibrasCard />
    </div>
  );
}

function Fnh() {
  return (
    <div className="content-stretch flex flex-col gap-[78px] items-start relative shrink-0 w-full" data-name="FNH">
      <Heading />
      <WorkRow1 />
      <WorkRow2 />
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

// Instagram icon - Links to Instagram profile
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

// X (Twitter) icon - Links to X profile
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

// LinkedIn icon - Links to LinkedIn profile
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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to="/colophon"
      className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0 w-[65px] no-underline"
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
    </Link>
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
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[1355px] not-italic text-[#5c5c5c] text-[14px] text-nowrap text-right top-[16px] translate-x-[-100%]"><NigeriaTimeDisplay /></p>
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

export function HomePage() {
  return (
    <div className="bg-white relative size-full" data-name="Homepage">
      <DraggableHeartToy />
      <Frame2 />
    </div>
  );
}