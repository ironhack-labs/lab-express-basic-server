const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = 5005;

// Datos
const projects = require('./data/projects.json');
const articles = require('./data/articles.json');

// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Rutas de páginas
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

app.get('/blog', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'blog.html'));
});

// Rutas API
app.get('/api/projects', (req, res) => {
  res.json(projects);
});

app.get('/api/articles', (req, res) => {
  res.json(articles);
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});