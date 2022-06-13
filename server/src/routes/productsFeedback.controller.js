const {
   productsArr
} = require('../models/product.model')

function getAllProducts(req, res) {
    return res.status(200).json(productsArr)
}

function postUpdatedUpvotes(req, res) {
    const productsId = req.params.products 
    const updatedProducts = productsArr.map(product => {
        product.id === productsId ? {...product, upvotes: product.upvotes + 1} : product
    })
    return res.status(200).json(updatedProducts)
}

module.exports = {
     getAllProducts,
     postUpdatedUpvotes
}