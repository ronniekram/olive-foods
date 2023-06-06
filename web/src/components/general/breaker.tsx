import "twin.macro";

const Breaker = ({ width }: { width?: string }) => (
  <div tw="flex flex-col space-y-1 mx-auto xl:(space-y-1.5)" css={[width ? `width: ${width};`: `width: 100%;`]}>
    <div tw="w-full h-px bg-orange-200 xl:(h-0.5)" />
    <div tw="w-full h-px bg-orange-200 xl:(h-0.5)" />
  </div>
);

export default Breaker;
