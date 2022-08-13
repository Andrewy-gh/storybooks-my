const express = require('express');
const router = express.Router();

// @desc Auth with Google
// @route GET /
router.get('/', (req, res) => {
  res.render('login', { layout: 'login' });
});
// @desc Dashboard
// @route GET /dasboard
router.get('/dashboard', (req, res) => {
  res.render('dashboard');
});

module.exports = router;
