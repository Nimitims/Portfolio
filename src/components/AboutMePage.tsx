import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import svgPaths from "../imports/svg-tjnt6rtmgd";
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

function ProfileImage() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="Profile_image">
      <div className="relative size-full rounded-full overflow-hidden">
        <img alt="Profile" className="size-full object-cover" src={imgImg67984} />
      </div>
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
      // Silent fail - still show visual feedback
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
          width: '228px',
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

function Picture1({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 8 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.35,
        delay,
        ease: [0.4, 0, 0.2, 1]
      }}
      className="h-[190px] overflow-clip relative shrink-0 w-[149px]"
      data-name="Picture1"
    >
      <div className="absolute h-[216px] left-[-6px] top-0 w-[162px]" data-name="WhatsApp Image 2025-12-26 at 17.03.30">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgWhatsAppImage20251226At170330} />
      </div>
    </motion.div>
  );
}

function Picture2({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 8 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.35,
        delay,
        ease: [0.4, 0, 0.2, 1]
      }}
      className="h-[190px] overflow-clip relative shrink-0 w-[149px]"
      data-name="Picture 2"
    >
      <div className="absolute h-[198.667px] left-0 top-[-3.67px] w-[149px]" data-name="WhatsApp Image 2025-12-26 at 16.58.18 (1)">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgWhatsAppImage20251226At1658181} />
      </div>
    </motion.div>
  );
}

function Picture3({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 8 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.35,
        delay,
        ease: [0.4, 0, 0.2, 1]
      }}
      className="h-[190px] overflow-clip relative shrink-0 w-[149px]"
      data-name="Picture 3"
    >
      <div className="absolute h-[190px] left-[-4.11px] top-0 w-[156.222px]" data-name="WhatsApp Image 2025-12-26 at 16.58.18">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgWhatsAppImage20251226At165818} />
      </div>
    </motion.div>
  );
}

function Picture4({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 8 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.35,
        delay,
        ease: [0.4, 0, 0.2, 1]
      }}
      className="h-[190px] overflow-clip relative shrink-0 w-[149px]"
      data-name="Picture 4"
    >
      <div className="absolute h-[247.9px] left-0 top-[-0.9px] w-[192.581px]" data-name="WhatsApp Image 2025-12-26 at 17.02.22">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgWhatsAppImage20251226At170222} />
      </div>
    </motion.div>
  );
}

function Picture({ isExpanded }: { isExpanded: boolean }) {
  return (
    <AnimatePresence>
      {isExpanded && (
        <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Picture">
          <Picture1 delay={0} />
          <Picture2 delay={0.04} />
          <Picture3 delay={0.08} />
          <Picture4 delay={0.12} />
        </div>
      )}
    </AnimatePresence>
  );
}

function Introduction({ isExpanded, onToggle }: { isExpanded: boolean; onToggle: () => void }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[644px]" data-name="Introduction">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative text-[#171717] text-[18px]">
        Hi i am{' '}
        <span
          className="relative inline-block cursor-pointer leading-none"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={onToggle}
        >
          <span className="inline-block">Nimi</span>
          <svg 
            className="absolute left-0 bottom-[-2px] block pointer-events-none" 
            width="36" 
            height="1" 
            viewBox="0 0 36 1" 
            fill="none"
          >
            <line
              x1="0"
              y1="0.5"
              x2="36"
              y2="0.5"
              stroke="#5C5C5C"
              strokeWidth="1"
              strokeLinecap="square"
              strokeDasharray={isHovered ? "0" : "4 4"}
              style={{
                transition: 'stroke-dasharray 0.12s ease-out'
              }}
            />
          </svg>
        </span>
        {' '}– A design engineer
      </p>
      <Picture isExpanded={isExpanded} />
    </div>
  );
}

function Text({ isExpanded, onToggle }: { isExpanded: boolean; onToggle: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full bg-[rgba(42,42,42,0)]" data-name="Text">
      <Introduction isExpanded={isExpanded} onToggle={onToggle} />
      <div className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] min-w-full not-italic relative shrink-0 text-[#171717] text-[18px] w-[min-content]">
        <p className="mb-0 text-[rgb(42,42,42)]">{`I am someone who is obsessed about my craft, managing every detail to ensure the end user has the best `}</p>
        <p className="mb-0 text-[rgb(42,42,42)]">experience whilst using the product. I try to stay curious and experiment as much as i can, reading books, asking</p>
        <p className="mb-0 text-[rgb(42,42,42)]">questions and trying to bring things in my imagination to life. Also, when i a not obsessing over craft i am either</p>
        <p className="text-[rgb(42,42,42)]">reading on philosophy, watching movies, or hanging out with my friends.</p>
      </div>
    </div>
  );
}

function LikeText() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium gap-[6px] items-start leading-[normal] not-italic relative shrink-0 text-[#2a2a2a] text-[14px] w-full" data-name="like text">
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
      <p className="relative shrink-0 text-[#2a2a2a] w-full">{`The courage to be disliked `}</p>
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
      <p className="relative shrink-0 text-[#2a2a2a] w-full">Spirit soul and body</p>
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
      <p className="relative shrink-0 text-[#2a2a2a] w-full">Make something wonderful</p>
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
      <p className="relative shrink-0 text-[#2a2a2a] w-full">The power of habits</p>
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
      <p className="relative shrink-0 text-[#2a2a2a] w-full">Start with why</p>
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
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#5c5c5c] text-[14px] w-full">Currently reading</p>
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

function Likes() {
  return (
    <div className="content-stretch flex gap-[181px] items-start relative shrink-0" data-name="Likes">
      <LikeLine />
      <ReadLine />
    </div>
  );
}

function TextLine({ isExpanded, onToggle }: { isExpanded: boolean; onToggle: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full" data-name="Text line">
      <Text isExpanded={isExpanded} onToggle={onToggle} />
      <Likes />
    </div>
  );
}

function Words({ isExpanded, onToggle }: { isExpanded: boolean; onToggle: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[92px] items-start relative shrink-0 w-[976px]" data-name="Words">
      <Nav />
      <TextLine isExpanded={isExpanded} onToggle={onToggle} />
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

function Footer() {
  return (
    <div className="bg-[#fafafa] h-[96px] overflow-clip relative shrink-0 w-full" data-name="Footer">
      <Realize />
      <Quote />
    </div>
  );
}

function Body({ isExpanded, onToggle }: { isExpanded: boolean; onToggle: () => void }) {
  return (
    <div className="absolute content-stretch flex flex-col gap-[336px] items-center left-0 top-[96px] w-[1440px]" data-name="Body">
      <Words isExpanded={isExpanded} onToggle={onToggle} />
      <Footer />
    </div>
  );
}

export function AboutMePage() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-white relative size-full" data-name="About me page">
      <Body isExpanded={isExpanded} onToggle={handleToggle} />
    </div>
  );
}

function NigeriaTimeDisplay() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      // Get current time in Nigeria (WAT = UTC+1)
      const now = new Date();
      const nigeriaTime = new Date(now.toLocaleString('en-US', { timeZone: 'Africa/Lagos' }));
      
      let hours = nigeriaTime.getHours();
      const minutes = nigeriaTime.getMinutes();
      const seconds = nigeriaTime.getSeconds();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      
      // Convert to 12-hour format
      hours = hours % 12;
      hours = hours ? hours : 12; // 0 should be 12
      
      // Format with leading zeros
      const formattedTime = `${hours}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')} ${ampm}`;
      setTime(formattedTime);
    };

    // Update immediately
    updateTime();

    // Update every second
    const interval = setInterval(updateTime, 1000);

    // Cleanup
    return () => clearInterval(interval);
  }, []);

  return <>{time}</>;
}