// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
import express from "express"
import morgan from "morgan"
import projects from "./data/projects.json" with {type: "json"}


// CREATE EXPRESS APP
// Here you should create your Express app:
const app = express()


// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
// - `express.json()` to parse incoming requests with JSON payloads
// - `morgan` logger to log all incoming requests

app.use(express.static("public"))
app.use(express.json())
app.use(morgan("dev"))



// ROUTES
// Start defining your routes here:

app.get("/", (req, res) => {
        res.sendFile(import.meta.dirname + "/views/home.html");
}); 

app.get("/blog", (req, res) => {
    res.sendFile(import.meta.dirname + "views/blog.html");
});

app.get("/api/projects", (req, res) => {
    res.json(projects);
});

app.get("api/articles", (req, res) => {
    try{
        res.json(articles);
    } catch (error){
        res.status(500).json(error)
    }
});

app.get("/not-found", (req, res) => {
    try {
        res.status(200).sendFile(import.meta.dirnam + "views/not-found.html");
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
});

// START THE SERVER
// Make your Express server listen on port 5005:
app.listen(5005, () =>{
    console.log("server on point and running 5005")
})