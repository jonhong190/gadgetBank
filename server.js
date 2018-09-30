const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");

app.use(express.static(__dirname + "/public/dist/public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);
require("./server/models/user.js");
require("./server/controllers/users.js");

app.listen(8000, ()=>{
    console.log("listening on 8000")
});