
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const sequelize = require("sequelize");
const session = require("express-session");
const EasyPost = require('@easypost/api');
const api = new EasyPost('EZTK7353a4d1df1a4c6c876c8adf5c778753o0XBBT0lhkWeNGIgpFVRxA');

app.use(session({
    secret:'whatasecret',
    resave:'false',
    saveUninitialized:true,
    cookie: {maxAge: 60000}
}));
//create a cors middleware
app.use(function (req, res, next) {
    //set headers to allow cross origin request.
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.static(__dirname + "/public/dist/public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(sequelize);



const {User, Address, Order } = require('./server/config/sequelize.js');
//shipping routes placed here, doesn't seem to work when placed in the routes and controllers
app.post("/create-shipping/:user_id", (req, res) => {
    //find user by id
    User.findAll({where:{id:req.params.user_id}}).then(user=>{
        //create from address
        const fromAddress = new api.Address({
            verify:['delivery'],
            name: user[0].first_name + " " + user[0].last_name,
            street1:req.body.street1,
            street2: req.body.street2,
            city: req.body.city,
            state: req.body.state,
            zip: req.body.zip.toString()
        });
        fromAddress.save().catch(e=>{
            console.log(e)
        })
        //create to address
        const toAddress = new api.Address({
            company: 'Vandelay Industries',
            street1: '1 E 161st St.',
            city: 'Bronx',
            state: 'NY',
            zip: '10451'
        });
        toAddress.save().catch(e=>{
            console.log(e)
        })
        //create parcel object
        const parcel = new api.Parcel({
            predefined_package: 'FlatRateEnvelope',
            weight: 10,
        });
        parcel.save().catch(e=>{
            console.log(e)
        })
        //create shipment
        const shipment = new api.Shipment({
            to_address: toAddress,
            from_address: fromAddress,
            parcel: parcel
        });
        
        shipment.save().then(s => {
            console.log("shipment", s)
            s.rates.forEach(rate => {
                console.log(rate.carrier);
                console.log(rate.service);
                console.log(rate.rate);
                console.log(rate.id);
            });
            //buy shipping rate
            s.buy(s.lowestRate(['USPS'], ['Priority'])).then(result => {
                console.log(result);
                console.log(result.postage_label.label_url);
                console.log(result.tracking_code);
                console.log("here")
                //update order model 
                Order.findAll({ where: { user_id: user[0].id, active: true } }).then(order => { 
                    //store shipment id for future reference                       
                    order[0].shipment_id = s.id;
                    order[0].active = false;
                    order[0].save().then(err=>{
                        if(err){
                            res.json(err)
                        } else {
                            res.json(result.postage_label.label_url, result.tracking_code)
                        }
                    });
                })
            });
                    
        });
    });
});
app.get("/shipment/:shipment_id", (req, res) => {
    api.Shipment.retrieve(req.params.shipment_id).then(s => {
        console.log(s);
        if (s.length == 0) {
            res.json({ errors: "no shipment found" })
        } else {
            res.json(s);
        }
    })
})

require('babel-polyfill');
require("./server/config/sequelize.js");
require("./server/config/routes.js")(app);
require("./server/config/shipping_routes.js")(app);
require("./server/models/user.js");
require("./server/controllers/users.js");

app.listen(8888, ()=>{
    console.log("listening on 8888")
});