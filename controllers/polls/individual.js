const Poll = require('../../models/Poll');

module.exports = (req, res) => {
  Poll.getPollById(req.params.id, (err, poll) => {
    if (err) {
      res.json({ success: false, msg: 'Failed to fetch poll' });
    }
    if (!poll) {
      res.json({ success: false, msg: 'Failed to fetch poll' });
    } else {
      res.json({ success: true, msg: 'Poll fetched successfully', poll: poll });
    }
  })
};