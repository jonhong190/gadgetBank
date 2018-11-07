module.exports = (sequelize, type)=>{
    return sequelize.define('orderProduct', {
            id: {
                type: type.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            order_id:type.INTEGER,
            product_id:type.INTEGER,
            price_id:type.INTEGER
        
    })
}