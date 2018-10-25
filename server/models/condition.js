module.exports = (sequelize, type)=>{
    return sequelize.define('condition', {
        id:{
            type:type.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        description:{
            type:type.STRING
        }
    })
}