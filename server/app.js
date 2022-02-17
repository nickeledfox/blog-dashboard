const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('uploads'));

// const routes = require('./server/routes/index');
// app.use('/', routes);

const mongoose = require('mongoose');

const DB = process.env.MONGODB_URI;
const connection = mongoose.connection;

connection.on('error', console.error.bind(console, 'Connection error: '));
connection.once('open', () => {
  console.log('Connected to DB');
});

mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
  useCreateIndex: true,
});

// start server
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
