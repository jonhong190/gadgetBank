const {User, Order, Product, Category} = require("../config/sequelize.js");

module.exports = {
    allCategories:(req,res)=>{
        Category.findAll({}).then(categories=>{
            if(categories.length ==0){
                res.json({errors:"no categories found"})
            } else {
                res.json(categories)
            }
        })
    },
    addCategory : (req,res)=>{
        Category.create(req.body).then(category=>{
            res.json(category);
        })
    },
    deleteCategory: (req,res)=>{
        Category.destroy({where:{id:req.params.category_id}});
    }

}