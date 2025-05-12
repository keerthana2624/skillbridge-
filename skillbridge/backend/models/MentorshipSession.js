const mongoose = require('mongoose');

const mentorshipSessionSchema = new mongoose.Schema({
  mentorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  menteeId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true }
});

module.exports = mongoose.model('MentorshipSession', mentorshipSessionSchema);
