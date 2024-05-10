// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
const express = require("express");
const logger = require("morgan");

// CREATE EXPRESS APP
// Here you should create your Express app:
const app = express();

// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
app.use(express.static("public"));

// - `express.json()` to parse incoming requests with JSON payloads
app.use(express.json());
// - `morgan` logger to log all incoming requests
app.use(logger("dev"));

// ROUTES
// Start defining your routes here:
app.get("/", (request, response) =>
  response.sendFile(__dirname + "/views/home.html")
);

app.get("/blog", (request, response) =>
  response.sendFile(__dirname + "/views/blog.html")
);

app.get("/api/projects", (request, response) =>
  response.sendFile(__dirname + "/data/projects.json")
);

app.get("/api/articles", (request, response) =>
  response.sendFile(__dirname + "/data/articles.json")
);

// START THE SERVER
// Make your Express server listen on port 5005:
app.listen(5005, () => console.log("My first app listening on port 3000! "));
