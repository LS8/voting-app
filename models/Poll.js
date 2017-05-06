const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

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
  title: {
    type: String,
    required: true
  },
  options: {
    type: [OptionSchema],
    required: true
  },
  author: {
    type: String,
    required: true
  },
  createdOn: {
    type: Date,
    default: Date.now
  }
});

const Poll = module.exports = mongoose.model('Poll', PollSchema);

module.exports.save = function (newPoll, callback) {
  newPoll.save(callback);
}
