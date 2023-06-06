import Image from "next/image";
import tw, { styled } from "twin.macro";

import { Wrapper } from "@/style/base";
import Breaker from "../general/breaker";

//! ----------> STYLES <----------
const ImageWrap = styled.div`
  ${tw`flex rounded-2xl overflow-hidden`};
  ${tw`border border-grey`};
  ${tw`h-[18rem] md:(h-[20.3125rem]) xl:([flex-shrink: 0] w-[50%])`};
`;

const P = styled.p`
  ${tw`text-grey font-sans font-medium`};
  ${tw`text-sm md:(text-lg) lg:(text-xl) xl:(text-2xl) 2xl:(text-[30px] font-normal)`};
`;

//! ----------> COMPONENTS <----------
const CateringHero = () => {
  return (
    <div tw="w-full bg-green-100 py-12 md:(pt-16 pb-4) lg:(pt-20 pb-6) 2xl:(pt-24 pb-9)">
      <Wrapper tw="flex flex-col space-y-8 md:(space-y-10 pb-4) xl:(space-y-14) 2xl:(space-y-16)">
        <h1 tw="font-display text-orange-200 text-[56px] leading-[50px] md:(text-7xl) xl:(text-8xl)">Catering</h1>
        <div tw="flex flex-col space-y-6 lg:(flex-row space-y-0 space-x-8) xl:(space-x-10) 2xl:(space-x-14)">
          <P>
            We take a collaborative and customizable approach to your event, ensuring that every detail is tailored to your needs. Whether you have specific dietary restrictions or prefer a full creative menu, we've got you covered.
          </P>
          <ImageWrap>
            <Image
              src="/images/catering/CATERING-001.png"
              alt="Three hands cheerings glasses over a decorated table"
              width={2048}
              height={1366}
              style={{ objectFit: `cover`, objectPosition: `center` }}
              loading="eager"
              quality={100}
            />
          </ImageWrap>
        </div>
        <Breaker />
      </Wrapper>
    </div>
  );
};

export default CateringHero;

