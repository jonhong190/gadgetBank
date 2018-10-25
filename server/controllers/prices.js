const { Price , Product, Condition, Carrier, Size} = require("../config/sequelize.js");
const sequelize = require('sequelize');

module.exports = {
    allPrices: (req,res)=>{
        Price.findAll({}).then(prices=>{
            if(prices.length == 0){
                res.json({errors:"no prices found"})
            } else {
                res.json(prices)
            }
        })
    },
    newPrice:(req,res)=>{
        console.log("in new pRice", req.body)
        Product.findAll({where:{id:req.body.id}}).then(product=>{
            
            var targetProduct = product;
            Condition.findAll({}).then(conditions=>{
                var allConditions = conditions;
                Carrier.findAll({}).then(carriers=>{
                    var allCarriers = carriers;
                    Size.findAll({}).then(sizes=>{
                        var allSizes = sizes;
                        for(var i = 0; i < allConditions.length; i++){
                            for(var j = 0; j < allCarriers.length; j++){
                                for(var k = 0; k < allSizes.length; k++){
                                    let body = req.body;
                                    body.condition_id = allConditions[i].id;
                                    body.carrier_id = allCarriers[j].id;
                                    body.size_id = allSizes[k].id;
                                    body.product_id = targetProduct.id;
                                    Price.create(req.body);
                                }
                            }
                        }
                    })
                })
            })
        })
    },
    getPriceForProduct:(req,res)=>{
        Price.findAll({where:{product_id:req.params.product_id}}).then(prices=>{
            if(prices.length ==0 ){
                res.json({errors:"no price found"})
            } else {
                res.json(prices);
            }
        })
    },
    getPriceByProductAndSize: (req,res)=>{
        Price.findAll({where:{product_id:req.params.product_id, size_id: req.params.size_id}}).then(prices=>{
            if(prices.length ==0){
                res.json({errors:"no prices found"})
            } else {
                res.json(prices);
            }
        })
    },
    getPriceBySizeAndCarrier:(req,res)=>{
        Price.findAll({
            
            where:{size_id:req.params.size_id, product_id:req.params.product_id},
            // group:["carrier_id","id"],
            // raw:true
            attributes:['id','product_id','carrier_id','condition_id','price_value','size_id'],
            // where: { id: req.params.product_id, size_id: req.params.size_id },
            group:['carrier_id']
        }).then(prices=>{
            if(prices.length ==0){
                res.json({errors:"no prices found"})
            } else {
                res.json(prices)
            }
        })
    },
    getPriceBySizeAndCondition:(req,res)=>{
        Price.findAll({
            where:{size_id:req.params.size_id, product_id:req.params.product_id},
            attributes:['id','product_id','carrier_id','condition_id','price_value','size_id'],
            group:['condition_id'],
            raw:true
        }).then(prices=>{
            if(prices.length==0){
                res.json({errors:"no prices found"})
            } else {
                res.json(prices)
            }
        })
    },
    updatePrice:(req,res)=>{
        Price.findAll({
            where:{id:req.params.id}
        }).then(price=>{
            if(price.length == 0){
                res.json({error:"no price found"})
            } else {
                let body = req.body;
                console.log("IN SERVER", body)
                if(req.body.minus_value != ""){
                    price[0].price_value = req.body.price_value; 
                    price[0].price_value -= req.body.minus_value;
                    if(price[0].price_value < 0){
                        price[0].price_value = 0;
                    }
                    price[0].save();
                } else {
                    price[0].price_value = req.body.price_value;
                    price[0].save();
                }
                res.json(price);
            }
        })
        
       
    }
}