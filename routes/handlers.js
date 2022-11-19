const express = require('express');
var router = express.Router();


var users = require('../routes/users');
var product = require('../routes/product');
var dashboar = require('../routes/dashboard');
var client = require('../routes/client');
var pos = require('../routes/pos');
var stock = require('../routes/stock');
var cat = require('../routes/categorie');
var test = require('../routes/test');

router.use('/', users);

router.use('/product', product);
router.use('/dashboard', dashboar);
router.use('/client', client);
router.use('/pos', pos);
router.use('/categorie', cat);
router.use('/stock', stock);
router.use('/test', test);

module.exports = router;