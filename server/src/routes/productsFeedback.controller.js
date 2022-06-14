const { productsArr } = require("../models/product.model");
const fs = require("fs");
function updatedUpvotes(req, res) {
  
}
function getAllProducts(req, res) {
    console.log(productsArr)
  return res.status(200).json(productsArr);
}

module.exports = {
  getAllProducts,
  updatedUpvotes,
};
