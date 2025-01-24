// CREATE EXPRESS APP
const express = require("express");

const morgan = require("morgan");

// Here you should create your Express app:

const app = express();

// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
app.use(express.static("public"));

// - `express.json()` to parse incoming requests with JSON payloads
app.use(express.json());

// - `morgan` logger to log all incoming requests
app.use(morgan("dev"));

// ROUTES
// Start defining your routes here:

//Iteración 3

app.get('/', (req, res) => { 

    res.sendFile(__dirname + '/views/home.html');
}); 

//Iteración 4

app.get('/blog', (req, res) => { 

    res.sendFile(__dirname + '/views/blog.html');
}); 

//Iteración 5

const projects = require("./data/projects.json"); //Importación de projects.json.

app.get('/api/projects', (req, res) => {

    res.json(projects); 

})

/*También funciona aquí (en la iteración 6 no): 

app.get('/api/projects', (req, res) => { 

    res.sendFile(__dirname + '/data/projects.json'); 
});

*/

//Iteration 6
const articles = require("./data/articles.json"); //Importación de articles.json.

app.get('/api/articles', (req, res) => { 

    res.json(articles);
}); 

//Iteration 7 (podemos probar el error con http://localhost:5005/hello)

app.use((req, res, next) => {

    res.status(404).sendFile(__dirname + '/views/not-found.html'); 

})



// START THE SERVER
// Make your Express server listen on port 5005:

app.listen(5005, () => console.info("Server listening at port 5005"));





