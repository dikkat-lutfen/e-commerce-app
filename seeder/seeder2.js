const connectDB = require("../config/db")
connectDB()


const productData = require("./products")

const Product = require("../models/ProductModel")

const importData2 = async () => {
    try {
         await Product.collection.dropIndexes() 
        /*  await Product.collection.dropIndexes()
  */
         await Product.collection.deleteMany({}) 
         /*  await Product.collection.deleteMany({})  */

        await Product.insertMany(productData)
         /* await Product.insertMany(productData)  */
 
        console.log("Seeder data proceeded successfully")
        process.exit()
    } catch (error) {
        console.error("Error while proccessing seeder data", error)
        process.exit(1);
    }
}
importData2()
