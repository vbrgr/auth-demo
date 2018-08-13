var express = require("express");
var mongodb = require("mongodb");
var router = express.Router();
//create Client
var mongoClient = mongodb.MongoClient;
//creat rest API
router.post("/",function(req,res){
  var id = req.body.id;
  var name = req.body.name;
  var cost = req.body.cost;
  var obj = {"id":id,"name":name,"cost":cost};
  mongoClient.connect("mongodb://localhost:27017/products",function(err,db){
    db.collection("products").insertOne(obj,function(err,result) {
      if(err) {
        res.send({"insertFail":"Adding product fail"});
      } else {
        res.send({"insertSuccess":"Product added successfully."});
      }
    });
  });
});
module.exports = router;
