import Image from "next/image";
import tw, { styled } from "twin.macro";

import Breaker from "../general/breaker";

//! ----------> TYPES <----------
type ItemProps = {
  title: string;
  body: string;
};

type Props = {
  title: string;
  detail: string;
  image: string;
  items: ItemProps[];
  menu?: string;
  mediaLeft?: boolean;
};

//! ----------> STYLES <----------
const Container = styled.section(({ mediaLeft }: { mediaLeft?: boolean}) => [
  tw`grid grid-cols-1`,
  mediaLeft ? tw`lg:(grid-cols-[48%, 45.5%])` : tw`lg:(grid-cols-[45.5%, 48%])`,
  tw`gap-y-8 md:(gap-y-11) lg:(gap-y-0 gap-x-8) xl:(gap-x-12)`,
  tw`pt-5 md:(pt-10) lg:(py-4) xl:(py-10)`,
]);

const ImageWrap = styled.div`
  ${tw`flex rounded-2xl overflow-hidden`};
  ${tw`border border-grey`};
  ${tw`h-[11.25rem] md:(h-[25rem]) lg:(h-full max-h-[52.125rem]) xl:(max-h-[58rem]) 2xl:(max-h-[59rem])`};
`;

const H3 = styled.h3`
  ${tw`text-orange-200 text-3xl font-display`};
  ${tw`md:(text-[40px]) xl:(text-5xl)`};
  ${tw`mb-2 md:(mb-4)`};
`;

const H4 = styled.h4`
  ${tw`text-orange-200 text-xl font-display`};
  ${tw`md:(text-[28px]) xl:(text-3xl)`};
`;

const Heading = styled.p`
  ${tw`text-grey text-sm font-sans`};
  ${tw`md:(text-base) xl:(text-xl)`};
`;

const Detail = styled.p`
  ${tw`text-grey text-xs font-sans`};
  ${tw`md:(text-sm) xl:(text-lg)`};
`;

//! ----------> COMPONENTS <----------
const Item = ({ title, body }: ItemProps) => {
  return (
    <div tw="flex flex-col space-y-1.5 md:(space-y-2)">
      <H4>{title}</H4>
      <Detail>
        {body}
      </Detail>
    </div>
  );
};

const CateringSection = ({ title, detail, image, items, menu, mediaLeft }: Props) => {
  return (
    <Container>
      <div tw="flex flex-col space-y-6 xl:(space-y-8 w-[92.5%]) 2xl:(w-[95%])" css={[mediaLeft && tw`lg:(order-2)`]}>
        <div>
          <H3>{title}</H3>
          <Heading>{detail}</Heading>
        </div>

        <Breaker />

        {items.map((item) => (
          <Item key={item.title} title={item.title} body={item.body} />
        ))}
      </div>
      <ImageWrap css={[mediaLeft && tw`lg:(order-1)`]}>
        <Image
          src={image}
          alt=""
          width={1366}
          height={2048}
          style={{ objectFit: `cover`, objectPosition: `center` }}
          loading="eager"
          quality={100}
        />
      </ImageWrap>
    </Container>
  );
};

export default CateringSection;

