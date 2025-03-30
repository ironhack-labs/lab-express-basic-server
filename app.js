// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
const express = require("express");
const logger = require("morgan");
const articles = require("./data/articles.json")
const projects = require("./data/projects.json")

// CREATE EXPRESS APP
// Here you should create your Express app:
const PORT = 5005;
const app = express();

// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
// - `express.json()` to parse incoming requests with JSON payloads
// - `morgan` logger to log all incoming requests
app.use(express.static("public"));
//app.use(express.static("data"));
app.use(express.json());
app.use(logger("dev"));

// ROUTES
// Start defining your routes here:
app.get("/", (req, res) => {
	res.sendFile(__dirname + "/views/home.html");
});
app.get("/blog", (req, res) => {
	res.sendFile(__dirname + "/views/blog.html");
});

// Get the data from projects
app.get("/api/projects", (req, res) => {
	res.json(projects);
});
// Get the data from articles
app.get("/api/articles", (req, res) => {
	res.json(articles);
});

//Final route if none of the above matched
app.get("/*", (req, res) => {
	res.sendFile(__dirname + "/views/not-found.html");
});

// START THE SERVER
// Make your Express server listen on port 5005:
app.listen(PORT, () => {
	console.log("The server is running here: http://localhost:5005");
});
