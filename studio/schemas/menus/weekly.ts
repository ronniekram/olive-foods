export default {
  name: `weekly`,
  title: `Weekly Meal Price Guide`,
  type: `document`,
  fields: [
    {
      name: `options`,
      title: `Options by Price*`,
      type: `array`,
      of: [
        {
          type: `object`,
          fields: [
            {
              name: `individual`,
              title: `Price: Individual`,
              type: `number`,
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: `feast`,
              title: `Price: Family Feast`,
              type: `number`,
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: `choices`,
              title: `Choices`,
              type: `array`,
              of: [{ type: `string` }],
              validation: (Rule: any) => Rule.required(),
            },
          ],
        },
      ],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: `addons`,
      title: `Addons*`,
      type: `array`,
      of: [{ type: `string` }],
      validation: (Rule: any) => Rule.required(),
    },
  ],
};
