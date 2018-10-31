
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const sequelize = require("sequelize");
const session = require("express-session")


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
// app.use(multer);



require("./server/config/sequelize.js");
require("./server/config/routes.js")(app);
require("./server/models/user.js");
require("./server/controllers/users.js");

app.listen(8888, ()=>{
    console.log("listening on 8888")
});