/* eslint-disable no-secrets/no-secrets */
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import tw, { styled, TwStyle } from "twin.macro";
import { useWindowSize } from "react-use";
import { Text } from "@visx/text";
import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from "react-icons/hi";
import { useSpringCarousel } from "react-spring-carousel";
import { gentle } from "@/utils/fonts";

//! ----------> TYPES <----------
export type SlideData = {
  img: {
    url: string;
    width: number;
    height: number;
    alt: string;
    blurHash: string;
  };
  label: string;
  href: string;
  color: TwStyle;
};

const slides: SlideData[] = [
  {
    img: {
      url: `/images/slides/SLIDE-001.webp`,
      width: 1560,
      height: 1040,
      alt: `Person wearing a blue apron preparing carrots and tomatoes in a bright kitchen`,
      blurHash: `LSL4Nbtm.8R5pK~WaeEOroM|Rjoz`,
    },
    label: `Event Catering`,
    href: `/catering#events`,
    color: tw`bg-orange-200`,
  },
  {
    img: {
      url: `/images/slides/SLIDE-002.webp`,
      width: 1040,
      height: 1560,
      alt: `A charcuterie board with meats, cheeses, olives, pickles and bread on a white background`,
      blurHash: `LhOpY_of.9tQ%0ogf,oy?wf5MxWB`,
    },
    label: `Charcuterie Boards`,
    href: `/catering#boards`,
    color: tw`bg-green-200`,
  },
  {
    img: {
      url: `/images/slides/SLIDE-003.webp`,
      width: 1040,
      height: 1456,
      alt: `Chef wearing a blue apron holding a black sheet tray filled with cut tomatoes and a white towel`,
      blurHash: `LJHd{h9v~qEM%Lb^=^NHYQ-p-;IA`,
    },
    label: `Chef Experiences`,
    href: `/catering#chef`,
    color: tw`bg-blue-200`,
  },
  {
    img: {
      url: `/images/slides/SLIDE-004.webp`,
      width: 1040,
      height: 1560,
      alt: `Many kinds of meals pre-prepared in individual servings`,
      blurHash: `LOJaipM|tk%2S5M}oNM_~oNFadX9`,
    },
    label: `Meal Services`,
    href: `/services`,
    color: tw`bg-green-500`,
  },
];

//! ----------> STYLES <----------
const Container = styled.div`
  ${tw`w-screen h-[23.3125rem] md:(h-[33.0625rem]) lg:(h-[40rem]) xl:(h-[50.4375rem])`};
  ${tw`text-green-100`};
  ${tw`flex items-center justify-center`};
`;

const TextWrap = styled.div`
  svg {
    ${tw`w-[15.625rem] md:(w-[25rem]) lg:(w-[32rem]) xl:(w-[43.75rem])`};
    ${tw`h-10 md:(h-[3.75rem]) lg:(h-20) xl:(h-[6.75rem])`};
    ${tw`fill-green-100`};
    drop-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  }
`;

const ImageWrap = styled.div`
  ${tw`w-[15.625rem] md:(w-[25rem]) lg:(w-[32rem]) xl:(w-[43.75rem])`};
  ${tw`h-[13.5625rem] md:(h-[17.875rem]) lg:(h-[22rem]) xl:(h-[28rem])`};
  ${tw`flex rounded-2xl overflow-hidden`};
  ${tw`border-grey border`};
`;

const navStyle = tw`h-full flex items-center absolute z-10 text-green-100 text-[24px] md:(text-[40px]) xl:(text-[48px])`;

//! ----------> COMPONENTS <----------
const Label = ({ text, stroke, font }: { text: string; stroke: number; font: number }) => {
  const words = text.split(` `);

  return (
    <div
      className={gentle.className}
      tw="-mt-5 -ml-1.5 md:(-mt-[2.5rem] -ml-10) lg:(-mt-14 -ml-12) xl:(-mt-[5rem] -ml-24)"
    >
      {words.map((word) => (
        <TextWrap key={word}>
          <Text
            verticalAnchor="start"
            style={{ fontSize: font, fontFamily: `var(--display)` }}
            strokeWidth={stroke}
          >
            {word}
          </Text>
        </TextWrap>
      ))}
    </div>
  );
};

const Slides = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const { width } = useWindowSize();
  const font = width < 376 ? 44 : width < 769 ? 70 : width < 1279 ? 96 : 128;
  const stroke = width < 376 ? 1 : width < 769 ? 1.5 : width < 1279 ? 2 : 2.5;
  const btnStroke = width < 376 ? 1 : width < 769 ? 1.25 : width < 1279 ? 1.5 : 1.75;

  const { carouselFragment, slideToPrevItem, slideToNextItem } = useSpringCarousel({
    withLoop: true,
    items: slides.map((slide) => ({
      id: slide.label,
      renderItem: (
        <Container
          css={[slide.color]}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Link href={slide.href} css={[tw`stroke-grey`]}>
            <>
              <ImageWrap>
                <Image
                  src={slide.img.url}
                  width={slide.img.width}
                  height={slide.img.height}
                  placeholder="blur"
                  blurDataURL={slide.img.blurHash}
                  alt={slide.img.alt}
                  style={{ objectFit: `cover`, objectPosition: `center` }}
                  quality={100}
                  priority
                />
              </ImageWrap>
              <Label text={slide.label} stroke={stroke} font={font} />
            </>
          </Link>
        </Container>
      ),
    })),
    springConfig: { tension: 280, friction: 60 },
  });

  useEffect(() => {
    const interval = setInterval(slideToNextItem, 4000);

    if (isHovered) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [slideToNextItem, isHovered]);

  return (
    <section tw="relative w-screen h-[fit-content] overflow-hidden">
      <button
        css={[navStyle]}
        tw="pl-[5.2%] md:(pl-[5.3%]) left-0"
        aria-label="Previous slide"
        onClick={slideToPrevItem}
      >
        <HiOutlineArrowNarrowLeft strokeWidth={btnStroke} />
      </button>
      <button
        css={[navStyle]}
        tw="pr-[5.2%] md:(pr-[5.3%]) right-0"
        aria-label="Next slide"
        onClick={slideToNextItem}
      >
        <HiOutlineArrowNarrowRight strokeWidth={btnStroke} />
      </button>

      {carouselFragment}
    </section>
  );
};

export default Slides;
