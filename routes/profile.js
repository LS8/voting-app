const express = require('express');
const passport = require('passport');
const Router = express.Router();
const polls = require('../controllers/profile/polls');

Router.get('/polls', passport.authenticate('jwt', { session: false }), polls);

module.exports = Router;