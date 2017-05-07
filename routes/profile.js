const express = require('express');
const passport = require('passport');
const Router = express.Router();
const poll = require('../controllers/profile/poll');
const index = require('../controllers/profile/index');

Router.get('/', passport.authenticate('jwt', { session: false }), index);

Router.post('/newpoll', passport.authenticate('jwt', { session: false }), poll);

module.exports = Router;