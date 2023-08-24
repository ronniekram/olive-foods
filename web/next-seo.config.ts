/* eslint-disable no-secrets/no-secrets */
import { DefaultSeoProps } from "next-seo";

const config: DefaultSeoProps = {
  titleTemplate: `%s @ Olive Foods Catering Co.`,
  title: `Olive Foods Catering Co.`,
  description: `Olive Foods Catering Co is a premier Twin Cities boutique caterer, passionate about crafting exceptional food, and memorable experiences.`,
  canonical: `https://olivefoodscompany.com/`,
  openGraph: {
    type: `website`,
    locale: `en_US`,
    url: `https://olivefoodscompany.com/`,
    title: `Olive Foods Catering Co.`,
    siteName: `Olive Foods Catering Company`,
    description: `Olive Foods Catering Co is a premier Twin Cities boutique caterer, passionate about crafting exceptional food, and memorable experiences.`,
    images: [
      {
        url: `https://ronnie.nyc3.cdn.digitaloceanspaces.com/OPENGRAPH-OLIVE.webp`,
        width: 1200,
        height: 630,
        alt: `Olive Foods Catering Company`,
        type: `image/png`,
      },
    ],
  },
  twitter: {
    cardType: `summary_large_image`,
  },
  additionalMetaTags: [
    {
      name: `viewport`,
      content: `width=device-width, initial-scale=1.0`,
    },
  ],
};

export default config;
