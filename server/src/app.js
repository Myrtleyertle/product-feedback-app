const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const path = require('path')
const productsRouter = require('./routes/products/product.router')
const currentUsersRouter = require('./routes/users/currentUser.router')
const app = express();
app.use(cors({
    origin: ["http://localhost:3001", "http://localhost:3000"]
}));
app.use(morgan('combined'));
app.use(express.json());
app.use("/products",productsRouter)
app.use("/users",currentUsersRouter)
app.use(express.static(path.join(__dirname, '..', 'public')))
app.get('/*',  (req,res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
})
module.exports = app;