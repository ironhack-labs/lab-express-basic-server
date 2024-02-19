const logger = require('morgan');
const express = require('express');
// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`



// CREATE EXPRESS APP
// Here you should create your Express app:
const app = express();

app.use(logger('dev')); 
app.use(express.static('public'));
app.use(express.json())


// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
// - `express.json()` to parse incoming requests with JSON payloads
// - `morgan` logger to log all incoming requests



// ROUTES
// Start defining your routes here:



// START THE SERVER
// Make your Express server listen on port 5005:
app.listen(5005, () => console.log("My first app listening on port 5005! "));