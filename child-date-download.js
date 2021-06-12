// const { exec } = require('child_process');
// var bb = require('./server/bearerTokens.json')
// // console.log(bb)

// exec(`oc login --token="${bb.ffgg}" --server=http && oc projects`, (err, stdout, stderr) => {
//   if (err) {
//     console.error(`exec error: ${err}`);
//     return;
//   }

//   console.log(`Number of files ${stdout}`);
// });


var express = require('express')
var app = express()
// var bodyParser = require('body-parser')
// const { exec } = require('child_process');
// const fs = require("fs");
// const sendmail = require('sendmail')();
// var randomize = require('randomatic');
// const request = require('request');
// var env = require('node-env-file');



// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//    extended: true
// }));
const port = 3000




// var a = new Date();
// var dd = JSON.stringify(a)
// let date = dd.slice(6, 12);
// var indiaTime = new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
// indiaTime = new Date(indiaTime);
// time = indiaTime.toLocaleString().slice(10, 15).replace(":", "-")
// var uq = date + time


   app.get('/gett', function(req, res){
      const file = `${__dirname}/docker-compose.yml`;
      console.log("h***********GERMAN***********************")
      res.download(file); // Set disposition and send it.
    });









app.listen(port, () => console.log(`Example app listening on port ${port}!`))







