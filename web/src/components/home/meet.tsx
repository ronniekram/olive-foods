import Image from "next/image";
import "twin.macro";

import { Wrapper } from "@/style/base";
import { LinkButton } from "../general/button";

//! ----------> COMPONENTS <----------
const Meet = () => (
  <div tw="w-full bg-green-100 py-14">
    <Wrapper tw="flex flex-col space-y-8 md:(flex-row-reverse space-y-0 items-center justify-between)">
      <div tw="w-full flex rounded-2xl overflow-hidden h-[20.3125rem] md:(w-[17.1875rem]) lg:(w-[19rem]) xl:(w-[29.125rem] h-[31.25rem]) 2xl:(w-[35.125rem] h-[31.25rem])">
        <Image
          src="/images/home/HOME-004.png"
          width={1366}
          height={2049}
          alt="A person in an orange apron pulling apart slow cooked chicken with two forks in a metal bowl"
          style={{ objectFit: `cover`, objectPosition: `bottom` }}
        />
      </div>

      <div tw="flex flex-col space-y-4 md:(w-[21rem]) lg:(w-[60%]) 2xl:(w-[50%])">
        <h2 tw="text-[28px] text-grey leading-[28px] tracking-[1px] font-display lg:(text-5xl) xl:(text-6xl tracking-normal)">
          Meet the <span tw="text-orange-200">Chief Curator</span> & <span tw="text-orange-200">Master of Cookery</span>
        </h2>

      <LinkButton label="Our Story" href="/our-story" />
      </div>

    </Wrapper>
  </div>
);

export default Meet;
