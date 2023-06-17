export default {
  name: `option`,
  title: `Option`,
  type: `object`,
  fields: [
    {
      name: `Name`,
      title: `Name`,
      type: `string`,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: `description`,
      title: `Description`,
      type: `text`,
      validation: (Rule: any) => Rule.required(),
    },
  ],
};
