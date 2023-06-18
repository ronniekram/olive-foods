import type { NextPage, GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
import "twin.macro";

import ServiceHero from "@/components/services/hero";
import ServiceSection, { prepared, feasts, enhance, gift } from "@/components/services/service-section";
import config from "../next-seo.config";

import { serviceQuery } from "@/utils/queries";
import { getClient } from "lib/sanity.client";
import type { SanityTestimonal } from "@/utils/types";

//! ----------> TYPES <----------
type Props = {
  testimonials: SanityTestimonal[];
};

//! ----------> COMPONENTS <----------
const Testimonials = dynamic(() => import("../src/components/general/testimonial"));

const MealServicesPage: NextPage<Props> = ({ testimonials }) => {
  return (
    <>
      <NextSeo
        {...config}
        title="Meal Services"
        description="Weekly prepared meals, meal kits, meal enhancements and gifted meals from Olive Foods Catering Company"
        canonical="https://olivefoodsco.com/meal-services"
      />

      <ServiceHero />

      <ServiceSection
        title={prepared.title}
        col1={prepared.col1}
        col2={prepared.col2}
        sub={prepared?.sub}
        imgRight={prepared?.imgRight}
        color={prepared.color}
        cards={prepared.cards}
      />

      <ServiceSection
        title={feasts.title}
        col1={feasts.col1}
        col2={feasts.col2}
        sub={feasts?.sub}
        imgRight={feasts?.imgRight}
        color={feasts.color}
        cards={feasts.cards}
      />

      <ServiceSection
        title={enhance.title}
        col1={enhance.col1}
        col2={enhance.col2}
        sub={enhance?.sub}
        imgRight={enhance?.imgRight}
        color={enhance.color}
        cards={enhance.cards}
      />

      <ServiceSection
        title={gift.title}
        col1={gift.col1}
        col2={gift.col2}
        sub={gift?.sub}
        imgRight={gift?.imgRight}
        color={gift.color}
        cards={gift.cards}
      />

      <Testimonials items={testimonials} />
    </>
  );
};

export default MealServicesPage;

export const getStaticProps: GetStaticProps<Props> = async ({ preview = false }) => {
  const client = getClient();
  const page = await client.fetch(serviceQuery);

  return {
    props: {
      testimonials: page[0].testimonials ?? [],
    },
  };
};
