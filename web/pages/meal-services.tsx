import { NextSeo } from "next-seo";
import "twin.macro";

import ServiceHero from "@/components/services/hero";
import ServiceSection, { prepared, feasts, enhance, gift } from "@/components/services/service-section";
import config from "../next-seo.config";

//! ----------> STYLES <----------
//! ----------> COMPONENTS <----------
const MealServicesPage = () => {
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
    </>
  );
};

export default MealServicesPage;
