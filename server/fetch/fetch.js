var express = require("express");
var mongodb = require("mongodb");

var router = express.Router();
//create Client
var mongoClient = mongodb.MongoClient;
var url = "mongodb://localhost:27017/products";
var uri = "mongodb+srv://vbrgr:pp07qegyGyx1Y7tO@cluster0-j5bqr.mongodb.net/products";
//creat rest API
router.get("/:collection", (req,res) => {
  mongoClient.connect(url, (err, client)=> {
   var collection =  client.db("products").collection(req.params.collection);
   collection.find().toArray((err,array)=>{
      if(err) {
        res.send(err);
      }else{
      res.send(array);
      }
    });
  });
});
module.exports = router;
