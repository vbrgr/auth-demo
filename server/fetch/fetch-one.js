var express = require("express");
var mongodb = require("mongodb");
var mongojs = require("mongojs");
var router = express.Router();
//create Client
var mongoClient = mongodb.MongoClient;
var url = "mongodb://localhost:27017/products";
var uri = "mongodb+srv://vbrgr:gHy6Uh7Khjb01yJL@cluster0-j5bqr.mongodb.net/products";
//creat rest API
router.get("/:id", (req,res) => {
  var p_id = req.params.id
  mongoClient.connect(uri, (err, client)=> {
    var collection =  client.db("products").collection("products");
    client.close(collection.find({_id : mongojs.ObjectId(p_id)}).toArray((err,data) => {
      res.send(data);
     })
    );
  });
});
module.exports = router;
