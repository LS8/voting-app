const Poll = require('../../models/Poll');

module.exports = (req, res) => {
  Poll.getPollsByUser(req.user.username, (err, polls) => {
    if (err) {
      res.json({ success: false, msg: 'Failed to fetch polls' });
    }
    if (!polls) {
      res.json({ success: false, msg: 'Failed to fetch polls' });
    } else {
      res.json({ success: true, msg: 'Polls fetched successfully', polls: polls });
    }
  })
};