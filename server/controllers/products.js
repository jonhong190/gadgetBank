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
    newProduct: (req,res)=>{
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
    getProduct : (req,res)=>{
        Product.findAll({where:{id:req.params.product_id}}).then(product=>{
            if(product.length == 0){
                res.json({errors: "No product exists"})
            } else {
                res.json(product)
            }
        })
    },
    updateProduct: (req,res)=>{
        Product.findAll({where:{id:req.params.product_id}}).then(product=>{
            if(product.length == 0){
                res.json({errors:"No product exists"})
            } else {
                product[0].title = req.body.title;
                product[0].condition = req.body.condition;
                product[0].price = req.body.price;
                product[0].manufacturer = req.body.manufacturer;
                product[0].size = req.body.size;
                product[0].save();
                res.json(product);
            }
        })
    },
    deleteProduct: (req,res)=>{
        Product.destroy({where:{id:req.params.product_id}}).then(
            res.json({message:"Succesfully deleted product"})
        )
    }

}