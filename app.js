// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
const express = require("express");
const morgan  = require("morgan")


// CREATE EXPRESS APP
// Here you should create your Express app:
const app= express()
const projects = require("./data/projects.json");
const articles = require("./data/articles.json");

// MIDDLEWARE


// Middleware
app.use(express.static('public')); // Serve static files from 'public' directory
app.use(express.json());           // Parse JSON bodies
app.use(morgan('dev'));            // Log all requests to the console with 'dev' format

// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
// - `express.json()` to parse incoming requests with JSON payloads
// - `morgan` logger to log all incoming requests



// ROUTES
// Start defining your routes here:
// Define a simple route to get started
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/views/home.html");
});

app.get('/blog', (req, res) => {
    res.sendFile(__dirname + "/views/blog.html");
});

// More complex route example: Returning JSON
app.get('/api/projects', (req, res) => {
    res.json(projects);
});

app.get('/api/articles', (req, res) => {
    res.json(articles);
})

app.use((req, res, next) => {
    res.status(404).sendFile(__dirname + "/views/not-found.html");
})

// POST route example
app.post('/api/data', (req, res) => {
    // In a real application, you would typically add validation and possibly database interactions here
    console.log(req.body);  // Log the request body to the console
    res.status(201).send('Data received');
});


// START THE SERVER
// Make your Express server listen on port 5005:
const PORT = 5005;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
