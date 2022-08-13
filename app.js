const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');

// Load config
dotenv.config({ path: './config/config.env' });

connectDB();

const app = express();

// morgan logging in developement mode
if (process.env.NODE_ENV === 'developmetn') {
  app.use(morgan('dev'));
}

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on ${PORT}`)
);
