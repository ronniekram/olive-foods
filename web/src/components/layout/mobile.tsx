import tw, { styled } from "twin.macro";

import { items, NavItem } from "./nav";

//! ----------> STYLES <----------
const Wrapper = styled.div`
  ${tw`w-full h-screen bg-green-100`};
  ${tw`flex flex-col justify-between`};
  ${tw`px-5 pt-16 pb-24`};

  h2 {
    ${tw`text-blue-200 font-display text-[54px] leading-[64px] tracking-[1px]`};
  }
`;

const Container = styled.ul`
  ${tw`flex flex-col space-y-9`};
`;

//! ----------> COMPONENTS <----------
const Mobile = () => {
  return (
    <Wrapper>
      <Container>
        {items.map((item) => (
          <li key={item.href}>
            <NavItem href={item.href} prefetch={false}>
              {item.label}
            </NavItem>
          </li>
        ))}
      </Container>

      <h2>Olive Foods Catering Co.</h2>
    </Wrapper>
  );
};

export default Mobile;
