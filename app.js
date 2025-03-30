// IMPORT PACKAGES
const express = require("express");
const logger = require("morgan");


// CREATE EXPRESS APP
const app = express();


// MIDDLEWARE
app.use(express.static("public"));
app.use(express.json());
app.use(logger("dev"));



// ROUTES
const routes = require("./config/routes.config");
app.use("/", routes);


// START THE SERVER
const port = Number(5005);

app.listen(port, () => console.info(`Application running ar port ${port}`));