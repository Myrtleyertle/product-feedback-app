
const fs = require('fs');
const path = require('path');

const productsArr = [];

function isSuggestionData(data) {
    return data.productRequests.map(item => item.status === 'suggestion')
}

function loadSuggestionsData() {
    return new Promise((resolve, reject) => {
        const filename = __dirname + '/data.json'
        fs.createReadStream(filename)
            .on('data', (data) => {
                const suggestions = JSON.parse(data)
                const products = JSON.stringify(suggestions.productRequests)
                console.log(products)
                productsArr.push(products)
            })
            .on('err', (err) => {
                console.log(err);
                reject(err)
            })
            .on('end', () => {
                console.log(productsArr)
                resolve();
            })
        })
    }
    
    
console.log(productsArr)
module.exports = {
    loadSuggestionsData,
    productsArr,
};