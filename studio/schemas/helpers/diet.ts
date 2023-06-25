export default {
  name: `diet`,
  title: `Dietary Restrictions/Allergies`,
  type: `object`,
  fields: [
    {
      name: `name`,
      title: `Item Name`,
      type: `string`,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: `allergens`,
      title: `Allergens`,
      type: `array`,
      of: [
        {
          type: `string`,
          options: {
            list: [
              { title: `Dairy Free`, value: `df` },
              { title: `Gluten Free`, value: `gf` },
              { title: `Nut Free`, value: `nf` },
              { title: `Vegetarian`, value: `v` },
              { title: `Vegan`, value: `vg` },
            ],
          },
        }
      ],
    },
  ],
};
