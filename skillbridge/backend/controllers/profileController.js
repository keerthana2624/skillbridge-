const Profile = require('../models/Profile');

// Create or update profile
exports.upsertProfile = async (req, res) => {
  try {
    const { userId, fullName, bio, profilePicture, skills, certifications, projects } = req.body;

    const updatedProfile = await Profile.findOneAndUpdate(
      { userId },
      { fullName, bio, profilePicture, skills, certifications, projects },
      { new: true, upsert: true }
    );

    res.status(200).json({ msg: 'Profile saved successfully', profile: updatedProfile });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Get profile by userId
exports.getProfile = async (req, res) => {
  try {
    const { userId } = req.params;
    const profile = await Profile.findOne({ userId });

    if (!profile) {
      return res.status(404).json({ msg: 'Profile not found' });
    }

    res.status(200).json(profile);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
