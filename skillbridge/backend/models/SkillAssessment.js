const mongoose = require('mongoose');

const skillAssessmentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  skill: { type: String, required: true },
  score: { type: Number, required: true }
});

module.exports = mongoose.model('SkillAssessment', skillAssessmentSchema);
