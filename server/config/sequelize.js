const Sequelize = require("sequelize");
const UserModel = require("../models/user.js");
const OrderModel = require("../models/order.js");
const ProductModel = require("../models/product.js");
const CategoryModel = require("../models/category.js");
const ConditionModel = require("../models/condition.js");
const CarrierModel = require("../models/carrier.js");
const SizeModel = require("../models/size.js");
const PriceModel = require("../models/price.js");
const OrderProductModel=require("../models/orderProduct.js");
const AddressModel = require("../models/address.js");

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
const Condition = ConditionModel(sequelize, Sequelize);
const Carrier = CarrierModel(sequelize, Sequelize);
const Size = SizeModel(sequelize, Sequelize);
const Price = PriceModel(sequelize, Sequelize);
const OrderProduct = OrderProductModel(sequelize,Sequelize);
const Address = AddressModel(sequelize, Sequelize);


User.hasMany(Address, {foreignKey: 'user_id'});

// Order.belongsToMany(Product,{through:'OrderProduct'});
// Product.belongsToMany(Order,{through:'OrderProduct'});

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
    Category,
    Condition,
    Carrier,
    Size,
    Price,
    OrderProduct,
    Address
}