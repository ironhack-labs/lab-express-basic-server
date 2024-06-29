// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
const express = require('express');
const morgan = require('morgan');
const app = express();

const PORT = 5005;

app.use(express.static('public'));

app.use(express.json());

app.use(morgan('dev'));



// CREATE EXPRESS APP
// Here you should create your Express app:



// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
// - `express.json()` to parse incoming requests with JSON payloads
// - `morgan` logger to log all incoming requests



// ROUTES
// Start defining your routes here:
app.get('/', (req, res) => {
    res.send('welcome to the home page!')
});
app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/views/home.html')  
});
app.get('/blog', (req, res) => {
    res.sendFile(__dirname + '/views/blog.html')
});
app.get('/data/projects', (req, res) => {
    res.json(projects);
});
app.get('/data/articles', (req, res) => {
    res.json(articles);
});

app.use((req, res, next) => {
    res.status(404).sendFile(__dirname + "/views/not-found.html");
});


// START THE SERVER
// Make your Express server listen on port 5005:
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})