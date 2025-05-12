// controllers/quizController.js
const Quiz = require('../models/Quiz');

// Add new quiz questions
exports.addQuizQuestions = async (req, res) => {
  try {
    const { question, options, answer } = req.body;
    const newQuiz = new Quiz({ question, options, answer });
    await newQuiz.save();
    res.status(201).json({ msg: 'Quiz question added successfully' });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Get all quiz questions
exports.getAllQuizQuestions = async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.status(200).json(quizzes);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
