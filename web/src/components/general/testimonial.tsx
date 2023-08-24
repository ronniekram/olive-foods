/* eslint-disable unicorn/numeric-separators-style */
import { useState, useEffect } from "react";
import tw, { styled, css } from "twin.macro";
import { useSpringCarousel } from "react-spring-carousel";

import { Testimonial as Props } from "lib/sanity.queries";
import { Background } from "@/assets/svg/testimonial";

//! ----------> TYPES <----------
const colorStyles = {
  green: css`
    ${tw`bg-green-100 text-green-400`};
    ${tw`border-y border-green-400`};
    p {
      ${tw`text-green-400`};
    }
    blockquote {
      ${tw`text-green-500`};
    }
    button {
      ${tw`w-4 h-4 rounded-full`};
      ${tw`bg-green-400 border border-green-400`};
    }
    .active {
      ${tw`bg-green-100`};
    }
  `,
  orange: css`
    ${tw`bg-orange-100 text-orange-200`};
    ${tw`border-y border-orange-200`};
    p {
      ${tw`text-orange-200`};
    }
    blockquote {
      ${tw`text-orange-300`};
    }
    button {
      ${tw`w-4 h-4 rounded-full`};
      ${tw`bg-orange-200 border border-orange-200`};
    }
    .active {
      ${tw`bg-orange-100`};
    }
  `,
  blue: css`
    ${tw`bg-blue-100 text-blue-200`};
    ${tw`border-y border-blue-200`};
    p {
      ${tw`text-blue-200`};
    }
    blockquote {
      ${tw`text-blue-300`};
    }
    button {
      ${tw`w-4 h-4 rounded-full`};
      ${tw`bg-blue-200 border border-blue-200`};
    }
    .active {
      ${tw`bg-blue-100`};
    }
  `,
};

export type Color = keyof typeof colorStyles;

//! ----------> STYLES <----------
const Quote = styled.figure`
  ${tw`w-full max-w-[70rem] mx-auto`};
  ${tw`px-[6%] md:(px-[8%]) lg:(px-[10%]) xl:(px-0)`};
  ${tw`flex flex-col space-y-5 justify-center md:(space-y-6) xl:(space-y-8) 2xl:(space-y-10)`};

  blockquote {
    ${tw`text-base font-sans`};
    ${tw`md:(text-2xl) xl:(text-3xl)`};
    ${tw`mt-1.5 pr-1 md:(mt-0 pr-1.5) xl:(pr-3 mt-1)`};
  }

  figcaption {
    ${tw`w-full text-right`};
    ${tw`font-display text-[40px] leading-[44px]`};
    ${tw`md:(text-5xl) xl:(text-[64px] leading-[65px])`};
  }
`;

const Slide = tw.div`transition duration-300 ease-in-out w-full relative overflow-x-hidden py-8 md:(py-12) lg:(py-16) xl:(py-24) 2xl:(py-28)`;

const Thumb = tw.button`rounded-full overflow-visible w-2.5 h-2.5 mx-2 md:(w-5 h-5)`;

//! ----------> COMPONENTS <----------
const Testimonial = ({ name, body }: Props) => {
  return (
    <Quote>
      <div tw="flex space-x-3 xl:(space-x-4)">
        <p tw="font-display text-5xl md:(text-7xl) lg:(text-[80px]) xl:(text-8xl)">“</p>
        <blockquote>{body}"</blockquote>
      </div>
      <figcaption>- {name}</figcaption>
    </Quote>
  );
};

const Slider = ({ items }: { items: Props[] }) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const [activeSlide, setActiveSlide] = useState<number>(0);

  const {
    carouselFragment,
    thumbsFragment,
    slideToNextItem,
    slideToItem,
    useListenToCustomEvent,
    getCurrentActiveItem,
  } = useSpringCarousel({
    initialActiveItem: 0,
    withLoop: true,
    withThumbs: true,
    items: items.map((item, i) => ({
      id: `testimonial-${i}`,
      renderItem: (
        <Testimonial
          name={item.name}
          body={item.body}
          color={item.color}
          key={`testimonial-${i}`}
        />
      ),
      renderThumb: (
        <Thumb
          onClick={() => slideToItem(i)}
          aria-label={`Go to slide ${i}`}
          className={activeSlide === i ? `active` : ``}
        />
      ),
    })),
  });

  useListenToCustomEvent((event) => {
    if (event.eventName === `onSlideStartChange`) setActiveSlide(getCurrentActiveItem().index);
  });

  useEffect(() => {
    if (isHover) return;
    const interval = setInterval(slideToNextItem, 10000);
    return () => clearInterval(interval);
  }, [slideToNextItem, isHover, setIsHover]);

  return (
    <Slide css={[colorStyles[items[activeSlide].color ?? `green`]]}>
      <div tw="relative w-full z-10 flex flex-col items-center space-y-1.5">
        {carouselFragment}
        <div tw="mx-auto">{thumbsFragment}</div>
      </div>

      <div tw="absolute left-0 bottom-4 z-0 w-full md:(w-[65%] bottom-6) lg:(w-[50%]) xl:(w-[46%]) 2xl:(w-[42%] bottom-7)">
        <Background />
      </div>
    </Slide>
  );
};

export default Slider;
