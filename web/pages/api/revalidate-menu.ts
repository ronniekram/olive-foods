import { NextApiRequest, NextApiResponse } from "next";
import { isValidSignature, SIGNATURE_HEADER_NAME } from "@sanity/webhook";
import chromium from "@sparticuz/chromium-min";
import puppeteer from "puppeteer-core";

type Query = NextApiRequest[`query`] & {
  secret: string;
};

type Body = NextApiRequest[`body`] & {
  name: string;
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

  const { body: { name } } = req;
  const menus = [`/menus/boards`, `/menus/lunch`, `/menus/family`, `/menus/hor-doeuvres`];

  try {
    const browser = await puppeteer.launch({
      args: chromium.args,
      executablePath: await chromium.executablePath(process.env.DO_CHROMIUM_URL),
    });

    menus.map(async (menu: string) => {
      const page = await browser.newPage();

      const url = process.env.NEXT_PUBLIC_SITE_URL + menu;
      await page.goto(url, {
        waitUntil: `networkidle0`,
      });

      await page.emulateMediaType(`screen`);

      const pdf = await page.pdf({
        path: `/public${menu}.pdf`,
        printBackground: true,
        format: `letter`
      });

      return res.send(pdf);
    });
    await browser.close();

  } catch (error: any) {
    console.error(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  };
};
