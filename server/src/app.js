const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const path = require('path')
const productsRouter = require('./routes/productFeedback.router')
const currentUsersRouter = require('./routes/currentUser.router')
const app = express();
app.use(cors({
    origin: ["http://localhost:3001", "http://localhost:3000"]
}));
app.use(morgan('combined'));
app.use(express.json());
app.use(productsRouter)
app.use(currentUsersRouter)
app.use(express.static(path.join(__dirname, '..', 'public')))
module.exports = app;