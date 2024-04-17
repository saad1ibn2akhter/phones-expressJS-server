const express = require('express');
const app = express();
const port = 5000;

app.get('/',(req,res)=>{
    res.send("hello world form my first server");
})

app.get('/data' , (req ,res)=>{
    res.send("more information comign soon");
})

app.listen(port , ()=>{
    console.log(`My first server running on port : ${port}`);
})
