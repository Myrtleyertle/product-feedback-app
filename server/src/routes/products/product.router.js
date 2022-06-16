const express = require('express');

const { httpGetAllProducts, httpAddNewProduct, httpGetUpdatedProductsArr } = require('./products.controller')

const productsRouter = express.Router();

productsRouter.get('/', httpGetAllProducts)
productsRouter.get('/updated', httpGetUpdatedProductsArr)
productsRouter.post('/', httpAddNewProduct)

module.exports = productsRouter;