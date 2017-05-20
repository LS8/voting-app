const express = require('express');
const Router = express.Router();
const allPolls = require('../controllers/polls/all');
const individualPoll = require('../controllers/polls/individual');
const vote = require('../controllers/polls/vote');
const deletePoll = require('../controllers/polls/delete');

Router.get('/', allPolls);

Router.get('/:id', individualPoll);

Router.post('/:id', vote);

Router.delete('/:id', deletePoll);

module.exports = Router;