import Image from "next/image";
import Link from "next/link";
import tw, { styled, css } from "twin.macro";

import { Wrapper as W } from "@/style/base";

//! ----------> TYPES <----------
type Props = {
  heading: string;
  text: string[];
  color: keyof typeof colors;
  img: string;
  alt: string;
  imgLeft?: boolean;
};

const colors = {
  green: css`
    ${tw`bg-green-100 text-green-500`};
    h3 {
      ${tw`text-green-400`};
    }
  `,
  blue: css`
    ${tw`bg-blue-100 text-blue-300`};
    h3 {
      ${tw`text-blue-200`};
    }
  `,
  orange: css`
    ${tw`bg-orange-100 text-orange-300`};
    h3 {
      ${tw`text-orange-200`};
    }
  `,
};

//! ----------> STYLES <----------
const Wrapper = styled(W)(({ imgLeft }: { imgLeft?: boolean }) => [
  tw`py-12 md:(py-14) xl:(py-20)`,
  tw`md:(flex items-center space-x-5) lg:(space-x-8) xl:(space-x-14) 2xl:(space-x-20)`,
  imgLeft ? tw`md:(flex-row-reverse)` : tw`md:(flex-row)`,
]);

const Content = styled.div`
  ${tw`flex flex-col [flex-shrink: 0] space-y-6`};
  ${tw`md:(space-y-3 w-[60%]) xl:(w-[65%] space-y-5)`};
  ${tw`2xl:(w-[60%])`};
  ${tw`transition duration-300 ease-in-out`};

  h3 {
    ${tw`font-display text-3xl`};
    ${tw`md:(text-[40px]) xl:(text-7xl)`};
  }

  a {
    ${tw`transition duration-300 ease-in-out`};
  }

  p {
    ${tw`font-sans text-sm lg:(text-base) xl:(text-xl) 2xl:(text-2xl)`};
  }
`;

//! ----------> COMPONENTS <----------
export const ContactCols = () => {
  return (
    <div tw="bg-green-100 text-green-500">
      <Wrapper>
        <div tw="flex w-fit px-4 mb-10 md:(px-0 mb-0)">
          <Image
            src="/images/story/VEG.png"
            alt="Minimalist flat line illustration of bouquet garniet with a green circle in the background"
            loading="lazy"
            quality={100}
            width={1132}
            height={837}
          />
        </div>
        <Content tw="md:(pl-6) lg:(pl-16) 2xl:(pl-20)">
          <h3>
            <Link href="/contact" prefetch={false} tw="text-green-400 hover:(text-green-500)">
              Contact us
            </Link>{" "}
            today to start planning your next event.
          </h3>
        </Content>
      </Wrapper>
    </div>
  );
};

const TwoCol = ({ heading, text, color, img, alt, imgLeft }: Props) => {
  return (
    <div css={colors[color]}>
      <Wrapper imgLeft={imgLeft}>
        <Content
          css={[imgLeft && tw`md:(pl-6) lg:(pl-16) 2xl:(pl-20)`, !imgLeft && tw`2xl:(pr-8)`]}
        >
          <h3>{heading}</h3>
          <Image
            src={img}
            alt={alt}
            loading="lazy"
            quality={100}
            width={470.71}
            height={393.34}
            tw="px-4 flex md:(hidden)"
          />
          {text.map((x, i) => (
            <p key={`text-${i}`}>{x}</p>
          ))}
        </Content>
        <div tw="hidden md:(flex w-full)">
          <Image src={img} alt={alt} loading="lazy" quality={100} width={1002} height={837} />
        </div>
      </Wrapper>
    </div>
  );
};

export default TwoCol;
