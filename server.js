const express = require('express')
const app = express()
const port = 5000

const apiRoutes = require("./routes/apiRoutes")

app.get('/', (req, res) => {
 /*  res.send('Hello World! ') */
 res.json({message:"API running ..."})
})

app.use('/api', apiRoutes)
   
  
  
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})