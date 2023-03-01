const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
// const userRoute = require('./routes/users');
const pinRoute = require('./routes/pins.js');
const userRoute = require('./routes/users.js');

dotenv.config();

mongoose
  .connect(process.env.DB)
  .then(() => {
    console.log('connected to db');
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();
app.use(express.json());
// app.use('/api/users', userRoute);
app.use('/api/pins', pinRoute);
app.use('/api/users', userRoute);

app.listen(8800, () => {
  console.log('Backend server is running!');
});
