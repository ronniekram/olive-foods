import groq from "groq";

// PAGES
// ----------> HOME
export const homeQuery = groq`*[_type == "home"]{
  testimonials[]->{
    name,
    body,
    color
  }
}`;
// ----------> SERVICES
export const serviceQuery = groq`*[_type == "services"]{
  testimonials[]->{
    name,
    body,
    color
  }
}`;
// ----------> CATERING
export const cateringQuery = groq`*[_type == "catering"]{
  ...,
  testimonials[]->{
    name,
    body,
    color
  }
}`;

// MENU
// ----------> FAMILY
export const familyQuery = groq`*[_type == "family"]`;
// ----------> LUNCH
export const lunchQuery = groq`*[_type == "lunch"]`;
// ----------> BOARDS
export const boardQuery = groq`*[_type == "boards"]`;
// ----------> WEEKLY
export const weeklyQuery = groq`*[_type == "weekly"]`;

// OTHER
// ----------> TESTIMONIALS
export const testimonialQuery = groq`*[_type == "weekly"]`;