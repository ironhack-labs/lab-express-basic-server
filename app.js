// IMPORT PACKAGES
const express = require("express");
const morgan = require("morgan");
const projects = require("./data/projects.json");
const articles = require("./data/articles.json");

// import express from "express"
// CREATE EXPRESS APP
const app = express();
// Here you should create your Express app:

// MIDDLEWARE
app.use(express.static("public"));
app.use(express.json());
app.use(morgan("dev"));

// ROUTES
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});

app.get("/blog", (req, res) => {
  res.sendFile(__dirname + "/views/blog.html");
});

app.get("/api/projects", (req, res) => {
  res.json(projects);
});

app.get("/api/articles", (req, res) => {
  res.json(articles);
});

app.use((rq, res, next) => {
  res.status(404).sendFile(__dirname + "/views/not-found.html");
});
// START THE SERVER
app.listen(5006, () => {
  console.log("Server listening on port 5006");
});
