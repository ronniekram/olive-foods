import Image from "next/image";
import tw, { styled } from "twin.macro";
import AnchorLink from "react-anchor-link-smooth-scroll-v2";

import type { ServiceIcon } from "./icons";
import { LinkButton } from "../general/button";

//! ----------> TYPES <----------
const backgrounds = {
  blue: tw`bg-blue-200`,
  green: tw`bg-green-300`,
  orange: tw`bg-orange-200`,
};

export type Background = keyof typeof backgrounds;

const colors = {
  green: tw`text-green-500 border-green-500`,
  blue: tw`text-blue-300 border-blue-300`,
  orange: tw`text-orange-300 border-orange-300`,
};

export type Color = keyof typeof colors;

export type SectionDetail = {
  title: string;
  color: Background;
  image: JSX.Element;
  imgRight?: boolean;
};

export type ServiceSection = `weekly` | `feasts` | `provisions` | `gift`;

export type ServiceCard = {
  title: string;
  sub?: string;
  color: Color;
  icon: ServiceIcon;
};

export type Weekly = {
  description: string;
  options: string[];
};

export type Feasts = {
  description: string[];
  pricing: {
    type: string;
    cost: number;
  }[];
};

//! ----------> STYLES <----------
const ImageWrap = styled.div`
  ${tw`flex rounded-2xl overflow-hidden`};
  ${tw`border border-grey`};
  ${tw`w-full`};
  ${tw`h-[12rem] sm:(h-[16.9375rem]) lg:(h-[31.3125rem])`};
`;

export const Detail = tw.p`text-lg text-grey font-sans font-medium md:(text-lg) xl:(text-xl)`;

const Subscribe = tw(
  AnchorLink
)`font-semi md:(font-bold) text-orange-200 transition duration-300 ease-in-out hover:(text-blue-200)`;

const List = tw.ul`font-sans font-medium text-base text-grey list-outside list-disc ml-4 md:(text-lg) 2xl:(text-xl ml-8)`;

//! ----------> DATA <----------
export const cards: Record<ServiceSection, ServiceCard[]> = {
  weekly: [
    {
      title: `Delivered`,
      sub: `Tuesdays & Fridays`,
      color: `green`,
      icon: `basket`,
    },
    {
      title: `Customizable`,
      sub: `Upon request`,
      color: `green`,
      icon: `book`,
    },
    {
      title: `Dietary restrictions?`,
      sub: `No problem. Just let us know!`,
      color: `green`,
      icon: `flour`,
    },
  ],
  feasts: [
    {
      title: `Prep free`,
      color: `blue`,
      icon: `apron`,
    },
    {
      title: `Mess free`,
      color: `blue`,
      icon: `plates`,
    },
    {
      title: `Stress free`,
      color: `blue`,
      icon: `thyme`,
    },
  ],
  provisions: [
    {
      title: `Fresh Sauces`,
      color: `green`,
      icon: `jar`,
    },
    {
      title: `Sourdough Bread`,
      sub: `Fresh-baked`,
      color: `green`,
      icon: `bread`,
    },
    {
      title: `Pickles & Ferments`,
      color: `green`,
      icon: `fridge`,
    },
  ],
  gift: [
    {
      title: `Fresh or frozen`,
      color: `blue`,
      icon: `bag`,
    },
    {
      title: `Customizable`,
      sub: `Upon request`,
      color: `blue`,
      icon: `book`,
    },
    {
      title: `Greeting card included`,
      color: `blue`,
      icon: `card`,
    },
  ],
};

export const sectionDetails: Record<ServiceSection, SectionDetail> = {
  weekly: {
    title: `Weekly Prepared Meals`,
    color: `green`,
    image: (
      <ImageWrap tw="lg:(order-2)">
        <Image
          src="/images/services/SERVICES-002.webp"
          alt="Individually packaged and pre-prepared meals"
          width={1366}
          height={2049}
          style={{ objectFit: `cover`, objectPosition: `center` }}
          loading="lazy"
          quality={100}
        />
      </ImageWrap>
    ),
    imgRight: true,
  },
  feasts: {
    title: `Family Feasts`,
    color: `blue`,
    image: (
      <ImageWrap tw="lg:(order-[-1])">
        <Image
          src="/images/services/SERVICES-003.webp"
          alt="Individually packaged and pre-prepared meals"
          width={1366}
          height={2049}
          style={{ objectFit: `cover`, objectPosition: `center` }}
          loading="lazy"
          quality={100}
        />
      </ImageWrap>
    ),
  },
  provisions: {
    title: `Provisions`,
    color: `green`,
    image: (
      <ImageWrap tw="lg:(order-2)">
        <Image
          src="/images/services/provisions.webp"
          alt="A woman in a kitchen, leaning on a table to write a list"
          width={715}
          height={477}
          style={{ objectFit: `cover`, objectPosition: `bottom` }}
          loading="lazy"
          quality={100}
        />
      </ImageWrap>
    ),
    imgRight: true,
  },
  gift: {
    title: `Gift a Meal`,
    color: `blue`,
    image: (
      <ImageWrap tw="lg:(order-[-1])">
        <Image
          src="/images/services/SERVICES-004.webp"
          alt="Individually packaged and pre-prepared meals"
          width={1366}
          height={2049}
          style={{ objectFit: `cover`, objectPosition: `center` }}
          loading="lazy"
          quality={100}
        />
      </ImageWrap>
    ),
  },
};

//! ----------> COMPONENTS <----------
export const WeeklySection = ({ description, options }: Weekly) => (
  <div tw="flex flex-col space-y-6 lg:(order-1 space-y-6 justify-center) 2xl:(pr-0)">
    <Detail tw="2xl:(text-2xl)">{description}</Detail>
    <div>
      <Detail tw="font-semi mb-1.5">We offer a rotating weekly menu with options like:</Detail>
      <List>
        {options.map((opt) => (
          <li key={opt} tw="font-normal">
            {opt}
          </li>
        ))}
      </List>
    </div>
    <Detail tw="text-sm md:(text-base) lg:(text-lg) xl:(text-xl)">
      <Subscribe href="#subscribe">Subscribe</Subscribe> to our emails to get a menu straight to
      your inbox on Sunday mornings!
    </Detail>
  </div>
);

export const FeastsSection = ({ description, pricing }: Feasts) => (
  <div tw="flex flex-col space-y-6 lg:(order-2)">
    {description.map((x) => (
      <Detail key={x}>{x}</Detail>
    ))}
    <div>
      <Detail tw="font-semi md:(font-bold) mb-1">Pricing:</Detail>
      <List>
        {pricing.map((option) => (
          <li key={option.type}>
            {option.type} ${option.cost}+
          </li>
        ))}
      </List>
    </div>
    <Detail tw="text-sm md:(text-base) lg:(text-lg) xl:(text-xl)">
      <Subscribe href="#subscribe">Subscribe</Subscribe> to our emails to get a menu straight to
      your inbox on Sunday mornings!
    </Detail>
  </div>
);

export const ProvisionsSection = ({ provisions }: { provisions: string }) => (
  <div tw="flex flex-col justify-center space-y-4 lg:(order-1) xl:(space-y-12)">
    <Detail tw="md:(text-xl) xl:(text-2xl) 2xl:(text-3xl)">{provisions}</Detail>
    <Detail tw="text-sm md:(text-base) lg:(text-lg) xl:(text-xl)">
      <Subscribe href="#subscribe">Subscribe</Subscribe> to our emails to get a menu straight to
      your inbox on Sunday mornings!
    </Detail>
  </div>
);

export const GiftsSection = ({ gift }: { gift: string }) => (
  <div tw="flex flex-col space-y-6 justify-center lg:(order-1)">
    <Detail tw="md:(text-xl) lg:(text-2xl) 2xl:(text-[28px] leading-[40px])">{gift}</Detail>
    <LinkButton label="Contact Us" href="mailto:olivefoodsco@gmail.com" outline />
  </div>
);
