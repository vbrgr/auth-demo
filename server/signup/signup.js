var express = require("express");
var mongodb = require("mongodb");
var router = express.Router();
//create Client
var mongoClient = mongodb.MongoClient;
var url = "mongodb://localhost:27017/products";
router.post("/",function(req,res){
  var name = req.body.name;
  var email = req.body.email;
  var password = req.body.password;
  var obj = {"name":name,"email":email,"password":password};
  mongoClient.connect(url,function(err,db){
    db.collection("users").insertOne(obj,function(err,result) {
      if(err) {
        res.send({"signupFail":"Please try again"});
      } else {
        res.send({"signupSuccess":"SignUp success."});
      }
    });
  });
});
module.exports = router;