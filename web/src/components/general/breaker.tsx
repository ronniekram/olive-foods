import "twin.macro";

const Breaker = ({ width }: { width?: string }) => (
  <div tw="flex flex-col space-y-0.5 mx-auto" css={[width ? `width: ${width};`: `width: 100%;`]}>
    <div tw="w-full h-0.5 bg-orange-200" />
    <div tw="w-full h-0.5 bg-orange-200" />
  </div>
);

export default Breaker;
