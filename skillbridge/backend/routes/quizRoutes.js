// routes/quizRoutes.js
const express = require('express');
const {
  addQuizQuestions,
  getAllQuizQuestions
} = require('../controllers/quizController');

const router = express.Router();

// POST: Add quiz questions
router.post('/add', addQuizQuestions);

// GET: Fetch all quiz questions
router.get('/', getAllQuizQuestions);

module.exports = router;
