// Create web server

// Import modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('./cors');
const authenticate = require('../authenticate');

// Import model
const Comments = require('../models/comments');

// Create router
const commentRouter = express.Router();

// Use body-parser
commentRouter.use(bodyParser.json());

// Declare endpoints
commentRouter.route('/')
    // Handle preflight request
    .options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
    // GET: Get all