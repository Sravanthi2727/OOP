// models/Registration.js
const mongoose = require('mongoose');

const regSchema = new mongoose.Schema({
  userEmail: { type: String, required: true, lowercase: true },
  eventId: { type: String, required: true },
  source: { type: String, required: true },
  title: String,
  appliedUrl: String,
  registeredAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Registration', regSchema);
