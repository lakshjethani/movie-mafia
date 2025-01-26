const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { appName: process.env.APP_NAME });
});

module.exports = router;
