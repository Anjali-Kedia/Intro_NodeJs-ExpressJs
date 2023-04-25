 //STREAMS
//one use is to read files, cause when we use sync and async
// we are passing the file into a variable but if the file
//size is too large then the variable cannot hold the file 


//so we use Streams

 
 
 const {createReadStream} = require('fs');
 const stream = createReadStream('./content/big.txt',{highWaterMark: 90000, encoding: 'utf8'});

//default 64kb
//last buffer = remainder
//highWaterMark - control size
// const stream = createReadStream('./content/big.txt',{ highWaterMark: 90000})
// const stream = createReadStream('./content/big.txt',{ encoding: 'utf8' })




 stream.on('data',(result)=>{
    console.log(result);
 })
 stream.on('error',(err)=>{
    console.log(err);
 })