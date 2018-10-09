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
        order_received:type.DATE,
        payment_shippped: type.DATE,
        user_id:type.INTEGER
    })
}