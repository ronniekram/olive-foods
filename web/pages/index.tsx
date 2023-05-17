import Image from "next/image";
import tw, { styled } from "twin.macro";

import { Wrapper } from "@/style/base";
import Hero from "@/components/home/hero";
import Mission from "@/components/home/mission";
import Meet from "@/components/home/meet";

const HomePage = () => {
  return (
    <>
      <Hero />
      <div tw="w-full bg-green-100">
        <Wrapper>
          <h1 tw="text-orange-200 text-5xl font-display tracking-[1px] pb-10 md:(text-[56px] pb-12) lg:(text-6xl) xl:(text-8xl pb-20)">Olive Foods Catering Co.</h1>
        </Wrapper>
      </div>
      <section tw="w-full h-44 flex md:(h-[18.15625rem]) xl:(h-[36.3125rem])">
        <Image src="/images/home/HOME-001.png" width={2048} height={1366} style={{ objectFit: `cover`, objectPosition: `bottom` }} alt="A woman in an orange apron preparing a charcuterie board" />
      </section>

      <Mission />
      <Meet />
    </>
  );
};

export default HomePage;
