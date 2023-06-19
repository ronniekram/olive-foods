export default {
  name: `option`,
  title: `Option`,
  type: `object`,
  fields: [
    {
      name: `name`,
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
