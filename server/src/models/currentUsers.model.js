const data = require('./data.json')
const fs = require('fs')
const usersArr = [];
function getCurrentUsersData(req, res){
    const filename = __dirname + '/data.json'
        fs.createReadStream(filename)
            .on('data', (data) => {
                console.log(JSON.parse(data))
                const users = JSON.parse(data)
                const currentUsers = JSON.stringify(users.currentUser)
                console.log(currentUsers)
                usersArr.push(currentUsers)
            })
}
const currentUsers = data.currentUser
module.exports = {
    getCurrentUsersData,
    usersArr,
}