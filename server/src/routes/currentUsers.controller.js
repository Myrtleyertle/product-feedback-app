const currentUsers = require('../models/currentUsers.model')
function  getCurrentUsers(req, res){
    return res.status(200).json(currentUsers)
}
module.exports = {getCurrentUsers}