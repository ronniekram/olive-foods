import { NextApiRequest, NextApiResponse, NextApiHandler } from "next";
import chromium from "@sparticuz/chromium-min";
import puppeteer from "puppeteer-core";

const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const query = req?.query;
  const { href } = query;

  try {
    const browser = await puppeteer.launch({
      args: chromium.args,
      executablePath: await chromium.executablePath(process.env.DO_CHROMIUM_URL),
    });

    const page = await browser.newPage();

    const pdfUrl = process.env.NEXT_PUBLIC_SITE_URL + href;

    await page.goto(pdfUrl, {
      waitUntil: `networkidle0`,
    });

    const pdf = await page.pdf({
      path: `/tmp/awesome.pdf`,
      printBackground: true,
    });

    await browser.close();
    return res.status(200).json({ pdf });
  } catch (error: any) {
    console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message })
  }
};

export default handler;
