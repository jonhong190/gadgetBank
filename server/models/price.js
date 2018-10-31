module.exports = (sequelize, type)=>{
    return sequelize.define('price', {
        id:{
            type:type.INTEGER,
            primaryKey:true,
            autoIncrement: true
        },
        price_value:{
            type:type.INTEGER,
            notEmpty: true
        },
        product_id: type.INTEGER,
        condition_id:type.INTEGER,
        size_id:type.INTEGER,
        category_id:type.INTEGER,
        carrier_id:type.INTEGER,
        minus_value:type.INTEGER
    })
}, {
    setterMethods: {
        price_value(value) {
            const price = value;
            this.setDataValue('price_value', price);
        }
    }
}