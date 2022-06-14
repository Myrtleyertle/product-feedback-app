const { productsArr } = require("../models/product.model");
const fs = require("fs");
function updatedUpvotes(req, res) {
  return res.statusCode >= 200 && res.statusCode < 300
}
function getAllProducts(req, res) {
  return res.status(200).json(productsArr);
}

module.exports = {
  getAllProducts,
  updatedUpvotes,
};
