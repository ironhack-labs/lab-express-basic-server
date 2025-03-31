// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`

const express = require("express");
const morgan = require("morgan");
const app = express();

// CREATE EXPRESS APP
// Here you should create your Express app:

// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
// - `express.json()` to parse incoming requests with JSON payloads
// - `morgan` logger to log all incoming requests

// ROUTES
// Start defining your routes here:

// START THE SERVER
// Make your Express server listen on port 5005:

app.listen(5005, () => {
  console.log("my server is running on: ", `http://localhost:5005`);
});
