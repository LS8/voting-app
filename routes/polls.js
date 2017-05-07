const express = require('express');
const Router = express.Router();
const allPolls = require('../controllers/polls/all');
const individualPoll = require('../controllers/polls/individual');

Router.get('/', allPolls);

Router.get('/:id', individualPoll);

module.exports = Router;