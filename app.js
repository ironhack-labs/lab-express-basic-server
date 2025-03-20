// IMPORT PACKAGES
const express = require("express");
const morgan = require("morgan");

// CREATE EXPRESS APP
const app = express();

// MIDDLEWARE
app.use(express.static("public")); // Servir archivos estáticos
app.use(express.json()); // Parsear JSON
app.use(morgan("dev")); // Registrar peticiones

// ROUTES
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});

app.get("/blog", (req, res) => {
  res.sendFile(__dirname + "/views/blog.html");
});

app.get("/api/projects", (req, res) => {
  const projects = require("./data/projects.json");
  res.json(projects);
});

app.get("/api/articles", (req, res) => {
  const articles = require("./data/articles.json");
  res.json(articles);
});

// 404 ROUTE - Si ninguna ruta coincide, devuelve la página de error 404
app.use((req, res, next) => {
  res.status(404).sendFile(__dirname + "/views/not-found.html");
});

// START THE SERVER
app.listen(5005, () => {
  console.log("Server listening on port 5005");
});
