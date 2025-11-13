// utils/sendEmail.js
const nodemailer = require('nodemailer');

let cachedTransporter = null;

async function createTransport() {
  if (cachedTransporter) return cachedTransporter;

  const host = process.env.EMAIL_HOST;
  const port = Number(process.env.EMAIL_PORT || 587);
  const secure = (process.env.EMAIL_SECURE === 'true') || (port === 465);
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;

  if (!host || !user || !pass) {
    throw new Error('Missing SMTP config in environment (EMAIL_HOST, EMAIL_USER, EMAIL_PASS).');
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
    pool: false, // or true if you want pooling
    connectionTimeout: 30_000, // 30s
    greetingTimeout: 30_000,
    socketTimeout: 30_000,
    tls: {
      rejectUnauthorized: process.env.EMAIL_TLS_REJECT_UNAUTHORIZED !== 'false'
    }
  });

  // verify connection configuration but don't crash the app if verify fails
  try {
    await transporter.verify();
    console.log('SMTP transporter verified');
  } catch (verifyErr) {
    console.warn('SMTP verify failed (will attempt sends anyway):', verifyErr && verifyErr.message ? verifyErr.message : verifyErr);
    // Keep transporter — sending may still work in some envs or using API hosts.
  }

  cachedTransporter = transporter;
  return cachedTransporter;
}

async function sendMail({ to, subject, html, text }) {
  const transporter = await createTransport();

  const fromName = process.env.EMAIL_FROM_NAME || 'VisionVault';
  const fromAddress = process.env.EMAIL_FROM_ADDRESS || process.env.EMAIL_USER;

  try {
    const info = await transporter.sendMail({
      from: `"${fromName}" <${fromAddress}>`,
      to,
      subject,
      text: text || undefined,
      html
    });
    console.log('sendMail success:', info && (info.messageId || info.accepted));
    return info;
  } catch (err) {
    console.error('sendMail error:', err && err.message ? err.message : err);
    throw err; // let caller handle/report
  }
}

module.exports = sendMail;
