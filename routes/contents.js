const express = require('express');
const router = express.Router();
const contentsCtrl = require('../controllers/contents');

router.post('/photos/:id/contents', contentsCtrl.create);

router.delete('/contents/:id', contentsCtrl.delete);

module.exports = router;