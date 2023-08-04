var express = require('express')
var router = express.Router();
var cloudinary = require("../utils/cloudinary");
var upload = require("../utils/multer");
var user = require("../models/user")
const userCtrl = require('../controllers/users')


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/', userCtrl.index);

router.post('/', upload.single('image'), userCtrl.create)

router.get('/:id', userCtrl.show);

module.exports = router;
