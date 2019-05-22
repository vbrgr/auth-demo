var express = require("express");
var mongodb = require("mongodb");
var router = express.Router();
//create Client
var mongoClient = mongodb.MongoClient;
var url = "mongodb://localhost:27017/products";
var uri = "mongodb+srv://vbrgr:pp07qegyGyx1Y7tO@cluster0-j5bqr.mongodb.net/products";
//creat rest API
router.post("/",function(req,res){
  var id = req.body.id;
  var name = req.body.name;
  var cost = req.body.cost;
  var obj = {"id":id,"name":name,"cost":cost};
  mongoClient.connect(url,function(err,client){
    client.close(client.db("products").collection("products").insertOne(obj,function(errs,result) {
      if(errs) {
        res.send({"insertFail":"Adding product fail" + errs });
      } else {
        res.send({"insertSuccess":"Product added successfully."});
      }
    })
  );
  });
});
module.exports = router;
