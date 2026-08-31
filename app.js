// IMPORT PACKAGES
const express = require('express');
const morgan = require('morgan');

// CREATE EXPRESS APP
const app = express();

// MIDDLEWARE
app.use(express.static('public'));
app.use(express.json());
app.use(morgan('dev'));

// ROUTES

// START THE SERVER
app.listen(5005, () => {
  console.log('Server is listening on http://localhost:5005');
});