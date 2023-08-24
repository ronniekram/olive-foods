/* eslint-disable no-secrets/no-secrets */
/* eslint-disable react/jsx-key */
import "twin.macro";

export const sectionImages = {
  event: `/images/catering/CATERING-002.webp`,
  interactive: `/images/catering/CATERING-003.webp`,
  atHome: `/images/catering/CATERING-004.webp`,
  boards: `/images/catering/CATERING-005.webp`,
};

export const ctas = {
  one: {
    title: `Unforgettable Events`,
    bg: `/images/catering/PEAR.svg`,
    body: [
      <p>
        We're your go-to catering service for stress-free events. From planning, preparation and
        execution to table decor and aesthetics, we take care of everything so you can enjoy your
        special occasion.
      </p>,
      <p>
        We take a collaborative and customizable approach to your event, ensuring that every detail
        is tailored to your unique needs.
      </p>,
    ],
  },
  two: {
    title: `Dietary Restrictions?`,
    bg: `/images/catering/AVO.svg`,
    body: [
      <p>
        We offer many vegetarian, vegan, dairy-free, and gluten-free options. We understand that you
        or your guests may have additional requests related to cultural or allergenic
        considerations. Please let us know and we'll do our best to accommodate them.*
      </p>,
      <p tw="text-xs md:(text-sm) xl:(text-base)">
        * We take your allergies and restrictions very seriously and prepare your food as safely as
        possible but cannot guarantee an environment that is entirely allergen free.
      </p>,
    ],
  },
  three: {
    title: `Are you feeling hungry?`,
    bg: `/images/catering/CARROT.svg`,
    body: [
      <p>
        We don't blame you! Contact us today to start planning your next event with Olive Foods
        Catering Co. and experience the difference of our dedicated and professional service.
      </p>,
    ],
  },
};
