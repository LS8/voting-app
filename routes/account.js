const express = require('express');
const Router = express.Router();

// Controllers
const register = require('../controllers/account/register');
const authenticate = require('../controllers/account/authenticate');
const ip = require('../controllers/account/ip');

Router.post('/register', register);

Router.post('/authenticate', authenticate);

Router.get('/ip', ip);

module.exports = Router;