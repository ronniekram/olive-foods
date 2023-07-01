import tw, { styled } from "twin.macro";

import type { SanityServing } from "@/utils/types";

import { A4Header, Props as HeaderProps } from "./header";

//! ----------> TYPES <----------
type Props = HeaderProps & {
  minimum?: string;
  lastUpdated: string;
  info?: string[];
  children: JSX.Element[];
};

export type ItemProps = {
  name: string;
  price?: number;
  description?: string;
  servings?: string | SanityServing;
  sauces?: string[];
  options?: {
    numChoices?: number;
    choices: string[];
  };
};

type SectionProps = {
  title: string;
  price?: number;
  items: ItemProps[];
};

//! ----------> STYLES <----------
const Wrapper = styled.div`
  ${tw`bg-green-100`};
  ${tw`w-[8.5in] h-[11in]`};
`;

const Page = styled.article`
  ${tw`bg-green-100 px-10 pt-8 pb-6`};
  ${tw`flex flex-col space-y-6`};
  ${tw`w-full max-h-full h-full mx-auto`};

  h3 {
    ${tw`font-display text-blue-200`};
    ${tw`tracking-[1.5px] text-[1.75rem] leading-[2.1875rem]`};
  }

  h4 {
    ${tw`font-display text-blue-200`};
    ${tw`tracking-[1.5px] text-2xl`};
  }

  h5 {
    ${tw`font-display text-orange-200`};
    ${tw`tracking-[1.5px] text-[22px]`};
    ${tw`mb-0.5`};
  }
`;

const ItemWrap = tw.div`flex flex-col space-y-0.5 font-sans text-grey`;

const List = styled.ul`
  ${tw`text-2xs leading-[1rem]`};
  ${tw`list-disc list-inside ml-0.5`};
`;

const SectionItems = tw.div`grid grid-cols-2 gap-x-10 gap-y-4`;


//! ----------> HELPERS <----------
export const renderServings = (servings: string | { low: number; high?: number}) => {
  if (typeof servings === `string`) return `(${servings} people)`;
  if (servings.high) return `(${servings.low}-${servings.high} people)`;
  return `(Up to ${servings.low} people)`;
};

//! ----------> COMPONENTS <----------
export const Item = ({ name, price, description, sauces, servings, options }: ItemProps) => {
  return (
    <ItemWrap>
      <div tw="flex items-center justify-between text-sm font-bold w-[90%]">
        <p>{name}</p>
        <p>{price && `$${price}`}</p>
      </div>
      <p tw="text-orange-200 text-[10px] leading-[14.3px] font-semi">
        {servings && renderServings(servings)}
      </p>
      <p tw="text-2xs">{description}</p>

      {sauces && (
        <div tw="text-2xs leading-[1rem]">
          {sauces.map((s) => (
            <p key={s}>
              {s}
            </p>
          ))}
        </div>
      )}

      {options && (
        <div>
          <p tw="font-bold text-2xs">{options.numChoices && `Choice of ${options.numChoices}`}</p>
          <List>
            {options.choices.map((x) => (
              <li key={x}>
                {x}
              </li>
            ))}
          </List>
        </div>
      )}
    </ItemWrap>
  );
};

export const Section = ({title, price, items }: SectionProps) => (
  <section tw="flex flex-col space-y-4">
    <div tw="flex items-center space-x-4">
      <h3>{title}</h3>
      <h4>{price && `$${price} each`}</h4>
    </div>
    <SectionItems>
      {items.map((item) => (
        <Item
          key={item.name}
          {...item}
        />
      ))}
    </SectionItems>
  </section>
);

const MenuTemplate = ({ title, subtitle, minimum, lastUpdated, info, children }: Props) => (
  <Wrapper>
    <Page>
      <div tw="flex flex-col space-y-2">
        <A4Header title={title} subtitle={subtitle} />
        <div tw="w-full flex justify-between items-center font-sans text-grey">
          <p tw="text-xs font-bold">{minimum && `Minimum order: ${minimum}`}</p>
          <p tw="text-xs font-medium">Last updated: {lastUpdated}</p>
        </div>
        <div>
          {info && info.map((txt) => (
            <p
              tw="text-2xs text-grey font-sans"
              key={txt}
            >
              {txt}
            </p>
          ))}
        </div>
      </div>
      <div tw="flex flex-col space-y-8">
        {children}
      </div>
    </Page>
  </Wrapper>
);

export default MenuTemplate;
