const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const passport = require('passport');

const config = require('./config/database');

// Routes
const account = require('./routes/account');
const userProfile = require('./routes/userProfile');


// Connect To Database
mongoose.connect(config.dbLocation);

// On Connection
mongoose.connection.on('connected', () => {
  console.log(`Connected to database ${config.dbLocation}`);
});

// On Error
mongoose.connection.on('error', (err) => {
  console.log(`Database error: ${err}`);
});

const app = express();

// Bodyparser Middleware
app.use(bodyparser.json());

// Passport Middleware
app.use(passport.initialize());
// app.use(passport.session());
require('./config/authentication').passportStrategy(passport);

// Use Routes
app.use('/account', account);
app.use('/profile', userProfile);

const port = 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.get('/profile', passport.authenticate('jwt', { session: false}),
    function(req, res) {
        res.json({ msg: 'authe4tnicated route' });
    }
);