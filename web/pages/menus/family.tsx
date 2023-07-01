import type { NextPage, GetStaticProps } from "next";
import format from "date-fns/format";
import tw, { styled } from "twin.macro";

import { familyQuery } from "@/utils/queries";
import { getClient } from "lib/sanity.client";
import type { SanityFamily } from "@/utils/types";

import MenuTemplate, { Section, Item } from "@/components/menus/template";
import Breaker from "@/components/general/breaker";

//! ----------> TYPES <----------
export type MenuItem = {
  name: string;
  price?: number | string;
  description?: string;
  sauces?: string[];
};

//! ----------> STYLES <----------
const List = styled.ul`
  ${tw`text-sm text-grey font-sans`};
  ${tw`grid grid-cols-2 gap-x-4`};
  ${tw`list-disc list-inside`};

  li {
    ${tw`ml-1.5`};
  }
`;

const Starches = tw.div`grid grid-cols-[auto, 25%, auto] gap-x-5`;

const StarchList = styled.ul`
  ${tw`text-sm`};
  ${tw`list-disc list-inside ml-1`};
`;

//! ----------> COMPONENTS <----------
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
    <>
      <MenuTemplate
        title="Family Style"
        subtitle="Event Catering"
        lastUpdated={format(new Date(_updatedAt), `MMMM d, y`)}
        minimum="20 people"
        info={[
          `Family-style meals include a main, salad, one vegetable and one starch and are priced per person.`,
          `Each additional side costs +$5 per person.`,
        ]}
      >
        <Breaker />
        <section tw="flex flex-col space-y-4">
          <h3>Mains</h3>
          <Starches tw="gap-y-4">
            {mains.map((main) => (
              <Item key={main.name} {...main} />
            ))}
          </Starches>
        </section>
        <Breaker />
        <section tw="flex flex-col space-y-4">
          <h3>Vegetable Sides</h3>
          <div tw="grid grid-cols-2 gap-x-3 gap-y-4">
            <div>
              <h5>Vegetables</h5>
              <List>
                {veg.options.map((opt) => (
                  <li key={opt}>{opt}</li>
                ))}
              </List>
            </div>
            <div>
              <h5>Accoutrements</h5>
              <List>
                {veg.sauces.map((opt) => (
                  <li key={opt}>{opt}</li>
                ))}
              </List>
            </div>
          </div>
        </section>
      </MenuTemplate>
      <MenuTemplate
        title="Family Style"
        subtitle="Event Catering"
        lastUpdated={format(new Date(_updatedAt), `MMM d, y`)}
        minimum="20 people"
        info={[
          `Family-style meals include a main, salad, one vegetable and one starch and are priced per person.`,
          `Each additional side costs +$5 per person.`,
        ]}
      >
        <Breaker />
        <Section title="Salads" items={saladsForComponent} />
        <Breaker />
        <div tw="flex flex-col space-y-4">
          <h3>Starches</h3>
          <Starches>
            {starchesForComponent.map((starch) => (
              <div key={starch.name} tw="font-sans text-grey">
                <p tw="text-sm font-bold">{starch.name}</p>
                <StarchList>
                  {starch.sauces.map((sauce) => (
                    <li key={sauce}>{sauce}</li>
                  ))}
                </StarchList>
              </div>
            ))}
          </Starches>
        </div>
        <Breaker />
      </MenuTemplate>
    </>
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
