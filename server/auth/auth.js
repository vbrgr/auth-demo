var express = require("express");
var mongodb = require("mongodb");
var mongojs = require("mongojs");
var router = express.Router();
//create Client
var mongoClient = mongodb.MongoClient;
var url = "mongodb://localhost:27017/products";
//creat rest API
router.get("/", (req,res) => {
  var u_id = req.query.id
  mongoClient.connect(url, (err, db)=> {
    db.collection("users").find({_id : mongojs.ObjectId(u_id)}).toArray((err,array)=>{
      res.send(array);
    });
  });
});
router.post("/",function(req,res){
  var name = req.body.name;
  var email = req.body.email;
  var password = req.body.password;
  var obj = {"name":name,"email":email,"password":password};
  console.log(obj); 
  mongoClient.connect(url, function(err,db){
    db.collection("users").insertOne(obj,function(err,result) {
      if(err) {
        res.send({"insertFail":"Please try again"});
      } else {
        res.send({"insertSuccess":"SignUp success."});
      }
    });
  });
});
module.exports = router;
