import type { NextPage, GetStaticProps } from "next";
import format from "date-fns/format";
import { useWindowSize } from "react-use";
import tw, { styled } from "twin.macro";

import { horDQuery } from "@/utils/queries";
import { getClient } from "lib/sanity.client";
import type { SanityHors, SanityHDSection } from "@/utils/types";

import MenuHeader from "@/components/menus/header";
import { H3, H4, Heading } from "@/components/menus/menu-section";
import Dietary from "@/components/menus/dietary";
import Breaker from "@/components/general/breaker";

//! ----------> STYLES <----------
const Container = styled.article`
  ${tw`w-screen min-h-screen`};
  ${tw`flex flex-col space-y-5`};
  ${tw`px-5 pt-5 pb-16 xl:(pb-20 space-y-8)`};
`;

const Wrapper = styled.section`
  ${tw`w-full pb-2`};
  ${tw`grid grid-cols-1 gap-y-4 gap-x-4`};
  ${tw`md:(grid-cols-2 gap-x-4 gap-y-6)`};
  ${tw`lg:(gap-x-10)`};
  ${tw`xl:(gap-x-14 gap-y-8)`};
  ${tw`2xl:(gap-x-24)`};
`;

const UL = styled.ul`
  ${tw`flex flex-col space-y-3 lg:(space-y-4)`};
  ${tw`font-sans font-medium text-grey text-xs lg:(text-lg) xl:(text-xl) 2xl:(text-2xl)`};
`;

const SubUL = styled.ul`
  ${tw`flex flex-col space-y-1 lg:(space-y-2)`};
  ${tw`list-disc list-outside ml-4`};
  ${tw`text-2xs lg:(text-base) xl:(text-lg) 2xl:(text-xl)`};
  ${tw`pt-1`};
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
    <div tw="w-full h-[33vh] pt-11 pb-5">
      <Heading>
        <H3 tw="2xl:(text-4xl)">{priceString(section.name)} each</H3>
      </Heading>
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
  const { width } = useWindowSize();

  return (
    <Container>
      <MenuHeader title="Hor D'oeuvres" />
      <div tw="flex flex-col space-y-8 w-full max-w-[93.5rem] mx-auto px-5 lg:(px-8 space-y-10) xl:(px-12) 2xl:(space-y-12)">
        <div tw="text-grey font-sans flex items-start justify-between">
          <div>
            <p tw="lg:(text-lg) xl:(text-xl)">
              Items priced per person
            </p>
            <p tw="font-medium lg:(text-lg) xl:(text-xl)">
              Minimum order: 1 dozen per item
            </p>
          </div>

          <p tw="lg:(text-lg) xl:(text-xl)"><span tw="font-bold">Last updated:</span> {format(new Date(_updatedAt), `MMM d, y`)}</p>
        </div>
        <Breaker />

        <Wrapper>
          {byPrice.map((section, i) => {
            return (
              <>
                <Section section={section} />
                {width < 768 && <Breaker />}
                {width >= 768 && i % 2 !== 0 && (
                  <div tw="col-span-2">
                    <Breaker />
                  </div>
                )}
              </>
            );
          })}
        </Wrapper>
        <div tw="h-72" />
        <Dietary />
        <div tw="h-24" />
      </div>
    </Container>
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
