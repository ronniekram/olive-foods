import { NextApiRequest, NextApiResponse, NextApiHandler } from "next";
import format from "date-fns/format";
import chromium from "chrome-aws-lambda";
import playwright from "playwright-core";

const puppeteer = require("puppeteer");

const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const query = req?.query;
  const { href, filename } = query;
  const path = `${filename}-${format(new Date(), `ddMMy`)}.pdf`;

  // const browser = await puppeteer.launch();
  // const page = await browser.newPage();

  // await page.goto(process.env.NEXT_PUBLIC_SITE_URL + href, { waitUntil: `networkidle0` });
  // await page.emulateMediaType(`screen`);

  // const pdf = await page.pdf({
  //   path: `${path}.pdf`,
  //   printBackground: true,
  //   filename: `${filename}-${format(new Date(), `ddMMy`)}.pdf`,
  // });

  // res.send(pdf);

  // await browser.close();
  try {
    console.log(await chromium.executablePath);

    const browser = await playwright.chromium.launch({
      args: chromium.args,
      // executablePath: process.env.NODE_END === `production` ? await chromium.executablePath : `/usr/local/bin/chromium`,
      executablePath: await chromium.executablePath,
      headless: process.env.NODE_ENV === `production` ? chromium.headless : true,
    });

    const context = await browser.newContext();
    const page = await context.newPage();

    const pdfUrl = process.env.NEXT_PUBLIC_SITE_URL + href;

    await page.goto(pdfUrl, {
      waitUntil: `load`,
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
