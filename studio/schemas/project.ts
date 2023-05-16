import { orderRankField } from "@sanity/orderable-document-list";
import { FiArchive } from "react-icons/fi";

export default {
  name: `project`,
  title: `Project`,
  type: `document`,
  icon: FiArchive,
  fieldsets: [
    { name: `thumbnail`, title: `Index Page Images`, options: { columns: 2 } },
    { name: `seo`, title: `SEO` },
  ],
  groups: [
    { name: `details`, title: `Project Details` },
    { name: `media`, title: `Project Media` },
    { name: `seo`, title: `SEO`, },
  ],
  fields: [
    {
      name: `title`,
      title: `Project Name*`,
      type: `string`,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: `tag`,
      title: `Tag`,
      type: `string`,
      options: {
        list: [
          { value: `app`, title: `Apps + Interactives` },
          { value: `branding`, title: `Branding` },
          { value: `scale`, title: `Large-Scale Work` },
          { value: `illustration`, title: `Illustration` },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: `slug`,
      type: `slug`,
      options: {
        source: `title`,
        slugify: (input: string) => input.toLowerCase().replace(/\s+/g, `-`).slice(0, 200),
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: `thumb`,
      title: `Thumbnail*`,
      type: `image`,
      fieldset: `thumbnail`,
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: `thumbHover`,
      title: `Thumbnail: Hover*`,
      type: `image`,
      fieldset: `thumbnail`,
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
    // PROJECT DETAILS
    {
      name: `desc`,
      title: `Project Description*`,
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
      group: `details`,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: `credits`,
      title: `Project Credits`,
      type: `array`,
      of: [{ type: `credit` }],
      group: `details`,
    },
    {
      name: `live`,
      title: `URL for Live Site`,
      type: `url`,
      group: `details`,
    },
    // PROJECT MEDIA
    {
      name: `media`,
      title: `Project Media*`,
      type: `array`,
      of: [{ type: `img` }],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: `related`,
      title: `Related Work`,
      type: `array`,
      of: [{ type: `img` }],
    },
    // ORDER RANK FIELD
    orderRankField({ type: `project` }),
    // SEO
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
