const Account = require('../../models/Account');

module.exports = (req, res) => {
  const newAccount = new Account({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email
  });

  Account.addAccount(newAccount, (err, account, affectedRows, alreadyRegistered) => {
    if (err) {
      res.json({ success: false, msg: 'Failed to register', status: 1 });
    } else if (alreadyRegistered) {
      res.json({ success: false, msg: 'Username already exists', status: 2 });
    } else if (account) {
      res.json({ success: true, msg: 'Account registered', status: 0 });
    } else {
      res.json({ success: false, msg: 'Oops, something went wrong..', status: 3 });
    }
  });
}
