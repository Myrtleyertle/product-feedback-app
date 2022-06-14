
const fs = require('fs');
const path = require('path');

const productsArr = [];


function loadSuggestionsData() {
    return new Promise((resolve, reject) => {
        const filename = __dirname + '/data.json'
        fs.createReadStream(filename)
            .on('data', (data) => {
                const suggestions = JSON.parse(data)
                const products = JSON.stringify(suggestions.productRequests)
                productsArr.push(products)
                console.log(products)
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
module.exports = {
    loadSuggestionsData,
    productsArr,
};