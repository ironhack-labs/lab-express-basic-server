// IMPORT PACKAGES

const express = require('express');
const morgan = require('morgan');
const logger = require('morgan');
const projects = require('./data/projects.json')
const articles=require('./data/articles.json')
const app = express();
app.use(express.static('public'));
app.use(express.json());
app.use(morgan('dev'))

//projects

app.listen(5005,()=>{
    console.log('Server listening on port 5005')
})
// Create Home Route
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/views/home.html')
})
//Create Blog Route
app.get('/blog',(req,res)=>{
    res.sendFile(__dirname + '/views/blog.html')
})
//JSON Data for Projects
app.get('/api/projects',(req,res)=>{
    res.json(projects)
})
//JSON Data for Articles
app.get('/api/articles',(req,res)=>{
    res.json(articles)
})
// Create a 404 Route
app.use((req,res,next)=>{
    res.status(404).sendFile(__dirname + '/views/not-found.html')
})

// CREATE EXPRESS APP
// Here you should create your Express app:



// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
// - `express.json()` to parse incoming requests with JSON payloads
// - `morgan` logger to log all incoming requests



// ROUTES
// Start defining your routes here:



// START THE SERVER
// Make your Express server listen on port 5005:
