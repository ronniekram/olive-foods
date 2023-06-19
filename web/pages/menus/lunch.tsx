import type { NextPage, GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import format from "date-fns/format";
import tw, { styled } from "twin.macro";

import config from "next-seo.config";

import { lunchQuery } from "@/utils/queries";
import { getClient } from "lib/sanity.client";
import type { SanityLunch } from "@/utils/types";

import MenuHeader from "@/components/menus/header";
import MenuSection from "@/components/menus/menu-section";
import Dietary from "@/components/menus/dietary";
import Breaker from "@/components/general/breaker";

//! ----------> STYLES <----------
const Container = styled.article`
  ${tw`w-screen min-h-screen`};
  ${tw`flex flex-col space-y-5`};
  ${tw`px-5 pt-5 pb-16 xl:(pb-20 space-y-8)`};
`;

const Wrapper = styled.section`
  ${tw`w-full`};
  ${tw`grid grid-cols-1 gap-y-4`};
  ${tw`md:(gap-y-6)`};
  ${tw`xl:(grid-cols-2 gap-x-8 gap-y-8)`};
  ${tw`2xl:(gap-x-14)`};
`;

//! ----------> COMPONENTS <----------
const LunchMenu: NextPage<SanityLunch> = ({
  _updatedAt,
  specialty,
  standard,
  sides
}) => {

  return (
    <Container>
      <MenuHeader subtitle="Event Catering" title="Lunch" />
      <div tw="flex flex-col space-y-8 w-full max-w-[93.5rem] mx-auto md:(px-5) lg:(px-8 space-y-10) xl:(px-12) 2xl:(space-y-12)">
        <div tw="text-grey font-sans flex flex-col space-y-2 md:(flex-row space-y-0 items-start justify-between)">
          <div>
            <p tw="lg:(text-lg) xl:(text-xl)">Recommended 1-2 half portions per person.</p>
            <p tw="text-sm font-bold lg:(text-base) xl:(text-lg)">Minimum order: 10 sandwiches</p>
          </div>

          <p tw="lg:(text-lg) xl:(text-xl)"><span tw="font-bold">Last updated:</span> {format(new Date(_updatedAt), `MMM d, y`)}</p>
        </div>
        <Breaker />
        <Wrapper>
          <MenuSection heading="8” Specialty Sandwiches" subHeading="$15 each" items={specialty} />
          <MenuSection heading="8” Standard Sandwiches" subHeading="$12 each" items={standard} />
        </Wrapper>
        <Breaker />
        <Wrapper tw="xl:(grid-cols-1)">
          <MenuSection heading="Sides" items={sides} full />
        </Wrapper>
        <Breaker />
        <Dietary />
      </div>
    </Container>
  );
};

export default LunchMenu;

export const getStaticProps: GetStaticProps<SanityLunch> = async ({ preview = false }) => {
  const client = getClient();
  const page: { _updatedAt: string, lunchMenu: SanityLunch }[] = await client.fetch(lunchQuery);

  const { lunchMenu } = page[0];

  console.table(lunchMenu.standard);

  return {
    props: {
      _updatedAt: page[0]._updatedAt,
      specialty: lunchMenu.specialty,
      standard: lunchMenu.standard,
      sides: lunchMenu.sides,
    },
  };
};
