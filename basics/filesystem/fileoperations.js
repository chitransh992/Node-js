const fs = require('fs');

fs.writeFile('example.txt',"Hello world",(err)=>{
    if(err) throw err;
    console.log("File write successfully");
});

fs.readFile('example.txt',(err,data)=>{
    if(err) throw err;
    console.log(data.toString());
});