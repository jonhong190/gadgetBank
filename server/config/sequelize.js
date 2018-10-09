const Sequelize = require("sequelize");
const UserModel = require("../models/user.js");
const OrderModel = require("../models/order.js");
const ProductModel = require("../models/product.js");
const CategoryModel = require("../models/category.js");

const sequelize = new Sequelize('gadget_bank', 'root', 'root', {
    host:'localhost',
    dialect:'mysql',
    port: 3306,
    pool:{
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

const Op = Sequelize.Op;
const User = UserModel(sequelize, Sequelize);
const Order = OrderModel(sequelize, Sequelize);
const Product = ProductModel(sequelize, Sequelize);
const Category = CategoryModel(sequelize, Sequelize);


Order.belongsToMany(Product,{through:'Order_Products'});
Product.belongsToMany(Order,{through:'Order_Products'});

//if force is true it will reinitialize the tables. Use when changing models
sequelize.sync({ force: false })
    .then(()=>{
        console.log('Database & tables created')
    })

module.exports= {
    Op,
    User,
    Order,
    Product,
    Category
}