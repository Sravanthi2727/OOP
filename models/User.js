// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true, lowercase: true },
  passwordHash: { type: String, required: true },
  isVerified: { type: Boolean, default: false },
  verifyToken: String,
  verifyTokenExpires: Date,
  resetToken: String,
  resetTokenExpires: Date
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
