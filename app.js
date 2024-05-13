// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
const express = require("express");
const morgan = require("morgan");

// CREATE EXPRESS APP
// Here you should create your Express app:
// Create an express server instance named `app`
// `app` is the Express server that will be handling requests and responses
const app = express();

const articles = require("./data/articles.json");

// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
app.use(express.static("public"));
// - `express.json()` to parse incoming requests with JSON payloads
app.use(express.json());
// - `morgan` logger to log all incoming requests
app.use(morgan("dev"));

// ROUTES
// Start defining your routes here:
app.get("/", (request, response) => {
  console.log(request);
  //this is when we passed html directly
  // response.send("<h1>Welcome Ironhacker :) </h1>");
  //now passing html inside of a different folder
  response.sendFile(__dirname + "/views/home.html");
});

app.get("/test", (request, response) => {
  response.send("We made it to test!");
});

app.get("/blog", (request, response) => {
  response.sendFile(__dirname + "/views/blog.html");
});

app.get("/api/articles", (request, response) => {
  response.json(articles);
});

app.get("*", (request, response) => {
  response.sendFile(__dirname + "/views/not-found.html");
});

// START THE SERVER
// Make your Express server listen on port 5005:
// Start the server
app.listen(5005, () => console.log("My first app listening on port 5005! "));
