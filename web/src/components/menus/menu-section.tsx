import tw, { styled } from "twin.macro";

//! ----------> TYPES <----------
export type MenuItem = {
  name: string;
  price?: number | string;
  servings?: string | { low: number; high?: number};
  description?: string;
  subList?: string[];
  options?: {
    numChoices: number;
    choices: string[];
  };
};

type Props = {
  heading: string;
  subHeading?: string;
  items: MenuItem[];
  full?: boolean;
};

//! ----------> STYLES <----------
export const H3 = styled.h3`
  ${tw`font-display tracking-[1.5px] text-blue-200`};
  ${tw`text-2xl`};
  ${tw`md:(text-[1.875rem] leading-[2.25rem])`};
  ${tw`xl:(text-3xl)`};
`;

export const H4 = styled.h4`
  ${tw`font-display tracking-[1.5px] text-blue-200`};
  ${tw`text-xl md:(text-2xl)`};
`;

export const FlexList = styled.ul`
  ${tw`font-sans text-grey`};
  ${tw`flex flex-col text-sm`};
`;

export const Heading = tw.div`mb-2 md:(flex space-x-4 items-end mb-4) lg:(mb-5) xl:(mb-6)`;

export const Items = styled.div(({ full }: { full?: boolean}) => [
  tw`grid grid-cols-2 gap-x-6 gap-y-5`,
  tw`lg:(gap-x-10)`,
  full ? tw`gap-x-10 xl:(gap-x-8 gap-y-6 grid-cols-3) 2xl:(gap-y-8)` : tw`xl:(gap-x-6 gap-y-6) 2xl:(gap-x-8 gap-y-8)`,
]);

export const renderServings = (servings: string | { low: number; high?: number}) => {
  if (typeof servings === `string`) return `(${servings} people)`;
  if (servings.high) return `(${servings.low}-${servings.high} people)`;
  return `(Up to ${servings.low} people)`;
};

//! ----------> COMPONENTS <----------
export const MenuItem = ({ name, price, servings, description, subList, options }: MenuItem) => {
  return (
    <div tw="text-grey font-sans">
      <div tw="flex justify-between md:(w-[87%]) lg:(text-lg w-[90%]) xl:(text-xl)">
        <h5 tw="font-bold md:(mb-0.5)">
          {name}
        </h5>
        <p tw="font-bold">{price && `$${price}`}</p>
      </div>
      <p tw="py-0.5 text-sm font-medium">{servings && renderServings(servings)}</p>
      <p tw="text-sm lg:(text-base) xl:(text-sm) 2xl:(text-base)">{description}</p>
      {subList && (
        <FlexList>
          {subList.map((x, i) => (
            <li key={`${name}-${i}`}>{x}</li>
          ))}
        </FlexList>
      )}
      {options && (
        <div tw="py-1.5 xl:(py-2) 2xl:(py-2.5)">
          <h5 tw="font-bold mb-1">
            Choice of {options.numChoices}:
          </h5>
          <FlexList>
            {options.choices.map((choice, i) => (
              <li key={`${name}-choices-${i}`} tw="xl:(text-base)">{choice}</li>
            ))}
          </FlexList>
        </div>
      )}
    </div>
  );
};

const MenuSection = ({ heading, subHeading, items, full }: Props) => {
  return (
    <div tw="w-full">
      <Heading>
        <H3>{heading}</H3>
        <H4>{subHeading}</H4>
      </Heading>
      <Items full={full}>
        {items.map((item, i) => <MenuItem {...item} key={`${heading}=${i}`} />)}
      </Items>
    </div>
  );
};

export default MenuSection;
