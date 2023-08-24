/* eslint-disable no-secrets/no-secrets */
import type { NextPage, GetStaticProps } from "next";
import Image from "next/image";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
import "twin.macro";

import { Wrapper } from "@/style/base";
import Hero from "@/components/home/hero";
import Mission from "@/components/home/mission";
import Meet from "@/components/home/meet";
import config from "../next-seo.config";

import { homeQuery } from "@/utils/queries";
import { getClient } from "lib/sanity.client";
import type { SanityTestimonal } from "@/utils/types";

//! ----------> TYPES <----------
type Props = {
  testimonials: SanityTestimonal[];
};

//! ----------> COMPONENTS <----------
const Testimonials = dynamic(() => import("../src/components/general/testimonial"));
const Slides = dynamic(() => import("../src/components/home/slide"));

const HomePage: NextPage<Props> = ({ testimonials }) => {
  return (
    <>
      <NextSeo
        {...config}
        title="Olive Foods Catering Co."
        description="Olive Foods Catering Company - Twin Cities, MN"
        canonical="https://olivefoodsco.com"
      />
      <Hero />
      <div tw="w-full bg-green-100">
        <Wrapper>
          <h1 tw="text-orange-200 text-5xl font-display tracking-[1px] pb-10 md:(text-[56px] pb-12) lg:(text-6xl) xl:(text-8xl pb-20)">
            Olive Foods Catering Co.
          </h1>
        </Wrapper>
      </div>
      <section tw="w-full h-44 flex bg-orange-200 md:(h-[18.15625rem]) xl:(h-[36.3125rem])">
        <Image
          src="/images/home/HOME-001.webp"
          width={2048}
          height={1366}
          placeholder="blur"
          blurDataURL="LTOMmVIo.TZgyYn*r?b^McM_WUxu"
          style={{ objectFit: `cover`, objectPosition: `bottom` }}
          alt="A woman in an orange apron preparing a charcuterie board"
          quality={100}
          tw="mx-auto"
        />
      </section>

      <Mission />
      <Testimonials items={testimonials} />
      <Meet />
      <Slides />
    </>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps<Props> = async ({ preview = false }) => {
  const client = getClient();
  const page = await client.fetch(homeQuery);

  return {
    props: {
      testimonials: page[0].testimonials ?? [],
    },
  };
};
