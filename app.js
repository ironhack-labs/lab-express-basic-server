// IMPORT PACKAGES
const express = require("express")
const morgan = require("morgan")
// Here you should import the required packages for your Express app: `express` and `morgan`

const projects = require("./data/projects.json")
const article = require("./data/articles.json")

// CREATE EXPRESS APP
const app = express()
// Here you should create your Express app:



// MIDDLEWARE
app.use(express.static("public"))
app.use(express.json())
app.use(morgan("dev"))
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
// - `express.json()` to parse incoming requests with JSON payloads
// - `morgan` logger to log all incoming requests



// ROUTES
app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/views/home.html")
})

app.get("/blog", (req,res)=>{
    res.sendFile(__dirname + "/views/blog.html")
})


app.get("/api/projects", (req, res)=>{
    res.json(projects)
})

app.get("/api/article", (req, res)=>{
    res.json(article)
})

app.use((req,res,next)=>{
    res.status(404).sendFile(__dirname + "/views/not-found.html")
})
// Start defining your routes here:



// START THE SERVER
app.listen(5005,()=>{
    console.log("Server listening on port 5005")
})
// Make your Express server listen on port 5005:
