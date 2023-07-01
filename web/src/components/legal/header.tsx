import Image from "next/image";
import Link from "next/link";
import tw, { styled } from "twin.macro";

//! ----------> STYLES <----------
const Wrapper = styled.header`
  ${tw`w-full`};
  ${tw`bg-blue-200 text-blue-100`};
  ${tw`font-display tracking-[1.5px]`};
  ${tw`text-2xl md:(text-4xl) lg:(text-5xl) xl:(text-6xl)`};
  ${tw`border-b border-blue-300`};
`;

const Container = styled.div`
  ${tw`w-full max-w-[86rem] mx-auto`};
  ${tw`flex items-center space-x-5 md:(space-x-8)`};
  ${tw`px-[5.3%] py-6 md:(px-[5.2%] py-8) xl:(py-12) 2xl:(px-0)`};
`;

const Logo = styled(Link)`
  ${tw`flex items-center justify-center`};
  ${tw`w-[4.6875rem] h-[4.6875rem]`};
  ${tw`md:(w-[6.375rem] h-[6.375rem])`};
`;

//! ----------> COMPONENTS <----------
const LegalHeader = ({ title }: { title: string }) => {
  return (
    <Wrapper>
      <Container>
        <Logo href="/" aria-label="Home page">
          <Image
            src="/images/menu/header.png"
            width={202}
            height={202}
            loading="eager"
            alt="Olive Foods Catering Company logo"
          />
        </Logo>
        <h1>{title}</h1>
      </Container>
    </Wrapper>
  );
};

export default LegalHeader;
