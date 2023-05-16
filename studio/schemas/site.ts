export default {
  name: `site`,
  title: `Site Wide Details`,
  type: `document`,
  fieldsets: [
    { name: `social`, title: `Socials` },
  ],
  fields: [
    {
      name: `title`,
      title: `Site Title`,
      type: `string`,
      description: `Used as the default page title if none is specified`,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: `email`,
      title: `Email`,
      type: `string`,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: `insta`,
      title: `Instagram URL`,
      type: `url`,
      fieldset: `social`,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: `linkedin`,
      title: `LinkedIn URL`,
      type: `url`,
      fieldset: `social`,
      validation: (Rule: any) => Rule.required(),
    },
  ],
};
