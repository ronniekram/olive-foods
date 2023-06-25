import { NextApiRequest, NextApiResponse, NextApiHandler } from "next";
import Mailjet from "node-mailjet";


const mj = new Mailjet.Client({
  apiKey: process.env.MJ_APIKEY_PUBLIC,
  apiSecret: process.env.MJ_APIKEY_PRIVATE,
});

const handler: NextApiHandler = async (req, res) => {
  const body = req?.body;

  const { email } = body;

  try {
    const response = await mj.post(`send`, { version: `v3.1` }).request({ isExcludedFromCampaigns: false, Email: email, Name: email.split("@")[0] }).then((resp) => console.log(resp));

    return res.json({ message: `Successfully sent request` })
  } catch (error) {
    return res.json(error);
  }
};

export default handler;
