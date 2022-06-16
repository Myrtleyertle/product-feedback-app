
const fs = require('fs');
const path = require('path');

const products = new Map();

let latestId = 24;

const product = {
    id: 97,
    title: "",
    category: "",
    upvotes: 0,
    status: "",
    description: "",
    comments: []
}

const productsArr = [];
const updatedProductsArr = [];

function loadSuggestionsData() {
    return new Promise((resolve, reject) => {
        const filename = __dirname + '/../data/data.json'
        fs.createReadStream(filename)
            .on('data', (data) => {
                const suggestions = JSON.parse(data)
                const products = JSON.stringify(suggestions.productRequests)
                productsArr.push(products)
            })
            .on('err', (err) => {
                console.log(err);
                reject(err)
            })
            .on('end', () => {
                resolve();
            })
    })
}
products.set(products.id, product)

function addNewProduct(product) {
    latestId++;
    products.set(latestId, Object.assign(product,{
        id: latestId,
        upvotes:  0,
        comments: [],
        status: 'suggestion'
    }))
    productsArr.push(products)
}
function getUpdatedProductsArr(product){
    console.log(product)
    const parsedArr = JSON.parse(productsArr)
    const parsedProduct = JSON.parse(product)
    parsedArr.push(parsedProduct)
    console.log(parsedArr)
    const stringifyArr = JSON.stringify(parsedArr)
    updatedProductsArr.push(stringifyArr)
}

function getAllProdcuts(){
    return productsArr.push(products.values())
}
module.exports = {
    loadSuggestionsData,
    addNewProduct,
    getAllProdcuts,
    getUpdatedProductsArr,
    updatedProductsArr,
    productsArr
};