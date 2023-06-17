export default {
  name: `servings`,
  title: `Servings*`,
  type: `object`,
  description: `If only 1 value is entered, it will read as "up to # people". If 2 values are entered, it will read as "# - # people".`,
  fields: [
    {
      name: `low`,
      title: `Low End*`,
      type: `number`,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: `high`,
      title: `High End`,
      type: `number`,
    },
  ],
  validation: (Rule: any) => Rule.required(),
  options: {
    columns: 2,
  },
};
