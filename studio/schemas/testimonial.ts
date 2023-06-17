import { FiBook } from "react-icons/fi";

export default {
  name: `testimonial`,
  title: `Testimonial`,
  type: `document`,
  icon: FiBook,
  fields: [
    {
      name: `name`,
      title: `Client's Name`,
      type: `string`,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: `body`,
      title: `Testimonial Body`,
      type: `text`,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: `color`,
      title: `Slide Color`,
      type: `string`,
      description: `This is the color theme shown on the website for this testimonial. If none is specified, it will default to green.`,
      options: {
        list: [
          { value: `green`, title: `Green` },
          { value: `blue`, title: `Blue` },
          { value: `orange`, title: `Orange` },
        ],
      },
    },
  ],
};
