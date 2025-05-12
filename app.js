const express = require("express");
const morgan = require("morgan");
const path = require("path");
const { title } = require("process");

const PORT = 5005;
const app = express();
const projects = [
    {
        "title": "Blackjack Game",
        "description": "Simple blackjack game, built with vanilla JavaScript, HTML, and CSS.",
        "image": "https://placehold.co/600x400/4265E6/FFFFFF.png?text=Project+Screenshot",
        "github": "https://github.com/exampleuser/examplerepo",
        "deployed": "http://example.com",
        "techStack": ["HTML", "CSS", "JavaScript"]
    },
    {
        "title": "Jira Clone",
        "description": "Bootcamp group project. Full stack application built with React, JSON Server, and React Testing Library",
        "image": "",
        "github": "https://github.com/exampleuser/examplerepo",
        "deployed": "http://example.com",
        "techStack": ["React", "Node", "JSON Server", "React Testing Library"]
    },
    {
        "title": "Cohort Tools",
        "description": "Bootcamp group project. Full stack application built with React, Node, ExpressJS,  MongoDB, and Tailwind.",
        "image": "",
        "github": "https://github.com/exampleuser/examplerepo",
        "deployed": "http://example.com",
        "techStack": ["React", "Node", "Express", "MongoDB", "Tailwind"]
    },    
    {
        "title": "Weather Dashboard",
        "description": "Weather tracking application built with React, Node, ExpressJS, MongoDB, Ant Design, and OpenWeather API.",
        "image": "",
        "github": "https://github.com/exampleuser/examplerepo",
        "deployed": "http://example.com",
        "techStack": ["React", "Node", "Express", "MongoDB", "Ant Design"]
    }
];
const articles = [
    {
      "title": "The best article ever",
      "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      "author": "Jane Doe",
      "publishedAt": "2022-01-08",
      "tags": ["react", "node", "testing", "react testing library"],
      "views": 16
    },
    {
      "title": "The second best article ever",
      "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      "author": "Jane Doe",
      "publishedAt": "2022-03-24",
      "tags": ["javascript", "node", "express"],
      "views": 234
    },
    {
      "title": "The third best article ever",
      "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      "author": "Jane Doe",
      "publishedAt": "2022-05-14",
      "tags": ["javascript", "css", "tailwind"],
      "views": 345
    },
    {
      "title":"The fourth best article ever",
      "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      "author": "Jane Doe",
      "publishedAt": "2023-02-02",
      "tags": ["javascript", "css", "testing", "jasmine"],
      "views": 128
    }
  ];  

app.use(express.static("public"));
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/views/home.html");
});

app.get("/blog", (req, res) => {
	res.sendFile(__dirname + "/views/blog.html");
});

app.get("/api/projects", (req, res) => {
	res.json(projects);
});

app.get("/api/articles", (req, res) => {
	res.json(articles);
});

app.use((req, res, next) => {
  res.status(404).sendFile(__dirname + "/views/not-found.html");
});
  
  // START SERVER
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });