const MentorshipSession = require('../models/MentorshipSession');

exports.createMentorshipSession = async (req, res) => {
  try {
    const { mentorId, menteeId, date, time } = req.body;
    const session = new MentorshipSession({ mentorId, menteeId, date, time });
    await session.save();
    res.status(201).json({ msg: 'Session scheduled successfully', session });
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
  