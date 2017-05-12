const Poll = require('../../models/Poll');

module.exports = (req, res) => {
  const poll = new Poll({
    title: req.body.title,
    author: req.body.author,
    labels: req.body.labels,
    votes: req.body.votes
  });

  Poll.save(poll, (err, poll) => {
    if (err) {
      console.log(err);
      res.json({ success: false, msg: 'Failed to create new poll' });
    } else {
      res.json({ success: true, msg: 'New poll added' });
    }
  });
};