const express = require('express');
const morgan = require('morgan');



const app = express();

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.json());


app.listen(5005, () => {
    console.log('Server is running on port 5005');
});


// ROUTES
// Start defining your routes here:

app.get("/", (req, res, next) => {
    // res.send("<h1>this is the homepage</h1>")
    res.sendFile(__dirname + "/views/home.html");
})

app.get("/blog", (req, res, next) => {
    res.sendFile(__dirname + "/views/blog.html")
})

app.get("/api/projects", (req, res, next) => {
    res.sendFile(__dirname + "/data/projects.json")
})

app.get("/api/articles", (req, res, next) => {
    res.sendFile(__dirname + "/data/articles.json")
})


