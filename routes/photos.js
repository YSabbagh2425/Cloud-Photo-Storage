const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../config/ensureLoggedIn');

// Controller module
const photosCtrl = require('../controllers/photos')

// GET route for /photos/new
router.get('/new', photosCtrl.new);

router.get('/new', ensureLoggedIn, photosCtrl.new);

// GET route for /photos/:id must be below new
router.get('/:id', photosCtrl.show)

router.delete('/:id', photosCtrl.delete);

// POST route for /photos
router.post('/', photosCtrl.create);

// GET route for /photos INDEX
router.get('/', photosCtrl.index);

router.post('/', ensureLoggedIn, photosCtrl.create);


module.exports = router;