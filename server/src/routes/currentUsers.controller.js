const {usersArr} = require('../models/currentUsers.model')
function  getCurrentUsers(req, res){
    return res.status(200).json(usersArr)
}
module.exports = {getCurrentUsers}