module.exports = (sequelize, type)=>{
    return sequelize.define('size', {
        id:{
            type:type.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        value:{
            type:type.INTEGER,
            notEmpty:true
        },
        category_id: type.INTEGER

    })
}