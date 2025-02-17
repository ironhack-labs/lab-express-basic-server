// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
import express from "express";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import projectData from "./data/projects.json" with { type: "json" };
import articleData from "./data/articles.json" with { type: "json" };

// CREATE EXPRESS APP
// Here you should create your Express app:
const app = express();

// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
// - `express.json()` to parse incoming requests with JSON payloads
// - `morgan` logger to log all incoming requests

app.use(express.static("public"));
app.use(express.json());
app.use(morgan("dev"));

// ROUTES
// Start defining your routes here:npm

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__dirname);

app.get("/", (req, res, next) => {
  console.log(req);
  res.sendFile(__dirname + "/views/home.html");
});
app.get("/blog", (req, res, next) => {
  console.log(req);
  res.sendFile(__dirname + "/views/blog.html");
});

app.get("/api/projects", (req, res, next) => {
    console.log(req);
    res.json(projectData);
});
app.get("/api/articles", (req, res, next) => {
    console.log(req);
    res.json(articleData);
});
app.use((req, res, next) => {
  res.status(404).sendFile(__dirname + "/views/not-found.html");
});
// START THE SERVER
// Make your Express server listen on port 5005:
app.listen(5005, () => console.log("My first app listening on port 5005! "));
