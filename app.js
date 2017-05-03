const express = require('express');

// Routes
const userAuthentication = require('./routes/userAuthentication');
const userProfile = require('./routes/userProfile');

const app = express();

// Use Routes
app.use('/user', userAuthentication);
app.use('/profile', userProfile);

const port = 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});