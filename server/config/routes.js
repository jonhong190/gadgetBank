const mongoose = require("mongoose");
const users = require("..//controllers/users.js");
const path = require("path");

module.exports = (app)=>{
    app.get("/customers", (req,res)=>{
        users.allUsers(req,res);
    });
    app.get("/customer/:id", (req,res)=>{
        users.getOneUser(req,res);
    });
    app.post("/customer/new", (req,res)=>{
        users.createUser(req,res);
    });
    app.get("/customer/login/:email", (req,res)=>{
        users.loginUser(req,res);
    });
    app.get("/customer/:id/orders", (req,res)=>{
        users.allOrders(req,res);
    });
    app.get("/customer/:id/order/:order_id", (req,res)=>{
        users.oneOrder(req,res);
    });
}