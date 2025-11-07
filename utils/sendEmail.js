// utils/sendEmail.js
const nodemailer = require('nodemailer');

async function createTransport() {
  const host = process.env.EMAIL_HOST;
  const port = Number(process.env.EMAIL_PORT || 587);
  const secure = (process.env.EMAIL_SECURE === 'true') || (port === 465); // 465 -> secure
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;

  if (!host || !user || !pass) {
    throw new Error('Missing SMTP config in environment (EMAIL_HOST, EMAIL_USER, EMAIL_PASS).');
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass
    },
    // optional: TLS settings to avoid unauthorized errors on some servers
    tls: {
      // do not fail on invalid certs (only if you must)
      rejectUnauthorized: process.env.EMAIL_TLS_REJECT_UNAUTHORIZED !== 'false'
    }
  });

  // verify connection configuration (helpful during dev)
  await transporter.verify();
  return transporter;
}

async function sendMail({ to, subject, html, text }) {
  const transporter = await createTransport();
  const fromName = process.env.EMAIL_FROM_NAME || 'VisionVault';
  const fromAddress = process.env.EMAIL_FROM_ADDRESS || process.env.EMAIL_USER;

  const info = await transporter.sendMail({
    from: `"${fromName}" <${fromAddress}>`,
    to,
    subject,
    text: text || undefined,
    html
  });

  return info;
}

module.exports = sendMail;
