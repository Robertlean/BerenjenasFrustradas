var express = require('express');
var router = express.Router();

const mainController = require('../controllers/indexController')

/* GET home page. */
router.get('/', mainController.home);



module.exports = router;
