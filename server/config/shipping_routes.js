
const address = require('../controllers/addresses.js');

module.exports = (app)=>{
    app.get("/addresses/:user_id", (req,res)=>{
       address.getAllAddressByUserId(req,res);
    })
}