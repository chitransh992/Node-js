const http = require('http');


const server = http.createServer((req,res)=>{
    res.statusCode = 200,
    res.setHeader('content-type','text/plain'),
    res.end('Hello world')
})

server.listen(3000,'localhost',()=>{
    console.log('server is running');
})