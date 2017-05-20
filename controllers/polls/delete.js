const Poll = require('../../models/Poll');

module.exports = (req, res) => {
  Poll.deletePollByID(req.params.id, err => {
    if (err) {
      res.json({ success: false, msg: 'Failed to delete poll' });
    } else {
      res.json({ success: true, msg: 'Poll deleted successfully' });
    }
  });
}