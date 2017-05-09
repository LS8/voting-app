const Account = require('../../models/Account');

module.exports = (req, res) => {
  const newAccount = new Account({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email
  });

  Account.addAccount(newAccount, (err, account) => {
    if (err) {
      res.json({ success: false, msg: 'Failed to register' });
    } else {
      res.json({ success: true, msg: 'User registered' });
    }
  });
}
