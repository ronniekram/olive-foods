/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import tw, { styled } from "twin.macro";
import { useSpring, config, animated as a } from "@react-spring/web";
import { useWindowSize } from "react-use";
import { Fade as Burger } from "hamburger-react";
import { RemoveScroll } from "react-remove-scroll";
import useMeasure from "react-use-measure";

import { useScrollListener } from "@/utils/use-scroll-lock";
import Mobile from "./mobile";

//! ----------> TYPES <----------
export const items = [
  {
    href: `/catering`,
    label: `Catering`,
  },
  {
    href: `/meal-services`,
    label: `Meal Services`,
  },
  {
    href: `/our-story`,
    label: `Our Story`,
  },
  {
    href: `/contact`,
    label: `Contact Us`,
  },
];

//! ----------> STYLES <----------
export const NavItem = styled(Link)`
  ${tw`font-display text-orange-200 text-[40px]`};
  ${tw`md:(text-xl leading-[24px] tracking-[0.5px])`};
  ${tw`xl:(text-3xl leading-[36px])`};
  ${tw`transition duration-300 ease-in-out`};
  ${tw`hover:(text-blue-200)`};
`;

const Wrapper = styled.nav`
  ${tw`w-full px-[5.2%] md:(px-[5.3%])`};
  ${tw`2xl:(px-0 max-w-[86rem] mx-auto)`};
  ${tw`flex items-center justify-between`};
  ${tw`antialiased`};

  .hamburger-react {
    @media (min-width: 768px) {
      ${tw`hidden`};
    }
  }
`;

const MobileContainer = styled(a.nav)`
  ${tw`w-screen flex`};
  ${tw`fixed lg:(hidden)`};
  ${tw`top-20`};
`;

//! ----------> COMPONENTS <----------
const NavBar = () => {
  const router = useRouter();
  const [ref, bounds] = useMeasure();

  const [open, setOpen] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);

  const scroll = useScrollListener();
  const { width } = useWindowSize();

  const springHeight = width < 768 ? -80 : width < 1280 ? -96 : -144;

  const spring = useSpring({
    to: { top: show ? 0 : springHeight, zIndex: show ? 50 : 20 },
    config: { ...config.slow, clamp: true },
  });

  const mobileSpring = useSpring({
    height: open ? `100vh` : `0vh`,
    zIndex: 10,
  });

  useEffect(() => {
    if (scroll.y > 100 && scroll.y - scroll.lastY > 0) {
      setShow(false);
    } else {
      setShow(true);
    }
  }, [scroll.y, scroll.lastY]);

  useEffect(() => {
    router.events.on(`routeChangeStart`, () => setOpen(false));

    return () => router.events.off(`routeChangeStart`, () => setOpen(false));
  }, []);

  return (
    <RemoveScroll enabled={open}>
      <>
        <a.header
          tw="w-full bg-green-100 py-3 md:(py-4) xl:(py-5) fixed top-0"
          style={spring}
          id="nav"
        >
          <Wrapper>
            <Link href="/" prefetch={false} tw="w-14 h-auto md:(w-16) xl:(w-20)" aria-label="Home">
              <Image
                src="/logo.png"
                width={304}
                height={307}
                alt="Olive Foods Catering Co. logo, orange background with thick blue outline and white text"
                priority
                quality={100}
              />
            </Link>
            <h1 tw="text-2xl text-orange-200 font-display tracking-[1px] md:(hidden)">
              Olive Foods Co.
            </h1>

            <Burger
              toggled={open}
              toggle={setOpen}
              size={24}
              rounded
              label={open ? `Close menu` : `Open menu`}
              color="#E95C32"
            />

            <ul tw="hidden list-none! md:(flex items-center space-x-6 space-y-0) xl:(space-x-16)">
              {items.map((item) => (
                <li key={item.href}>
                  <NavItem href={item.href} prefetch={false}>
                    {item.label}
                  </NavItem>
                </li>
              ))}
            </ul>
          </Wrapper>
        </a.header>
        <MobileContainer ref={ref} style={mobileSpring} tw="overflow-hidden">
          <Mobile />
        </MobileContainer>
      </>
    </RemoveScroll>
  );
};

export default NavBar;
