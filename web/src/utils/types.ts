
import { Color } from "@/components/general/testimonial";
import { Menu } from "@/components/catering/section";

// REPEATERS
export type SanityTestimonal = {
  name: string;
  body: string;
  color?: Color;
};

// HELPERS
export type SanityDiet = {
  name: string;
  allergens: string[]
};

export type SanityHDSection = {
  name: number;
  items: {
    name: string;
    subItems: string[];
  }[];
};

export type SanityOption = {
  name: string;
  description: string;
};

export type SanityServing = {
  low: number;
  high?: number;
};

export type SanitySection = {
  title: string;
  body: string;
  menu?: Menu;
};

export type SanityMenuOption = {
  name: string;
  price: number;
  servings: SanityServing;
  description: string;
};

export type SanitySide = SanityMenuOption & {
  options: {
    numChoices: number;
    choices: string[];
  };
};

// MENUS
export type SanityBoard = {
  _updatedAt: string;
  options: {
    name: string;
    price: number;
    servings: string;
    description: string;
  }[];
};

export type SanityHors = {
  _updatedAt: string;
  byPrice: SanityHDSection[];
};

export type SanityFamily = {
  _updatedAt: string;
  mains: {
    name: string;
    price: number;
    sauces: string[];
  }[];
  salads: {
    name: string;
    ingredients: string[];
  }[];
  veg: {
    options: string[];
    sauces: string[];
  };
  starches: {
    name: string;
    options: string[];
  }[];
};

export type SanityLunch = {
  _updatedAt: string;
  specialty: SanityMenuOption[];
  standard: SanityMenuOption[];
  sides: SanitySide[];
};

export type SanityWeekly = {
  options: {
    individual: number;
    feast: number;
    choices: string[];
  };
  addons: string[];
};

// PAGES
export type SanityCatering = {
  events: SanitySection[];
  interactive: SanitySection[];
  atHome: SanitySection[];
  boards: SanitySection[];
  testimonials: SanityTestimonal[];
};
