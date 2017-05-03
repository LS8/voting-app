const express = require('express');
const Router = express.Router();

Router.get('/polls', (req, res, next) => {
  res.json('user requested to see all of his polls');
});

module.exports = Router;