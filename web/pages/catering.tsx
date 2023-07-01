/* eslint-disable react/jsx-key */
import type { NextPage, GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
import tw, { styled } from "twin.macro";

import { Wrapper } from "@/style/base";
import CateringHero from "@/components/catering/hero";
import CateringSection from "@/components/catering/section";
import CateringCTA from "@/components/catering/cta";
import config from "../next-seo.config";

import { cateringQuery } from "@/utils/queries";
import { getClient } from "lib/sanity.client";
import type { SanityCatering } from "@/utils/types";

import {
  eventHeading,
  interactiveHeading,
  homeHeading,
  boardHeading,
  cta1,
  cta2,
  cta3
} from "@/components/catering/data";

//! ----------> STYLES <----------
const H2 = styled.h2`
  ${tw`text-blue-200 text-4xl font-display`};
  ${tw`md:(text-6xl) xl:(text-7xl)`};
  ${tw`mb-3 lg:(mb-10) xl:(mb-5)`};
`;

//! ----------> COMPONENTS <----------
const Testimonials = dynamic(() => import("../src/components/general/testimonial"));

const CateringPage: NextPage<SanityCatering> = ({ events, interactive, atHome, boards, testimonials }) => {
  return (
    <>
      <NextSeo
        {...config}
        title="Catering"
        description="Event catering, dinner parties, charcuterie boards from Olive Foods Catering Company"
        canonical="https://olivefoodsco.com/catering"
      />
      <CateringHero />

        <Wrapper tw="md:(py-8) lg:(py-10) xl:(py-12)" id="events">
          <H2>Small Event Catering</H2>
          <CateringSection
            title={eventHeading.title}
            detail={eventHeading.detail}
            image={eventHeading.image}
            items={events}
            mediaLeft
          />
        </Wrapper>
        <CateringCTA title={cta1.title} body={cta1.body} bg={cta1.bg} />
        <Wrapper tw="md:(py-8) lg:(py-10) xl:(py-12)" id="chef">
          <H2>Chef Experiences</H2>
          <div tw="lg:(flex flex-col space-y-14)">
            <CateringSection
              title={interactiveHeading.title}
              detail={interactiveHeading.detail}
              image={interactiveHeading.image}
              items={interactive}
              mediaLeft
            />
            <CateringSection
              title={homeHeading.title}
              detail={homeHeading.detail}
              image={homeHeading.image}
              items={atHome}
            />
          </div>
        </Wrapper>
        <CateringCTA title={cta2.title} body={cta2.body} bg={cta2.bg} />
        <Wrapper tw="md:(py-8) lg:(py-10) xl:(py-12)" id="boards">
          <H2>Boards & Platters</H2>
          <CateringSection
            title={boardHeading.title}
            detail={boardHeading.detail}
            image={boardHeading.image}
            menu="boards"
            items={boards}
          />
        </Wrapper>
        <CateringCTA title={cta3.title} body={cta3.body} bg={cta3.bg} />
        <Testimonials items={testimonials} />
    </>
  );
};

export default CateringPage;

export const getStaticProps: GetStaticProps<SanityCatering> = async ({ preview = false }) => {
  const client = getClient();
  const page = await client.fetch(cateringQuery);
  const { boards, testimonials, atHome, events, interactive } = page[0];

  return {
    props: {
      events,
      interactive,
      atHome,
      boards,
      testimonials
    },
  };
};
