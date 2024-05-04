import { NextApiResponse, NextApiRequest } from 'next';
import nodemailer from 'nodemailer';

type Fields = {
  name: string;
  message: string;
  phone: string;
  email: string;
  company: string;
};

type Response = {
  error?: string;
  status?: string;
  message?: string;
};

const transporter = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: process.env.NEXT_PUBLIC_EMAIL_ADDRESS,
    pass: process.env.NEXT_PUBLIC_PASSWORD,
  },
});

//export const config = {
//  api: {
//    bodyParser: false,
//  },
//};

const handler = async (req: NextApiRequest, res: NextApiResponse<Response>) => {
  const { name, email, message, phone, company } = req.body as Fields;

  if (req.method !== 'POST') {
    return res.status(404).send({ status: 'fail', error: 'Begone.' });
  }

  try {
    if (!name || !name.trim()) {
      throw new Error('Please provide a valid name.');
    }

    if (!email || !email.trim()) {
      throw new Error('Please provide a valid email address.');
    }

    if (!message || !message.trim()) {
      throw new Error('Please provide a valid email message.');
    }

    if (!phone || !phone.trim()) {
      throw new Error('Please provide a valid phone.');
    }

    if (!company || !company.trim()) {
      throw new Error('Please provide a valid company name.');
    }

    await transporter.sendMail({
      to: 'vinhviral@gmail.com',
      from: 'einslight.co@gmail.com',
      replyTo: email,
      subject: `${name} đã gửi yêu cầu`,
      text: message,
    });

    res.status(200).send({ status: 'done', message: 'message has been sent' });
  } catch (error) {
    res.status(500).send({ status: 'fail', error: `${error}` });
  }
};

export default handler;