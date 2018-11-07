module.exports = (sequelize, type)=>{
    return sequelize.define('product', {
        id:{
            type:type.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        title:{
            type:type.STRING,
            notEmpty: true
        },
        manufacturer:{
            type:type.STRING,
            notEmpty: true
        },
        has_craked_back: {
            type: type.BOOLEAN,
            default:false,
        },
        image:{
            type:type.STRING
        },
        category_id:type.INTEGER,
        order_id: type.INTEGER,
        price_id:type.INTEGER
    })
}