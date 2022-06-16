const {getCurrentUsersData} = require('../../models/currentUsers.model')
function  getCurrentUsers(req, res){
    return res.status(200).json(getCurrentUsersData())
}
module.exports = {getCurrentUsers}