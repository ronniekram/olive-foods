export default {
  name: `family`,
  title: `Family Style`,
  type: `document`,
  fields: [
    {
      name: `mains`,
      title: `Mains*`,
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
              name: `sauces`,
              title: `Sauces/Options`,
              type: `array`,
              of: [{ type: `string` }],
            },
          ],
        },
      ],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: `salads`,
      title: `Salads*`,
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
              name: `ingredients`,
              title: `Ingredients*`,
              type: `array`,
              of: [{ type: `string` }],
              validation: (Rule: any) => Rule.required(),
            }
          ],
        },
      ],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: `veg`,
      title: `Vegetables*`,
      type: `object`,
      fields: [
        {
          name: `options`,
          title: `Options`,
          type: `array`,
          of: [{ type: `string` }],
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: `sauces`,
          title: `Accoutrement*`,
          type: `array`,
          of: [{ type: `string` }],
          validation: (Rule: any) => Rule.required(),
        },
      ],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: `starches`,
      title: `Starches*`,
      type: `array`,
      of: [
        {
          type: `object`,
          fields: [
            {
              name: `name`,
              title: `Starch Name*`,
              type: `string`,
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: `options`,
              title: `Options*`,
              type: `array`,
              of: [{ type: `string` }],
              validation: (Rule: any) => Rule.required(),
            },
          ],
        },
      ],
      validation: (Rule: any) => Rule.required(),
    },
  ],
};
