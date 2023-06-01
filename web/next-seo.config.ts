import { DefaultSeoProps } from "next-seo";

const config: DefaultSeoProps = {
  titleTemplate: `%s @ Olive Foods Catering Co.`,
  title: `We olive food`,
  description: `Minneapolis - St. Paul Catering & Meal Services`,
  canonical: `https://olivefoodsco.com`,
  openGraph: {
    type: `website`,
    locale: `en_US`,
    url: `https://olivefoodsco.com`,
    title: `We olive food`,
    siteName: `Olive Foods Catering Company`,
    description: `Minneapolis - St. Paul Catering & Meal Services`,
    images: [
      {
        url: `https://github.com/ronniekram/olive-foods/blob/dev/web/public/opengraph.png`,
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
