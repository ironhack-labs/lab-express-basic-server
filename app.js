// IMPORT PACKAGES
const express = require("express");
const morgan = require("morgan");

const PORT = process.env.PORT || 5005;

// CREATE EXPRESS APP
const app = express();

// MIDDLEWARE
// Here you should set up the required middleware:
app.use(express.static("public"));
app.use(express.json());
app.use(morgan("dev"));

// ROUTES
// Start defining your routes here:
app.get("/", (req, res, next) => {
  console.log(__dirname);
  res.sendFile(__dirname + "/views/home.html");
});

// START THE SERVER
app.listen(PORT, () => {
  console.log(`Port is listening on port ${PORT}`);
});
