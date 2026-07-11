// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
// import express from "express";
// import morgan from "morgan";
const express = require("express");
const morgan = require("morgan");

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
// Start defining your routes here:
app.get("/trial", (req, res) => {
  try {
    res.status(200).json({ message: "Run" });
  } catch (error) {
    res.status(500).json(error);
  }
});

app.get("/trial2", (req, res) => {
  try {
    res.send("<h1>Hello world!!</h1>");
  } catch (error) {
    res.status(500).json(error);
  }
});

app.get("/", (req, res) => {
  try {
    console.log(req);
    res.sendFile(__dirname + "/views/home.html");
  } catch (error) {
    res.status(500).json(error);
  }
});

app.get("/blog", (req, res) => {
  try {
    res.sendFile(__dirname + "/views/blog.html");
  } catch (error) {
    res.status(500).json(error);
  }
});

app.get("/api/projects", (req, res) => {
  try {
    res.sendFile(__dirname + "/data/projects.json");
  } catch (error) {
    res.status(500).json(error);
  }
});

app.get("/api/articles", (req, res) => {
  try {
    res.sendFile(__dirname + "/data/articles.json");
  } catch (error) {
    res.status(500).json(error);
  }
});

app.get((req, res) => {
  try {
    res.sendFile(__dirname + "/views/not-found.html");
  } catch (error) {
    res.status(500).json(error);
  }
});
// START THE SERVER
// Make your Express server listen on port 5005:
app.listen(5005, () => {
  console.log("Server up and running on 5005");
});
