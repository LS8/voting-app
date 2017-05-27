const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const passport = require('passport');
const cors = require('cors');
const path = require('path');

const config = require('./config/database');

// Routes
const account = require('./routes/account');
const profile = require('./routes/profile');
const polls = require('./routes/polls');


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

// Cors Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

const port = process.env.PORT || 8080;

// Passport Middleware
app.use(passport.initialize());
// app.use(passport.session());
require('./config/authentication').passportStrategy(passport);

// Use Routes
app.use('/account', account);
app.use('/profile', profile);
app.use('/polls', polls);

// Index Route
app.get('/', (req, res) => {
  res.send('Invalid Endpoint');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
