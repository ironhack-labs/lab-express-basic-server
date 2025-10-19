const express = require("express");
const morgan = require("morgan");

// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`

// IMPORT PACKAGES

// CREATE EXPRESS APP
const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(express.static("public"));

app.listen(5005, () => {
  console.log("Server is running on http://localhost:5005");
});

// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
// - `express.json()` to parse incoming requests with JSON payloads
// - `morgan` logger to log all incoming requests

// ROUTES
// Start defining your routes here:

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});
app.get("/blog", (req, res) => {
  res.sendFile(__dirname + "/views/blog.html");
});
app.get("/not-found", (req, res) => {
  res.sendFile(__dirname + "/views/not-found.html");
});

app.get("/api/projects", (req, res) => {
  res.json(projects);
});

app.get("/api/articles", (req, res) => {
  res.json(articles);
});

app.use((req, res) => {
  res.status(404).sendFile(__dirname + "/views/not-found.html");
}); 
// START THE SERVER
// Make your Express server listen on port 5005:
