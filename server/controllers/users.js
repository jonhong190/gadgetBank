const {User, Order, Product, Category, Op}  = require("../config/sequelize.js");

module.exports ={
    allUsers : (req,res)=>{
        User.findAll({})
            .then(users =>{
                if(users.length == 0){
                    res.json({errors:"No users here"})
                } else {
                    res.json(users)
                }
            })
    },
    createUser : (req,res)=>{
        User.findAll({where:{username:req.body.username}}).then(user=>{
            if(user.length == 0){
                if(req.body.first_name.length < 4){
                    res.json({errors:"First Name must be at least 3 characters long"});
                }
                if(req.body.last_name.length < 2){
                    res.json({errors:"Last Name must be at least 2 characters long"});
                }
                if(req.body.password.length < 8){
                    res.json({errors:"Password must be at least 8 characters long"});
                }
                User.create(req.body).then(user=>{
                    res.json(user);
                })
            } else {
                res.json({errors:"Username already taken"});
            }
        })
    },
    loginUser : (req,res)=>{
        User.findAll({where:{username:req.body.email}}).then(user=>{
            if(user.length == 0){
                res.json({errors:"Account does not exist"});
            }
            if(req.body.password != user[0].password){
                res.json({errors:"Incorrect Password"});
            }
            
            else {
                res.json(user)
            }
        })
    },
    getOneUser :(req,res)=>{
        User.findAll({where:{username:req.params.username}}).then(user=>{
            if(user.length == 0){
                res.json({errors:"User does not exist"})
            } else {
                res.json(user)
            }
        })
    },

    // this.allOrders = (req,res)=>{
    //     User.find({_id:req.params.username}, (err,data)=>{
    //         if(err){
    //             res.json({message:"error finding user", error:err});
    //         } else {
    //             User.orders.find({}, (err,data)=>{
    //                 if(err){
    //                     res.json({message:"error finding orders", error: err})
    //                 } else {
    //                     res.json({message:"success finding orders", data: data});
    //                 }
    //             })
    //         }
    //     })
    // };
    // this.oneOrder = (req,res)=>{
    //     Order.find({_id:req.params.order_id}, (err,data)=>{
    //         if(err){
    //             res.json({message:"error finding user", error: err});
    //         } else {
    //             res.json({message:"success", data:data});
    //         }
    //     })
    // };

    // this.newProduct = (req,res)=>{
    //     let product = new Product(req.body);
    //     product.save((err)=>{
    //         if(err){
    //             res.json({message:"error", error: err});
    //         } else {
    //             console.log(product)
    //         }
    //     });
    //     Order.findOneAndUpdate({_id:req.params.order_id}, {$push:{products:product}}, (err,data)=>{
    //         if(err){
    //             res.json({message:"error", error:err});
    //         } else {
    //             console.log(data)
    //             res.json({message:"succesfully added product to order", data:data});
    //         }
    //     })
    // };

    // this.newOrder = (req,res)=>{
    //     var today = new Date();
    //     var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    //     var time = today.getHours() + ":" + today.getMinutes();
    //     var dateTime = date + ' ' + time;
    //     let order = new Order();
    //     order.order_create = dateTime;
    //     order.save((err,data)=>{
    //         if(err){
    //             console.log("error in order save");
    //         } else {
    //             console.log(data);
    //         }
    //     });
    //     User.findOneAndUpdate({_id:req.params.username}, {$push:{orders:order}}, (err,data)=>{
    //         if(err){
    //             res.json({message:"error adding order", error:err});
    //         } else {
    //             res.json({message:"success adding order", data:data});
    //         }
    //     })
    // };

    // this.editOrder = (req,res)=>{
    //     Order.find({_id:req.params.order_id}, (err, order)=>{
    //         if(err){
    //             res.json({message:"error finding order"});
    //         } else {
    //             //insert order logic when the front form is finalized
    //         }
    //     })
    // }

    // this.deleteOrder = (req,res)=>{
    //     Order.remove({_id:req.params.order_id}, (err,data)=>{
    //         if(err){
    //             res.json({message:"error finding user", error:err});
    //         } else {
    //             res.json({message:"order " +req.params.order_id + " deleted order", data:data});
    //         }
    //     })
    // };
    // this.editProduct = (req,res)=>{
    //     Product.findOne({_id:req.params.product_id}, (err,product)=>{
    //         if(err){
    //             res.json({message:"error", error:err});
    //         } else {
    //             product.manufacturer = req.body.manufacturer;
    //             product.type = req.body.type;
    //             product.size = req.body.size;
    //             product.condition = req.body.condition;
    //             product.price = req.body.price;
    //             product.new = req.body.new;
    //             product.save((err)=>{
    //                 if(err){
    //                     res.json({message:"error saving product", error:err});
    //                 } else {
    //                     res.json({message:"success"})
    //                 }
    //             })
    //         }   
    //     })
    // };

    // this.deleteProduct = (req,res)=>{
    //     Product.remove({_id:req.params.product_id}, (err)=>{
    //         if(err){
    //             res.json({message:"error deleting product"});
    //         } else {
    //             res.json({message:"product " +req.params.product_id+ " succesfully deleted"})
    //         }
    //     })
    // };


    // this.deleteUser = (req,res)=>{
    //     User.remove({_id:req.params.id}, (err, data)=>{
    //         if(err){
    //             res.json({message:"error removing user", error:err});
    //         } else {
    //             res.json({message:"user "+req.params.id+" succesfully deleted", data:data});
    //         }
    //     })
    // };

}
