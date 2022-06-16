const data = require('../data/data.json')
const fs = require('fs')
const path = require('path')
const users = new Map;
const user = {
    "id": 0,
    "image": "./assets/user-images/image-zena.jpg",
    "name": "Zena Kelley",
    "username": "velvetround"
}
users.set(user.id, user)
function getCurrentUsersData(req, res){
    return Array.from(users.values())
}

module.exports = {
    getCurrentUsersData
}