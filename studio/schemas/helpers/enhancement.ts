export default {
  name: `enhancement`,
  title: `Enhancement Item`,
  type: `object`,
  fields: [
    {
      name: `name`,
      title: `Item Name`,
      type: `string`,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: `description`,
      title: `Item Description`,
      type: `text`,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: `feeds`,
      title: `Feeds`,
      description: `The number of people that the item will feed`,
      type: `number`,
      validation: (Rule: any) => Rule.required(),
    },
  ],
};
