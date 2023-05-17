import tw, { styled, TwStyle } from "twin.macro";
import { Text } from "@visx/text";

//! ----------> TYPES <----------
export type SlideData = {
  imageUrl: string;
  label: string;
  color: TwStyle;
};

const slides: SlideData[] = [
  {
    imageUrl: `/images/slides/SLIDE-001.png`,
    label: `Event Catering`,
    color: tw`bg-orange-200`,
  },
  {
    imageUrl: `/images/slides/SLIDE-002.png`,
    label: `Characuterie Boards`,
    color: tw`bg-green-200`,
  },
  {
    imageUrl: `/images/slides/SLIDE-003.png`,
    label: `Chef Experiences`,
    color: tw`bg-blue-200`,
  },
  {
    imageUrl: `/images/slides/SLIDE-004.png`,
    label: `Meal Services`,
    color: tw`bg-green-500`,
  },
];

//! ----------> STYLES <----------
//! ----------> COMPONENTS <----------
