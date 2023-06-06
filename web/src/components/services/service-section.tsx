import { useState, useEffect } from "react";
import Image from "next/image";
import tw, { styled } from "twin.macro";
import useMeasure from "react-use-measure";
import { useWindowSize } from "react-use";
import { useSpring, animated as a } from "react-spring";
import { FiChevronDown, FiDownload } from "react-icons/fi";

import type { ServiceProps } from "./card";
import { Wrapper } from "@/style/base";
import { Button, LinkButton } from "@/components/general/button";
import CardRow, { Background, kitCards, prepCards, mealCards, giftCards } from "@/components/services/card-row";

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
  open ? tw`bg-orange-200 text-orange-100 md:(bg-green-100 text-orange-200)` : tw`bg-green-100 text-orange-200`,
  tw`py-8 md:(pt-14 pb-0) lg:(pt-20)`,
  tw`flex items-center justify-between`,
  tw`transition duration-700 ease-in-out`,
  !open && tw`border-b border-orange-200`
]);

const H2 = tw.h2`text-3xl font-display md:(text-[56px] leading-[50px]) xl:(text-[64px] leading-[60px])`;

const Sub = tw.p`text-2xs text-grey font-sans mb-5 md:(text-base mb-7) lg:(mb-8) xl:(mb-11)`;

const Toggle = styled(a.button)`${tw`w-11 h-11 flex items-center justify-center md:(hidden)`}`;

const Detail = tw.p`text-base text-grey font-sans md:(text-lg)`;

const List = tw.ul`font-sans font-medium text-base text-grey list-outside list-disc ml-4 md:(text-lg)`;

const ImageWrap = styled.div`
  ${tw`flex rounded-2xl overflow-hidden`};
  ${tw`border border-grey`};
  ${tw`h-[10.3125rem] md:(h-[20.9375rem]) lg:(h-[25rem])`};
`;

export const prepared: SectionProps = {
  title: `Weekly Prepared Meals`,
  color: `green`,
  cards: prepCards,
  sub: `We do not use butter, but on occasion, we do use ghee. Additionally, we offer many gluten-free options each week.`,
  col1: (
    <ImageWrap tw="lg:(order-2)">
      <Image
        src="/images/services/SERVICES-002.png"
        alt="Individually packaged and pre-prepared meals"
        width={1366}
        height={2049}
        style={{ objectFit: `cover`, objectPosition: `center` }}
        loading="lazy"
        quality={100}
      />
    </ImageWrap>
  ),
  col2: (
    <div tw="flex flex-col space-y-6 lg:(order-1)">
      <Detail>
        We are passionate about crafting nourishing and inventive comfort foods that prioritize your well-being. At our core, we emphasize the use of seasonal, locally sourced and whole ingredients that serve as fuel for both body and mind.
      </Detail>
      <Detail>
        We take pride in our cooking expertise and our ability to infuse creativity into every dish we prepare. Our ultimate goal is to provide your body with the nourishment it needs to thrive, setting us apart from the rest!
      </Detail>
      <Button
        label="Sample Menu"
        icon={<FiDownload />}
        type="button"
        outline
      />
    </div>
  ),
  imgRight: true,
};

export const feasts: SectionProps = {
  title: `Family Feasts & Meal Kits`,
  sub: `We do not use butter, but on occasion, we do use ghee. Additionally, we offer many gluten-free options each week.`,
  color: `blue`,
  cards: kitCards,
  col1: (
    <ImageWrap>
      <Image
        src="/images/services/SERVICES-003.png"
        alt="Individually packaged and pre-prepared meals"
        width={1366}
        height={2049}
        style={{ objectFit: `cover`, objectPosition: `center` }}
        loading="lazy"
        quality={100}
      />
    </ImageWrap>
  ),
  col2: (
    <div tw="flex flex-col space-y-6">
      <Detail>
        Life moves fast. We know that the idea of cooking can be daunting as your day comes to a close. Let us do the work so you can slow down and enjoy a meal with your loved ones. Pick up a prepared and ready-to eat meal for up to 6 people on your way home.
      </Detail>
      <div>
        <Detail tw="font-bold">Options include:</Detail>
        <List>
          <li>Lasagna, Caesar Salad, Garlic Bread</li>
          <li>12” Quiche, side salad</li>
          <li>Seasonal Soup, Sourdough Loaf, Salad</li>
          <li>Butternut Squash Curry, Rice</li>
        </List>
      </div>
    </div>
  ),
};

export const enhance: SectionProps = {
  title: `Meal Enhancements`,
  color: `green`,
  cards: mealCards,
  col1: (
    <div>
      <Detail>
        Liquorice wafer lollipop danish biscuit. Bear claw topping jelly donut sesame snaps tiramisu powder cake. Brownie gummi bears cotton candy tootsie roll jelly. Pastry chocolate gummies macaroon toffee caramels chocolate cake caramels tiramisu.
      </Detail>
    </div>
  ),
  col2: (
    <div>
      <Detail tw="font-bold">Options include:</Detail>
      <List>
        <li>Lasagna, Caesar Salad, Garlic Bread</li>
        <li>12” Quiche, side salad</li>
        <li>Seasonal Soup, Sourdough Loaf, Salad</li>
        <li>Butternut Squash Curry, Rice</li>
      </List>
    </div>
  ),
};

export const gift: SectionProps = {
  title: `Gift a Meal`,
  color: `blue`,
  cards: giftCards,
  sub: `We do not use butter, but on occasion, we do use ghee. Additionally, we offer many gluten-free options each week.`,
  col1: (
    <ImageWrap tw="lg:(order-2)">
      <Image
        src="/images/services/SERVICES-004.png"
        alt="Individually packaged and pre-prepared meals"
        width={1366}
        height={2049}
        style={{ objectFit: `cover`, objectPosition: `center` }}
        loading="lazy"
        quality={100}
      />
    </ImageWrap>
  ),
  col2: (
    <div tw="flex flex-col space-y-6 lg:(order-1)">
      <Detail tw="lg:(text-xl)">
        Want to gift a meal to someone with a lot on their plate? Choose one of our feasts, a meal kit or inquire about a custom meal!
      </Detail>
      <LinkButton label="Contact Us" href="mailto:olivefoodsco@gmail.com" outline />
    </div>
  ),
  imgRight: true,
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
            <div tw="grid grid-cols-1 gap-y-5 md:(gap-y-7) lg:(gap-y-0 gap-x-12)" css={[imgRight ? tw`lg:(grid-cols-[47%, 45%])`: tw`lg:(grid-cols-[45%, 47%])`]}>
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
