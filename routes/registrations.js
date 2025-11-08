// routes/registrations.js
const express = require('express');
const router = express.Router();
const authRequired = require('../utils/authRequired');
const Registration = require('../models/Registration');

// POST /auth/registerHackathon
router.post('/registerHackathon', authRequired, async (req, res) => {
  try {
    const { eventId, source, title, applyUrl } = req.body;
    if (!eventId || !source) return res.status(400).json({ message: 'Missing fields' });

    const user = req.session.user;
    if (!user || !user.email) return res.status(401).json({ message: 'Login required' });

    const reg = new Registration({
      userEmail: user.email,
      eventId,
      source,
      title,
      appliedUrl: applyUrl
    });
    await reg.save();

    const count = await Registration.countDocuments({ userEmail: user.email });
    res.json({ message: 'Registered (recorded)', count });
  } catch (err) {
    console.error('Registration error', err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
