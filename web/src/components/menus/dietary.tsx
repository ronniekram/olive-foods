import tw, { styled } from "twin.macro";

import { Vegan, Vegetarian, DairyFree, GlutenFree, NutFree } from "@/assets/svg/menu-icon";

//! ----------> STYLES <----------
const Icon = tw.div`w-10 h-10 flex md:(w-12 h-12)`;
const P = tw.p`font-sans font-black text-grey text-base text-center`;
const Wrapper = tw.div`flex items-center space-x-5 py-3`;

//! ----------> COMPONENTS <----------
const Dietary = () => (
  <Wrapper>
    <div>
      <Icon>
        <DairyFree />
      </Icon>
      <P>(DF)</P>
    </div>
    <div>
      <Icon>
        <GlutenFree />
      </Icon>
      <P>(GF)</P>
    </div>
    <div>
      <Icon>
        <NutFree />
      </Icon>
      <P>(NF)</P>
    </div>
    <div>
      <Icon>
        <Vegetarian />
      </Icon>
      <P>(V)</P>
    </div>
    <div>
      <Icon>
        <Vegan />
      </Icon>
      <P>(VG)</P>
    </div>
  </Wrapper>
);

export default Dietary;
