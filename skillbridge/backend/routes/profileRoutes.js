const express = require('express');
const { upsertProfile, getProfile } = require('../controllers/profileController');

const router = express.Router();

// POST: Create or update a profile
router.post('/save', upsertProfile);

// GET: Get profile by user ID
router.get('/:userId', getProfile);

module.exports = router;
