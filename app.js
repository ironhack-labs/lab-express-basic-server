// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`


const express = require("express");
const app = express();
const port = process.env.PORT || 5005;



const morgan = require("morgan");

// CREATE EXPRESS APP
// Here you should create your Express app:

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

const projects = require("./data/projects.json");
const articles = require("./data/articles.json");

// Iteration 3 | Home route
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/home.html");
});

// Iteration 4 | Blog route
app.get("/blog", (request, response) => {
  response.sendFile(__dirname + "/views/blog.html");
});

// Iteration 5 | JSON data for projects
app.get("/api/projects", (request, response) => {
  response.json(projects);
});

// Iteration 6 | JSON data for articles
app.get("/api/articles", (request, response) => {
  response.json(articles);
});

// Bonus: Iteration 7 | 404 catch-all route
app.use((request, response) => {
  response.sendFile(__dirname + "/views/not-found.html");
});

// START THE SERVER
// Make your Express server listen on port 5005:

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
