// Create web server


// Import modules
const express = require('express');

// Create router
const router = express.Router();

// Import controller
const commentsController = require('../controllers/commentsController');

// Handle requests
router.get('/', commentsController.index);
router.get('/create', commentsController.create);
router.post('/create', commentsController.store);
router.get('/:id', commentsController.show);
router.get('/:id/edit', commentsController.edit);
router.post('/:id/edit', commentsController.update);
router.get('/:id/delete', commentsController.delete);
