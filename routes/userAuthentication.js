const express = require('express');
const Router = express.Router();

Router.post('/register', (req, res, next) => {
  res.json('requested login');
});

Router.post('/authenticate', (req, res, next) => {
  res.json('requested login');
});

module.exports = Router;