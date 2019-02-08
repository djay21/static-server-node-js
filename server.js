var express = require('express');
var app = express();
var bp= require('body-Parser');
var path = require('path');
 var dict =[];
 var c=0;
 app.use(bp.urlencoded({extended: true}));
 app.get('/login', function(req,res)
 {
     res.sendFile(path.join(__dirname + '/login.html'));
     console.log("listening at 8080");

 });
 app.post('/login',(req,res) =>
 { var user = req.body.user;
    var pass = req.body.pass;
    c=0;
    if(dict.length==0)
    {
        dict.push({
            key: user,
            value:pass
        });
        res.end("ID Created");
        console.log(dict);
    }
 else
 {
     for (var i=0;i<dict.length; i++)
     {
         if(dict[i].key==user)
         {
             res.end("id bn chuki h .. bnana mat");
             c= 10;
             console.log(dict);
         }
     }
      if(c!=10){
      dict.push({
        key: user,value:pass    
    });
    res.end("ID Created");
    console.log(dict);
            }
    } 
}); app.listen(8080);