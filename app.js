// Importar Paquetes
const express = require('express');
const morgan = require('morgan');
const fs = require('fs'); // Importar el módulo fs para leer archivos

// Crear Aplicación Express
const app = express();

// Configuración de Middleware
app.use(express.static('public'));
app.use(express.json());
app.use(morgan('dev'));

// Rutas
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/blog', (req, res) => {
    res.sendFile(__dirname + '/views/blog.html');
});

// Nuevo Controlador para /api/projects
app.get('/api/projects', (req, res) => {
    const projectsData = fs.readFileSync('./data/projects.json', 'utf-8'); // Leer el archivo JSON
    const projects = JSON.parse(projectsData); // Parsear el contenido a objeto
    res.json(projects); // Enviar el contenido del archivo como respuesta JSON
});

// Nuevo Controlador para /api/articles
app.get('/api/articles', (req, res) => {
    fs.readFile('data/articles.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Error al leer el archivo' });
        }
        res.json(JSON.parse(data)); // Enviar los datos JSON como respuesta
    });
});

// Controlador para Rutas No Definidas (Error 404)
app.use((req, res, next) => {
    res.status(404).sendFile(__dirname + '/views/not-found.html');
});

// Iniciar el Servidor
const PORT = 5005;
app.listen(PORT, () => {
    console.log(`El servidor está corriendo en http://localhost:${PORT}`);
});
