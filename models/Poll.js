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
  labels: {
    type: [String],
    required: true
  },
  votes: {
    type: [Number],
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
};

module.exports.getPollById = function (id, callback) {
  Poll.find({ _id: id }, callback);
}

module.exports.getAllPolls = function (callback) {
  // callback takes: (err, docs)
  Poll.find({}, callback);
};

module.exports.getRecentPolls = function (count, callback) {
  Poll.find({}).limit(count).sort({ createdOn: -1 }).exec(callback);
};

module.exports.getPollsByUser = function (user, callback) {
  Poll.find({ author: user }, callback);
};
