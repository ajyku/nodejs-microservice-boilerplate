const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const validation = require('../middleware/validation');

router.get('/', UserController.getAllUsers);
// Define other routes...

module.exports = router;
