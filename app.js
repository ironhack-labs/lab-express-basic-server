// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
const express = require("express");
const morgan = require("morgan");

// CREATE EXPRESS APP
// Here you should create your Express app:
const app = express();



// MIDDLEWARE
// Here you should set up the required middleware:
app.use(express.static("public"));
app.use(express.json());
app.use(morgan("dev"));

// ROUTES
// Start defining your routes here:



// START THE SERVER
// Make your Express server listen on port 5005:
app.listen(5005, () => {
  console.log("Server listening on port 5005");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
})

app.get("/api/projects", (req, res) => {
  res.json(projects);
});

app.use((req, res) => {
    res.status(404).sendFile(__dirname + "/views/404.html");
});