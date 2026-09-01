// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
const express = require("express");
const morgan = require("morgan");

// On importe aussi les deux fichiers JSON avec les donnees
const projects = require("./data/projects.json");
const articles = require("./data/articles.json");

// CREATE EXPRESS APP
// Here you should create your Express app:
const app = express();

// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
// - `express.json()` to parse incoming requests with JSON payloads
// - `morgan` logger to log all incoming requests
// morgan en premier pour qu'il logge aussi les fichiers statiques
app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.json());

// ROUTES
// Start defining your routes here:

// Iteration 3 - page d'accueil
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});

// Iteration 4 - page du blog
app.get("/blog", (req, res) => {
  res.sendFile(__dirname + "/views/blog.html");
});

// Iteration 5 - les projets en JSON (utilise par home.html)
app.get("/api/projects", (req, res) => {
  res.json(projects);
});

// Iteration 6 - les articles en JSON (utilise par blog.html)
app.get("/api/articles", (req, res) => {
  res.json(articles);
});

// Iteration 7 (bonus) - page 404, doit rester en dernier
app.use((req, res) => {
  res.status(404).sendFile(__dirname + "/views/not-found.html");
});

// START THE SERVER
// Make your Express server listen on port 5005:
app.listen(5005, () => {
  console.log("Server listening on http://localhost:5005");
});
