const SkillAssessment = require('../models/SkillAssessment');

exports.createSkillAssessment = async (req, res) => {
  try {
    const { userId, skill, score } = req.body;
    const assessment = new SkillAssessment({ userId, skill, score });
    await assessment.save();
    res.status(201).json({ msg: 'Assessment saved successfully', assessment });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
