const {User,Order, OrderProduct} = require("../config/sequelize.js");


module.exports= {
    allOrders : (req,res)=>{
        Order.findAll({}).then(orders=>{
            if(orders.length==0){
                res.json({errors:"no orders found"});
            } else {
                res.json(orders);
            }
        })
    },

    newOrder: (req,res)=>{
        Order.findAll({}).then(orders=>{
            for(var i in orders){
                if(orders[i].active == true){
                    orders[i].active = false;
                }
            }
            console.log(orders)
            User.findAll({ where: { username: req.params.username } }).then(user => {
                var user1 = user;
                Order.create(req.body).then(order => {
                    order.active = true;
                    order.user_id = user1.id;
                    order.save();
                    res.json(order);
                })

            })
        })
        
        
    },
    newProductToActiveOrder: (req,res)=>{
        console.log("BODY HERE", req.body);
        Order.findAll({where:{user_id:req.params.user_id, active:true}}).then(order=>{
            console.log("NO HERE",order)
            if(order.length == 0){
                res.json({errors:"no order found"})
            } else {
                console.log("BODY",req.body);

                order[0].total_payment += req.body.price_value;
                order[0].save();
                OrderProduct.create().then(result=>{
                    
                    if(result.length == 0){
                        res.json({errors:"error"})
                    } else {
                        result.order_id = order[0].id;
                        result.product_id = req.body.product_id;
                        result.price_id = req.body.id;
                        result.save();
                        res.json(result)
                    }
                })
            }
            
        })
    },
    getActiveOrderByUserId: (req,res)=>{
        console.log("user in server", req.params.user_id)
        Order.findAll({where:{user_id:req.params.user_id, active:true}}).then(order=>{
            if(order.length == 0){
                res.json({errors:"no active order found"});
            } 
            else if(order.length > 1){
                res.json({errors:"too many active"})
            }
            else {
                res.json(order);
            }
        })
    },
    getAllOrdersByUserId: (req,res)=>{
        Order.findAll({where:{user_id:req.params.user_id}}).then(orders=>{
            if(orders.length == 0){
                res.json({errors:"no orders found"});
            } 
            else {
                res.json(orders);
            }
        })
    },
    updateOrderTotalPriceByProductId:(req,res)=>{
        OrderProduct.findAll({ where: { product_id: req.params.product_id } }).then(items => {
            console.log(items)
            for (var i = 0; i < items.length; i++) {
                let item = items[i];
                Price.findAll({ where: { id: items[i]['price_id'] } }).then(price => {
                    let p = price;
                    Order.findAll({ where: { id: item['order_id'] } }).then(order => {
                        order[0]['total_payment'] -= p[0]['price_value'];
                        order[0].save();
                        console.log(order)

                    });
                });
            };
        })
    },

    deleteOrder : (req,res)=>{
        Order.destroy({where:{id:req.params.order_id}})
    }

    


} 
