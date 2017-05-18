const Poll = require('../../models/Poll');

module.exports = (req, res) => {
  const updatedPoll = req.body.updatedPoll;
  Poll.vote(updatedPoll._id, updatedPoll, (err, poll) => {
    if (err) {
      res.json({ success: false, msg: 'Failed to update poll' });
    }
    if (poll) {
      res.json({ success: true, msg: 'Poll updated' });
    }
  })
}