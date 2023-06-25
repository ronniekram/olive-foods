import { NextApiRequest, NextApiResponse, NextApiHandler } from "next";
import format from "date-fns/format";
const puppeteer = require("puppeteer");

const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const query = req?.query;
  const { href, filename } = query;
  const path = `${filename}-${format(new Date(), `ddMMy`)}.pdf`;

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(process.env.NEXT_PUBLIC_SITE_URL + href, { waitUntil: `networkidle0` });
  await page.emulateMediaType(`screen`);

  const pdf = await page.pdf({
    path: `${path}.pdf`,
    printBackground: true,
    format: `A4`,
  });

  res.send(pdf);

  await browser.close();
};

export default handler;
