const express = require('express');
const { getCurrentUsers } = require('./currentUsers.controller')
const currentUsersRouter = express.Router();

currentUsersRouter.get('/currentUsers', getCurrentUsers)

module.exports = currentUsersRouter