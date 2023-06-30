import type { NextPage, GetStaticProps } from "next";
import format from "date-fns/format";
import "twin.macro";

import { boardQuery } from "@/utils/queries";
import { getClient } from "lib/sanity.client";
import type { SanityBoard } from "@/utils/types";


import Breaker from "@/components/general/breaker";
import MenuTemplate, { Item } from "@/components/menus/template";

//! ----------> COMPONENTS <----------
const BoardMenu: NextPage<SanityBoard> = ({ _updatedAt, options }) => {
  return (
    <MenuTemplate
      title="Boards & Platters"
      lastUpdated={format(new Date(_updatedAt), `MMMM d, y`)}
    >
      <Breaker />
      <section tw="grid grid-cols-2 gap-x-10 gap-y-4">
        {options.map((opt) => (
          <Item
            key={opt.name}
            {...opt}
          />
        ))}
      </section>
      <Breaker />
    </MenuTemplate>
  );
};

export default BoardMenu;

export const getStaticProps: GetStaticProps<SanityBoard> = async ({ preview = false }) => {
  const client = getClient();
  const page = await client.fetch(boardQuery);

  const { _updatedAt, options } = page[0];

  return {
    props: {
      _updatedAt,
      options,
    },
  };
};
