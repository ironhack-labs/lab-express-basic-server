// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
const express = require("express");
const morgan = require("morgan");



// CREATE EXPRESS APP
// Here you should create your Express app:
const app = express();



// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
// - `express.json()` to parse incoming requests with JSON payloads
// - `morgan` logger to log all incoming requests
app.use(express.static("public"));
app.use(express.json());
app.use(morgan("dev"));



// ROUTES
// Start defining your routes here:
app.set("view engine","ejs");
app.set("views", __dirname + "/views");
app.use(express.static("public"));
//homepage
app.get('/', (req, res) => {
    const profileData = {
        name:"Jinal Raval",
        bio:"Salesforce Deveopment specialist",
        github: "https://github.com/Jins-00757",
        linkedin:"https://www.linkedin.com/in/jinal-raval-38a5ba1b7/"
    
    }
    res.render("home", profileData);
})

//blogpage
app.get('/blog', (req, res) => {
    res.sendFile(__dirname + "/views/blog.html");
})

//get data/projects
const projects = require("./data/projects.json")

app.get('/projects', (req, res) => {
    res.json(projects);
})

//get data/articles
const articles = require("./data/articles.json")

app.get('/projects', (req, res) => {
    res.json(articles);
})

//404 ROUTE

app.use((req, res, next) => {
    res.status(404).sendFile(__dirname + "/views/not-found.html")
})




// START THE SERVER
// Make your Express server listen on port 5005:
app.listen(5005, () => {
    console.log("Server listening on 5005")
})
