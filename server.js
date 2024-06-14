const express = require('express');
const app = express();

app.get('/', (req,res)=>{
     res.send("YOOOO! It Does Work, 12345"); 
 });

app.listen(4000, function () {
    console.log("app listening on port 4000");
});

