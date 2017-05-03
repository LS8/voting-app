const express = require('express');

// Routes
const account = require('./routes/account');
const userProfile = require('./routes/userProfile');

const app = express();

// Use Routes
app.use('/account', account);
app.use('/profile', userProfile);

const port = 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});