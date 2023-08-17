const Users = require('./Users')
const Orders = require('./Orders')
const Books = require('./Books')
const BookAuthor = require('./BookAuthor')

module.exports ={
    Users: new Users(),
    Book: new Books(),
    Orders: new Orders(),
    BookAuthor: new BookAuthor()
}