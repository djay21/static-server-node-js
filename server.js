var express = require('express')
var app = express()
const fs = require("fs");
const request = require('request');
 
 
const port = 3000
 
 

 
   app.get('/chat.tar', function(req, res){
      const file = `${__dirname}/chat.tar`;
      console.log("h****************ITALIAN******************")
      res.download(file); // Set disposition and send it.
    });
 

 
 
 
 
 
 
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

