import Image from "next/image";
import tw, { styled } from "twin.macro";

import { Wrapper } from "@/style/base";
import Breaker from "../general/breaker";
import type { ServicesPage } from "lib/sanity.queries";

//! ----------> TYPES <----------
type HowItWorks = Pick<ServicesPage, `howItWorks` | `hero`>;

type Header = Pick<ServicesPage, `header`> & HowItWorks;

//! ----------> STYLES <----------
const ImageWrap = styled.div`
  ${tw`flex rounded-2xl overflow-hidden`};
  ${tw`border border-grey`};
  ${tw`h-[20.3125rem] lg:(h-[24.25rem] [flex-shrink: 0]) xl:(h-[28rem])`};
  ${tw`lg:(order-[-1])`};
`;

const Content = styled.div`
  ${tw`grid grid-cols-1 gap-y-8`};
  ${tw`lg:(grid-cols-[45%, auto] gap-y-0 gap-x-8)`};
  ${tw`xl:(grid-cols-[50.5%, auto] gap-x-16)`};
  ${tw`2xl:(grid-cols-[52%, auto])`};
`;

const HowContainer = styled.div`
  ${tw`py-8 md:(py-10) lg:(py-12) xl:(py-16) 2xl:(py-20)`};
  ${tw`grid grid-cols-1 gap-y-8`};
  ${tw`md:(grid-cols-[47.5%, auto] gap-y-0 gap-x-8)`};
  ${tw`lg:(gap-x-14)`};
  ${tw`xl:(grid-cols-[46%, auto] gap-x-20)`};
  ${tw`2xl:(grid-cols-[43%, auto] gap-x-28)`};
`;

const P = tw.p`text-grey text-sm font-sans font-medium md:(text-lg) xl:(text-xl) 2xl:(text-2xl)`;

//! ----------> COMPONENTS <----------
const HowItWorks = ({ howItWorks, hero }: HowItWorks) => {
  const { list, subtext } = howItWorks;
  return (
    <Wrapper tw="pt-6">
      <Breaker />
      <HowContainer>
        <div tw="font-sans font-medium text-grey flex flex-col justify-center items-end space-y-4 md:(space-y-2.5) lg:(text-xl space-y-6) xl:(text-2xl)">
          {hero.map((text, i) => (
            <p key={`hero-${i}`} tw="self-start">
              {text}
            </p>
          ))}
        </div>

        <div tw="flex flex-col font-sans text-grey space-y-4 xl:(space-y-5) 2xl:(space-y-6)">
          <h3 tw="font-display text-orange-200 text-2xl md:(text-3xl) lg:(text-4xl) xl:(text-5xl)">
            How It Works
          </h3>
          <ul tw="flex flex-col space-y-2 list-disc list-outside text-sm ml-5 md:(ml-4 pr-4) lg:(space-y-2 text-lg) xl:(text-xl) 2xl:(text-2xl pr-20 space-y-2.5)">
            {list.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          {subtext.map((sub) => (
            <p key={sub} tw="text-xs lg:(text-sm) xl:(text-base)">
              {sub}
            </p>
          ))}
        </div>
      </HowContainer>
      <Breaker />
    </Wrapper>
  );
};

const ServiceHero = ({ howItWorks, hero, header }: Header) => {
  return (
    <div tw="w-full bg-green-100 pt-12 md:(pt-16) lg:(pt-20) 2xl:(pt-24)">
      <Wrapper tw="flex flex-col space-y-8 md:(space-y-10) xl:(space-y-14)">
        <h1 tw="font-display text-orange-200 text-[56px] leading-[50px] md:(text-7xl) xl:(text-8xl)">
          Meal Services
        </h1>
        <Content>
          <div tw="flex flex-col space-y-3 md:(space-y-4)">
            {header.map((text, i) => (
              <P key={`header-${i}`}>{text}</P>
            ))}
            <p tw="font-sans text-grey text-2xs md:(text-xs) lg:(text-base)">
              We do not use butter, but on occasion, we do use ghee. We offer many gluten-free
              options each week.
            </p>
          </div>
          <ImageWrap>
            <Image
              src="/images/services/SERVICES-001.webp"
              alt="Glass dishes filled with fish, rice, sauce and green beans. Each item is in a separate container. The photo is from an overhead view with a white background."
              width={1366}
              height={2049}
              style={{ objectFit: `cover`, objectPosition: `center` }}
              loading="eager"
              priority
              quality={100}
            />
          </ImageWrap>
        </Content>

        <p tw="text-grey font-sans font-bold text-xs md:(text-sm pb-4) lg:(text-base) xl:(text-lg) 2xl:(text-xl)">
          All meal services require a 72-hour advance notice. Orders should be submitted by email:{" "}
          <a
            href="mailto:olivefoods@gmail.com"
            tw="text-orange-200 transition duration-300 ease-in-out hover:(text-orange-300)"
          >
            olivefoods@gmail.com
          </a>
        </p>
      </Wrapper>
      <HowItWorks howItWorks={howItWorks} hero={hero} />
    </div>
  );
};

export default ServiceHero;
