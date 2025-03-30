const express = require("express");
const path = require("path");
const router = express.Router();
const projects = require("../data/projects.json");
const articles = require("../data/articles.json");

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "index.html"));
})

router.get("/blog", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "blog.html"));
});

router.get("/api/projects", (req, res) => {
    res.json(projects);
});

router.get("/api/articles", (req, res) => {
    res.json(articles);
});

router.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, "..", "views", "not-found.html"));
});

module.exports = router;
