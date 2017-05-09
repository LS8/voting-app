const Account = require('../../models/Account');

module.exports = (req, res) => {
  const newAccount = new Account({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email
  });

  Account.addAccount(newAccount, (err, account, affectedRows, alreadyRegistered) => {
    if (err) {
      res.json({ success: false, msg: 'Failed to register' });
    } else if (alreadyRegistered) {
      res.json({ success: false, msg: 'Usernamy already exists' });
    } else if (account) {
      res.json({ success: true, msg: 'Account registered' });
    } else {
      res.json({ success: false, msg: 'Oops, something went wrong..' });
    }
  });
}
