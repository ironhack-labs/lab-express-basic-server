// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
const express = require("express");
const app = express();
const port = process.env.PORT || 5005;
const morgan = require("morgan");
const projectsJson = require("./data/projects.json");
const articlesJson = require("./data/articles.json");

app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.json());

app.get("/blog", (req, res) => {
  res.sendFile(__dirname + "/views/blog.html");
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/home.html");
  });


app.get("/api/projects", (req, res) => {
  res.json({ projectsJson });
});

app.get("/api/articles", (req, res) => {
  res.json({ articlesJson });
});

app.get("*", (req, res)=>{
    res.sendFile(__dirname + "/views/not-found.html");
})

app.listen(port, () => {
  console.log("Server running on port", port);
});
