export default {
  name: `img`,
  title: `Project Image`,
  type: `object`,
  fields: [
    {
      name: `image`,
      title: `Image`,
      type: `image`,
      validation: (Rule: any) => Rule.required(),
      description: `If the image is meant to be full width, it MUST BE AT LEAST 1049 PX WIDE. One column images must be at least 515 px wide.`,
      options: {
        hotspot: true,
        metadata: [`blurhash`, `lqip`, `palette`, `exif`, `location`],
        crop: true,
      },
    },
    {
      name: `wide`,
      title: `Image Width`,
      type: `boolean`,
      description: `When set to true, the image will take the full width of it's container`,
    },
    {
      name: `alt`,
      title: `Alt Text`,
      type: `string`,
    },
  ],
};
