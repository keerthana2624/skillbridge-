const User = require('../models/User');
const JobOpportunity = require('../models/JobOpportunity');
const Resource = require('../models/Resource');
const MentorshipSession = require('../models/MentorshipSession');

// Get all users
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
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

// Get all resources
exports.getResources = async (req, res) => {
  try {
    const resources = await Resource.find();
    res.status(200).json(resources);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Get all mentorship sessions
exports.getMentorshipSessions = async (req, res) => {
  try {
    const sessions = await MentorshipSession.find();
    res.status(200).json(sessions);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Create a job opportunity (admin only)
exports.createJobOpportunity = async (req, res) => {
  try {
    const { title, description, location, category, skillsRequired, applyLink } = req.body;
    const opportunity = new JobOpportunity({
      title,
      description,
      location,
      category,
      skillsRequired,
      applyLink
    });
    await opportunity.save();
    res.status(201).json({ msg: 'Job opportunity created successfully', opportunity });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Delete a user (admin only)
exports.deleteUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findByIdAndDelete(userId);
    if (!user) return res.status(404).json({ msg: 'User not found' });
    res.status(200).json({ msg: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Delete a job opportunity (admin only)
exports.deleteJobOpportunity = async (req, res) => {
  try {
    const { opportunityId } = req.params;
    const opportunity = await JobOpportunity.findByIdAndDelete(opportunityId);
    if (!opportunity) return res.status(404).json({ msg: 'Job opportunity not found' });
    res.status(200).json({ msg: 'Job opportunity deleted successfully' });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
