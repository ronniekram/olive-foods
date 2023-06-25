import { NextApiRequest, NextApiResponse, NextApiHandler } from "next";
import Mailjet from "node-mailjet";


const mj = new Mailjet.Client({
  apiKey: process.env.MJ_APIKEY_PUBLIC,
  apiSecret: process.env.MJ_APIKEY_PRIVATE,
});

import type { FormValues } from "@/components/contact/form";

const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const body: FormValues = req?.body;

  const { firstName, lastName, email, eventType, eventDate, detail } = body;

  const data = {
    Messages: [
      {
        From: {
          Email: email,
          Name: `${firstName} ${lastName}`,
        },
        To: [
          {
            Email: "me+olive@ronniebee.dev",
          },
        ],
        Subject: `Olive Foods Event Request`,
        HTMLPart: `
          <p><strong>Name</strong>: ${firstName} ${lastName}</p>
          <p><strong>Emaill</strong>: ${email}</p>
          <p><strong>Event Type</strong>: ${eventType}</p>
          <p><strong>Event Date</strong>: ${eventDate}</p>
          <p><strong>Details</strong>: ${detail}</p>
        `,
        TextPart: `
          Name: ${firstName} ${lastName}
          Email: ${email}
          Event Type: ${eventType}
          Event Date: ${eventDate}
          Details: ${detail}
        `,
      },
    ],
  };

  try {
    const response = await mj.post(`send`, { version: `v3.1` }).request(data).then((resp) => console.log(resp));

    return res.json({ message: `Successfully sent request` })
  } catch (error) {
    return res.json(error);
  }
};

export default handler;
