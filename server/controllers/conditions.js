const { Condition } = require("../config/sequelize.js");

module.exports = {
    newCondition: (req,res)=>{
        Condition.create(req.body).then(condition=>{
            res.json(condition);
        })
    },
    allConditions: (req,res)=>{
        Condition.findAll({}).then(conditions=>{
            if(conditions.length == 0){
                res.json({errors:"no conditions found"})
            } else {
                res.json(conditions);
            }
        })
    },
    getOneCondition: (req,res)=>{
        Condition.findAll({where:{id: req.params.condition_id}}).then(condition=>{
            if(condition.length==0){
                res.json({errors:"no condition found"})
            } else {
                res.json(condition);
            }
           
        })
    }
}