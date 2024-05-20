// IMPORT PACKAGES
const express=require("express")
const morgan=require("morgan")

// Here you should import the required packages for your Express app: `express` and `morgan`

// CREATE EXPRESS APP
// Here you should create your Express app:
const app=express()

// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
app.use(express.static("public"))
// - `express.json()` to parse incoming requests with JSON payloads
app.use(express.json())
// - `morgan` logger to log all incoming requests
app.use(morgan ("dev"))

// ROUTES
// Start defining your routes here:
app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/views/home.html")
})
app.get("/blog", (req,res)=>{
    res.sendFile(__dirname+"/views/blog.html")
})
app.get("/api/articles", (req, res)=>{
    res.sendFile(__dirname + "/data/articles.json")
})
app.get("/api/projects", (req, res)=>{
    res.sendFile(__dirname + "/data/projects.json")
})
app.get("*", (req,res)=>{
    res.sendFile(__dirname+"/views/not-found.html")
})
// START THE SERVER

// Make your Express server listen on port 5005:
const port=3000;
app.listen(port, ()=>{
    console.log(`el puerto es ${port}`);
})