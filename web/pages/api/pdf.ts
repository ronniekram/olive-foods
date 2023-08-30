/* eslint-disable no-secrets/no-secrets */
import { NextApiRequest, NextApiResponse, NextApiHandler } from "next";
import chromium from "@sparticuz/chromium-min";
import puppeteer from "puppeteer-core";

const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const query = req?.query;
  const { href, filename, _type, menu } = query;

  try {
    const browser = await puppeteer.launch({
      args: chromium.args,
      executablePath: await chromium.executablePath(process.env.DO_CHROMIUM_URL),
    });

    const page = await browser.newPage();

    const pdfUrl = `.next/server/pages/menu/${_type}`;

    await page.goto(pdfUrl, {
      waitUntil: `networkidle0`,
    });

    await page.emulateMediaType(`screen`);

    const pdf = await page.pdf({
      path: `/public/menus/menu.pdf`,
      printBackground: true,
      format: `letter`
    });

    res.send(pdf);

    await browser.close();
  } catch (error: any) {
    console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }
};

export default handler;
