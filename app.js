const express = require("express");
const morgan = require("morgan");
const path = require("path");

const app = express();

// Middleware
app.use(express.static("public"));
app.use(express.json());
app.use(morgan("dev"));

// Ruta para /
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "home.html"));
});


app.get("/blog", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "blog.html"));
});


app.get("/home.html", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "home.html"));
  });

// Iniciar el servidor
const PORT = 5005;
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

app.get('/api/projects', (req, res) => {
    const projectsData = require('./data/projects.json'); // Importing the JSON file
    res.json(projectsData);  // Sending the data as JSON response
  });

  app.get('/api/articles', (req, res) => {
    const articlesData = require('./data/articles.json'); // Importing the JSON file
    res.json(articlesData);  // Sending the data as a JSON response
  });
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'not-found.html'));
  });
  