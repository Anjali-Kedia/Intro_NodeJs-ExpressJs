const express = require('express');
const app = express();
const {products} = require('./data.js')

app.get('/',(req,res)=>{
    res.send('<h1>Home Page</h1><a href = "/api/products">products</a>')
})
// app.get('app/products',(req,res)=>{
//     //you can either call all the details using 
//     //res.json(products)
//     //but if a particular block only shows product names and you click on it and then you see description
//     //we need to use put only some details on json
//     const newProducts = products.map((product)=>{
//         const{id,name,image} = product;
//         return {
//             id, name, image
//         }
//     })
//     res.json(newProducts)

// })
app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
      const { id, name, image } = product
      return { id, name, image }
    })
  
    res.json(newProducts)
  })
// app.get('/api/products/1', (req, res) => {
//     const singleProduct = products.find((product) => product.id === 1)
  
//     res.json(singleProduct)
//   })


app.get('/api/products/:productID', (req, res) => {
    console.log(req.params)
    const {productID} = req.params;
    const singleProduct = products.find((product) => product.id === Number(productID))
  
    if(!singleProduct){
        return res.status(404).send('Product doesnot exist')
    }
     return res.json(singleProduct)
  })
  app.get('/api/products/:productID/reviews/:reviewID',(req,res)=>{
    console.log(req.params)
    res.send('hello world')
  })

  app.get('api/v1/query',(req,res)=>{
    //console.log(req.query)
    const {search, limit } = req.query
    let sortedProducts = [...products]
    if(search){
        sortedProducts = sortedProducts.filter((product)=>{
            return product.name.startsWith(search)
        })
    }
    if(limit){
        
    }
    res.send('hello world')
  })

app.listen(2000,()=>{
    console.log('Listening on port 2000')
})
