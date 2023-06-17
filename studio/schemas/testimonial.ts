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
  ],
};
