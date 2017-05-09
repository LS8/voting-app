const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

mongoose.Promise = global.Promise;

// Account Schema
const AccountSchema =  new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
});

const Account = module.exports = mongoose.model('Account', AccountSchema);

module.exports.getAccountById = function (id, callback) {
  Account.findById(id, callback);
};

module.exports.getAccountByUsername = function (username, callback) {
  const query = { username: username };
  Account.findOne(query, callback);
};

module.exports.addAccount = function (newAccount, callback) {
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(newAccount.password, salt, function (err, hash) {
      if (err) {
        throw err;
      }
      newAccount.password = hash;
      newAccount.save(callback);
    });
  });
};

module.exports.checkPassword = function (passwordToCheck, hash, callback) {
  bcrypt.compare(passwordToCheck, hash, function (err, res) {
    if (err) {
      throw err;
    }
    callback(null, res);
  });
};
