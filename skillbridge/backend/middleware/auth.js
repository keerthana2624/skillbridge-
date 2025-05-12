const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  const token = req.header('Authorization');
  
  if (!token) {
    return res.status(401).json({ msg: 'No token, access denied' });
  }

  // Check if the token starts with "Bearer "
  if (!token.startsWith('Bearer ')) {
    return res.status(400).json({ msg: 'Token must be in the format: Bearer <token>' });
  }

  try {
    // Remove "Bearer " prefix to get the token
    const actualToken = token.split(' ')[1];
    const decoded = jwt.verify(actualToken, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).json({ msg: 'Token is not valid' });
  }
};

module.exports = auth;
