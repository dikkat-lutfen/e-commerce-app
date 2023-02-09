const express = require('express')
const app = express()
const port = 5000
const connectionDB =require ("./config/db.js")

const apiRoutes = require("./routes/apiRoutes")

app.use(express.json())

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

