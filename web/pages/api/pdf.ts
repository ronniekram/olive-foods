import { NextApiRequest, NextApiResponse, NextApiHandler } from "next";
import chromium from "@sparticuz/chromium";
import puppeteer from "puppeteer-core";

const LOCAL_CHROME_EXECUTABLE = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const query = req?.query;
  const { href } = query;

  try {
    const executablePath = chromium.executablePath || LOCAL_CHROME_EXECUTABLE;
    console.log(executablePath);

    const browser = await puppeteer.launch({
      args: chromium.args,
    });

    const page = await browser.newPage();

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
