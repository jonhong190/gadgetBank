const { User, Address } = require("../config/sequelize.js");
const EasyPost = require('@easypost/api/index.js');
const api = new EasyPost('EZTK7353a4d1df1a4c6c876c8adf5c778753o0XBBT0lhkWeNGIgpFVRxA');


module.exports = {
    getAllAddressByUserId: (req,res)=>{
        Address.findAll({where:{user_id:req.params.user_id}}).then(addresses=>{
            if(addresses.length == 0){
                res.json({errors:"no addresses found"})
            } else {
                res.json(addresses);
            }
        })
    },
    postNewAddressToUser: (req,res)=>{
        Address.findAll({where:{street1:req.body.street1, street2:req.body.street2, user_id:req.params.user_id}}).then(add=>{
            console.log(add)
            if(add.length > 0){
                res.json({errors: "address already exists"})
            } else {
                Address.create(req.body).then(address => {
                    if (address.length == 0) {
                        res.json({ errors: "no address created" })
                    } else {
                        address.user_id = req.params.user_id;
                        address.save();
                        res.json(address);
                    }
                })
            }
        })
        
    },
    updateAddressByUserId: (req,res)=>{
        Address.findAll({where:{user_id: req.params.user_id, address_id:req.params.address_id}}).then(add=>{

        })
    },
    deleteAddressById:(req,res)=>{
        Address.destroy({where:{id:req.params.address_id}}).then(err=>{
            if(err){
                res.json({errors:"address delete unsuccessful"})
            } else {
                res.json("address succesfully removed");
            }
        })
    }
}