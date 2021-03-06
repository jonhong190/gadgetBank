const { Carrier } = require("../config/sequelize.js");

module.exports = {
    allCarriers:(req,res)=>{
        Carrier.findAll({}).then(carriers=>{
            if(carriers.length == 0){
                res.json({errors:"no carriers found"});
            } else {
                res.json(carriers);
            }
        })
    },
    newCarrier : (req,res)=>{
        Carrier.create(req.body).then(carrier=>{
            res.json(carrier);
        })
    },
    getOneCarrier : (req,res)=>{
        Carrier.findAll({where:{id: req.params.carrier_id}}).then(carrier=>{
            if(carrier.length ==0){
                res.json({errors:"no carrier found"})
            } else {
                res.json(carrier)
            }
        })
    },
    getCarriersByCategory : (req,res)=>{
        Carrier.findAll({where:{category_id:req.params.category_id}}).then(carriers=>{
            if(carriers.length == 0){
                res.json({errors:"no carriers found"});
            } else {
                res.json(carriers);
            }
        })
    },
    getOneCarrierByName:(req,res)=>{
        Carrier.findAll({where:{carrier_name:req.params.name}}).then(carrier=>{
            if(carrier.length == 0){
                res.json({errors:"no carrier found"})
            } else {
                res.json(carrier);
            }
        })
    }
}