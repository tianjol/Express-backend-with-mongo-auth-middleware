const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/register', authController.register);
router.post('/login', authController.login);

// Protected route example
router.get('/profile', authMiddleware, authController.getProfile);

module.exports = router;
