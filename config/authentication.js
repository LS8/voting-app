const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const Account = require('../models/Account');


const secret = 'B4C0/\\';

module.exports = {
  secret: secret,
  passportStrategy: function (passport) {
    const opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
    opts.secretOrKey = secret;
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
      Account.getAccountById(jwt_payload._doc._id, (err, account) => {
        console.log(jwt_payload);
        if (err) {
          return done(err, false);
        }

        if (Account) {
          return done(null, account);
        } else {
          return done(null, false);
        }
      });
    }));
  }
};
