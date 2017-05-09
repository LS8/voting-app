const jwt = require('jsonwebtoken');
const secret = require('../../config/authentication').secret;
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
    } else {
      Account.checkPassword(password, account.password, (err, isMatch) => {
        if (err) {
          throw err;
        }
        // authentication successfull
        if (isMatch) {
          // create token
          const token = jwt.sign(account, secret, {
            expiresIn: 604800 // one Week
          });
          res.json({
            success: true,
            msg: 'Login successfull',
            token: `JWT ${token}`,
            account: {
              id: account._id,
              username: account.username,
            }
          });
        } else {
          res.json({ success: false, msg: 'Wrong password' });
        }
      })
    }
  })
};
