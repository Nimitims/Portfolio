import svgPaths from "./svg-7ius3xgie2";

function Group() {
  return (
    <div className="relative size-full">
      <div className="absolute inset-[0_-5.9%_-7.15%_-5.9%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.19233 4.68777">
          <g id="Group 2">
            <path d="M2.09616 0L2.09616 4.375" id="Line 1" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="0.625549" />
            <path d={svgPaths.p2f2decc0} id="Vector 2" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="0.625549" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[58.33%_37.5%_12.5%_37.5%]">
      <div className="absolute inset-[0_-5.9%_-7.15%_-5.9%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.19233 4.68777">
          <g id="Group 2">
            <path d="M2.09616 0L2.09616 4.375" id="Line 1" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="0.625549" />
            <path d={svgPaths.p2f2decc0} id="Vector 2" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="0.625549" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[12.5%_37.5%]">
      <div className="absolute flex inset-[12.5%_37.5%_58.33%_37.5%] items-center justify-center">
        <div className="flex-none h-[4.375px] scale-y-[-100%] w-[3.75px]">
          <Group />
        </div>
      </div>
      <Group1 />
    </div>
  );
}

function Group2() {
  return (
    <div className="relative size-full">
      <div className="absolute inset-[0_-5.9%_-7.15%_-5.9%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.19233 4.68777">
          <g id="Group 2">
            <path d="M2.09616 0L2.09616 4.375" id="Line 1" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="0.625549" />
            <path d={svgPaths.p2f2decc0} id="Vector 2" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="0.625549" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[37.5%_12.5%]">
      <div className="absolute flex inset-[37.5%_12.5%_37.5%_58.33%] items-center justify-center">
        <div className="flex-none h-[4.375px] rotate-[90deg] scale-y-[-100%] w-[3.75px]">
          {[...Array(2).keys()].map((_, i) => (
            <Group2 key={i} />
          ))}
        </div>
      </div>
      <div className="absolute flex inset-[37.5%_58.33%_37.5%_12.5%] items-center justify-center">
        <div className="flex-none h-[4.375px] rotate-[90deg] w-[3.75px]" />
      </div>
    </div>
  );
}

export default function Arrow() {
  return (
    <div className="relative size-full" data-name="Arrow-01">
      <Group3 />
      <Group4 />
    </div>
  );
}