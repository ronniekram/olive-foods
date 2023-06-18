import tw, { styled } from "twin.macro";

//! ----------> TYPES <----------
type MenuItem = {
  name: string;
  price?: string;
  servings?: string;
  description?: string;
  subList?: string[];
};

type Props = {
  heading: string;
  subHeading?: string;
  items: MenuItem[];
};

//! ----------> STYLES <----------
const H3 = styled.h3`
  ${tw`font-display tracking-[1.5px] text-blue-200`};
  ${tw`text-2xl`};
  ${tw`md:(text-[2.5rem] leading-[2.75rem])`};
  ${tw`xl:(text-3xl)`};
`;

const H4 = styled.h4`
  ${tw`font-display tracking-[1.5px] text-blue-200`};
  ${tw`text-xl md:(text-2xl)`};
`;

const FlexList = styled.ul`
  ${tw`font-sans text-grey`};
  ${tw`flex flex-col text-sm`};
`;

const GridList = styled.ul`
  ${tw`font-sans text-grey`};
  ${tw`grid auto-cols-auto gap-x-[7%]`};
`;

//! ----------> COMPONENTS <----------
const MenuItem = ({ name, price, servings, description, subList }: MenuItem) => {
  return (
    <div tw="text-grey font-sans">
      <div tw="flex space-x-1">
        <h5 tw="font-bold">
          {name}
        </h5>
        <p tw="font-bold">{price}</p>
        <p>{servings}</p>
      </div>
      <p tw="text-sm">{description}</p>
      {subList && (
        <FlexList>
          {subList.map((x, i) => (
            <li key={`${name}-${i}`}>{x}</li>
          ))}
        </FlexList>
      )}
    </div>
  );
};
