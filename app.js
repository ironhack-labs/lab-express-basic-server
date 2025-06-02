// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
const express = require("express"); // Importe le module express. C’est une bibliothèque qui facilite la création de serveurs web en Node.js.

const morgan = require("morgan"); //  Importe le module morgan, un middleware qui sert à logger les requêtes HTTP dans la console (pratique pour le debug).

// CREATE EXPRESS APP
// Here you should create your Express app:
const app = express(); // Crée une application Express. Cette variable app représente ton serveur. Tu l’utiliseras pour définir les routes, la logique, etc.

// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
app.use(express.static("public")); // Dit à Express de servir automatiquement les fichiers statiques (HTML, CSS, images, etc.) depuis le dossier public.Par exemple, si tu as public/index.html, il sera accessible via http://localhost:3000/index.html.
// - `express.json()` to parse incoming requests with JSON payloads
app.use(express.json()); // pour analyser les requêtes entrantes contenant des données JSON.
// - `morgan` logger to log all incoming requests
app.use(morgan("dev")); // Active le middleware morgan avec le format "dev". À chaque requête, un petit résumé s’affichera dans la console (méthode HTTP, URL, temps de réponse, etc.).

// ROUTES
// Start defining your routes here:
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});

app.get("/blog", (req, res) => {
  res.sendFile(__dirname + "/views/blog.html");
});

const projects = require("./data/projects.json");
app.get("/api/projects", (req, res) => {
  res.json(projects);
});

const articles = require("./data/articles.json");
app.get("/api/articles", (req, res) => {
  res.json(articles);
});

// START THE SERVER
// Make your Express server listen on port 5005:
const port = process.env.PORT || 5005;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
