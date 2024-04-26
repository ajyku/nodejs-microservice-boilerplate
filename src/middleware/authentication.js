const jwt = require('jsonwebtoken');
const config = require('../config');

module.exports = (req, res, next) => {
  // authentication logic using JWT
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ message: 'Authorization token required' });

  try {
    const decoded = jwt.verify(token, config.secret);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' });
  }
};
