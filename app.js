
// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
const express = require('express');
const morgan = require('morgan');
const fs = require('fs');

let dotenv = require('dotenv').config()
console.log(dotenv);

const path = require('path');

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
app.get("/", (req, res)=> {
    res.sendFile(__dirname + "/views/home.html");
});

app.get("/blog", (req, res)=> {
    res.sendFile(__dirname + "/views/blog.html");
});

app.get("/api/projects", (req, res)=>{
    fs.readFile(__dirname + "/data/projects.json", (err, json) => {
        let obj = JSON.parse(json);
        res.json(obj);
    });
})

app.get("/api/articles", (req, res)=>{
    fs.readFile(__dirname + "/data/articles.json", (err, json) => {
        let obj = JSON.parse(json);
        res.json(obj);
    });
})

 app.get("/*",(req, res, next) => {
     res.status(404).sendFile(__dirname + "/views/not-found.html");
 })

//this worked for me:
// app.use((req, res, next)=>{
//     res.status(404).sendFile(__dirname + "/views/not-found.html");
// });

// START THE SERVER
// Make your Express server listen on port 5005:
app.listen(process.env.PORT, () => {
    console.log(`Server listening in port ${process.env.PORT}`);
})
