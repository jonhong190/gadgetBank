const {User, Order, Product} = require("../config/sequelize.js");

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
    newProduct: (req,res)=>{
        Order.findAll({where:{id:req.params.order_id}}).then(order=>{
            if(order.length == 0){
                res.json({errors:"no order found"})
            } else {
                Product.create(req.body).then(product=>{
                    order[0].addProducts(product);
                    res.json(product)
                })
            }
        })
    },
    getProduct : (req,res)=>{
        Product.findAll({where:{id:req.params.product_id}}).then(product=>{
            if(product.length == 0){
                res.json({errors: "No product exists"})
            } else {
                res.json(product)
            }
        })
    },
    deleteProduct: (req,res)=>{
        Product.destroy({where:{id:req.params.product_id}})
    }

}