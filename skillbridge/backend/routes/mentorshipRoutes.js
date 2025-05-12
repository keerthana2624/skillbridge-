const express = require('express');
const {
  createMentorshipSession,
  getMentorshipSessions,
} = require('../controllers/mentorshipController');

const router = express.Router();

// POST: Schedule a mentorship session
router.post('/schedule', createMentorshipSession);

// GET: Fetch all mentorship sessions
router.get('/', getMentorshipSessions);

module.exports = router;
