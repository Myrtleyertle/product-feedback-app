const express = require('express');
const {getProduct} = require('./productsFeedback.controller')
const products = require('../models/product.model')
const productsRouter = express.Router();

productsRouter.get('/products', function getProduct(req, res) {
    return res.status(200).json(products)
})

module.exports = productsRouter;