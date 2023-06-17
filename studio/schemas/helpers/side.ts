export default {
  name: `side`,
  title: `Side`,
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
      type: `servings`,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: `description`,
      title: `Description`,
      type: `text`,
    },
    {
      name: `options`,
      title: `Options`,
      type: `object`,
      fields: [
        {
          name: `numChoices`,
          title: `Number of Choices`,
          type: `number`,
          description: `If no value is specified, it is assumed that only one option may be selected`,
        },
        {
          name: `choices`,
          title: `Options*`,
          type: `array`,
          of: [{ type: `string` }],
          validation: (Rule: any) => Rule.required(),
        }
      ],
    },
  ],
};
