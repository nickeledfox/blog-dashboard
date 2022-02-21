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

// routes
const routes = require('./routes/index');
app.use('/api/post', routes);

// start server
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

// export for test
module.exports = app;
