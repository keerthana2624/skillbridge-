const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  fullName: String,
  bio: String,
  profilePicture: String,
  skills: [String],
  certifications: [String],
  projects: [
    {
      title: String,
      description: String,
      link: String
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model('Profile', ProfileSchema);
