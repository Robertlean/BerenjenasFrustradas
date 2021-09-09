var express = require('express');
var router = express.Router();

var multer = require('../middlewares/multerProducts')
var productController = require('../controllers/productController')

router.get('/add', productController.mostrarAdd)

module.exports = router;