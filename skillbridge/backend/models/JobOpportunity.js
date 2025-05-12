const mongoose = require('mongoose');

const jobOpportunitySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String },
  category: { type: String },
  skillsRequired: [{ type: String }],
  applyLink: { type: String }
});

module.exports = mongoose.model('JobOpportunity', jobOpportunitySchema);
