var express = require('express')
var app = express()
const fs = require("fs");
const request = require('request');
var jwt = require('jsonwebtoken');
const path = require("path");
const { cwd } = require('process');



const ModelsFolder = './Models';
const port = 3000



app.get('/token', function (req, res) {
   var secret = req.query.secret;
   if (secret == "iwantmodelfiles@") {
      var token = jwt.sign({ username: "devops" }, 'devops', { expiresIn: 120 });
      res.send(token)
   }
   else
      res.send("thenga milega")
})


app.get('/list-files', function (req, res) {
   var token = req.query.token;
   jwt.verify(token, 'devops', function (err, decoded) {
      if (!err) {
         //var secrets = {"accountNumber" : "938291239","pin" : "11289","account" : "Finance"};
         //  res.json(secrets);
         var arr = []
         var hh = fs.readdirSync(ModelsFolder).forEach(file => {
            arr.push(file)
            console.log("*******************", file)
         });
         res.send(arr);


      } else {
         res.send(err);
      }
   })
})




app.get('/Models/:id', function (req, res) {
   var token = req.query.token;
   var id = req.params.id;
   console.log(id)
   jwt.verify(token, 'devops', function (err, decoded) {
      if (!err) {
         const file = `${__dirname}/Models/${id}`;
         console.log("****************** DOWNLOADING", file, "*******************")
         res.download(file); // Set disposition and send it.

      } else {
         res.send(err);
      }
   })

});


app.get('/list', function (req, res) {

   const getAllFiles = function (dirPath, arrayOfFiles) {
      files = fs.readdirSync(dirPath)

      arrayOfFiles = arrayOfFiles || []

      files.forEach(function (file) {
         if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles)
         } else {
            arrayOfFiles.push(path.join(__dirname, dirPath, "/", file))
         }
      })
      var value, ar = [];
      var cw = process.mainModule.filename;
      t = cw.substr(0, cw.lastIndexOf("/"));
      console.log(t)
      arrayOfFiles.forEach(function (value) {
         value = value.replace(`${t}/Models/`, " ")
         ar.push(value)
         console.log(value);
      });

      return ar
   }

   const result = getAllFiles("./Models")
   res.send([result])
})








app.get('/download/:id', function (req, res) {
   var id = req.params.id;
   console.log("*****************************", fs.lstatSync(id).isDirectory())


   const file = `${__dirname}/${id}`;
   console.log("****************** DOWNLOADING", file, "*******************")
   res.download(file); // Set disposition and send it.



});








app.listen(port, () => console.log(`Example app listening on port ${port}!`))
