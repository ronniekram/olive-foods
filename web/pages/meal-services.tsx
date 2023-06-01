import tw, { styled } from "twin.macro";

import ServiceSection, { prepared, feasts, enhance, gift } from "@/components/services/service-section";

//! ----------> TYPES/DATA <----------

//! ----------> STYLES <----------
//! ----------> COMPONENTS <----------
const MealServicesPage = () => {
  return (
    <>
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
