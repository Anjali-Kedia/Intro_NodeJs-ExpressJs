var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
    // const text = fs.readFileSync('./content/big.txt','utf8')
    // res.end(text)
    const fileStream = fs.createReadStream('./content/big.txt','utf8')
    fileStream.on('open',()=>{
        fileStream.pipe(res)
        //send read stream to write stream, if you can read data in chunks you can write too
    })
    fileStream.on('error',()=>{
        res.end(err)
    })
})

.listen(2000)