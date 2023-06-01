import tw, { styled } from "twin.macro";

import ServiceCard, { ServiceProps } from "./card";

//! ----------> TYPES <----------
type Props = {
  cards: ServiceProps[];
  color: Background;
};

const backgrounds = {
  blue: tw`bg-blue-200`,
  green: tw`bg-green-300`,
  orange: tw`bg-orange-200`,
};

type Background = keyof typeof backgrounds;

//! ----------> HELPERS <----------
export const prepCards: ServiceProps[] = [
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
];

export const kitCards: ServiceProps[] = [
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
];

export const mealCards: ServiceProps[] = [
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
];

export const giftCards: ServiceProps[] = [
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
];

//! ----------> STYLES <----------
const Row = styled.div`
  ${tw`w-full max-w-[86rem] mx-auto`};
  ${tw`px-[5.3%] py-16 md:(px-[5.2%] py-20) xl:(py-24) 2xl:(px-0)`};
  ${tw`grid grid-cols-1 gap-y-4 lg:(grid-cols-3 gap-y-0 gap-x-4) xl:(gap-x-6)`};
`;

//! ----------> COMPONENTS <----------
const CardRow = ({ cards, color }: Props) => {
  return (
    <section css={[backgrounds[color]]}>
      <Row>
        {cards.map((card) => (
          <ServiceCard key={card.title} title={card.title} sub={card.sub} color={card.color} icon={card.icon} />
        ))}
      </Row>
    </section>
  );
};

export default CardRow;
