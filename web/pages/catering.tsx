/* eslint-disable react/jsx-key */
import type { NextPage, GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
import tw, { styled } from "twin.macro";

import { getCateringPage } from "lib/sanity.client";
import { CateringPage as PageProps } from "lib/sanity.queries";

import { Wrapper } from "@/style/base";
import CateringHero from "@/components/catering/hero";
import CateringSection from "@/components/catering/section";
import CateringCTA from "@/components/catering/cta";
import config from "../next-seo.config";

import { sectionImages, ctas } from "@/components/catering/data";

//! ----------> STYLES <----------
const H2 = styled.h2`
  ${tw`text-blue-200 text-4xl font-display`};
  ${tw`md:(text-6xl) xl:(text-7xl)`};
  ${tw`mb-3 lg:(mb-10) xl:(mb-5)`};
`;

//! ----------> COMPONENTS <----------
const Testimonials = dynamic(() => import("../src/components/general/testimonial"));

const CateringPage: NextPage<PageProps> = ({
  eventHeader,
  events,
  interactiveHeader,
  interactive,
  atHomeHeader,
  atHome,
  boardsHeader,
  boards,
  testimonials,
}) => {
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
          title={eventHeader.title}
          detail={eventHeader.details}
          image={sectionImages.event}
          items={events}
          mediaLeft
        />
      </Wrapper>
      <CateringCTA title={ctas.one.title} body={ctas.one.body} bg={ctas.one.bg} />
      <Wrapper tw="md:(py-8) lg:(py-10) xl:(py-12)" id="chef">
        <H2>Chef Experiences</H2>
        <div tw="lg:(flex flex-col space-y-14)">
          <CateringSection
            title={interactiveHeader.title}
            detail={interactiveHeader.details}
            image={sectionImages.interactive}
            items={interactive}
            mediaLeft
          />
          <CateringSection
            title={atHomeHeader.title}
            detail={atHomeHeader.details}
            image={sectionImages.atHome}
            items={atHome}
          />
        </div>
      </Wrapper>
      <CateringCTA title={ctas.two.title} body={ctas.two.body} bg={ctas.two.bg} />;
      <Wrapper tw="md:(py-8) lg:(py-10) xl:(py-12)" id="boards">
        <H2>Boards & Platters</H2>
        <CateringSection
          title=""
          detail={boardsHeader.details}
          image={sectionImages.boards}
          menu="boards"
          items={boards}
        />
      </Wrapper>
      <CateringCTA title={ctas.three.title} body={ctas.three.body} bg={ctas.three.bg} />
      <Testimonials items={testimonials} />
    </>
  );
};

export default CateringPage;

export const getStaticProps: GetStaticProps<PageProps> = async ({ preview = false }) => {
  const data = await getCateringPage();
  const {
    boardsHeader,
    boards,
    atHomeHeader,
    atHome,
    interactiveHeader,
    interactive,
    eventHeader,
    events,
    testimonials,
  } = data[0];

  return {
    props: {
      eventHeader,
      events,
      interactiveHeader,
      interactive,
      atHomeHeader,
      atHome,
      boardsHeader,
      boards,
      testimonials,
    },
  };
};
