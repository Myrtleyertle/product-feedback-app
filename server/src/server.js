const http = require('http');
const app = require('./app');

const productsRouter = require('./routes/productFeedback.router');
const server = http.createServer(app)
const PORT = process.env.PORT || 7000



server.listen(PORT, () => {
    console.log(`listeing on port ${PORT}`)
})