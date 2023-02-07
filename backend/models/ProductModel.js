const mongoose = require("mongoose");
const Review = require("./ReviewModel")

const imageSchema =new mongoose.Schema({
    path: { type: String, required: true}
})

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true,
        unique: true

    },
    description :{
        type: String,
        required: true

    },
    
    count:{
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category : {
        type: String,
        required: true
    },
    images: [imageSchema],
    
    rating: {
        type: Number,
    }, 
    reviewsNumber :{
        type: Number,

    },
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: Review,
        }
    ],
   
    attrs : [{key:{type: String}, value:{ type:String} }],
    sales:{
        type: Number,
        default: 0,
    },
    
    
},{
     timestamps:true,
})

productSchema.index({name: "text", description : "text"}, {name: "TextIndex"});
productSchema.index({"attrs.key":1,"attrs.value":1})

const ProductModel = mongoose.model("products",productSchema)





module.exports=ProductModel;

