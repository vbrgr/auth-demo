var express = require("express");
var mongodb = require("mongodb");
var router = express.Router();
//create Client
var mongoClient = mongodb.MongoClient;
var url = "mongodb://localhost:27017/products";
var uri = "mongodb+srv://vbrgr:gHy6Uh7Khjb01yJL@cluster0-j5bqr.mongodb.net/products";
//creat rest API
router.put("/",function(req,res){
  var _id = req.body._id;
  var id = req.body.id;
  var name = req.body.name;
  var cost = req.body.cost;
  var oldobj = {"_id":_id};
  var newobj = {"id":id,"name":name,"cost":cost};

  mongoClient.connect(uri,function(err,client){
    var collection =  client.db("products").collection("products");
    client.close(collection.updateOne(oldobj, newobj, function(err,result) {
      if(err) {
        res.send({"updateFail":"Product not updated"});
      } else {
        res.send({"updateSuccess":"Product updated successfully."});
      }
    })
  );
  });
});
module.exports = router;
