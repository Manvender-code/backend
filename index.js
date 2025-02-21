const express = require('express')
require('dotenv').config()
const app = express()
port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/ig',(req,res)=>{
    res.send('<h1>no insta </h1>')
})

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})
