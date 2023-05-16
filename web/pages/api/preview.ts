import { NextApiRequest, NextApiResponse } from "next";

export default function preview(req: NextApiRequest, res: NextApiResponse) {
  const query = req?.query;

  const { schemaType, secret, slug } = query;

  if (!secret || secret !== process.env.SANITY_API_TOKEN) {
    return res.status(401).json({ message: `No auth` });
  }

  if (!slug) {
    return res.status(401).json({ message: `No slug in parameters` });
  }

  // Enable preview mode
  res.setPreviewData({});

  switch (schemaType) {
    case `about`: {
      res.writeHead(307, { Location: `/about` });
      break;
    }
    case schemaType === `project` && slug: {
      res.writeHead(307, { Location: `/projects/${slug}` });
      break;
    }
  }

  return res.end();
}
