import type { NextPage, GetStaticProps } from "next";
import format from "date-fns/format";
import tw, { styled } from "twin.macro";

import { boardQuery } from "@/utils/queries";
import { getClient } from "lib/sanity.client";
import type { SanityBoard } from "@/utils/types";

import MenuHeader from "@/components/menus/header";
import Dietary from "@/components/menus/dietary";
import Breaker from "@/components/general/breaker";

//! ----------> TYPES <----------
type BoardItem = {
  name: string;
  price: number;
  servings: string;
  description: string;
};

//! ----------> STYLES <----------
const Container = styled.article`
  ${tw`w-screen min-h-screen`};
  ${tw`flex flex-col space-y-5`};
  ${tw`px-5 pt-5 pb-16 xl:(pb-20 space-y-8)`};
`;

const Wrapper = styled.section`
  ${tw`w-full pb-2`};
  ${tw`grid grid-cols-1 gap-y-4`};
  ${tw`md:(gap-y-6)`};
  ${tw`lg:(grid-cols-3 gap-x-8 gap-y-8)`};
  ${tw`2xl:(gap-x-14)`};
`;

const Item = styled.div`
  ${tw`font-sans text-grey`};
  ${tw`flex flex-col space-y-1`};
  ${tw`md:(space-y-1.5) xl:(space-y-2)`};
`;

//! ----------> COMPONENTS <----------
const Board = ({ name, price, servings, description }: BoardItem) => {
  return (
    <Item>
      <div tw="w-full flex items-center justify-between font-bold md:(text-lg) xl:(text-xl)">
        <h2>{name}</h2>
        <h3>${price}</h3>
      </div>
      <p tw="text-xs md:(text-sm) xl:(text-base)">
        ({servings})
      </p>
      <p tw="text-sm md:(text-base) xl:(text-lg)">
        {description}
      </p>
    </Item>
  );
};

const BoardMenu: NextPage<SanityBoard> = ({ _updatedAt, options }) => {
  return (
    <Container>
      <MenuHeader title="Boards & Platters" />

      <div tw="flex flex-col space-y-8 w-full max-w-[93.5rem] mx-auto px-5 lg:(px-8 space-y-10) xl:(px-12) 2xl:(space-y-12)">
        <div tw="text-grey font-sans flex justify-end">
          <p tw="lg:(text-lg) xl:(text-xl)">
            <span tw="font-bold">Last updated: </span>
            {format(new Date(_updatedAt), `MMM d, y`)}
          </p>
        </div>
        <Breaker />
        <Wrapper>
          {options.map((opt, i) => <Board {...opt} key={`board-${i}`} />)}
        </Wrapper>
        <Breaker />
        <Dietary />
      </div>
    </Container>
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
