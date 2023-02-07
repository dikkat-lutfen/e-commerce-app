const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true

    },
    description :{type: String, default: "default category description"},
    image: { type: String , default: "/image/tablets-category.png"},
    attrs:[{key:{type: String}, value:[{type:String}]}]
})

const CategoryModel = mongoose.model("Category", categorySchema);
module.exports =CategoryModel;