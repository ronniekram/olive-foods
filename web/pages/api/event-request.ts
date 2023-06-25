import { NextApiRequest, NextApiResponse, NextApiHandler } from "next";
const Brevo = require('sib-api-v3-sdk');

import type { FormValues } from "@/components/contact/form";

const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const body: FormValues = req?.body;

  const { firstName, lastName, email, eventType, eventDate, detail } = body;

  Brevo.ApiClient.instance.authentications['api-key'].apiKey = process.env.BREVO_API_KEY;

  try {
    const response = await new Brevo.TransactionalEmailsApi().sendTransacEmail(
      {
        subject: `Olive Foods Event Request`,
        sender: {
          email: email,
          name: `${firstName} ${lastName}`,
        },
        replyTo: {
          email: email,
          name: `${firstName} ${lastName}`,
        },
        to: [
          {
            email: `me+olive@ronniebee.dev`,
            name: `Ronnie Bee`,
          }
        ],
        htmlContent:`
          <html>
            <body>
              <h1>Website Event Request</h1>
              <p><strong>Name</strong>: ${firstName} ${lastName}</p>
              <p><strong>Emaill</strong>: ${email}</p>
              <p><strong>Event Type</strong>: ${eventType.label}</p>
              <p><strong>Event Date</strong>: ${eventDate}</p>
              <p><strong>Details</strong>: ${detail}</p>
            </body>
          </html>
        `,
        params: {
          bodyMessage: `Sent to you from olivefoodscompany.com`,
        },
      }
    )
    .then((resp: any) => resp.json())
    .catch((error: any) => error.json());
    return res.json(response);
  } catch (error) {
    return res.json(error);
  }
};

export default handler;
