/* eslint-disable no-secrets/no-secrets */
import { useState, useEffect } from "react";
import Image from "next/image";
import tw, { styled } from "twin.macro";
import useMeasure from "react-use-measure";
import { useWindowSize } from "react-use";
import { useSpring, animated as a } from "react-spring";
import { FiChevronDown } from "react-icons/fi";
import AnchorLink from "react-anchor-link-smooth-scroll-v2";

import type { ServiceProps } from "./card";
import { Wrapper } from "@/style/base";
import { LinkButton } from "@/components/general/button";
import CardRow, {
  Background,
  kitCards,
  prepCards,
  mealCards,
  giftCards,
} from "@/components/services/card-row";

//! ----------> TYPES <----------
export type SectionProps = {
  title: string;
  col1: JSX.Element;
  col2: JSX.Element;
  color: Background;
  cards: ServiceProps[];
  sub?: string;
  imgRight?: boolean;
};

//! ----------> STYLES <----------
const Title = styled(Wrapper)(({ open }: { open: boolean }) => [
  open
    ? tw`bg-orange-200 text-orange-100 md:(bg-green-100 text-orange-200)`
    : tw`bg-green-100 text-orange-200`,
  tw`py-8 md:(pt-14 pb-0) lg:(pt-20)`,
  tw`flex items-center justify-between`,
  tw`transition duration-700 ease-in-out`,
  !open && tw`border-b border-orange-200`,
]);

const H2 = tw.h2`text-3xl font-display md:(text-[56px] leading-[50px]) xl:(text-[64px] leading-[60px])`;

const Sub = tw.p`text-2xs text-grey font-sans mb-5 md:(text-base mb-7) lg:(mb-8) xl:(mb-11)`;

const Toggle = styled(a.button)`
  ${tw`w-11 h-11 flex items-center justify-center md:(hidden)`}
`;

const Detail = tw.p`text-lg text-grey font-sans font-medium md:(text-lg) xl:(text-xl)`;

const List = tw.ul`font-sans font-medium text-base text-grey list-outside list-disc ml-4 md:(text-lg)`;

const Subscribe = tw(
  AnchorLink
)`font-bold text-orange-200 transition duration-300 ease-in-out hover:(text-orange-300)`;

const ImageWrap = styled.div`
  ${tw`flex rounded-2xl overflow-hidden`};
  ${tw`border border-grey`};
  ${tw`h-[10.3125rem] md:(h-[20.9375rem]) lg:(h-[25rem])`};
`;

export const prepared: SectionProps = {
  title: `Weekly Prepared Meals`,
  color: `green`,
  cards: prepCards,
  col1: (
    <ImageWrap tw="lg:(order-2)">
      <Image
        src="/images/services/SERVICES-002.webp"
        alt="Individually packaged and pre-prepared meals"
        width={1366}
        height={2049}
        placeholder="blur"
        blurDataURL="LPJk4DRRtk%2S5NHoNM_~oRiadX8"
        style={{ objectFit: `cover`, objectPosition: `center` }}
        loading="lazy"
        quality={100}
      />
    </ImageWrap>
  ),
  col2: (
    <div tw="flex flex-col space-y-6 lg:(order-1 space-y-3 justify-center)">
      <Detail>These meals are individually packed and ready to eat!</Detail>
      <div>
        <Detail tw="font-bold mb-1">We offer a rotating weekly menu with options like:</Detail>
        <List>
          <li>Power bowl (with grains)</li>
          <li>Power bowl (Paleo)</li>
          <li>Breakfast</li>
          <li>Pasta or noodles</li>
          <li>Seasonal soup</li>
          <li>Seasonal Entreé</li>
        </List>
      </div>
      <Detail>
        <Subscribe href="#subscribe">Subscribe</Subscribe> to our emails to get a menu straight to
        your inbox on Sunday mornings!
      </Detail>
    </div>
  ),
  imgRight: true,
};

export const feasts: SectionProps = {
  title: `Family Feasts`,
  color: `blue`,
  cards: kitCards,
  col1: (
    <ImageWrap>
      <Image
        src="/images/services/SERVICES-003.webp"
        alt="Individually packaged and pre-prepared meals"
        width={1366}
        height={2049}
        placeholder="blur"
        blurDataURL="LdOWWu%L.9W?smogo#Ri_NNGIUsl"
        style={{ objectFit: `cover`, objectPosition: `center` }}
        loading="lazy"
        quality={100}
      />
    </ImageWrap>
  ),
  col2: (
    <div tw="flex flex-col space-y-6">
      <Detail>
        Life moves fast. We know that the idea of cooking can be daunting as your day comes to a
        close. Let us do the work so you can slow down and enjoy a meal with your loved ones. Pick
        up a prepared and ready-to eat meal for up to 6 people on your way home.
      </Detail>
      <Detail>Family feasts include protein, vegetables, starch/grain, sauce and garnishes.</Detail>
      <div>
        <Detail tw="font-bold mb-1">Pricing:</Detail>
        <List>
          <li>Vegetarian, soup or salad: $60+</li>
          <li>Land proteins: $100+</li>
          <li>Sea Proteins: $150+</li>
        </List>
      </div>
      <Detail>
        <Subscribe href="#subscribe">Subscribe</Subscribe> to our emails to get a menu straight to
        your inbox on Sunday mornings!
      </Detail>
    </div>
  ),
};

export const enhance: SectionProps = {
  title: `Provisions`,
  color: `green`,
  cards: mealCards,
  col1: (
    <div tw="flex flex-col justify-center space-y-4 xl:(space-y-6)">
      <Detail tw="md:(text-xl) xl:(text-2xl)">
        We also offer an a là carte menu of sauces, breads, pickles and other meal enhancers.
      </Detail>
      <Detail tw="md:(text-xl) xl:(text-2xl)">
        <Subscribe href="#subscribe">Subscribe</Subscribe> to our emails to get a menu straight to
        your inbox on Sunday mornings!
      </Detail>
    </div>
  ),
  col2: (
    <ImageWrap>
      <Image
        src="/images/services/provisions.webp"
        alt="A woman in a kitchen, leaning on a table to write a list"
        width={715}
        height={477}
        placeholder="blur"
        blurDataURL="LGIp@vTL0i~o01%1tQRQ00MxxsIU"
        style={{ objectFit: `cover`, objectPosition: `bottom` }}
        loading="lazy"
        quality={100}
      />
    </ImageWrap>
  ),
  imgRight: true,
};

export const gift: SectionProps = {
  title: `Gift a Meal`,
  color: `blue`,
  cards: giftCards,
  col1: (
    <ImageWrap tw="lg:(order-[-1])">
      <Image
        src="/images/services/SERVICES-004.webp"
        alt="Individually packaged and pre-prepared meals"
        width={1366}
        height={2049}
        placeholder="blur"
        blurDataURL="LoQJ1As.kYS6x]WBjYoe%%X8nhs+"
        style={{ objectFit: `cover`, objectPosition: `center` }}
        loading="lazy"
        quality={100}
      />
    </ImageWrap>
  ),
  col2: (
    <div tw="flex flex-col space-y-6 justify-center lg:(order-1)">
      <Detail tw="md:(text-xl) lg:(text-2xl) 2xl:(text-[28px] leading-[40px])">
        Want to gift a meal to someone with a lot on their plate? Choose one of our feasts, a meal
        kit or inquire about a custom meal!
      </Detail>
      <LinkButton label="Contact Us" href="mailto:olivefoodsco@gmail.com" outline />
    </div>
  ),
  imgRight: false,
};

//! ----------> COMPONENTS <----------
const ServiceSection = ({ title, sub, col1, col2, imgRight, color, cards }: SectionProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const { width } = useWindowSize();
  const [ref, bounds] = useMeasure();

  const toggle = () => setOpen(!open);

  const heightSpring = useSpring({
    height: open ? bounds.height : 0,
  });

  const rotateSpring = useSpring({
    transform: open ? `rotate(180deg)` : `rotate(0deg)`,
  });

  useEffect(() => {
    if (width > 375) {
      setOpen(true);
    }
  }, [width]);

  return (
    <>
      <Title open={open}>
        <H2> {title} </H2>
        <Toggle style={rotateSpring} onClick={toggle}>
          <FiChevronDown size={36} strokeWidth={2} />
        </Toggle>
      </Title>
      <a.div tw="w-full bg-green-100 overflow-hidden" style={heightSpring}>
        <div ref={ref}>
          <Wrapper tw="py-8 md:(pt-4 pb-24)">
            <Sub>{sub}</Sub>
            <div
              tw="grid grid-cols-1 gap-y-5 md:(gap-y-7) lg:(gap-y-0 gap-x-12)"
              css={[
                imgRight
                  ? tw`lg:(grid-cols-[47%, auto]) xl:(grid-cols-[45%, auto]) 2xl:(grid-cols-[41%, auto] gap-x-24)`
                  : tw`lg:(grid-cols-[45%, auto]) xl:(grid-cols-[47%, auto]) 2xl:(grid-cols-[51%, auto] gap-x-20)`,
              ]}
            >
              {col1}
              {col2}
            </div>
          </Wrapper>

          <CardRow color={color} cards={cards} />
        </div>
      </a.div>
    </>
  );
};

export default ServiceSection;
