const db = require('../config')

class Orders{
    fetchOrders(req, res) {
        const query = `
        SELECT oderID, UserID, bookID,
        orderDate
        FROM Orders;
        AS C
        INNER JOIN Orders AS o
        ON C. = O.customer
        INNER JOIN User AS S
        ON UserID = UserID;
        `
        db.query(query,
            (err, results)=>{
                if(err) throw err
                res.json({
                    status:res.statusCode,
                    results
                })
            })
    };
    fetchOrders(req, res){
        const query = `
        SELECTE orderID, UserID, bookID,
        orderDate
        FROM Orders;
        WHERE orderID = ${req, params, id}
        `
        db.query(query,
            (err, result)=>{
                if(err) throw err
                res.json({
                    status: res.statusCode,result
                }
                    
                )
            }
            )
    }

    deleteOrder(req, res){
        const query = `
        DELETE FROM Orders
        WHERE orderID = ${req.params.id};
        `
        db.query(query, (err)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                msg: 'order has been deleted from the orders list'
            })
        })
    }
    newOrder(req, res){
        const data = req.body
        const order = {
            orderID: data.orderID,
            UserID: data.UserID,
            bookID: data.bookID
        }
        const query =`
        INSERT INTO Orders
        SET ?
        `

    }
}

module.exports = Orders