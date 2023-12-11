const express = require('express');
const router = express.Router();
const { loginUser, register } = require('../controllers/auth.controller');

router.post('/login', loginUser);
router.post('/register', register);

module.exports = router;
