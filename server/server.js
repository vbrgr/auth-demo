var express = require("express");
var bodyparser = require("body-parser");
var app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});




var fetch = require("./fetch/fetch");
app.use("/fetch", fetch);
var fetcho = require("./fetch/fetch-one");
app.use("/fetch-one", fetcho);
var insert = require("./insert/insert");
app.use("/insert", insert);
var update = require("./update/update");
app.use("/update", update);
var remove = require("./delete/delete");
app.use("/delete", remove);
var auth = require("./auth/auth");
app.use("/auth", auth);
app.use("/login", auth);
var signup = require("./signup/signup");
app.use("/signup", signup);

var fetchuser = require("./fetch/fetch-users");
app.use("/fetch-users", fetchuser);

/* var mongodb = require("mongodb");
var mongojs = require("mongojs");
var router = express.Router();
//create Client
var mongoClient = mongodb.MongoClient;
var url = "mongodb://localhost:27017/products";
//creat rest API
app.get("/fetch-one/:id", (req,res) => {
  var p_id = (req.params.id).toString();
  mongoClient.connect(url, (err, db)=> {
   db.collection('products').find({_id : mongojs.ObjectId(p_id)}).toArray((err,data) => {
    res.send(data);
   });

  });
}); */
/* app.post("/delete/:id",function(req,res){
  var p_id = (req.body.id).toString();
  console.log(p_id);
  var obj = {_id : p_id};
  mongoClient.connect("mongodb://localhost:27017/products",
                          function(err,db){
      db.collection("products").remove({_id : p_id},
                      function(err,result){
          if(err){
              res.send({"deletemessage":"fail"});
          }else{
              res.send({"deletemessage":"success"});
          }
      });
  });
});
module.exports = router;*/
app.listen(8080);
console.log("Server Listening the port no.8080");

//http::/localhost:8080/fetch
