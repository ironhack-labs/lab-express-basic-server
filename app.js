// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`

const exp = require('express')
const morgan = require('morgan')
const path = require('path')
const app = exp()
const projects = require(path.join(__dirname, 'data', 'projects.json'))
const articles = require(path.join(__dirname, 'data', 'articles.json'))

const port = '5005'
app.use(exp.static('public'))
app.use(exp.json())
app.use(morgan("dev"))
app.listen(port,() => {
    console.log(`server listening on port ${port}`)
})




// CREATE EXPRESS APP
// Here you should create your Express app:
app.get("/",(req,res) =>{
    res.sendFile(__dirname + "/views/html/home.html")
})
app.get("/blog",(req,res) => {
    res.sendFile(path.join(__dirname,"views","html","blog.html"))
})
app.get("/api/projects",(req,res) => {
    res.json(projects)
})
app.get("/api/articles",(req,res) => {
    res.json(articles)
})

app.use((req,res,next) => {
    res.status(404).sendFile(__dirname + "/views/html/not-found.html")
})


// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
// - `express.json()` to parse incoming requests with JSON payloads
// - `morgan` logger to log all incoming requests



// ROUTES
// Start defining your routes here:



// START THE SERVER
// Make your Express server listen on port 5005:
