const {OrderProduct, Order} = require("../config/sequelize.js");

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
    deleteOneProductByOrderId:(req,res)=>{
        
    }
    

    
}