import type { NextPage, GetStaticProps } from "next";
import format from "date-fns/format";
import tw, { styled } from "twin.macro";

import { horDQuery } from "@/utils/queries";
import { getClient } from "lib/sanity.client";
import type { SanityHors, SanityHDSection } from "@/utils/types";

import MenuTemplate from "@/components/menus/template";
import Breaker from "@/components/general/breaker";

//! ----------> STYLES <----------
const UL = styled.ul`
  ${tw`flex flex-col space-y-0.5`};
  ${tw`font-sans font-medium text-grey`};
  ${tw`text-xs`};
`;

const SubUL = styled.ul`
  ${tw`text-2xs leading-[1.25rem]`};
  ${tw`list-disc list-inside`};
  ${tw`ml-1`};
`;

//! ----------> HELPERS <----------
const priceString = (price: number) => {
  const USD = new Intl.NumberFormat(`en-US`, {
    style: `currency`,
    currency: `USD`,
  });

  return USD.format(price);
};

const subItem = (item: string) => {
  const split = item.split(`,`);
  return (
    <>
      <span tw="font-bold">{split[0]}</span>, {split.slice(1).join(`, `)}
    </>
  );
};

//! ----------> COMPONENTS <----------
const Section = ({ section }: { section: SanityHDSection }) => {
  return (
    <div tw="flex flex-col space-y-2">
      <h3>{priceString(section.name)} each</h3>
      <UL>
        {section.items.map((item, i) => (
          <li key={`${section.name}-${i}`}>
            {item.name}
            {item.subItems && (
              <SubUL>
                {item.subItems.map((sub, i) => (
                  <li key={`${item.name}-${i}`}>
                    {subItem(sub)}
                  </li>
                ))}
              </SubUL>
            )}
          </li>
        ))}
      </UL>
    </div>
  );
};

const HorDMenu: NextPage<SanityHors> = ({ _updatedAt, byPrice }) => {

  return (
    <MenuTemplate
      title="Hor d'oeuvres"
      minimum="1 dozen per item"
      lastUpdated={format(new Date(_updatedAt), `MMM d, y`)}
      info={[`All items are priced per person`]}
    >
      <Breaker />
      <section tw="grid grid-cols-2 gap-x-4 gap-y-6">
        {byPrice.map((section, i) => (
        <>
          <Section
            section={section}
            key={section.name}
          />
          {i % 2 !== 0 && (
            <div tw="col-span-2">
              <Breaker />
            </div>
          )}
        </>
      ))}
      </section>
    </MenuTemplate>
  );
};

export default HorDMenu;

export const getStaticProps: GetStaticProps<SanityHors> = async ({ preview = false }) => {
  const client = getClient();
  const page: SanityHors[] = await client.fetch(horDQuery);
  const { _updatedAt, byPrice } = page[0];

  return {
    props: {
      _updatedAt,
      byPrice,
    },
  };
};
