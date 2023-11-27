// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`

const express = require ('express');
const logger = require ('morgan');



// CREATE EXPRESS APP
// Here you should create your Express app:
const app = express();



// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
app.use(express.static('public'));
// - `express.json()` to parse incoming requests with JSON payloads
app.use(express.json());
// - `morgan` logger to log all incoming requests
app.use(morgan("dev"));



// ROUTES
// Start defining your routes here:



// START THE SERVER
// Make your Express server listen on port 5005:

app.listen(5005, () => console.log("Listen on port 5005"));

