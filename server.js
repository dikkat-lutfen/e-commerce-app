const express = require('express')
const app = express()
const port = 5000
const connectionDB =require ("./config/db.js")

const apiRoutes = require("./routes/apiRoutes")

app.get('/', (req, res) => {
 /*  res.send('Hello World! ') */
 res.json({message:"API running ..."})
})

//mongoDB connection 

app.use('/api', apiRoutes)
   
app.use((error,req,res,next)=>{
    console.error(error);
    next(error)
})

app.use((error,req,res,next)=>{
   message: error.message
   stack: error.stack
})
  
  
const start = async () => {
    try {
      await connectDB();
      app.listen(port, () =>
        console.log(`Server is listening on port ${port}...`)
      );
    } catch (error) {
      console.log(error);
    }
  };
start();

/* app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) */