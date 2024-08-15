const express = require('express')
const router = express.Router();

//home route
router.get('/',(req,res)=>{
    res.send('This is home page!!');
})

//about route
router.get('/about',(req,res)=>{
    res.send('This is About page!!');
})

//contact route

router.get('/contact',(req,res)=>{
    res.send("This is contact page!!");
})

module.exports = router