/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link";
import tw, { styled } from "twin.macro";
import { useSpring, animated as a } from "react-spring";
import useMeasure from "react-use-measure";

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
const Mobile = ({ open }: { open: boolean }) => {
  const [ref, bounds] = useMeasure();

  const spring = useSpring({
    height: open ? bounds.height : 0,
    zIndex: open ? 10 : -1,
  });

  return (
    <a.div style={spring} tw="overflow-hidden mt-16 md:(hidden)">
      <Wrapper ref={ref}>
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
    </a.div>
  );
};

export default Mobile;
