import { NextApiRequest, NextApiResponse } from "next";
import { isValidSignature, SIGNATURE_HEADER_NAME } from "@sanity/webhook";

type Query = NextApiRequest[`query`] & {
  secret: string;
};

type Body = NextApiRequest[`body`] & {
  _type: string;
};

type CustomRequest = NextApiRequest & {
  query: Query;
  body: Body;
};

export default async function handler(req: CustomRequest, res: NextApiResponse) {
  const signature = req.headers[SIGNATURE_HEADER_NAME] as string ?? ``;

  const isValid = isValidSignature(JSON.stringify(req.body), signature, process.env.SECRET_TOKEN);

  if (!isValid) {
    return res.status(401).json({ message: `Invalid signature`, revalidated: false });
  }

  try {
    const { body } = req;
    const { _type } = body;

    switch(_type) {
      case `home`: {
        return await res.revalidate(`/`);
      }
      case `catering`: {
        return await res.revalidate(`/catering`);
      }
      case `services`: {
        return await res.revalidate(`/meal-services`);
      }
      case `boards`: {
        return await res.revalidate(`/menus/boards`);
      }
      case `lunch`: {
        return await res.revalidate(`/menus/lunch`);
      }
      case `family`: {
        return await res.revalidate(`/menus/family`);
      }
      case `horD`: {
        return await res.revalidate(`/menus/hor-doeuvres`);
      }
    }

  } catch (error) {
    console.error(error);
  }
};
