const mongoose = require("mongoose");
const User = mongoose.model("User");
const Product = mongoose.model("Product");
const Order = mongoose.model("Order");

function Users(){
    this.allUsers = (req,res)=>{
        User.find({}, (err, data)=>{
            if(err){
                res.json({message:"error finding all users", error: err});
            } else {
                res.json({message:"success", data:data});
            }
        })
    };
    this.createUser = (req,res)=>{
        let user = new User(req.body);
        user.save((err, data)=>{
            if(err){
                res.json({message:"error creating user", error:err});
            } else {
                res.json({message:"success creating user", data:data});
            }
        })
    }
    this.loginUser = (req,res)=>{
        User.find({email:req.params.email}, (err,data)=>{
            if(err){
                res.json({message:"User does not exist", error:err});
            } else {
                res.json({message:"Successfully logged in", data:data});
            }
        })
    };
    this.getOneUser= (req,res)=>{
        User.find({_id: req.params.id}, (err,data)=>{
            if(err){
                res.json({message:"error finding user", error:err});
            } else {
                res.json({message:"Success", data:data});
            }
        })
    };
    this.allOrders = (req,res)=>{
        User.find({_id:req.params.id}, (err,data)=>{
            if(err){
                res.json({message:"error finding user", error:err});
            } else {
                User.orders.find({}, (err,data)=>{
                    if(err){
                        res.json({message:"error finding orders", error: err})
                    } else {
                        res.json({message:"success finding orders", data: data});
                    }
                })
            }
        })
    };
    this.oneOrder = (req,res)=>{
        User.find({_id:req.params.id}, (err,data)=>{
            if(err){
                res.json({message:"error finding user", error: err});
            } else {
                User.orders.find({_id:req.params.order_id}, (err,data)=>{
                    if(err){
                        res.json({message:"error finding order", error:err});
                    } else {
                        res.json({message:"success finding order", data:data});
                    }
                })
            }
        })
    };

    this.newOrder = (req,res)=>{
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes();
        var dateTime = date + ' ' + time;
        let product = new Product(req.body);
        let order = new Order();
        order.products = product;
        order.order_create = dateTime;
        User.findOneAndUpdate({_id:req.params.id}, {$push:{orders:order}}, (err,data)=>{
            if(err){
                res.json({message:"error adding order", error:err});
            } else {
                res.json({message:"success adding order", data:data});
            }
        })
    };
}
module.exports = new Users();