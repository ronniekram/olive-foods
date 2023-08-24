import type { NextPage, GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
import "twin.macro";

import config from "../next-seo.config";

import ServiceHero from "@/components/services/hero";
import { getServicesPage } from "lib/sanity.client";
import { ServicesPage as PageProps } from "lib/sanity.queries";
import { Service } from "@/components/services/service-section";

import {
  WeeklySection,
  FeastsSection,
  ProvisionsSection,
  GiftsSection,
} from "@/components/services/data";

//! ----------> COMPONENTS <----------
const Testimonials = dynamic(() => import("../src/components/general/testimonial"));

const MealServicesPage: NextPage<PageProps> = (props) => {
  return (
    <>
      <NextSeo
        {...config}
        title="Meal Services"
        description="Weekly prepared meals, meal kits, meal enhancements and gifted meals from Olive Foods Catering Company"
        canonical="https://olivefoodsco.com/meal-services"
      />

      <ServiceHero header={props.header} hero={props.hero} howItWorks={props.howItWorks} />

      <Service
        section="weekly"
        detailColumn={
          <WeeklySection description={props.weekly.description} options={props.weekly.options} />
        }
      />

      <Service
        section="feasts"
        detailColumn={
          <FeastsSection description={props.feasts.description} pricing={props.feasts.pricing} />
        }
      />

      <Service
        section="provisions"
        detailColumn={<ProvisionsSection provisions={props.provisions} />}
      />

      <Service section="gift" detailColumn={<GiftsSection gift={props.gift} />} />

      <Testimonials items={props.testimonials} />
    </>
  );
};

export default MealServicesPage;

export const getStaticProps: GetStaticProps<PageProps> = async ({ preview = false }) => {
  const data = await getServicesPage();
  const { header, hero, howItWorks, weekly, feasts, provisions, gift, testimonials } = data[0];

  return {
    props: {
      header,
      hero,
      howItWorks,
      weekly,
      feasts,
      provisions,
      gift,
      testimonials,
    },
  };
};
