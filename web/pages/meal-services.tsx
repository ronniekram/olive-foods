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
        description="We understand that life can be hectic and meal planning can be overwhelming. We offer a variety of meal services to help you get delicious, high-quality meals on the table with ease."
        canonical="https://olivefoodscompany.com/meal-services"
        additionalMetaTags={[
          {
            property: `keywords`,
            content: `meal services, gourmet meal delivery, ready-to-eat meals, healthy meal delivery, fresh meal delivery, chef-prepared meals, customized meal plans, meal subscription services, home delivered meals, convienient meal solutions, nutritious meal options, weekly meal delivery,  diet-friendlt meal plans, restaurant quality meals at home`,
          },
        ]}
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
