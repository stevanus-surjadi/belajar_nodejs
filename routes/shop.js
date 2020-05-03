const path = require('path');

const express = require('express');

const router = express.Router();

const shopController = require('../controllers/shop');

const rootDir = require('../util/path');

const adminData = require('./admin');

router.get('/', shopController.getIndex);

router.get('/products',shopController.getProducts);

router.get('/cart',shopController.getCart);

router.get('/checkout',shopController.getCheckout);

module.exports = router;