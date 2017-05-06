const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const passport = require('passport');

const config = require('./config/database');

// Routes
const account = require('./routes/account');
const profile = require('./routes/profile');


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
app.use('/profile', profile);

const port = 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});