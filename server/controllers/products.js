const {User, Order, Product, Category} = require("../config/sequelize.js");

module.exports = {
    allProducts: (req,res)=>{
        Product.findAll({}).then(products=>{
            if(products.length == 0){
                res.json({errors:"no products found"});
            } else {
                res.json(products);
            }
        })
    },
    // function to grab all current products
    newProductToOrder: (req,res)=>{
        Order.findAll({where:{id:req.params.order_id}}).then(order=>{
            if(order.length == 0){
                res.json({errors:"no order found"})
            } else {
                Product.create(req.body).then(product=>{
                    order[0].addProducts(product);
                    product.category_id = req.params.category_id;
                    product.save();
                    res.json(product)
                })
            }
        })
    },
    // function will create a product and add it to a user order
    newProduct: (req,res)=>{
        Product.create(req.body).then(product=>{
            res.json(product);
        })
    },
    // function to create new product then resturn the result as json
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
        Product.findAll({where:{id:req.params.product_id}}).then(product=>{
            if(product.length == 0){
                res.json({errors:"No product exists"})
            } else {
                console.log("in controller" + product)
                product[0].title = req.body.title;
                product[0].condition = req.body.condition;
                product[0].price = req.body.price;
                product[0].manufacturer = req.body.manufacturer;
                product[0].size = req.body.size;
                product[0].carrier = req.body.carrier;
                product
                product[0].save();
                res.json(product);
            }
        })
    },
    //this function grabs the received product object from the front end service and sets attributes to match
    deleteProduct: (req,res)=>{
        Product.destroy({where:{id:req.params.product_id}}).then(
            res.json({message:"Succesfully deleted product"})
        )
    }

}