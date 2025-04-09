import nodemailer from 'nodemailer';

export const sendEmail = async (to, token) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USERNAME,
    to,
    subject: 'Your Auth Token',
    text: `Here is your authentication token:\n\n${token}`,
  });
};
