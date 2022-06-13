const http = require('http');
const app = require('./app');


const server = http.createServer(app)
const PORT = process.env.PORT || 7000
const {
    loadSuggestionsData
} = require('./models/product.model')

async function startServer(){
    await loadSuggestionsData()
    server.listen(PORT, () => {
        console.log(`listeing on port ${PORT}`)
    })
}

startServer();