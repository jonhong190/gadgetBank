module.exports = (sequelize, type)=>{
    return sequelize.define('order', {
        id:{
            type:type.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        total_payment:{
            type:type.INTEGER,
            notEmpty:true
        },
        active:{
            type:type.BOOLEAN
        },
        shipment_id:type.STRING,
        user_id:type.INTEGER,
        product_id:type.INTEGER,
    })
}