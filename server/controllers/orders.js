const {User,Order} = require("../config/sequelize.js");

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
        User.findAll({where:{username:req.params.username}}).then(user=>{
            var user1 = user;
            Order.create(req.body).then(order=>{
                order.user_id = user1[0].id;
                order.save();
                res.json(order)
            })

        })
        
    },
    oneOrder : (req,res)=>{
        Order.findAll({where:{id:req.params.order_id}}).then(order=>{
            if(order.length == 0){
                res.json({errors:"order not found"});
            } else {
                res.json(order);
            }
        })
    },

    deleteOrder : (req,res)=>{
        Order.destroy({where:{id:req.params.order_id}})
    }

    


} 
