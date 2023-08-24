import type { NextPage, GetStaticProps } from "next";
import format from "date-fns/format";
import "twin.macro";

import { getLunchMenu } from "lib/sanity.client";
import { LunchMenu as PageProps } from "lib/sanity.queries";

import MenuTemplate, { Section, ItemProps } from "@/components/menus/template";
import Breaker from "@/components/general/breaker";

//! ----------> COMPONENTS <----------
const LunchMenu: NextPage<PageProps> = ({ _updatedAt, lunchMenu }) => {
  const { standard, specialty, sides } = lunchMenu;
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

export const getStaticProps: GetStaticProps<PageProps> = async ({ preview = false }) => {
  const data = await getLunchMenu();
  const { _updatedAt, lunchMenu } = data[0];

  return {
    props: {
      _updatedAt: _updatedAt,
      lunchMenu: {
        specialty: lunchMenu.specialty,
        standard: lunchMenu.standard,
        sides: lunchMenu.sides,
      },
    },
  };
};
