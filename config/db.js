require("dotenv").config();
const mongoose = require(mongoose);

mongoose.set("strictQuery", false);

const uri = process.env.MONGO_URI;

const connectionDB = () =>
  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to DataBase Success"))
    .catch((error) => {
      console.log(`MongoDb connection FAIL`, error);
      process.exit(1);
    });

module.exports = connectionDB;
