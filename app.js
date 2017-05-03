const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');

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

app.use(bodyparser.json());

// Use Routes
app.use('/account', account);
app.use('/profile', userProfile);

const port = 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});