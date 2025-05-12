const express = require('express');
const { createSkillAssessment } = require('../controllers/skillController');

const router = express.Router();

router.post('/assess', createSkillAssessment);

module.exports = router;
