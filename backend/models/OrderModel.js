const mongoose = require ("mongoose");
const CategoryModel = require("./CategoryModel");
// I need who order this order. so required it
// order belongs to one user but users can have many orders
const User = require ("./UserModel")

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: User,

    },
    orderTotal:{
        itemCount: { type:Number, required: true},
        cartSubtotal: {type: Number, required: true}
    },
    cartItems: [ {
        name: { type:String, required: true },
        price:{type: Number, required: true},
        image: {path: {type: String, required: true}},
        quantity: {type: Number, required: true},
        count: { type: Number, required: true}
 } ],
    transactionResult: {
        status: { type: String},
        createTime: {type:String},
        amount:{type: Number}
    },
    isPaid:{
        type: Boolean,
        required: true,
        default: false,
    },
    paidAt: {
        type:Date,
    },
    isDelivered: {
        type: Boolean,
        required: true,
        default: false
    },
    deliveredAt:{
        type: Date,
    }
},{
    timestamps: true
})


const OrderModel = mongoose.model ("Order", orderSchema);

exports.model = OrderModel;