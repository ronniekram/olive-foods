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
    {
      name: `menu`,
      title: `Associated Menu`,
      type: `string`,
      description: `If you would like a see menu/menu download option for this catering section, select the appropriate option from the list.`,
      options: {
        list: [
          { value: `lunch`, title: `Lunch` },
          { value: `family`, title: `Family Style` },
          { value: `boards`, title: `Boards & Platters` },
          { value: `hor-doeuvres`, title: `Hors d'oeuvres` },
        ],
      },
    },
  ],
};
