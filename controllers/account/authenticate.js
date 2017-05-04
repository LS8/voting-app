const Account = require('../../models/Account');

module.exports = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  
  Account.getAccountByUsername(username, (err, account) => {
    if (err) {
      throw err;
    }
    if (!account) {
      res.json({ success: false, msg: 'Account not found' });
    }
    Account.checkPassword(password, account.password, (err, result) => {
      if (err) {
        throw err;
      }
      if (result) {
        res.json({ success: true, msg: 'Login successfull' });
      } else {
        res.json({ success: false, msg: 'Wrong password' });
      }
    })
  })
};