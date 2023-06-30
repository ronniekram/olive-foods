import Image from "next/image";
import tw, { styled } from "twin.macro";

//! ----------> TYPES <----------
export type Props = {
  title: string;
  subtitle?: string;
};

//! ----------> STYLES <----------
const Container = styled.header`
  ${tw`w-full max-w-[93.5rem] mx-auto`};
  ${tw`bg-blue-200 text-blue-100`};
  ${tw`font-display`};
  ${tw`px-[5.9%] py-6 md:(px-[4.4%] py-8) xl:(px-[5.3%] py-10)`};
  ${tw`flex items-center space-x-5 md:(space-x-8) xl:(space-x-10)`};

  h2 {
    ${tw`tracking-[1.5px]`};
    ${tw`text-xl md:(text-3xl) xl:(text-[3rem] leading-[3.25rem])`};
  }

  h1 {
    ${tw`tracking-[1.5px]`};
    ${tw`text-[1.75rem] leading-[2.1875rem]`};
    ${tw`md:(text-[2.5rem] leading-[2.75rem])`};
    ${tw`xl:(text-[4rem] leading-[4.375rem])`};
  }
`;

const Logo = styled.div`
  ${tw`flex items-center justify-center`};
  ${tw`w-[4.6875rem] h-[4.6875rem]`};
  ${tw`md:(w-[9.375rem] h-[9.375rem])`};
  ${tw`xl:(w-[12.5rem] h-[12.5rem])`};
`;

const A4Wrapper = styled.header`
  ${tw`w-full mx-auto`};
  ${tw`px-5 py-6 mb-2.5`};
  ${tw`bg-blue-200 text-blue-100`};
  ${tw`font-display`};
  ${tw`flex items-center space-x-5`};

  h2 {
    ${tw`tracking-[1.5px] text-xl`};
  }

  h1 {
    ${tw`tracking-[1.5px] text-[1.75rem] leading-[2.1875rem]`};
  }
`;

const A4Logo = styled.div`
  ${tw`flex items-center justify-center`};
  ${tw`w-[4.6875rem] h-[4.6875rem]`};
`;

//! ----------> COMPONENTS <----------
export const A4Header = ({ title, subtitle }: Props ) => (
  <A4Wrapper>
    <A4Logo>
      <Image
        src="/images/menu/header.png"
        width={202}
        height={202}
        loading="eager"
        alt="Olive Foods Catering Company logo"
      />
    </A4Logo>
    <div>
      <h2 tw="md:(mb-1.5) xl:(mb-2)">{subtitle}</h2>
      <h1>{title}</h1>
    </div>
  </A4Wrapper>
);

const MenuHeader = ({ title, subtitle }: Props) => (
  <Container>
    <Logo>
      <Image
        src="/images/menu/header.png"
        width={202}
        height={202}
        loading="eager"
        alt="Olive Foods Catering Company logo"
      />
    </Logo>
    <div>
      <h2 tw="md:(mb-1.5) xl:(mb-2)">{subtitle}</h2>
      <h1>{title}</h1>
    </div>
  </Container>
);

export default MenuHeader;
