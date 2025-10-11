// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const fs = require("fs");

// CREATE EXPRESS APP
// Here you should create your Express app:
const app = express();

// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
// - `express.json()` to parse incoming requests with JSON payloads
// - `morgan` logger to log all incoming requests
app.use(express.json());
app.use(express.static("public"));
app.use(morgan("dev"));
app.use(
  cors({
    origin: ["localhost:5005"],
  })
);

const projects = JSON.parse(fs.readFileSync(`${__dirname}/data/projects.json`));
const articles = JSON.parse(fs.readFileSync(`${__dirname}/data/articles.json`));
// ROUTES
// Start defining your routes here:
app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/views/home.html`);
});

app.get("/blog", (req, res) => {
  res.sendFile(`${__dirname}/views/blog.html`);
});

app.get("/api/projects", (req, res) => {
  res.status(200).json(projects);
});

app.post("/api/projects", (req, res) => {
  const myProject = req.body;
  console.log(myProject);
  projects.push(myProject);
  fs.writeFile(
    `${__dirname}/data/projects.json`,
    JSON.stringify(projects),
    (error) => {
      res.status(201).json(projects);
    }
  );
});

app.get("/api/articles", (req, res) => {
  res.status(200).json(articles);
});

app.use((req, res, next) => {
  res.status(404).sendFile(`${__dirname}/views/not-found.html`);
});

// START THE SERVER
// Make your Express server listen on port 5005:
const port = 5005;
app.listen(port, () => {
  console.log(`running on port ${port}`);
});
