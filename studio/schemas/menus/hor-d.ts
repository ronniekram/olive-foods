export default {
  name: `horD`,
  title: `Hors d'oeuvres`,
  type: `document`,
  fields: [
    {
      name: `byPrice`,
      title: `Hors d'ouuvres by Price Point`,
      type: `array`,
      of: [{ type: `hdSection` }],
      validation: (Rule: any) => Rule.required(),
    },
  ],
};
