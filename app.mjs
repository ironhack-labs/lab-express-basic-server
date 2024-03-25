// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
import express from "express";
import morgan from "morgan";
import path from "node:path";
import { fileURLToPath } from "node:url";
import projects from "./data/projects.json" with { "type": "json" };
import articles from "./data/articles.json" with { "type": "json" };

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// CREATE EXPRESS APP
// Here you should create your Express app:
const server = express();

// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
// - `express.json()` to parse incoming requests with JSON payloads
// - `morgan` logger to log all incoming requests
server.use(morgan("dev"));
server.use(express.static(`${__dirname}/public`));
server.use(express.json());

// ROUTES
// Start defining your routes here:

server.get("/", (request, response, next) => {
	console.log(request);
	response.sendFile(`${__dirname}/views/home.html`);
});

server.get("/blog", (request, response, next) => {
	console.log(request);
	response.sendFile(`${__dirname}/views/blog.html`);
});

server.get("/api/projects", (request, response, next) => {
	console.log(request);
	response.json(projects);
});

server.get("/api/articles", (request, response, next) => {
	console.log(request);
	response.json(articles);
});

server.get("*", (request, response, next) => {
	console.log(request);
	response.sendFile(`${__dirname}/views/not-found.html`);
});

// START THE SERVER
// Make your Express server listen on port 5005:
const PORT = process.env.PORT || 6969;

server.listen(PORT, () => {
	console.log("server running on port:", PORT);
});
