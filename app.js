// IMPORT PACKAGES
const express = require('express');
const morgan = require('morgan');



// CREATE EXPRESS APP
const app = express();



// MIDDLEWARE
app.use(express.static('public'));
app.use(express.json());
app.use(morgan("dev"))



// ROUTES
// GET

app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/views/index.html");
});

app.get("/blog", (req,res)=>{
    res.sendFile(__dirname + "/views/blog.html");
});

app.get("/blog", (req,res)=>{
    res.sendFile(__dirname + "/views/blog.html");
});

app.get("/api/projects",(req, res)=>{
    res.json(projects)
})

app.get("/api/projects",(req, res)=>{
    res.json(articles)
})



// START THE SERVER
app.listen(5005, () => {
    console.log("Server listening on port 5005")
});