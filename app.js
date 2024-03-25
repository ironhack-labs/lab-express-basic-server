const express = require("express")
const logger = require ("morgan")
const projects = require("./data/projects.json")
const articles = require("./data/articles.json");
const app = express()

const PORT = process.env.PORT || 5005


app.use(express.static("public"));
app.use(express.json())
app.use(logger("dev"))


// ROUTES
// Start defining your routes here:
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/home.html")
})

app.get("/blog", (req, res) => {
  res.sendFile(__dirname + "/views/blog.html");
});

app.get("/api/projects", (req, res) => {
  res.json(projects);
});

app.get("/api/articles", (req, res) => {
  res.json(articles);
});

app.get((req, res, next) => {
  res.status(404).sendFile(__dirname + "/views/not-found.html");
});


app.listen(PORT, () => {
    console.log("server listening on port 5005")
})
