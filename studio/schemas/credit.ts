export default {
  name: `credit`,
  title: `Credit Field`,
  type: `object`,
  fieldsets: [
    { name: `credit`, title: `Credit Detail`, options: { columns: 2 } },
  ],
  fields: [
    {
      name: `title`,
      title: `Title*`,
      type: `string`,
      fieldset: `credit`,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: `name`,
      title: `Person/Team/Org Name*`,
      type: `string`,
      fieldset: `credit`,
      validation: (Rule: any) => Rule.required(),
    },
  ],
};
