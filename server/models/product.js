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
        condition:{
            type: type.STRING,
            notEmpty:true
        },
        price: {
            type:type.INTEGER,
            notEmpty: true
        },
        manufacturer:{
            type:type.STRING,
            notEmpty: true
        },
        size:{
            type:type.INTEGER,
            notEmpty: true
        }
    })
}