const mongoose = require ("mongoose");

const userSchema = new mongoose.Schema ({
    name: { 
        type: String,
        required:true,

    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique:true,
    },
    phoneNumber: {
        type: String,
    },
    address : {
        type : String,
    },
    country: {
        type: String,
    },
    zipCode: {
        type: String,
    },
    city: {
        type:String,
    },
    State: {
        type: String,
    },
    password: {
        type:String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false,
    }


},{
    timestamps: true,
})
