const Resource = require('../models/Resource');

exports.createResource = async (req, res) => {
  try {
    const { title, category, link, description } = req.body;
    const resource = new Resource({ title, category, link, description });
    await resource.save();
    res.status(201).json({ msg: 'Resource added successfully', resource });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Get all resources
exports.getResources = async (req, res) => {
    try {
      const resources = await Resource.find();
      res.status(200).json(resources);
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  };
  