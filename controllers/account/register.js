const Account = require('../../models/Account');

module.exports = (req, res) => {
  const newAccount = new Account({
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  });

  Account.addAccount(newAccount, (err, account) => {
    if (err) {
      res.json({ success: false, msg: 'Failed to register' });
    } else {
      res.json({ success: true, msg: 'User registered' });
    }
  });
}