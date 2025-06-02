// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
const express = require('express');
const morgan = require('morgan');
const path = require('path');
//5. Importo archivo JSON
const projectsData = require('./data/projects.json');
//6. importo json data para articles
const articlesData = require('./data/articles.json');


// CREATE EXPRESS APP
// Here you should create your Express app:
const app = express();


// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
app.use(express.static(path.join(__dirname, 'public')));
// - `express.json()` to parse incoming requests with JSON payloads
app.use(express.json());
// - `morgan` logger to log all incoming requests
app.use(morgan('dev'));


// ROUTES
// Start defining your routes here:
app.get('/homepage', (req, res) => {   res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

//4. CREATE A BLOG ROUTE
app.get('/blog', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'blog.html'));
});


//5 creo ruta api/projects
app.get('/api/projects', (req, res) => {
  res.json(projectsData);
});


//6: ruta json data para articles

app.get('/api/articles', (req, res) => {
  res.json(articlesData); // ✅ nuevo
});

//7. ruta 404 not found
app.get('*', (req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'views', 'not-found.html'));
});

// START THE SERVER
// Make your Express server listen on port 5005:
const port = 5005;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


