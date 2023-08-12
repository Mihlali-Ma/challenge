// index
require("dotenv").config()
const {createPool} = require("mysql")
const connection = createPool({
    host: process.env.dbHost,
    database: process.dbName,
    user:process.env.dbUser,
    password: process.env.dbPwd,
    multipleStatements: true,
    connectionLimit: 30
})
module.exports = connection