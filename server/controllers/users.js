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
        User.find({email:req.params.username}, (err,data)=>{
            if(err){
                res.json({message:"User does not exist", error:err});
            } else {
                res.json({message:"Successfully logged in", data:data});
            }
        })
    };
    this.getOneUser= (req,res)=>{
        User.find({_id: req.params.username}, (err,data)=>{
            if(err){
                res.json({message:"error finding user", error:err});
            } else {
                res.json({message:"Success", data:data});
            }
        })
    };
    this.allOrders = (req,res)=>{
        User.find({_id:req.params.username}, (err,data)=>{
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
        Order.find({_id:req.params.order_id}, (err,data)=>{
            if(err){
                res.json({message:"error finding user", error: err});
            } else {
                res.json({message:"success", data:data});
            }
        })
    };

    this.newProduct = (req,res)=>{
        let product = new Product(req.body);
        product.save((err)=>{
            if(err){
                res.json({message:"error", error: err});
            } else {
                console.log(product)
            }
        });
        Order.findOneAndUpdate({_id:req.params.order_id}, {$push:{products:product}}, (err,data)=>{
            if(err){
                res.json({message:"error", error:err});
            } else {
                console.log(data)
                res.json({message:"succesfully added product to order", data:data});
            }
        })
    };

    this.newOrder = (req,res)=>{
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes();
        var dateTime = date + ' ' + time;
        let order = new Order();
        order.order_create = dateTime;
        order.save((err,data)=>{
            if(err){
                console.log("error in order save");
            } else {
                console.log(data);
            }
        });
        User.findOneAndUpdate({_id:req.params.username}, {$push:{orders:order}}, (err,data)=>{
            if(err){
                res.json({message:"error adding order", error:err});
            } else {
                res.json({message:"success adding order", data:data});
            }
        })
    };

    this.editOrder = (req,res)=>{
        Order.find({_id:req.params.order_id}, (err, order)=>{
            if(err){
                res.json({message:"error finding order"});
            } else {
                //insert order logic when the front form is finalized
            }
        })
    }

    this.deleteOrder = (req,res)=>{
        Order.remove({_id:req.params.order_id}, (err,data)=>{
            if(err){
                res.json({message:"error finding user", error:err});
            } else {
                res.json({message:"order " +req.params.order_id + " deleted order", data:data});
            }
        })
    };
    this.editProduct = (req,res)=>{
        Product.findOne({_id:req.params.product_id}, (err,product)=>{
            if(err){
                res.json({message:"error", error:err});
            } else {
                product.manufacturer = req.body.manufacturer;
                product.type = req.body.type;
                product.size = req.body.size;
                product.condition = req.body.condition;
                product.price = req.body.price;
                product.new = req.body.new;
            }   
        })
    };

    this.deleteProduct = (req,res)=>{
        Product.remove({_id:req.params.product_id}, (err)=>{
            if(err){
                res.json({message:"error deleting product"});
            } else {
                res.json({message:"product " +req.params.product_id+ " succesfully deleted"})
            }
        })
    };


    this.deleteUser = (req,res)=>{
        User.remove({_id:req.params.id}, (err, data)=>{
            if(err){
                res.json({message:"error removing user", error:err});
            } else {
                res.json({message:"user "+req.params.id+" succesfully deleted", data:data});
            }
        })
    };

}
module.exports = new Users();