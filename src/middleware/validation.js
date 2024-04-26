const { body, validationResult } = require('express-validator');

exports.validateUser = [
  body('username').isLength({ min: 3 }).withMessage('Username must be at least 3 characters'),
  body('email').isEmail().withMessage('Invalid email address'),
  // Add more validation rules as needed
];
