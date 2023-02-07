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
categorySchema.index({description: 1})
const CategoryModel = mongoose.model("Categories", categorySchema);

module.exports =CategoryModel;