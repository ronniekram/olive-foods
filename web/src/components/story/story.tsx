/* eslint-disable no-secrets/no-secrets */
import Image from "next/image";
import tw, { styled } from "twin.macro";

import { Wrapper } from "@/style/base";

const Container = styled.div`
  ${tw`bg-green-500 text-green-100`};
  ${tw`pt-[4.5rem] pb-14`};
  ${tw`md:(py-[4.5rem])`};
  ${tw`xl:(py-20)`};

  background-image: url("/images/story/bg.svg");
  background-size: 67%;
  background-repeat: no-repeat;
  background-position: top right;

  @media (min-width: 768px) {
    background-size: 49%;
  }

  @media (min-width: 1280px) {
    background-size: 41%;
  }
`;

const Bio = ({
  name,
  img,
  detail,
  blurHash,
}: {
  name: string;
  img: string;
  detail: string;
  blurHash: string;
}) => (
  <div tw="sm:(flex space-x-5) md:(space-x-8)">
    <div>
      <h3 tw="text-green-300 font-display text-2xl sm:(text-3xl mb-2.5) lg:(text-5xl) xl:(text-3xl)">
        {name}
      </h3>
      <p tw="text-green-100 font-sans text-sm mt-1 mb-3 sm:(text-lg) lg:(text-xl) xl:(text-lg)">
        {detail}
      </p>
    </div>
    <div tw="flex rounded-2xl overflow-hidden sm:(min-w-[13.8125rem]) md:(min-w-[15.625rem]) h-[15.625rem] md:(h-[13.8125rem])">
      <Image
        src={img}
        width={336}
        height={314}
        placeholder="blur"
        blurDataURL={blurHash}
        alt={name}
        quality={100}
        loading="lazy"
        style={{ objectFit: `cover`, objectPosition: `center` }}
        tw="w-full"
      />
    </div>
  </div>
);

const OurStory = () => {
  return (
    <Container>
      <Wrapper tw="md:(pt-10)">
        <h1 tw="font-display text-6xl md:(text-7xl) lg:(text-8xl)">Our Story</h1>
        <div tw="flex flex-col space-y-2.5 pt-10 md:(space-y-4 pt-20) lg:(space-y-6) xl:(mb-10)">
          <h2 tw="text-[28px] text-green-300 font-display md:(text-6xl)">
            We are Phillip & Lauren
          </h2>
          <p tw="text-base text-green-100 font-sans md:(text-xl) lg:(text-2xl)">
            Meet the bread and butter of Olive Foods Catering Company, the husband and wife duo.
          </p>
        </div>

        <div tw="grid grid-cols-1 gap-y-8 pt-4 md:(gap-y-12) lg:(gap-y-16) xl:(w-full grid-cols-[44%, 52.5%] gap-y-0 gap-x-10 items-end) 2xl:(grid-cols-[44%, 53%])">
          <div tw="flex w-full rounded-2xl overflow-hidden h-[15.625rem] md:(h-[30.1875rem]) xl:(h-[38.3125rem])">
            <Image
              src="/images/story/STORY-001.webp"
              width={688}
              height={696}
              placeholder="blur"
              blurDataURL="LgNS~VOE.S#l?^wcxaN_%MRkM|jY"
              alt="Husband and wife wearing aprons and smiling brightly"
              quality={100}
              loading="eager"
              style={{ objectFit: `cover`, objectPosition: `center` }}
              tw="w-full"
            />
          </div>

          <div tw="flex flex-col space-y-8 md:(space-y-12) xl:(space-y-10)">
            <Bio
              name="Phillip"
              img="/images/story/STORY-002.webp"
              detail="Phillip is a classically trained chef with an exceptional eye for detail. After over 7 years as an executive chef, he transitioned to teaching his craft at Cooks of Crocus Hill."
              blurHash="LfN0J0MI~VoL}?oeIokWIUo#V?ad"
            />

            <h3 tw="text-green-100 text-xl font-display sm:(text-3xl) md:(text-4xl)">
              Bringing people together through food is at the heart of what we do.
            </h3>

            <Bio
              name="Lauren"
              img="/images/story/STORY-003.webp"
              detail="Lauren is a service industry veteran whose passion for cooking stems from her family's long lineage of skilled cooks. She has been perfecting her craft since 2010."
              blurHash="LLP;}X-p_N0~-QI;D*id;LRjXmyD"
            />
          </div>
        </div>
      </Wrapper>
    </Container>
  );
};

export default OurStory;
