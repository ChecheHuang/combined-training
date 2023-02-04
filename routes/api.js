const express = require('express');
const router = express.Router();
const { login, register } = require('../controller/memberController');
const tokenMiddleware = require('../middleware/tokenMiddleware');
const { registerRules, loginRules } = require('../utils/rules');

router.post('/register', registerRules, register);
router.post('/login', loginRules, login);

router.get('/test', tokenMiddleware, (req, res) => {
  res.json(req.user);
});

module.exports = router;
