module.exports = (sequelize, type)=>{
    return sequelize.define('user', {
        id:{
            type:type.INTEGER,
            primaryKey:true,
            autoIncrement: true
        },
        first_name:{
            type:type.STRING,
            notEmpty:true
        },
        last_name:{
            type:type.STRING,
            notEmpty:true
        },
        email:{
            type:type.STRING,
            notEmpty:true,
            isEmail:true
        },
        password:{
            type:type.STRING,
            notEmpty:true
        },
        username: {
            type:type.STRING,
            notEmpty: true,
            unique:true
        },
        admin: {
            type: type.BOOLEAN,
            defaultValue:false
        }
    })
}