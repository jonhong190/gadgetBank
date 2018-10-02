const mongoose = require("mongoose");
const carriers = ["AT&T", "T-mobile", "Verizon", "Sprint", "Unlocked"];



const ProductSchema = new mongoose.Schema({
    title:String,
    manufacturer: { type:String, required: true },
    type: { type: String, required : true },
    size: {type: String},
    image: String,
    condition: String,
    price: Number,
    new: Boolean,
    created_at:Date,
    updated_at:Date
}, {timestamps:true});
mongoose.model('Product', ProductSchema);

const OrderSchema = new mongoose.Schema({
    order_ship_out_date: { type: Date},
    order_receive: {type: Date},
    payment: { type: Number},
    payment_ship_out: { type: Date },
    products:[ProductSchema],
    created_at:Date,
    updated_at:Date
}, {timestamps:true});
mongoose.model("Order", OrderSchema);

const UserSchema = new mongoose.Schema({
    first_name: {type:String, required: true, minlength: [3, "First name must be at least 3 characters long."]},
    last_name: { type:String, required: true, minlength: [3, "Last name must be at least 3 characters long."]},
    email: { type: String, required: true, unique: true},
    username:String,
    password: { type: String, required: true},
    created_at:Date,
    updated_at:Date,
    orders: [OrderSchema]

}, {timestamps:true});
mongoose.model("User", UserSchema);

const AdminSchema = new mongoose.Schema({
    admin_name: {type: String, required:true},
    password: { type: String, required: true},
    admin_email: {type:String, required: true, unique: true},
    users: [UserSchema]
});
mongoose.model("Admin", AdminSchema);
