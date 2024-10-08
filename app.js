// IMPORTAR PAQUETES
// Aquí debes importar los paquetes necesarios para tu aplicación de Express: `express` y `morgan`
const express = require ('express');
const morgan = require ("morgan");
const projects = require('./data/projects.json')
const articles = require('./data/articles.json')


// CREAR APLICACIÓN EXPRESS
// Aquí debes crear tu aplicación de Express:
const app = express();


// MIDDLEWARE
// Aquí debes configurar el middleware necesario:
// - `express.static()` para servir archivos estáticos desde la carpeta `public`
// - `express.json()` para analizar las solicitudes entrantes con contenido JSON
// - El logger `morgan` para registrar todas las solicitudes entrantes */
app.use(express.static("public"));
app.use(express.json());
app.use(morgan("dev"));


// RUTAS
// Comienza a definir tus rutas aquí:
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});

app.get("/blog", (req,res) => {
  res.sendFile(__dirname + "/views/blog.html");
})

app.get("/api/projects", (req,res) => {
  res.json(projects);
})

app.get("/api/articles", (req,res) => {
  res.json(articles);
})

app.use("/api/articles", (req,res,next) => {
  res.status(404).sendFile(__dirname + "views/not-found.html");
})


// INICIAR EL SERVIDOR
// Haz que tu servidor de Express escuche en el puerto 5005: */

const port = 5005
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})