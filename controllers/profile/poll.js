const Poll = require('../../models/Poll');

module.exports = (req, res) => {
  const poll = new Poll({
    title: req.body.title,
    author: req.body.author,
    options: req.body.options
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