import { groq } from "next-sanity";

//! ----------> QUERIES <----------
// ----------> HELPERS
const testimonial = groq`
  testimonials[]->{
    name,
    body,
    color,
  }
`;

const section = groq`
  title,
  body,
  menu
`;

// ----------> PAGES
const cateringPageQuery = groq`*[_type == "catering"]{
  interactiveHeader,
  interactive[]{
    ${section}
  },
  eventHeader,
  events[]{
    ${section}
  },
  boardsHeader,
  boards[]{
    ${section}
  },
  atHomeHeader,
  atHome[]{
    ${section}
  },
  "testimonials": ${testimonial},
}`;

const homePageQuery = groq`*[_type == "home"]{
  "testimonials": ${testimonial},
}`;

const servicePageQuery = groq`*[_type == "services"]{
  weekly{
    options[],
    description,
  },
  feasts{
    description[],
    pricing[],
  },
  howItWorks,
  hero[],
  header[],
  provisions,
  gift,
  "testimonials": ${testimonial},
}`;

// ----------> MENUS
const boardMenuQuery = groq`*[_type == "boards"]{
  options[]{
    name,
    description,
    servings,
    price,
  },
}`;

const familyMenuQuery = groq`*[_type == "family"]{
  mains[]{
    name,
    sauces,
    price,
  },
  salads[]{
    name,
    ingredients,
  },
  starches[]{
    name,
    options[],
  },
  veg{
    sauces[],
    options[],
  }
}`;

const horDMenuQuery = groq`*[_type == "horD"]{
  byPrice[]{
    name,
    items[]{
      name,
      subItems[],
    },
  },
}`;

const lunchMenuQuery = groq`*[_type == "lunch"]{
  lunchMenu{
    standard[]{
      name,
      description,
    },
    specialty[]{
      name,
      description,
    },
    sides[]{
      servings,
      price,
      name,
      description,
    },
  }
}`;

const queries = {
  cateringPageQuery,
  homePageQuery,
  servicePageQuery,
  boardMenuQuery,
  familyMenuQuery,
  horDMenuQuery,
  lunchMenuQuery,
};

export default queries;

//! ----------> TYPES <----------
// ----------> HELPERS
type CateringHeader = {
  title: string;
  details: string;
};

type CateringSection = {
  title: string;
  body: string;
  menu: `boards` | `family` | `lunch` | `hor-doeuvres`;
};

type MenuOption = {
  name: string;
  description: string;
};

type MenuServing = {
  low: number;
  high?: number;
};

type MenuSide = {
  name: string;
  price: number;
  servings: MenuServing;
  description?: string;
  options: {
    numChoices: number;
    choices: string[];
  };
};


// ----------> REPEATERS
type Testimonial = {
  name: string;
  body: string;
  color?: `green` | `orange` | `blue`;
};

// ----------> PAGES
export type CateringPage = {
  eventHeader: CateringHeader;
  events: CateringSection[];
  interactiveHeader: CateringHeader;
  interactive: CateringSection[];
  atHomeHeader: CateringHeader;
  atHome: CateringSection[];
  boardsHeader: CateringHeader;
  boards: CateringSection[];
  testimonials: Testimonial[];
};

export type HomePage = {
  testimonials: Testimonial[];
};

export type ServicesPage = {
  header: string[];
  hero: string[];
  howItWorks: {
    list: string[];
    subtext: string[];
  };
  weekly: {
    description: string;
    options: string[];
  };
  feasts: {
    description: string[];
    pricing: {
      type: string;
      cost: number;
    }[];
  };
  provisions: string;
  gift: string;
  testimonials: Testimonial[];
};

// ----------> MENUS
export type BoardMenu = {
  options: {
    name: string;
    price: string;
    servings: string;
    description: string;
  }[];
};

export type FamilyMenu = {
  mains: {
    name: string;
    price: string;
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

export type HorDMenu = {
  byPrice: {
    name: number;
    items: {
      name: string;
      subItems: string[];
    }[];
  }[];
};

export type LunchMenu = {
  lunchMenu: {
    specialty: MenuOption[];
    standard: MenuOption[];
    sides: MenuSide[];
  };
};
