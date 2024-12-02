// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
// const express = require('express');
// const morgan = require('morgan');
// const path = require('path');

import express from 'express';
import morgan from 'morgan';

import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs';

import articles from './data/articles.json' assert { type: 'json' };
import projects from './data/projects.json' assert { type: 'json' };

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = 5005;

// CREATE EXPRESS APP
// Here you should create your Express app:
const app = express();

// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
app.use(express.static('public'));
// - `express.json()` to parse incoming requests with JSON payloads
app.use(express.json());
// - `morgan` logger to log all incoming requests
app.use(morgan('dev'));

// ROUTES
// Start defining your routes here:
app.get('/', (req, res) => {
	res.status(200).sendFile(path.join(__dirname, '/views/home.html'));
});

app.get('/blog', (req, res) => {
	res.status(200).sendFile(path.join(__dirname, '/views/blog.html'));
});

app.get('/api/projects', (req, res) => {
	// const projects = require('./data/projects.json');

	// const projects = JSON.parse(
	// fs.readFileSync(path.join(__dirname, '/data/projects.json'), 'utf-8')
	// );

	res.status(200).json(projects);
});

app.get('/api/articles', (req, res) => {
	// const articles = require('./data/articles.json');

	// const articles = JSON.parse(
	// 	fs.readFileSync(path.join(__dirname, '/data/articles.json'), 'utf-8')
	// );

	res.status(200).json(articles);
});

app.get('*', (req, res) => {
	res.status(404).sendFile(path.join(__dirname, '/views/not-found.html'));
});

// START THE SERVER
// Make your Express server listen on port 5005:
app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}.`);
});
