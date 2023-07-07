const express = require('express');

const router = express.Router();

const path = require('path');

const errorController = require('../controllers/error');;

const productsController = require('../controllers/products');

const indexController = require('../controllers/index');

// middleware for serving the homepage
router.get('/',indexController.getIndex);

// middleware for serving the cart section
router.use('/cart',productsController.showProduct);

// middleware for serving the 404 error page
router.use(errorController.get404)

module.exports = router