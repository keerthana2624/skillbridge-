const express = require('express');
const { getUsers, getJobOpportunities } = require('../controllers/adminController');

const router = express.Router();

router.get('/users', getUsers);
router.get('/job-opportunities', getJobOpportunities);

module.exports = router;
