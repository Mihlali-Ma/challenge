const {sign, verify} = require('jsonwebtoken')
require("dotenv").config()

function createToken() {
    return sign ({
        email:User.emailAdd,
        userPass:User.userPass
    },process.env.SECRET_KEY,
    {
        expiresIn:'1h'
    }
    )
}

module.exports ={
    createToken
}

// function verifyAToken(req, res, next) {
// const token = req.headers["authorization"].
//     next()
// }