// IMPORT PACKAGES

const { request } = require("express");
const morgan = require("morgan")
const PORT = 5005
// Here you should import the required packages for your Express app: `express` and `morgan`




// CREATE EXPRESS APP
// Here you should create your Express app:
app.use((req,res,next) => {
    res.status(404).sendFile(__dirname + "/views/not-found.html")
})



app.get("/", (req,res) => {
    res.sendFile(__dirname + "/views/ndex.html")
})
app.get("/", (req,res) => {
    res.sendFile(__dirname + "/views/blog.html")
})
app.get("/api/projects", (req,res) => {
    res.json(projects)
})
app.get("/api/articles", (req,res) => {
    res.json(articles)
})

// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
app.use(express.static("public"))
app.use(express.json())
app.use(morgan("dev"))
// - `express.json()` to parse incoming requests with JSON payloads
// - `morgan` logger to log all incoming requests



// ROUTES
// Start defining your routes here:



// START THE SERVER
// Make your Express server listen on port 5005:
application.listen(5005, () => {
    console.log("listen port 5005")
})