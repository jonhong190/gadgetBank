const { Size } = require("../config/sequelize.js");

module.exports = {
    allSizes: (req,res)=>{
        Size.findAll({}).then(sizes=>{
            if(sizes.length == 0){
                res.json({errors:"no sizes found"})
            } else {
                res.json(sizes)
            }
        })
    },
    newSize:(req,res)=>{
        Size.create(req.body).then(size=>{
            if(size.length ==0 ){
                res.json({errors:"no size created"})
            } else {
                res.json(size)
            }
        })
    },
    getOneSize:(req,res)=>{
        Size.findAll({where:{id:req.params.size_id}}).then(size=>{
            if(size.length == 0){
                res.json({errors:"no size found"})
            } else {
                res.json(size)
            }
        })
    },
    getOneSizeBySizeValue:(req,res)=>{
        Size.findAll({where:{value:req.params.value}}).then(size=>{
            if(size.length == 0){
                res.json({errors:"no size found"})
            } else {
                res.json(size)
            }
        })
    },
    getAllSizesByCategory: (req,res)=>{
        Size.findAll({where:{category_id: req.params.category_id}}).then(sizes=>{
            if(sizes.length == 0){
                res.json({errors:"no sizes found"});
            } else {
                res.json(sizes);
            }
        })
    }
}