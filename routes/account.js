const express = require('express');
const Router = express.Router();

// Controllers
const register = require('../controllers/account/register');
const authenticate = require('../controllers/account/authenticate');

Router.post('/register', register);

Router.post('/authenticate', authenticate);

module.exports = Router;