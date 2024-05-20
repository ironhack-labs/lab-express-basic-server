// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`

const projects = require("/data/projects.json")
const express = require('express')
const app = express()
const morgan = require('morgan')
app.use(morgan('dev'))

// CREATE EXPRESS APP
// Here you should create your Express app:


// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
// - `express.json()` to parse incoming requests with JSON payloads
// - `morgan` logger to log all incoming requests
app.use(express.static('public'))
app.use(express.json())


// ROUTES
// Start defining your routes here:



// START THE SERVER
// Make your Express server listen on port 5005:



app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/home.html")
})

app.get("/blog", (req, res) => {
    res.sendFile(__dirname + "/views/blog.html")
})

app.get("/api/projects", (req, res) => {
    res.sendFile(__dirname + "/data/articles.json")
})

app.get("/api/projects", (req, res) => {
    res.json (projects)
})

const port=5005
app.listen(port,() =>{
    console.log("puerto andando")
})

