// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
const express = require("express")
const morgan = require("morgan")
const articles = require("./data/articles.json")
const projects = require("./data/projects.json")
const PORT = 5005;

const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(morgan("dev"));

app.listen (PORT, () => {
  console.log("Listening in port", PORT)
}) 

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html")
} )

app.get("/blog", (req, res) => {
  res.sendFile(__dirname + "/views/blog.html")
} )


app.get("/api/projects", (req, res) => {
  res.json(projects)
} )

app.get("/api/articles", (req, res) => {
  res.json(articles)
} )

app.get("*" , (req, res) => {
  res.status(404).sendFile(__dirname + "/views/not-found.html")
} )