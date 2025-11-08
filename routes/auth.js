// routes/auth.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const User = require('../models/User');
const sendMail = require('../utils/sendEmail');

const FRONTEND_BASE = process.env.APP_BASE_URL || 'http://localhost:8080';

function makeToken(size = 32) {
  return crypto.randomBytes(size).toString('hex');
}

/**
 * POST /signup
 */
router.post('/signup', async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password || password.length < 8) {
      return res.status(400).json({ message: 'Name, valid email and password (min 8) required' });
    }
    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ message: 'Email already used' });

    const passwordHash = await bcrypt.hash(password, 10);
    const token = makeToken(20);
    const expires = Date.now() + 1000 * 60 * 60 * 24;

    const user = new User({
      name,
      email,
      passwordHash,
      verifyToken: token,
      verifyTokenExpires: expires
    });
    await user.save();

    const verifyUrl = `${FRONTEND_BASE}/auth/verify?token=${token}&email=${encodeURIComponent(email)}`;
    const html = `
      <p>Hello ${name},</p>
      <p>Thanks for signing up. Click the link below to verify your email:</p>
      <p><a href="${verifyUrl}">${verifyUrl}</a></p>
      <p>If you did not sign up, ignore this email.</p>
    `;
    try { await sendMail({ to: email, subject: 'Verify your email', html }); } catch (e) { console.error('Mail send error:', e); }

    return res.json({ message: 'Registered. Check your email to verify.', name: user.name });
  } catch (err) {
    next(err);
  }
});

/**
 * GET /verify
 */
router.get('/verify', async (req, res, next) => {
  try {
    const { token, email } = req.query;
    if (!token || !email) {
      return res.render('auth/verifyResult', { success: false, message: 'Invalid verification link' });
    }
    const user = await User.findOne({ email, verifyToken: token });
    if (!user) return res.render('auth/verifyResult', { success: false, message: 'Invalid or expired token' });
    if (user.verifyTokenExpires && user.verifyTokenExpires < Date.now()) {
      return res.render('auth/verifyResult', { success: false, message: 'Token expired — request resend' });
    }

    user.isVerified = true;
    user.verifyToken = undefined;
    user.verifyTokenExpires = undefined;
    await user.save();

    return res.redirect(`#verified?name=${encodeURIComponent(user.name)}`);
  } catch (err) {
    next(err);
  }
});

/**
 * POST /login
 */
router.post('/login', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: 'Email and password required' });
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const ok = await bcrypt.compare(password, user.passwordHash);
    if (!ok) return res.status(400).json({ message: 'Invalid credentials' });
    if (!user.isVerified) return res.status(403).json({ message: 'Account not verified', needVerify: true, email: user.email });
    req.session.user = { email: user.email, name: user.name, isVerified: user.isVerified };
    
    return res.json({ message: 'Logged in', name: user.name, email: user.email });
  } catch (err) {
    next(err);
  }
});

/**
 * POST /resend
 */
router.post('/resend', async (req, res, next) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ message: 'Email required' });
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'No account found' });
    if (user.isVerified) return res.status(400).json({ message: 'Already verified' });

    const token = makeToken(20);
    user.verifyToken = token;
    user.verifyTokenExpires = Date.now() + 1000 * 60 * 60 * 24;
    await user.save();

    const verifyUrl = `${FRONTEND_BASE}/auth/verify?token=${token}&email=${encodeURIComponent(email)}`;
    const html = `<p>Hi ${user.name || ''},</p><p>Click to verify your email: <a href="${verifyUrl}">${verifyUrl}</a></p>`;
    try { await sendMail({ to: email, subject: 'Your verification link', html }); } catch (e) { console.error('Mail send error:', e); }

    return res.json({ message: 'Verification email resent' });
  } catch (err) {
    next(err);
  }
});

/**
 * POST /forgot
 */
router.post('/forgot', async (req, res, next) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ message: 'Email required' });

    const user = await User.findOne({ email });
    const genericMsg = 'If that email exists, a reset link was sent';
    if (!user) return res.json({ message: genericMsg });

    const token = makeToken(20);
    user.resetToken = token;
    user.resetTokenExpires = Date.now() + 1000 * 60 * 60;
    await user.save();

    const resetUrl = `${FRONTEND_BASE}/auth/reset?token=${token}&email=${encodeURIComponent(email)}`;
    const html = `<p>Hello ${user.name || ''},</p><p>Reset your password: <a href="${resetUrl}">${resetUrl}</a></p>`;

    try { await sendMail({ to: email, subject: 'Password reset request', html }); } catch (mailErr) { console.error('Error sending password reset email:', mailErr); }

    return res.json({ message: genericMsg });
  } catch (err) {
    console.error('Forgot endpoint error:', err);
    return res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

/**
 * GET /reset
 */
router.get('/reset', async (req, res, next) => {
  try {
    const { token, email } = req.query;
    if (!token || !email) return res.render('auth/resetForm', { valid: false, message: 'Invalid link' });
    const user = await User.findOne({ email, resetToken: token });
    if (!user || (user.resetTokenExpires && user.resetTokenExpires < Date.now())) {
      return res.render('auth/resetForm', { valid: false, message: 'Invalid or expired token' });
    }
    return res.render('auth/resetForm', { valid: true, email, token });
  } catch (err) {
    next(err);
  }
});

/**
 * POST /reset
 */
router.post('/reset', async (req, res, next) => {
  try {
    const { email, token, password } = req.body;
    if (!email || !token || !password || password.length < 8) {
      return res.render('auth/resetForm', { valid: false, message: 'Missing fields or password too short' });
    }
    const user = await User.findOne({ email, resetToken: token });
    if (!user || (user.resetTokenExpires && user.resetTokenExpires < Date.now())) {
      return res.render('auth/resetForm', { valid: false, message: 'Invalid or expired token' });
    }

    user.passwordHash = await bcrypt.hash(password, 10);
    user.resetToken = undefined;
    user.resetTokenExpires = undefined;
    await user.save();

    return res.render('auth/verifyResult', { success: true, message: 'Password reset successful. You can now log in.' });
  } catch (err) {
    next(err);
  }
});

/**
 * POST /logout
 */
router.post('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) return res.status(500).json({ message: 'Logout failed' });
    res.clearCookie('vision.vault');
    res.json({ message: 'Logged out' });
  });
});


module.exports = router;
