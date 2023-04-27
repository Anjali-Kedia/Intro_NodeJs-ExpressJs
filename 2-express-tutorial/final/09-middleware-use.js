const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')
//  req => middleware => res
app.use([logger, authorize])

//app.use('/api/',logger)
//this applies to all after the /api in their url


//for app.use order matters, it will only apply to everything below it
// api/home/about/products
app.get('/', (req, res) => {
  res.send('Home')
})
app.get('/about', (req, res) => {
  res.send('About')
})
app.get('/api/products', (req, res) => {
  res.send('Products')
})
app.get('/api/items', (req, res) => {
  console.log(req.user)
  res.send('Items')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
