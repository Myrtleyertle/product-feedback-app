const products = require('../models/product.model')

function getProduct(req, res) {
    return res.status(200).json(products)
}

module.exports = {
     getProduct,
}