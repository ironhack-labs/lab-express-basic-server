// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(express.static('public'));
app.use(express.json()); 
app.use(morgan('dev'));

app.get('/',(request,response)=>{
    response.sendFile(__dirname + '/views/home.html');
})
app.get('/blog',(request,response)=>{
    response.sendFile(__dirname + '/views/blog.html');
})


app.get('/api/projects',(request,response)=>{
    response.sendFile(__dirname + '/data/projects.json');
})

app.get('/api/articles',(request,response)=>{
    response.sendFile(__dirname + '/data/articles.json');
})

app.get('*',(request,response)=>{
    response.sendFile(__dirname + '/views/not-found.html');
})



app.listen(5005,()=>{
    console.log("http:/localhost:5005");
    
})


// CREATE EXPRESS APP
// Here you should create your Express app:



// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
// - `express.json()` to parse incoming requests with JSON payloads
// - `morgan` logger to log all incoming requests



// ROUTES
// Start defining your routes here:



// START THE SERVER
// Make your Express server listen on port 5005:
