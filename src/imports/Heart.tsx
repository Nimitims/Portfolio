import svgPaths from "./svg-v4ociynctp";

function VuesaxBoldHeart() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/bold/heart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="heart">
          <path d={svgPaths.p3f458d80} fill="var(--fill-0, #C40D2E)" id="Vector" />
          <g id="Vector_2" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

export default function Heart() {
  return (
    <div className="relative size-full" data-name="heart">
      <VuesaxBoldHeart />
    </div>
  );
}