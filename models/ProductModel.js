const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    name: {
        type: String,

    }
})

const ProductModel = mongoose.model("product",productSchema)
module.export=ProductModel;

/* const userSchema = new mongoose.Schema({
    name: {      type: String,      require: true,    },
    email: {      type: String,      require: true,    },
    password: {      type: String,      require: true,    },  });
    const userModel = mongoose.model('Users', userSchema);
    module.exports = userModel;
 */