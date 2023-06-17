export default {
  name: `lunch`,
  title: `Lunch`,
  type: `document`,
  fields:  [
    {
      name: `lunchMenu`,
      title: `Lunch Menu`,
      type: `object`,
      fields: [
        {
          name: `specialty`,
          title: `Specialty Sandwiches*`,
          type: `array`,
          of: [{ type: `option` }],
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: `standard`,
          title: `Standard Sandwiches*`,
          type: `array`,
          of: [{ type: `option` }],
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: `sides`,
          title: `Sides*`,
          type: `array`,
          of: [{ type: `side` }],
          validation: (Rule: any) => Rule.required(),
        },
      ],
    },
  ],
};
