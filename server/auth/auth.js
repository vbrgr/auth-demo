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

module.exports = router;
