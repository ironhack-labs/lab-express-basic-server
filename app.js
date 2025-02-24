// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
const express = require("express");
const morgan = require("morgan");

// CREATE EXPRESS APP
// Here you should create your Express app:

const app = express();




// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
// - `express.json()` to parse incoming requests with JSON payloads
// - `morgan` logger to log all incoming requests
app.use(express.static('public'));
app.use(express.json());
app.use(morgan('dev'));



// ROUTES
// Start defining your routes here:
app.get('/', (req, res, next) => {
  res.sendFile(__dirname + '/views/home.html');
});

app.get('/blog', (req, res) => {
  res.sendFile(__dirname + '/views/blog.html');});

  app.get('/api/projects', (req, res) => {
    const projects = require(__dirname + '/data/projects.json');
    res.json(projects);

  });


  app.get('/api/articles', (req, res, next) => {
    res.sendFile(__dirname + '/data/articles.json');
  });

  app.get('*', (req, res) => {
    res.status(404).sendFile(__dirname + '/views/not-found.html');
  });



app.get('/api/products', (req, res) => {
  // Simulate fetching products from a database
  const products = [
    { id: 1, name: 'Product 1', price: 9.99 },
    { id: 2, name: 'Product 2', price: 19.99 },
    { id: 3, name: 'Product 3', price: 29.99 }
  ];

  res.json(products);
});



// START THE SERVER
// Make your Express server listen on port 5005:
app.listen(5005, () => {
  console.log('Server is running on port 5005');
})