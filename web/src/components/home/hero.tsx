import tw, { styled } from "twin.macro";
import { useTrail, animated as a } from "react-spring";

import { Wrapper as W } from "@/style/base";

//! ----------> STYLES <----------
const Wrapper = styled(W)`
  ${tw`flex flex-col space-y-8`};
  ${tw`md:(flex-row space-y-0 justify-between items-center)`};
`;

const H3 = styled.h3`
  ${tw`tracking-[1px]`};
  ${tw`text-3xl text-grey font-display`};
  ${tw`lg:(text-4xl) xl:(text-6xl) 2xl:(text-7xl)`};
`;

//! ----------> COMPONENTS <----------
const Hero = () => {
  return (
    <div tw="w-full bg-green-100 pt-10 pb-12 md:(pt-12 pb-10) xl:(pt-20 pb-24)">
      <Wrapper>
        <div tw="flex flex-col space-y-3 xl:(space-y-8) 2xl:(space-y-10)">
          <H3>We love food.</H3>
          <H3>You love food.</H3>
          <H3 tw="text-5xl lg:(text-5xl) xl:(text-[72px]) 2xl:(text-[80px])">We <span tw="text-orange-200">olive</span> food.</H3>
        </div>
        <div tw="text-grey font-sans md:(w-[46%])">
          <h2 tw="font-bold mb-2 text-base md:(mb-3) lg:(text-xl) xl:(text-[28px]) 2xl:(text-3xl mb-8)">A premier Twin Cities boutique caterer</h2>
          <p tw="text-sm lg:(text-base) xl:(text-xl) 2xl:(text-2xl)">We're passionate about crafting exceptional food and memorable experiences. From the planning stages to event day decor, <span tw="font-bold text-orange-200">let us help make your next event a success</span>.</p>
        </div>
      </Wrapper>
    </div>
  );
};

export default Hero;
