const express = require('express');

const { getAllProducts, updatedUpvotes } = require('./productsFeedback.controller')

const productsRouter = express.Router();

productsRouter.get('/products', getAllProducts)

module.exports = productsRouter;