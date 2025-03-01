// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
const express = require('express');
const morgan = require('morgan');

// CREATE EXPRESS APP
// Here you should create your Express app:
const app = express();

// MIDDLEWARE
app.use(express.static("public"));
//servir archivos estáticos desde la carpeta public
app.use(express.json());
//analizar solicitudes entrantes con cargas útiles, como json. 
app.use(morgan("dev"));
//para ver solicitudes entrantes en la consola

// ROUTES
// Start defining your routes here:
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/home.html");
});
app.get("/blog", (req, res) => {
    res.sendFile(__dirname + "/views/blog.html");
});
app.get("/api/projects", (req,res) => {
    res.json(projects);
});

app.get("/api/articles", (req, res) => {
    res.json(articles);
});

app.get("*", (req, res) => {
    res.sendFile(__dirname + "/views/not-found.html");
});

// START THE SERVER
// Make your Express server listen on port 5005:
app.listen(5005, () => {
    console.log("Server listening on port 5005");
})
