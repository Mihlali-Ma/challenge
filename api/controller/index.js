const express = require('express')
const bodyparser = require('body-parser')
const routes = express.Router()

const {users} = require('../model')

routes.get('/users', (req, res) =>{
    users.fetchUsers(req, res)
})

routes.get('/user/:id', (req, res)=>{
    users.fetchUsers(req, res)
})

routes.post('/register', bodyparser.json(),
    (req,res)=>{
        users.register(req, res)
    })

routes.put('/user/:id', bodyparser.json(),
    (req, res)=>{
        users.updateUser(req, res)
    })

routes.delete('/user/:id', (req, res)=>{
    users.deleteUser(req, res)
})

module.exports = {
    express,routes
}