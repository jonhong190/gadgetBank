const mongoose = require("mongoose");
const users = require("../controllers/users.js");
const orders = require("../controllers/orders.js");
const products = require("../controllers/products.js");
const categories = require("../controllers/categories.js");
const path = require("path");

module.exports = (app)=>{
    app.get("/customers", (req,res)=>{
        users.allUsers(req,res);
    });
    app.get("/customer/:username", (req,res)=>{
        users.getOneUser(req,res);
    });
    app.post("/customer/new", (req,res)=>{
        users.createUser(req,res);
    });
    app.get("/customer/login/:username", (req,res)=>{
        users.loginUser(req,res);
    });
    app.get("/customer/:id/orders", (req,res)=>{
        users.allOrders(req,res);
    });
    app.get("/order/:order_id", (req,res)=>{
        orders.oneOrder(req,res);
    });
    app.post("/customer/:username/order/new", (req,res)=>{
        orders.newOrder(req,res);
    });
    app.get("/order/:order_id/delete", (req,res)=>{
        orders.deleteOrder(req,res);
    })
    app.post("/order/:order_id/:category_id/product/new", (req,res)=>{
        products.newProduct(req,res);
    });
    app.post("/product/:product_id/edit", (req,res)=>{
        products.editProduct(req,res);
    });
    app.get("/product/:product_id/delete", (req,res)=>{
        products.deleteProduct(req,res);
    });
    app.get("/product/:product_id", (req,res)=>{
        products.getProduct(req,res);
    });
    app.post("/category/new", (req,res)=>{
        categories.addCategory(req,res);
    });
    app.get("/categories", (req,res)=>{
        categories.allCategories(req,res);
    });
    app.post("/category/category_id/delete", (req,res)=>{
        categories.deleteCategory(req,res);
    });
}