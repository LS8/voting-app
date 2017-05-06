const express = require('express');
const passport = require('passport');
const Router = express.Router();
const poll = require('../controllers/profile/poll');

Router.post('/poll', passport.authenticate('jwt', { session: false }), poll);

module.exports = Router;