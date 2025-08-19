// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
const express = require("express");
const morgan = require("morgan");

const app = express();


app.use(express.static("public"));   
app.use(express.json());              
app.use(morgan("dev"));      


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "home.html"));
});


app.get("/blog", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "blog.html"));
});

 
app.get("/api/projects", (req, res) => {
  res.json(projects); 
});

app.get("/api/articles", (req, res) => {
  res.json(articles); 
});

app.get("*", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "not-found.html"));
});



// START THE SERVER
// Make your Express server listen on port 5005:
app.listen(5005, () => {
  console.log("Server listening on port 5005");
});