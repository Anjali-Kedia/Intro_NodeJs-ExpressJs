const express = require('express');
const app = express()
const logger = require('./logger.js')
const authorize = require('./authorize.js')
//req => middleware => res

app.use([logger,authorize])

app.get('/',(req,res)=>{
    res.send('Home')
})
app.get('/about',(req,res)=>{
    res.send('About')
})
app.get('/api/products',(req,res)=>{
    res.send('Products')
})
app.get('/api/items',(req,res)=>{
    res.send(req.user)
})
app.listen(2000,()=>{
    console.log('App is listening on port 2000..')
})