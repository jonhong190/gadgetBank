const mongoose = require("mongoose");
const users = require("../controllers/users.js");
const orders = require("../controllers/orders.js");
const products = require("../controllers/products.js");
const categories = require("../controllers/categories.js");
const conditions = require("../controllers/conditions.js");
const carriers = require("../controllers/carriers.js");
const sizes = require("../controllers/sizes.js");
const prices = require("../controllers/prices.js");
const orderProducts = require("../controllers/orderProducts.js");
const addresses = require("../controllers/addresses.js");
const path = require("path");
// var multer = require('multer');

// var store = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, './uploads')
//     },
//     filename: function (req, file, cb) {
//         cb(null, Date.now() + '.' + file.originalname);
//     }
// });

// var upload = multer({ storage: store }).single('file');


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
    app.post("/login", (req,res)=>{
        users.loginUser(req,res);
    });
    app.get("/orders", (req,res)=>{
        users.allOrders(req,res);
    });
    app.get("/session", (req,res)=>{
        users.getSessionUser(req,res);
    });
    app.post("/customer/:username/order/new", (req,res)=>{
        orders.newOrder(req,res);
    });
    app.get("/order/:order_id/delete", (req,res)=>{
        orders.deleteOrder(req,res);
    });
    app.get("/orders/:user_id", (req, res) => {
        orders.getAllOrdersByUserId(req, res);
    });
    app.get("/order-active/:user_id", (req,res)=>{
        orders.getActiveOrderByUserId(req,res);
    });
    app.post("/order/active/new/:user_id", (req,res)=>{
        orders.newProductToActiveOrder(req,res);
    });
    app.post("/order/:order_id/product/new", (req,res)=>{
        products.newProductToNewOrder(req,res);
    });
    
    app.post("/new",(req,res)=>{
        products.newProduct(req,res);
    });
    app.post('/upload', (req,res,next)=>{
        products.upload(req,res,next);
    });
    app.get('/products-contain/:title', (req,res)=>{
        products.allProductsContainsTitle(req,res);
    });
    app.post("/product/:product_id/edit", (req,res)=>{
        products.editProduct(req,res);
    });
    app.get("/product/:product_id/delete", (req,res)=>{
        products.deleteProduct(req,res);
    });
    app.get("/allProducts", (req,res)=>{
        products.allProducts(req,res);
    })
    app.get("/allProducts/:title",(req,res)=>{
        products.allProductsByTitle(req,res);
    })
    app.get("/product/:product_id", (req,res)=>{
        products.getProduct(req,res);
    });
    app.post("/product/edit/:id", (req,res)=>{
        products.updateProduct(req,res);
    });
    app.get("/product/:product_id/delete", (req,res)=>{
        products.deleteProduct(req,res);
    });
    app.post("/category/new", (req,res)=>{
        categories.addCategory(req,res);
    });
    app.get("/categories", (req,res)=>{
        categories.allCategories(req,res);
    });
    app.post("/category/:category_id/delete", (req,res)=>{
        categories.deleteCategory(req,res);
    });
    app.get("/category/:category_id", (req,res)=>{
        categories.getCategory(req,res);
    });
    app.post("/condition/new", (req,res)=>{
        conditions.newCondition(req,res);
    });
    app.get("/conditions", (req,res)=>{
        conditions.allConditions(req,res);
    });
    app.get("/condition/:condition_id", (req,res)=>{
        conditions.getOneCondition(req,res);
    });
    app.get("/carriers", (req,res)=>{
        carriers.allCarriers(req,res);
    });
    app.post("/new/carrier", (req,res)=>{
        carriers.newCarrier(req,res);
    });
    app.get("/carrier/:carrier_id", (req,res)=>{
        carriers.getOneCarrier(req,res);
    });
    app.get("/carrier/name/:name", (req,res)=>{
        carriers.getOneCarrierByName(req,res);
    });
    app.get("/carriers/:category_id", (req,res)=>{
        carriers.getCarriersByCategory(req,res);
    });
    app.get("/sizes", (req,res)=>{
        sizes.allSizes(req,res);
    });
    app.post("/size/new", (req,res)=>{
        sizes.newSize(req,res);
    });
    app.get("/size/:size_id", (req,res)=>{
        sizes.getOneSize(req,res);
    });
    app.get("/size/value/:value", (req,res)=>{
        sizes.getOneSizeBySizeValue(req,res);
    });
    app.get("/sizes/:category_id", (req,res)=>{
        sizes.getAllSizesByCategory(req,res);
    });
    app.get("/prices", (req,res)=>{
        prices.allPrices(req,res);
    });
    app.get("/price/one/:price_id", (req,res)=>{
        prices.getOnePriceById(req,res);
    })
    app.post("price/new/:product_id", (req,res)=>{
        prices.newPrice(req,res);
    });
    app.get("/price/:product_id", (req,res)=>{
        prices.getPriceForProduct(req,res);
    });
    app.get("/price/:product_id/:size_id", (req,res)=>{
        prices.getPriceByProductAndSize(req,res);
    })
    app.get("/prices/group/:product_id/:size_id", (req,res)=>{
        prices.getPriceBySizeAndCarrier(req,res);
    });
    app.get("/prices/condition/:product_id/:size_id", (req,res)=>{
        prices.getPriceBySizeAndCondition(req,res);
    });
    app.post("/price/edit/:id/",(req,res)=>{
        prices.updatePrice(req,res);
    });
    app.get("/price/all-conditions/:product_id/:size_id/:condition_id/:carrier_id/:category_id", (req,res)=>{
        prices.getOnePriceByAllConditions(req,res);
    });
    app.get("/order/:order_id/products", (req,res)=>{
        orderProducts.getAllProductsByOrderId(req,res);
    });
    app.post("/order/:order_id/new/product", (req,res)=>{
        orderProducts.newProductToExistingOrder(req,res);
    });
    app.get("/addresses/:user_id", (req,res)=>{
        addresses.getAllAddressByUserId(req,res);
    });
    app.post("/address/:user_id/new", (req,res)=>{
        addresses.postNewAddressToUser(req,res);
    });
    app.get("/address/update/:user_id/:address_id", (req,res)=>{
        addresses.updateAddressByUserId(req,res);
    });
    app.post("/address/delete/:address_id", (req,res)=>{
        addresses.deleteAddressById(req,res);
    });
    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });

    
}