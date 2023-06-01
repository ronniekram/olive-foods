import tw, { styled } from "twin.macro";

import CardRow, { kitCards, prepCards, mealCards, giftCards } from "@/components/services/card-row";

//! ----------> TYPES <----------


//! ----------> STYLES <----------
//! ----------> COMPONENTS <----------
const MealServicesPage = () => {
  return (
    <>
      <CardRow cards={prepCards} color="green" />
      <CardRow cards={kitCards} color="blue" />
      <CardRow cards={mealCards} color="green" />
      <CardRow cards={giftCards} color="blue" />
    </>
  );
};

export default MealServicesPage;
