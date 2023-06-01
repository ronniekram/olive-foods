import tw, { styled } from "twin.macro";

import SERVICE_ICONS, { ServiceIcon } from "./icons";

//! ----------> TYPES <----------
export type ServiceProps = {
  title: string;
  color: Color;
  icon: ServiceIcon;
  sub?: string;
};

const colors = {
  green: tw`text-green-500 border-green-500 bg-green-100`,
  blue: tw`text-blue-300 border-blue-300 bg-blue-100`,
  orange: tw`text-orange-300 border-orange-300 bg-orange-100`,
};

type Color = keyof typeof colors;

//! ----------> STYLES <----------
const Card = styled.div`
  ${tw`w-full min-h-[16.375rem] md:(min-h-[17.0625rem]) 2xl:(min-h-[25rem])`};
  ${tw`rounded-2xl border text-center`};
  ${tw`flex flex-col items-center`};
  ${tw`px-4 py-16 md:(py-12) lg:(py-16) xl:(px-6 py-20) 2xl:(py-28)`};


  box-shadow: 0px 4px 8px 0px rgba(31, 67, 40, 0.25);

  svg {
    ${tw`w-[4.6875rem] h-[4.6875rem]`};
    ${tw`md:(w-[6.25rem] h-[6.25rem])`};
    ${tw`mb-4 xl:(mb-5)`};
  }
`;

const Title = tw.h3`font-display tracking-[0.5px] text-2xl xl:(text-3xl mb-1)`;
const Sub = tw.p`font-sans text-sm md:(text-base) xl:(text-lg)`;

//! ----------> COMPONENTS <----------
const ServiceCard = ({ title, color, icon, sub }: ServiceProps) => {
  return (
    <Card css={colors[color]}>
      {SERVICE_ICONS[icon]}
      <Title>{title}</Title>
      <Sub>{sub}</Sub>
    </Card>
  );
};

export default ServiceCard;
