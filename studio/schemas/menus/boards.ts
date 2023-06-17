export default {
  name: `boards`,
  title: `Charcuterie/Graze Table`,
  type: `document`,
  fields: [
    {
      name: `options`,
      title: `Optiions`,
      type: `array`,
      of: [
        {
          type: `object`,
          fields: [
            {
              name: `name`,
              title: `Name*`,
              type: `string`,
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: `price`,
              title: `Price*`,
              type: `number`,
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: `servings`,
              title: `Servings*`,
              type: `string`,
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: `description`,
              title: `Description*`,
              type: `text`,
              validation: (Rule: any) => Rule.required(),
            },
          ],
        },
      ],
      validation: (Rule: any) => Rule.required(),
    },
  ],
};
