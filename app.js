// IMPORT PACKAGES
import express from "express";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";

import projects from "./data/projects.json" with { type: "json" };
import articles from "./data/articles.json" with { type: "json" };

// CREATE EXPRESS APP
const app = express();

// __dirname (ES Modules)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// MIDDLEWARE
app.use(express.static("public"));
app.use(express.json());
app.use(morgan("dev"));

// =======================
// ROUTES
// =======================

// Home
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "home.html"));
});

// Blog
app.get("/blog", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "blog.html"));
});

// Projects API
app.get("/api/projects", (req, res) => {
  res.json(projects);
});

// Articles API
app.get("/api/articles", (req, res) => {
  res.json(articles);
});

// 404
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "not-found.html"));
});

// START SERVER
app.listen(5005, () => {
  console.log("Server listening on port 5005");
});