const { getAllProducts, productsArr, addNewProduct, getUpdatedProductsArr, updatedProductsArr } = require("../../models/product.model");
const fs = require("fs");
function httpGetAllProducts(req, res) {
  console.log(getAllProducts)
  return res.status(200).json(productsArr);
}
function httpAddNewProduct(req, res) {
  const product = req.body;
  if(!product.title || !product.description || !product.category){
    return res.status(400).json({
      error: "missing required parameter"
    })
  }
  console.log(product)
  addNewProduct(product)
  return res.status(201).json(product);
}
function httpGetUpdatedProductsArr(req,res){
    return res.status(200).json(updatedProductsArr)
}
module.exports = {
  httpGetAllProducts,
  httpAddNewProduct,
  httpGetUpdatedProductsArr
};
