const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Option Schema
const OptionSchema = new Schema({
  description: {
    type: String,
    required: true
  },
  votes: {
    type: Number,
    default: 0,
    required: true
  }
});

// Poll Schema
const PollSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  options: {
    type: [OptionSchema],
    required: true
  }
});

// Account Schema
const AccountSchema =  new Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  polls: {
    type: [PollSchema]
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
  newAccount.save(callback);
};