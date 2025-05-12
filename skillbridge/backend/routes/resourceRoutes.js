const express = require('express');
const { createResource, getResources } = require('../controllers/resourceController');

const router = express.Router();

// POST: Add a resource
router.post('/add', createResource);

// GET: Fetch all resources
router.get('/', getResources);

module.exports = router;
