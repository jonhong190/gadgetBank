const {OrderProduct, Order,Price} = require("../config/sequelize.js");
const Sequelize = require('sequelize')
const Op = Sequelize.Op;

module.exports = {
    getAllProductsByOrderId:(req,res)=> {
        OrderProduct.findAll({where:{order_id:req.params.order_id}}).then(products=>{
            if(products.length == 0){
                res.json({errors:"no products in order"});
            } else {
                res.json(products);
            }
        })
    },
    deleteOneProductByOrderIdAndProductId:(req,res)=>{
        console.log("merp");
        console.log(req.body)
        OrderProduct.destroy({where:{product_id:req.params.product_id, order_id:req.params.order_id}}).then(()=>{
            console.log("blah");
            Order.findAll({where:{id:req.params.order_id}}).then(order=>{
                order[0].total_payment -= req.body.price;
                order[0].save();
                res.json("deleted product from cart")
            })
           
        });
    },
    getAllOrderProducts:(req,res)=>{
        OrderProduct.findAll({}).then(products=>{
            if(products.length == 0){
                res.json({errors: "no order products"});
            } else {
                res.json(products);
            }
        })
    },
    getAllOrderProductsByToday:(req,res)=>{
        var date = new Date();
        date.setHours(0,0,0,0);
        var datePlusOne = new Date(date);
        datePlusOne.setDate(datePlusOne.getDate()+1);
        OrderProduct.findAll({where:{
            createdAt:{
                [Op.gt]:date,
                [Op.lt]:datePlusOne
            }
        }}).then(products=>{
            if(products.length == 0){
                res.json({errors:"no products found"})
            } else {
                res.json(products);
            }
        })
    },
    getAllOrderProductsPast7Days:(req,res)=>{
        var week = ['']
        var date = new Date();
        console.log(date)
        date.setHours(0,0,0,0);
        var dateMinusSeven = new Date(date);
        dateMinusSeven.setDate(dateMinusSeven.getDate()-6)
        OrderProduct.findAll({where:{
            createdAt:{
                [Op.gt]:dateMinusSeven
            }
        }}).then(products=>{
            if(products.length == 0){
                res.json({errors:"no products found"})
            } else {
                res.json(products)
            }
        })
        


    },
    getAllOrderProductsByMonth:(req,res)=>{
        var date = new Date();
        date.setHours(0,0,0,0);
        date.setDate(1)
        date.setMonth(date.getMonth());
        var datePlusOne = new Date(date);
        datePlusOne.setMonth(datePlusOne.getMonth()+1)
        OrderProduct.findAll({where:{
            createdAt:{
                [Op.gte]:date,
                [Op.lte]:datePlusOne
            }
        }}).then(products=>{
            if(products.length == 0){
                res.json({errors:"no products found"});
            } else {
                res.json(products);
            }
        })

    },
    getAllOrderProductsByYear:(req,res)=>{
        var date = new Date();
        date.setHours(0,0,0,0);
        date.setFullYear(date.getFullYear());
        OrderProduct.findAll({where:{
            createdAt:{[Op.lte]:date}
        }}).then(products=>{
            if(products.length == 0){
                res.josn({errors:"no products found"})
            } else {
                res.json(products);
            }
        })

    },
    getAllOrderProductsByQuarter:(req,res)=>{
        var date = new Date();
        var date1 = new Date();
        date1.setHours(0,0,0,0);
        date1.setFullYear(date1.getFullYear());
        date1.setMonth(2);
        var date2 = new Date();
        date2.setHours(0,0,0,0);
        date2.setFullYear(date2.getFullYear());
        date2.setMonth(5);
        var date3 = new Date();
        date3.setHours(0,0,0,0);
        date3.setFullYear(date3.getFullYear());
        date3.setMonth(8);
        var date4 = new Date();
        date4.setHours(0,0,0,0);
        date4.setFullYear(date4.getFullYear());
        date4.setMonth(11);
        
        var quarter = new Date(date);
        console.log(quarter.getMonth())
        if(quarter.getMonth() <= 2){
            OrderProduct.findAll({where:{
                createdAt:{
                   [Op.lte]:date1
                }
            }}).then(products=>{
                if(products.length == 0){
                    res.json({errors:"no products found "})
                } else {
                    res.json(products)
                }
            })
        } 
        else if (quarter.getMonth() > 2 && quarter.getMonth() <= 5 ){
            OrderProduct.findAll({where:{
                createdAt:{
                    [Op.lte]:date2,
                    [Op.gt]:date1
                }
            }}).then(products=>{
                if(products.length == 0){
                    res.json({errors:"no products found"})
                } else {
                    res.json(products);
                }
            })
        }
        else if (quarter.getMonth() > 5&& quarter.getMonth() <= 8){
            OrderProduct.findAll({where:{
                createdAt:{
                    [Op.lte]:date3,
                    [Op.gt]:date2
                }
            }}).then(products=>{
                if(products.length == 0){
                    res.json({errors:"no products found"})
                } else {
                    res.json(products);
                }
            })
        } else {
            OrderProduct.findAll({where:{
                createdAt:{
                    [Op.gt]:date3
                }
            }}).then(products=>{
                if(products.length == 0){
                    res.json({errors:"no products found"})
                } else {
                    res.json(products)
                }
            })
        }
        

    },
    getAllOrderProductsByUserRange:(req,res)=>{
 
        var today = new Date();
        today.setHours(0,0,0,0);
        today.setMonth(req.params.fromDateMonth-1)
        today.setDate(req.params.fromDateDay);
        console.log(today)
        var toDate = new Date();
        console.log(req.params)
        toDate.setHours(0,0,0,0);
        toDate.setDate(req.params.toDateDay)
        toDate.setMonth(req.params.toDateMonth-1);
        toDate.setFullYear(today.getFullYear());
        console.log(toDate)
        
        console.log(toDate)
        OrderProduct.findAll({where:{
            createdAt:{
                [Op.gte]:today,
                [Op.lte]:toDate
            }
        }}).then(products=>{
            if(products.length == 0){
                res.json({errors:"no products fround"})
            } else {
                res.json(products)
            }
        })
    }
    
}