export default {
  name: `cateringHeader`,
  title: `Catering Header`,
  type: `object`,
  fields: [
    {
      name: `title`,
      title: `Section Title*`,
      type: `string`,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: `details`,
      title: `Section Detail Text*`,
      type: `text`,
      validation: (Rule: any) => Rule.required(),
    },
  ],
};
