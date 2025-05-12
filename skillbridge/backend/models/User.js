const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'mentor', 'student'], default: 'student' },
  profilePicture: { type: String },
  skills: [{ type: String }],
  certifications: [{ type: String }],
  projects: [{ type: String }]
});

module.exports = mongoose.model('User', userSchema);
