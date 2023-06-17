export default {
  name: `section`,
  title: `Section`,
  type: `object`,
  fields: [
    {
      name: `title`,
      title: `Title`,
      type: `string`,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: `body`,
      title: `Description`,
      type: `text`,
      validation: (Rule: any) => Rule.required(),
    },
  ],
};
