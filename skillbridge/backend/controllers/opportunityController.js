const JobOpportunity = require('../models/JobOpportunity');

exports.createJobOpportunity = async (req, res) => {
  try {
    const { title, description, location, category, skillsRequired, applyLink } = req.body;
    const opportunity = new JobOpportunity({ title, description, location, category, skillsRequired, applyLink });
    await opportunity.save();
    res.status(201).json({ msg: 'Job opportunity created successfully', opportunity });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Get all job opportunities
exports.getJobOpportunities = async (req, res) => {
    try {
      const opportunities = await JobOpportunity.find();
      res.status(200).json(opportunities);
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  };
  