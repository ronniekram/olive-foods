export default {
  name: `catering`,
  title: `Catering`,
  type: `document`,
  groups: [
    { name: `events`, title: `Special Events`, },
    { name: `interactive`, title: `Interactive Meals`, },
    { name: `home`, title: `At Home`, },
    { name: `boards`, title: `Charcuterie Boards`, },
  ],
  fields: [
    {
      name: `events`,
      title: `Special Events`,
      type: `array`,
      of: [{ type: `section` }],
      group: `events`,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: `interactive`,
      title: `Interactive Meals`,
      type: `array`,
      of: [{ type: `section` }],
      group: `interactive`,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: `atHome`,
      title: `At Home`,
      type: `array`,
      of: [{ type: `section` }],
      group: `home`,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: `boards`,
      title: `Custom Charcuterie Boards`,
      type: `array`,
      of: [{ type: `section` }],
      group: `boards`,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: `testimonials`,
      title: `Testimonials`,
      type: `array`,
      of: [{ type: `reference`, to: [{ type: `testimonial` }] }],
    },
  ],
};
