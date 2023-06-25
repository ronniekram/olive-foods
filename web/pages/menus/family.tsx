import type { NextPage, GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import format from "date-fns/format";
import tw, { styled } from "twin.macro";

import config from "next-seo.config";

import { familyQuery } from "@/utils/queries";
import { getClient } from "lib/sanity.client";
import type { SanityFamily } from "@/utils/types";

import MenuHeader from "@/components/menus/header";
import { H3, H4, Heading, Items} from "@/components/menus/menu-section";
import Dietary from "@/components/menus/dietary";
import Breaker from "@/components/general/breaker";

//! ----------> TYPES <----------
export type MenuItem = {
  name: string;
  price?: number | string;
  description?: string;
  sauces?: string[];
};

type Props = {
  heading: string;
  items: MenuItem[];
  full?: boolean;
};

//! ----------> STYLES <----------
const FlexList = styled.ul`
  ${tw`font-sans text-grey`};
  ${tw`flex flex-col text-sm lg:(text-base space-y-1)`};
  ${tw`list-disc list-outside`};
  ${tw`ml-4`};
`;

const GridList = styled.ul`
  ${tw`list-disc list-inside`};
  ${tw`font-sans text-grey`};
  ${tw`text-xs md:(text-sm) xl:(text-base)`};
  ${tw`grid grid-cols-2`};
  ${tw`md:(grid-cols-3)`};
`;

const Container = styled.article`
  ${tw`w-screen min-h-screen`};
  ${tw`flex flex-col space-y-5`};
  ${tw`px-5 pt-5 pb-16 xl:(pb-20 space-y-8)`};
`;

const Wrapper = styled.section`
  ${tw`w-full`};
  ${tw`grid grid-cols-1 gap-y-6`};
  ${tw`md:(gap-y-6)`};
  ${tw`xl:(grid-cols-2 gap-x-8 gap-y-8)`};
  ${tw`2xl:(gap-x-14 gap-y-10)`};
`;

//! ----------> COMPONENTS <----------
const MenuItem = ({ name, price, description, sauces }: MenuItem) => {
  return (
    <div tw="text-grey font-sans">
      <div tw="flex justify-between w-[87%] lg:(text-lg w-[90%]) xl:(text-xl)">
        <h5 tw="font-bold md:(mb-0.5)">
          {name}
        </h5>
        <p tw="font-bold">{price && `$${price}`}</p>
      </div>
      <p tw="text-sm lg:(text-base)">
        {description}
      </p>
      {sauces && (
        <FlexList>
        {sauces.map((x, i) => (
          <li key={`${name}-${i}`}>{x}</li>
        ))}
      </FlexList>
      )}
    </div>
  );
};

const MenuSection = ({ heading, items, full }: Props) => {
  return (
    <div tw="w-full">
      <Heading>
        <H3>{heading}</H3>
      </Heading>
      <Items full={full}>
        {items.map((item, i) => <MenuItem {...item} key={`${heading}=${i}`} />)}
      </Items>
    </div>
  );
};

const FamilyMenu: NextPage<SanityFamily> = ({ _updatedAt, mains, salads, veg, starches }) => {
  const saladsForComponent = salads.map((salad) => ({
    name: salad.name,
    description: salad.ingredients.join(`, `),
  }));

  const starchesForComponent = starches.map((starch) => ({
    name: starch.name,
    sauces: starch.options,
  }));

  return (
    <Container>
      <MenuHeader subtitle="Event Catering" title="Family Style" />
      <div tw="flex flex-col space-y-8 w-full max-w-[93.5rem] mx-auto px-5 lg:(px-8 space-y-10) xl:(px-12) 2xl:(space-y-12)">
        <div tw="text-grey font-sans flex flex-col space-y-2 md:(flex-row space-y-0 items-start justify-between)">
          <div tw="md:(w-[70%])">
            <p tw="text-sm xl:(text-base)">Family-style meals include a main, salad, one vegetable and one starch and are priced per person.</p>
            <p tw="text-sm mb-1 xl:(text-base)">Each additional side costs +$5 per person.</p>

            <p tw="text-sm font-bold xl:(text-base)">Minimum order: 20 people</p>
          </div>

          <p tw="lg:(text-lg) xl:(text-xl)"><span tw="font-bold">Last updated:</span> {format(new Date(_updatedAt), `MMM d, y`)}</p>
        </div>

        <Breaker />
        <Wrapper tw="xl:(grid-cols-1)">
          <MenuSection heading="Mains" items={mains} full />
        </Wrapper>

        <Breaker />

        <div>
          <H3 tw="mb-4 lg:(mb-5) xl:(mb-6)">
            Vegetables
          </H3>
          <Wrapper tw="lg:(grid-cols-2)">
            <div>
              <Heading>
                <H4>Vegetable Options</H4>
              </Heading>
              <GridList>
                {veg.options.map((veg, i) => (
                  <li key={`veg-${i}`}>{veg}</li>
                ))}
              </GridList>
            </div>
            <div>
              <div tw="h-20" />
              <Heading>
                <H4>Vegetable Accompaniment</H4>
              </Heading>
              <GridList tw="grid-cols-2!">
                {veg.sauces.map((sauce, i) => (
                  <li key={`veg-sauce-${i}`}>{sauce}</li>
                ))}
              </GridList>
            </div>
          </Wrapper>
        </div>
        <Breaker />

        <Wrapper tw="xl:(grid-cols-1)">
          <MenuSection heading="Salads" items={saladsForComponent} full />
        </Wrapper>
        <Breaker />

        <Wrapper tw="xl:(grid-cols-1)">
          <MenuSection heading="Starches" items={starchesForComponent} full />
        </Wrapper>
        <div tw="h-5" />
        <Breaker />
        <Dietary />
      </div>
    </Container>
  );
};

export default FamilyMenu;

export const getStaticProps: GetStaticProps<SanityFamily> = async ({ preview = false }) => {
  const client = getClient();
  const page: SanityFamily[] = await client.fetch(familyQuery);

  const { _updatedAt, mains, salads, veg, starches } = page[0];

  return {
    props: {
      _updatedAt,
      mains,
      salads,
      veg,
      starches,
    },
  };
};
