// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`



// CREATE EXPRESS APP
// Here you should create your Express app:

const express = require("express")
const morgan = require("morgan")

const app = express()
app.use(express.static("public"))
app.use(express.json())
app.use(morgan("dev"))
// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
// - `express.json()` to parse incoming requests with JSON payloads
// - `morgan` logger to log all incoming requests

app.get("/", (req, res, next) => {
    res.sendFile(__dirname + "/views/home.html")
})


// ROUTES
// Start defining your routes here:

app.get("/blog", (req, res, next) => {
    res.sendFile(__dirname + "/views/blog.html")
})

app.get("/api/projects", (req,res,next)=> {
    res.sendFile(__dirname + "/data/projects.json")
})
app.get("/api/articles", (req,res,next)=> {
    res.sendFile(__dirname + "/data/articles.json")
})

app.get("/*", (req,res,next) => {
    res.sendFile(__dirname + "/views/not-found.html")
})





app.listen(5005, () => console.log("server running on port 5005"))



// START THE SERVER
// Make your Express server listen on port 5005:
