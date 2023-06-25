import { NextApiRequest, NextApiResponse, NextApiHandler } from "next";
const Brevo = require('sib-api-v3-sdk');

const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const body = req?.body;

  const { email } = body;

  Brevo.ApiClient.instance.authentications['api-key'].apiKey = process.env.BREVO_API_KEY;

  try {
    const client = new Brevo.ContactsApi();
    const createContact = new Brevo.CreateContact();
    createContact.email = email;
    createContact.listIds = [1];

    const response = await client.createContact(createContact)
    .then((resp: any) => resp.json())
    .catch((error: any) => error.json());

    return res.json(response)
  } catch (error) {
    return res.json(error);
  }
};

export default handler;
