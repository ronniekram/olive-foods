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
        await res.revalidate(`/`);
      }
      case `catering`: {
        await res.revalidate(`/catering`);
      }
      case `services`: {
       await res.revalidate(`/meal-services`);
      }
      case `boards`: {
        await res.revalidate(`/menus/boards`);
      }
      case `lunch`: {
        await res.revalidate(`/menus/lunch`);
      }
      case `family`: {
        await res.revalidate(`/menus/family`);
      }
      case `horD`: {
        await res.revalidate(`/menus/hor-doeuvres`);
      }
    }
    return res.json({ revalidated: true, message: `Path for ${_type}revalidated` });

  } catch (error) {
    console.error(error);
  }
};
