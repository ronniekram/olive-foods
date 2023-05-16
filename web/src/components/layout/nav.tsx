/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import tw, { styled } from "twin.macro";
import { useSpring, config, animated as a } from "react-spring";
import { useWindowSize } from "react-use";
import { Fade as Burger } from "hamburger-react";
import { ScrollLocky } from "react-scroll-locky";

import { useScrollListener } from "@web/utils/use-scroll-lock";

//! ----------> TYPES <----------
export const items = [
  {
    href: `/catering`,
    label: `Catering`,
  },
  {
    href: `/services`,
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
  ${tw`transiton duration-300 easein-in-out`};
  ${tw`hover:(text-blue-200)`};
`;

const Wrapper = styled.nav`
  ${tw`w-full px-[5.2%] md:(px-[5.3%])`};
  ${tw`2xl:(px-0 max-w-[86rem] mx-auto)`};
  ${tw`flex items-center justify-between`};
  ${tw`antialiased`};
`;

//! ----------> COMPONENTS <----------
const NavBar = () => {
  const router = useRouter();

  const [open, setOpen] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);

  const scroll = useScrollListener();
  const { width } = useWindowSize();

  const springHeight = width < 768 ? -56 : width < 1280 ? -96 : -144;

  const spring = useSpring({
    to: { top: show ? 0 : springHeight, zIndex: show ? 50 : 20 },
    config: { ...config.slow, clamp: true },
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
    <ScrollLocky enabled={open}>
      <a.header tw="w-full bg-green-100 h-14 py-3 md:(h-24 py-4) xl:(h-36 py-5)" style={spring}>
        <Wrapper>
          <Image src="/logo.png" width={304} height={307} alt="Olive Foods Catering Co. logo, orange background with thick blue outline and white text" priority quality={100} />

          <h1 tw="text-2xl text-orange-200 font-display tracking-display md:(hidden)">Olive Foods Co.</h1>

          {width < 768 ? (
            <Burger toggled={open} toggle={setOpen} size={32} rounded label={open ? `Close menu` : `Open menu`} color="#E95C32" />
          ) : (
            <ul tw="flex flex-col space-y-11 md:(flex-row items-center space-x-6 space-y-0) xl:(space-x-16)">
              {items.map((item) => (
                <li key={item.href}>
                  <NavItem href={item.href} preload="false">
                    {item.label}
                  </NavItem>
                </li>
              ))}
            </ul>
          )}
        </Wrapper>
      </a.header>
    </ScrollLocky>
  );
};

export default NavBar;
