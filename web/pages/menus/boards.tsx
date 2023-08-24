import type { NextPage, GetStaticProps } from "next";
import format from "date-fns/format";
import "twin.macro";

import { getBoardMenu } from "lib/sanity.client";
import { BoardMenu as PageProps } from "lib/sanity.queries";

import Breaker from "@/components/general/breaker";
import MenuTemplate, { Item } from "@/components/menus/template";

//! ----------> COMPONENTS <----------
const BoardMenu: NextPage<PageProps> = ({ _updatedAt, options }) => {
  return (
    <MenuTemplate title="Boards & Platters" lastUpdated={format(new Date(_updatedAt), `MMMM d, y`)}>
      <Breaker />
      <section tw="grid grid-cols-2 gap-x-10 gap-y-4">
        {options.map((opt) => (
          <Item key={opt.name} {...opt} />
        ))}
      </section>
      <Breaker />
    </MenuTemplate>
  );
};

export default BoardMenu;

export const getStaticProps: GetStaticProps<PageProps> = async ({ preview = false }) => {
  const data = await getBoardMenu();
  const { _updatedAt, options } = data[0];

  return {
    props: {
      _updatedAt,
      options,
    },
  };
};
