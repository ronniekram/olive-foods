export default {
  name: `services`,
  title: `Meal Services`,
  type: `document`,
  fields: [
    {
      name: `testimonials`,
      title: `Testimonials`,
      type: `array`,
      of: [{ type: `reference`, to: [{ type: `testimonial` }] }],
      validation: (Rule: any) => Rule.required().max(5),
    },
  ],
};
