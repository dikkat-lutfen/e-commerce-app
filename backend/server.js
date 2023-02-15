const express = require('express')
const fileUpload = require("express-fileupload")
const  cookieParser = require("cookie-parser")
const app = express()
const port = 5000
const connectionDB =require ("./config/db.js")

const apiRoutes = require("./routes/apiRoutes")
const cors = require('cors')

app.use(express.json())
app.use(cookieParser())
app.use(fileUpload())
app.use(cors())
app.get('/', (req, res,next) => {

 res.json({message:"API running ..."})
})


app.use('/api', apiRoutes)
   
/* app.use((error,req,res,next)=>{
    console.error(error);
    next(error)
}) */

/* app.use((error,req,res,next)=>{
   message: error.message
   stack: error.stack
}) */

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})
  
  
const start = async () => {
    try {
      await connectionDB();
      app.listen(port, () =>
        console.log(`Server is listening on port ${port}...`)
      );
    } catch (error) {
      console.log(error);
    }
  };

start();

