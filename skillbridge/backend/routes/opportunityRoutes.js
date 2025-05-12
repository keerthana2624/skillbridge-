const express = require('express');
const {
  createJobOpportunity,
  getJobOpportunities,
} = require('../controllers/opportunityController');

const router = express.Router();

// POST: Create a job opportunity
router.post('/add', createJobOpportunity);

// GET: Fetch all job opportunities
router.get('/', getJobOpportunities);

module.exports = router;
