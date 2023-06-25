export default {
  name: `hdSection`,
  title: `Price Point`,
  type: `object`,
  fields: [
    {
      name: `name`,
      title: `Price Point*`,
      type: `number`,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: `items`,
      title: `Items*`,
      type: `array`,
      of: [
        {
          type: `object`,
          fields: [
            {
              name: `name`,
              title: `Item Name*`,
              type: `string`,
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: `subItems`,
              title: `Sub-items`,
              type: `array`,
              of: [{ type: `string` }],
            },
          ],
        },
      ],
      validation: (Rule: any) => Rule.required(),
    },
  ],
};
