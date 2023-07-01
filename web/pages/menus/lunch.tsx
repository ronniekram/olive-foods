import type { NextPage, GetStaticProps } from "next";
import format from "date-fns/format";
import "twin.macro";

import { lunchQuery } from "@/utils/queries";
import { getClient } from "lib/sanity.client";
import type { SanityLunch } from "@/utils/types";

import MenuTemplate, { Section, ItemProps } from "@/components/menus/template";
import Breaker from "@/components/general/breaker";

//! ----------> COMPONENTS <----------
const LunchMenu: NextPage<SanityLunch> = ({ _updatedAt, specialty, standard, sides }) => {
  const boxes: ItemProps[] = [
    {
      name: `Standard Sandwich`,
      price: 17,
      description: `Includes 6" sandwich, house chips, crudite & drip and a cookie`,
    },
    {
      name: `Specialty Sandwich`,
      price: 20,
      description: `Includes 6" sandwich, house chips, crudite & drip and a cookie`,
    },
  ];

  return (
    <>
      <MenuTemplate
        title="Lunch"
        subtitle="Event Catering"
        minimum="10 sandwiches"
        lastUpdated={format(new Date(_updatedAt), `MMMM d, y`)}
      >
        <Breaker />
        <Section title="Specialty Sandwiches" price={15} items={specialty} />
        <Breaker />
        <Section title="Standard Sandwiches" price={12} items={standard} />
        <Breaker />
        <Section title="Box Lunches" items={boxes} />
      </MenuTemplate>
      <MenuTemplate
        title="Lunch"
        subtitle="Event Catering"
        minimum="10 sandwiches"
        lastUpdated={format(new Date(_updatedAt), `MMM d, y`)}
      >
        <Breaker />
        <Section title="Sides" items={sides} />
        <Breaker />
      </MenuTemplate>
    </>
  );
};

export default LunchMenu;

export const getStaticProps: GetStaticProps<SanityLunch> = async ({ preview = false }) => {
  const client = getClient();
  const page: { _updatedAt: string; lunchMenu: SanityLunch }[] = await client.fetch(lunchQuery);

  const { lunchMenu } = page[0];

  return {
    props: {
      _updatedAt: page[0]._updatedAt,
      specialty: lunchMenu.specialty,
      standard: lunchMenu.standard,
      sides: lunchMenu.sides,
    },
  };
};
