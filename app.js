// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
const express = require("express");
const morgan = require("morgan");


// CREATE EXPRESS APP
const app = express();



// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
app.use(express.static("public"));
// - `express.json()` to parse incoming requests with JSON payloads
app.use(express.json());
// - `morgan` logger to log all incoming requests
app.use(morgan("dev"));

const projects = require("./data/projects.json");
const articles = require("./data/articles.json");

// ROUTES
// Start defining your routes here:
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/view/home.html");

})
app.get("/blog", (req, res) => {
  res.sendFile(__dirname + "/view/blog.html");

})

app.get("/api/projects", (req, res) => {
  res.json (projects);

}) 
app.get("/api/articles", (req, res) => {
  res.json (articles);

}) 
app.get("/*", (req, res) => {
  res.sendFile(__dirname + "/view/not-found.html");

})

// START THE SERVER
// Make your Express server listen on port 5005:
app.listen(5005, () => {
  console.log("Server is listening on port 5005");
})