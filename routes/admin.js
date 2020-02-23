const path = require('path');

const express = require('express');

const productsController = require('../controllers/products');

const router = express.Router();

//const rootDir = require('../util/path');

router.get('/add-product', productsController.getAddProducts);

router.post('/add-product', productsController.postAddProducts);

module.exports = router;