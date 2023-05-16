export default {
  name: `about`,
  title: `About Me`,
  type: `document`,
  fieldsets: [
    { name: `seo`, title: `SEO` },
  ],
  groups: [
    { name: `seo`, title: `SEO`, },
  ],
  fields: [
    {
      name: `body`,
      title: `Body`,
      description: `It's all about you`,
      type: `array`,
      of: [
        {
          type: `block`,
          styles: [
            { value: `normal`, title: `Normal` },
          ],
          lists: [],
          marks: {
            decorators: [],
            annotations: [],
          },
        },
      ],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: `resume`,
      title: `Resume`,
      type: `file`,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: `metaTitle`,
      title: `Page/Meta Title`,
      type: `string`,
      fieldset: `seo`,
      group: `seo`,
    },
    {
      name: `metaDesc`,
      title: `Meta Description`,
      type: `text`,
      rows: 2,
      fieldset: `seo`,
      group: `seo`,
    },
  ],
};
