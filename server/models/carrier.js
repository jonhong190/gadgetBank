module.exports = (sequelize, type)=>{
    return sequelize.define('carrier', {
        id:{
            type:type.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        carrier_name:{
            type:type.STRING,
            notEmpty: true
        }
    })
}