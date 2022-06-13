const express = require('express');

const { getAllProducts, postUpdatedUpvotes } = require('./productsFeedback.controller')

const productsRouter = express.Router();

productsRouter.get('/products', getAllProducts)
productsRouter.post('/products', postUpdatedUpvotes )
module.exports = productsRouter;