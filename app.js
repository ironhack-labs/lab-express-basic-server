import express from "express";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const data = require("./data/projects.json");
const art = require("./data/articles.json");

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
  res.json(data);
});

app.get("/api/articles", (req, res) => {
  res.json(art);
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "not-found.html"));
});

app.listen(5005, () => {
  console.log("server good!");
});
