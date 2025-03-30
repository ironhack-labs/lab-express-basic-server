// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
const express = require('express')
const logger = require('morgan')
const myProjects = require('./data/projects.json')
const myArticles = require('./data/articles.json')
const PORT = 5005;
// CREATE EXPRESS APP
// Here you should create your Express app:
const app = express();

// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
// - `express.json()` to parse incoming requests with JSON payloads
// - `morgan` logger to log all incoming requests
app.use(express.static('public'))
app.use(express.json());
app.use(logger('dev'));



// ROUTES
// Start defining your routes here:
app.get('/', (req, res, next) => {
    res.sendFile(__dirname + "/views/home.html")
});

app.get('/blog', (req, res, next )=>{
    res.sendFile(__dirname + "/views/blog.html")
    // res.send("this is the blog")
});

app.get('/api/projects', (req, res) => {
    res.json(myProjects)
})

app.get('/api/articles',(req, res)=>{
    res.json(myArticles)
})

app.get('/*',(req, res)=>{
res.sendFile(__dirname + '/views/not-found.html')
})

// START THE SERVER
// Make your Express server listen on port 5005:
app.listen(PORT, ()=>{
    console.log(`server listening on PORT ${PORT}`)
})