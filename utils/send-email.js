const nodemailer = require('nodemailer');

const sendEmail = async (details) => {
  const transporter = nodemailer.createTransport({
    host: process.env.ZURI_SMTP_HOST,
    port: process.env.ZURI_SMTP_PORT,
    auth: {
      user: process.env.ZURI_SMTP_USER,
      pass: process.env.ZURI_SMTP_PASSWORD
    }
  });

  const message = {
    from: `${process.env.ZURI_EMAIL_FROM_NAME} <${process.env.ZURI_FROM_EMAIL}>`,
    to: details.email,
    subject: details.subject,
    html: details.message
  };
  await transporter.sendMail(message);
};

module.exports = sendEmail;
