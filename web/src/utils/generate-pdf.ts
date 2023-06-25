const puppeteer = require("puppeteer");
const fs = require("node:fs");

const generatePDF = async (url: string, path: string) => {
  const browser = await puppeteer.launch({ headless: true});
  const page = await browser.newPage();

  await page.goto(process.env.NEXT_PUBLIC_SITE_URL + url, { waitUntil: `networkidle0` });
  await page.emulateMediaType(`screen`);

  const pdf = await page.pdf({
    path: `${path}.pdf`,
    printBackground: true,
    format: `A4`,
  });

  await browser.close();

  return pdf;
};

export default generatePDF;
