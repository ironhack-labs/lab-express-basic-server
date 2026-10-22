// 1. Importar paquetes
import projects from './data/projects.json'
import articles from './data/articles.json'
const express = require("express");
const morgan = require("morgan");

// 2. Crear servidor Express
const app = express();

// 3. Middleware básico

// Servir archivos estáticos desde la carpeta "public"
app.use(express.static("public"));

// Parsear JSON en el body de las peticiones
app.use(express.json());

// Logger de peticiones HTTP
app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "views/index.html")
})

app.get("/blog", (req, res) => {
    res.sendFile(__dirname + "views/blog.html")
})

app.get("/api/projects", (req, res) => {
    res.json(projects);
})

app.get("/api/articles", (req, res) => {
    res.json(articles);
})

// 4. Iniciar servidor en puerto 5005
app.listen(5005, () => {
  console.log("Server running on port 5005");
});
