const {User, Order, Product, Category, Condition, Carrier, Size, Price, OrderProduct} = require("../config/sequelize.js");
const fs = require('fs');

var multer = require('multer');

var store = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/dist/public/assets/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

var upload = multer({ storage: store }).single('file');


module.exports = {
    upload:(req,res,next)=>{
        upload(req, res, function (err) {
            if (err) {
                res.status(510).json({ error: err });
            } else {

                return res.json({ originalname: req.file.originalname, uploadname: req.file.filename });
            }
        })
    },
    allProducts: (req,res)=>{
        Product.findAll({}).then(products=>{
            if(products.length == 0){
                res.json({errors:"no products found"});
            } else {
                res.json(products);
            }
        })
    },
    allProductsByTitle: (req,res)=>{
        Product.findAll({where:{title: req.params.title + '%'}}).then(products=>{
            if(products.length == 0){
                res.json({errors:"no products found"})
            } else {
                console.log(products)
                res.json(products)
            }
        })
    },
    allProductsContainsTitle:(req,res)=>{
        Product.findAll({where:{title:{like:req.params.title +'%'}}}).then(products=>{
            if(products.length == 0){
                res.json({errors:"no products found"});
            } else {
                console.log(products)
                res.json(products)
            }
        })
    },
    // function to grab all current products
    newProductToNewOrder: (req,res)=>{
        OrderProduct.create().then(orderProduct=>{
            if(orderProduct.length == 0){
                res.json({errors:"no order product created"})
            } else {
                orderProduct.order_id = req.params.order_id;
                orderProduct.product_id = req.body.id;
                orderProduct.price_id = req.body.price.id;
                orderProduct.save();
                res.json(orderProduct)
            }
        })
                    
                
    },
    // newProductToExistingOrder:(req,res)=>{
    //     OrderProduct.create({order_id:req.params.order_id}).then(orderProduct=>{
    //         orderProduct.product_id = req.body.product_id;
    //         res.json(orderProduct);
    //     })  
    // },
    // function will create a product and add it to a user order
    newProduct: (req,res)=>{
        Product.create(req.body).then(product=>{
            if(product.length == 0){
                res.json({errors:"no product created"})
            } else {
                console.log("in product create", product)
                var p = product;
                Condition.findAll({}).then(condition=>{
                    var con = condition;
                    Carrier.findAll({}).then(carriers=>{
                        var car = carriers;
                        Size.findAll({}).then(sizes=>{
                            var s = sizes;
                            for(var i = 0; i < con.length; i++){
                                for(var j=0; j < car.length; j++){
                                    for(var k = 0; k < s.length; k++){
                                        Price.create({product_id:p.id, condition_id:con[i].id, carrier_id :car[j].id, size_id:s[k].id, category_id: p.category_id})
                                    }
                                }
                            }
                        })
                    })
                })
                res.json(product)
            }
        }) 
    },
    // function to create new product then create price models for every condition and carrier, then return the result as json
    getProduct : (req,res)=>{
        Product.findAll({where:{id:req.params.product_id}}).then(product=>{
            if(product.length == 0){
                res.json({errors: "No product exists"})
            } else {
                res.json(product)
            }
        })
    },
    // this function querries database for one product based on id
    updateProduct: (req,res)=>{
        Product.findAll({where:{id:req.params.id}}).then(product=>{
            if(product.length == 0){
                res.json({errors:"No product exists"})
            } else {
                product[0].title = req.body.title;
                product[0].manufacturer = req.body.manufacturer;
                product[0].category_id = req.body.category_id;
                product[0].image = req.body.image;
                product[0].save();
                res.json(product);
            }
        })
    },

    //this function grabs the received product object from the front end service and sets attributes to match
    deleteProduct: (req,res)=>{
        Product.findAll({where:{id:req.params.product_id}}).then(product=>{
            fs.unlink('../uploads/' + product[0]['image'], (err)=>{
                if(err){
                    console.log(err)
                }
            })
        })
        
        Product.destroy({where:{id:req.params.product_id}});
        Price.destroy({ where: { product_id: req.params.product_id } });

        res.json("Succesfully Deleted Product");
    }


}