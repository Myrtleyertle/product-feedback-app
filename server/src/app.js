const express = require('express')
const cors = require('cors')
const productsRouter = require('./routes/productFeedback.router')
const app = express();
app.use(cors({
    origin: 'http://localhost:3001'
}));
app.use(express.json());
app.use(productsRouter)
module.exports = app;