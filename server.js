
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const sequelize = require("sequelize");


app.use(express.static(__dirname + "/public/dist/public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(sequelize);



require("./server/config/sequelize.js");
require("./server/config/routes.js")(app);
require("./server/models/user.js");
require("./server/controllers/users.js");

app.listen(8033, ()=>{
    console.log("listening on 8033")
});