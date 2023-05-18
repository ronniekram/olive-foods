import Image from "next/image";
import tw, { styled } from "twin.macro";

import { Wrapper } from "@/style/base";

//! ----------> STYLES <----------
const MissionH2 = styled.h2`
  ${tw`text-2xl font-display`};
  ${tw`md:(w-[20.9375rem])`};
  ${tw`lg:(text-3xl w-[28rem])`};
  ${tw`xl:(w-[39.375rem] text-5xl)`};
`;

const MissionImage = styled.div`
  ${tw`flex w-full h-[11.325625rem]`};
  ${tw`rounded-2xl overflow-hidden`};
  ${tw`md:(w-[48%]) lg:(h-[15rem]) xl:(w-[46%] h-[23rem])`};
`;

//! ----------> COMPONENTS <----------
const Mission = () => (
  <>
    <section tw="w-full bg-green-100 py-12">
      <Wrapper tw="flex flex-col space-y-8 md:(flex-row items-center justify-between)">
        <MissionH2 tw="text-green-500 pr-4">Exceptional hospitality driven by <span tw="text-green-400">innovation</span>, <span tw="text-green-400">quality</span> and <span tw="text-green-400">collaboration</span></MissionH2>
        <MissionImage>
          <Image
            src="/images/home/HOME-002.png"
            width={2048}
            height={1366}
            style={{ objectFit: `cover`, objectPosition: `bottom` }}
            alt="Several women standing around a table full of snacks, talking and laughing"
            quality={100}
            loading="lazy"
          />
        </MissionImage>
      </Wrapper>
    </section>

    <section tw="w-full bg-green-400 py-12 md:(py-14) xl:(py-20)">
      <Wrapper tw="flex flex-col space-y-8 md:(flex-row-reverse items-center justify-between)">
        <MissionH2 tw="text-green-100 xl:(w-[36rem]) 2xl:(w-[42rem])">We foster <span tw="text-green-500">connections</span> and cultivate <span tw="text-green-500">community</span> through the love and art of <span tw="text-green-500">food</span></MissionH2>
        <MissionImage>
          <Image
            src="/images/home/HOME-003.png"
            width={2048}
            height={1366}
            style={{ objectFit: `cover`, objectPosition: `bottom` }}
            alt="A group of people making a toast, shot from below with a clear blue sky in the background"
            quality={100}
            loading="lazy"
          />
        </MissionImage>
      </Wrapper>
    </section>
  </>
);

export default Mission;
