const express = require('express')
const cors = require('cors')
const productsRouter = require('./routes/productFeedback.router')
const currentUsersRouter = require('./routes/currentUser.router')
const app = express();
app.use(cors({
    origin: ["http://localhost:3001", "http://localhost:3000"]
}));
app.use(express.json());
app.use(productsRouter)
app.use(currentUsersRouter)
module.exports = app;