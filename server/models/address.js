module.exports = (sequelize,type)=>{
    return sequelize.define('address', {
        id:{
            type:type.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        street1:type.STRING,
        street2:type.STRING,
        city:type.STRING,
        state:type.STRING,
        zip:type.INTEGER,
        country:type.STRING,
        phone:type.STRING
    })
}