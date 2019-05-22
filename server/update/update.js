var express = require("express");
var mongodb = require("mongodb");
var mongojs = require("mongojs");
var router = express.Router();
//create Client
var mongoClient = mongodb.MongoClient;
var url = "mongodb://localhost:27017/products";
var uri = "mongodb+srv://vbrgr:pp07qegyGyx1Y7tO@cluster0-j5bqr.mongodb.net/products";
//creat rest API
router.put("/",function(req,res){
  var _id = req.body._id;
  var id = req.body.id;
  var name = req.body.name;
  var cost = req.body.cost;

  mongoClient.connect(url,function(err,client){
    var collection = client.db("products").collection("products");
    client.close(collection.updateOne({"_id":mongojs.ObjectId(_id)},{"$set":{"id":id,"name":name,"cost":cost}}).then(result => {
      if(result) {
        res.send({"updateSuccess":"Product updated successfully."});
      } else {
        res.send({"updateFail":"Product not updated"});
      }
    })
  );
  });
});
module.exports = router;
