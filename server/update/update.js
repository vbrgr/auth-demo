var express = require("express");
var mongodb = require("mongodb");
var router = express.Router();
//create Client
var mongoClient = mongodb.MongoClient;
var url = "mongodb://localhost:27017/products";
//creat rest API
router.put("/",function(req,res){
  var id = req.body.id;
  var name = req.body.name;
  var cost = req.body.cost;
  var oldobj = {"id":id};
  var newobj = {"id":id,"name":name,"cost":cost};

  mongoClient.connect(url,function(err,db){
    db.collection("products").update(oldobj, newobj, function(err,result) {
      if(err) {
        res.send({"updateFail":"Product not updated"});
      } else {
        res.send({"updateSuccess":"Product updated successfully."});
      }
    });
  });
});
module.exports = router;
