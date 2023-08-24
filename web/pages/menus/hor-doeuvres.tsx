import type { NextPage, GetStaticProps } from "next";
import format from "date-fns/format";
import tw, { styled } from "twin.macro";
import _chunk from "lodash/chunk";

import { getHorDMenu } from "lib/sanity.client";
import type { SanityHDSection } from "@/utils/types";
import { HorDMenu as PageProps } from "lib/sanity.queries";

import MenuTemplate from "@/components/menus/template";
import Breaker from "@/components/general/breaker";

//! ----------> STYLES <----------
const UL = styled.ul`
  ${tw`flex flex-col space-y-1`};
  ${tw`font-sans text-grey`};
  ${tw`text-base`};
`;

const SubUL = styled.ul`
  ${tw`text-sm leading-[1.25rem]`};
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
    <div tw="flex flex-col space-y-2 py-2">
      <h3>{priceString(section.name)} each</h3>
      <UL>
        {section.items.map((item, i) => (
          <li key={`${section.name}-${i}`}>
            {item.name}
            {item.subItems && (
              <SubUL>
                {item.subItems.map((sub, i) => (
                  <li key={`${item.name}-${i}`}>{subItem(sub)}</li>
                ))}
              </SubUL>
            )}
          </li>
        ))}
      </UL>
    </div>
  );
};

const HorDMenu: NextPage<PageProps> = ({ _updatedAt, byPrice }) => {
  const chunks = _chunk(byPrice, 4);

  return (
    <>
      {chunks.map((chunk, i) => (
        <MenuTemplate
          key={i}
          title="Hor d'oeuvres"
          minimum="1 dozen per item"
          lastUpdated={format(new Date(_updatedAt), `MMMM d, y`)}
          info={[`All items are priced per person`]}
        >
          <Breaker />
          <section tw="grid grid-cols-2 gap-x-4 gap-y-6">
            {chunk.map((section, i) => (
              <>
                <Section section={section} key={section.name} />
                {i % 2 !== 0 && (
                  <div tw="col-span-2">
                    <Breaker />
                  </div>
                )}
              </>
            ))}
          </section>
        </MenuTemplate>
      ))}
    </>
  );
};

export default HorDMenu;

export const getStaticProps: GetStaticProps<PageProps> = async ({ preview = false }) => {
  const data = await getHorDMenu();
  const { _updatedAt, byPrice } = data[0];

  return {
    props: {
      _updatedAt,
      byPrice,
    },
  };
};
