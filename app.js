// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
const express = require('express');
const morgan = require("morgan")



const app = express();
const port = 5005;

app.use(morgan("dev"))
app.use(express.static("public"))
app.use(express.json())


// ROUTES
// Start defining your routes here:

app.get("/",(req, res) => {
    res.sendFile(__dirname + "/views/home.html");
})

app.get("/blog",(req,res)=>{
res.sendFile(__dirname + "/views/blog.html")
})


const allProjects = require("./data/projects.json")
app.get("/api/projects",(req,res)=>{
res.json(allProjects)
})

const allArticles = require("./data/articles.json")
app.get("/api/articles",(req,res)=>{
res.json(allArticles)
})

app.use((req, res, next)=>{
    res.status(404).sendFile(__dirname + "/views/not-found.html")
})


// START THE SERVER
// Make your Express server listen on port 5005:
app.listen(5005, () => {
  console.log(`Example app listening on port ${port}`);
});