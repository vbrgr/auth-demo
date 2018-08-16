var express = require("express");
var mongodb = require("mongodb");
var mongojs = require("mongojs");
var router = express.Router();
//create Client
var mongoClient = mongodb.MongoClient;
var url = "mongodb://localhost:27017/products";
//creat rest API
router.get("/:id", (req,res) => {
  var p_id = req.params.id
  mongoClient.connect(url, (err, db)=> {
    db.collection('products').find({_id : mongojs.ObjectId(p_id)}).toArray((err,data) => {
      res.send(data);
     });

  });
});
module.exports = router;
