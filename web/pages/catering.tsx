/* eslint-disable react/jsx-key */
import { NextSeo } from "next-seo";
import tw, { styled } from "twin.macro";

import { Wrapper } from "@/style/base";
import CateringHero from "@/components/catering/hero";
import CateringSection from "@/components/catering/section";
import CateringCTA from "@/components/catering/cta";
import config from "../next-seo.config";

//! ----------> TYPES <----------
const events = {
  title: `Special Events`,
  detail: `Bacon ipsum dolor amet picanha do voluptate tenderloin chuck, irure incididunt bresaola ham hock porchetta flank ham meatloaf officia spare ribs. Tenderloin cillum in incididunt, salami ribeye ut in. Ut ex jowl strip steak pancetta. Porchetta jowl duis eiusmod. Spare ribs kielbasa salami, esse shank prosciutto swine exercitation.`,
  image: `/images/catering/CATERING-002.png`,
  items: [
    {
      title: `Lunches`,
      detail: `Everyone loves smelly cheese pecorino. Cheese and wine babybel say cheese rubber cheese cottage cheese blue castello fromage frais cheese and biscuits. Jarlsberg cheese strings mozzarella manchego monterey jack pecorino cheese on toast jarlsberg. Fromage roquefort everyone loves fondue blue castello red leicester swiss st. agur blue cheese. Cheeseburger.`,
    },
    {
      title: `Family Style`,
      detail: `Everyone loves smelly cheese pecorino. Cheese and wine babybel say cheese rubber cheese cottage cheese blue castello fromage frais cheese and biscuits. Jarlsberg cheese strings mozzarella manchego monterey jack pecorino cheese on toast jarlsberg. Fromage roquefort everyone loves fondue blue castello red leicester swiss st. agur blue cheese. Cheeseburger.`,
    },
    {
      title: `Grazing Table`,
      detail: `Everyone loves smelly cheese pecorino. Cheese and wine babybel say cheese rubber cheese cottage cheese blue castello fromage frais cheese and biscuits. Jarlsberg cheese strings mozzarella manchego monterey jack pecorino cheese on toast jarlsberg. Fromage roquefort everyone loves fondue blue castello red leicester swiss st. agur blue cheese. Cheeseburger.`,
    },
  ],
  mediaLeft: true,
};

const interactive = {
  title: `Interactive Meals`,
  detail: `Bacon ipsum dolor amet picanha do voluptate tenderloin chuck, irure incididunt bresaola ham hock porchetta flank ham meatloaf officia spare ribs. Tenderloin cillum in incididunt, salami ribeye ut in. Ut ex jowl strip steak pancetta. Porchetta jowl duis eiusmod. Spare ribs kielbasa salami, esse shank prosciutto swine exercitation.`,
  image: `/images/catering/CATERING-003.png`,
  items: [
    {
      title: `Meal Prep Coaching`,
      detail: `Everyone loves smelly cheese pecorino. Cheese and wine babybel say cheese rubber cheese cottage cheese blue castello fromage frais cheese and biscuits. Jarlsberg cheese strings mozzarella manchego monterey jack pecorino cheese on toast jarlsberg. Fromage roquefort everyone loves fondue blue castello red leicester swiss st. agur blue cheese. Cheeseburger.`,
    },
  ],
};

const atHome = {
  title: `At Home`,
  detail: `Bacon ipsum dolor amet picanha do voluptate tenderloin chuck, irure incididunt bresaola ham hock porchetta flank ham meatloaf officia spare ribs. Tenderloin cillum in incididunt, salami ribeye ut in. Ut ex jowl strip steak pancetta.`,
  image: `/images/catering/CATERING-004.png`,
  items: [
    {
      title: `Dinner Parties`,
      detail: `Everyone loves smelly cheese pecorino. Cheese and wine babybel say cheese rubber cheese cottage cheese blue castello fromage frais cheese and biscuits. Jarlsberg cheese strings mozzarella manchego monterey jack pecorino cheese on toast jarlsberg. Fromage roquefort everyone loves fondue blue castello red leicester swiss st. agur blue cheese. Cheeseburger.`,
    },
    {
      title: `Intimate Dinner For Two`,
      detail: `Is it your anniversary? Has date night been neglected for way too long? Do you just want to surprise your someone special? You don't have to go far! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempus dapibus augue at gravida. Praesent mauris turpis, auctor eget metus a, tempus pretium enim. Maecenas viverra enim at scelerisque auctor.`,
    },
  ],
};

const boards = {
  title: `Characuterie Boards`,
  detail: `Bacon ipsum dolor amet picanha do voluptate tenderloin chuck, irure incididunt bresaola ham hock porchetta flank ham meatloaf officia spare ribs. Tenderloin cillum in incididunt, salami ribeye ut in. Ut ex jowl strip steak pancetta. Porchetta jowl duis eiusmod. Spare ribs kielbasa salami, esse shank prosciutto swine exercitation.`,
  image: `/images/catering/CATERING-005.png`,
  items: [
    {
      title: `Individual Boxed Portions`,
      detail: `Everyone loves smelly cheese pecorino. Cheese and wine babybel say cheese rubber cheese cottage cheese blue castello fromage frais cheese and biscuits. Jarlsberg cheese strings mozzarella manchego monterey jack pecorino cheese on toast jarlsberg. Fromage roquefort everyone loves fondue blue castello red leicester swiss st. agur blue cheese. Cheeseburger.`,
    },
    {
      title: `Brunch Boards`,
      detail: `Everyone loves smelly cheese pecorino. Cheese and wine babybel say cheese rubber cheese cottage cheese blue castello fromage frais cheese and biscuits. Jarlsberg cheese strings mozzarella manchego monterey jack pecorino cheese on toast jarlsberg. Fromage roquefort everyone loves fondue blue castello red leicester swiss st. agur blue cheese. Cheeseburger.`,
    },
    {
      title: `Themed`,
      detail: `Everyone loves smelly cheese pecorino. Cheese and wine babybel say cheese rubber cheese cottage cheese blue castello fromage frais cheese and biscuits. Jarlsberg cheese strings mozzarella manchego monterey jack pecorino cheese on toast jarlsberg. Fromage roquefort everyone loves fondue blue castello red leicester swiss st. agur blue cheese. Cheeseburger.`,
    },
    {
      title: `Crudité`,
      detail: `Everyone loves smelly cheese pecorino. Cheese and wine babybel say cheese rubber cheese cottage cheese blue castello fromage frais cheese and biscuits. Jarlsberg cheese strings mozzarella manchego monterey jack pecorino cheese on toast jarlsberg. Fromage roquefort everyone loves fondue blue castello red leicester swiss st. agur blue cheese. Cheeseburger.`,
    },
  ],
};

const cta1 = {
  title: `Unforgettable Events`,
  bg: `/images/catering/PEAR.svg`,
  body: [
    <p>
      We're your go-to catering service for stress-free events. From planning, preparation and execution to table decor and aesthetics, we take care of everything so you can enjoy your special occasion.
    </p>,
    <p>
      We take a collaborative and customizable approach to your event, ensuring that every detail is tailored to your unique needs.
    </p>
  ],
};

const cta2 = {
  title: `Dietary Restrictions?`,
  bg: `/images/catering/AVO.svg`,
  body: [
    <p>
      We offer many vegetarian, vegan, dairy-free, and gluten-free options. We understand that you or your guests may have additional requests related to cultural or allergenic considerations. Please let us know and we'll do our best to accommodate them.*
    </p>,
    <p tw="text-xs md:(text-sm) xl:(text-base)">
      * We take your allergies and restrictions very seriously and prepare your food as safely as possible but cannot guarantee an environment that is entirely allergen free.
    </p>,
  ],
};

const cta3 = {
  title: `Are you feeling hungry?`,
  bg: `/images/catering/CARROT.svg`,
  body: [
    <p>
      We don't blame you! Contact us today to start planning your next event with Olive Foods Catering Co. and experience the difference of our dedicated and professional service.
    </p>
  ],
};

//! ----------> STYLES <----------
const H2 = styled.h2`
  ${tw`text-blue-200 text-4xl font-display`};
  ${tw`md:(text-6xl) xl:(text-7xl)`};
  ${tw`mb-3 lg:(mb-10) xl:(mb-5)`};
`;
//! ----------> COMPONENTS <----------
const CateringPage = () => {
  return (
    <>
      <NextSeo
        {...config}
        title="Catering"
        description="Event catering, dinner parties, charcuterie boards from Olive Foods Catering Company"
        canonical="https://olivefoodsco.com/catering"
      />
      <CateringHero />

        <Wrapper tw="md:(py-8) lg:(py-10) xl:(py-12)">
          <H2>Small Event Catering</H2>
          <CateringSection
            title={events.title}
            detail={events.detail}
            image={events.image}
            items={events.items}
            mediaLeft
          />
        </Wrapper>
        <CateringCTA title={cta1.title} body={cta1.body} bg={cta1.bg} />
        <Wrapper tw="md:(py-8) lg:(py-10) xl:(py-12)">
          <H2>Chef Experiences</H2>
          <div tw="lg:(flex flex-col space-y-14)">
            <CateringSection
              title={interactive.title}
              detail={interactive.detail}
              image={interactive.image}
              items={interactive.items}
              mediaLeft
            />
            <CateringSection
              title={atHome.title}
              detail={atHome.detail}
              image={atHome.image}
              items={atHome.items}
            />
          </div>
        </Wrapper>
        <CateringCTA title={cta2.title} body={cta2.body} bg={cta2.bg} />
        <Wrapper tw="md:(py-8) lg:(py-10) xl:(py-12)">
          <H2>Custom Charcuterie Boards</H2>
          <CateringSection
            title={boards.title}
            detail={boards.detail}
            image={boards.image}
            items={boards.items}
          />
        </Wrapper>
        <CateringCTA title={cta3.title} body={cta3.body} bg={cta3.bg} />
    </>
  );
};

export default CateringPage;
